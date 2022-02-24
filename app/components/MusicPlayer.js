import React, { useRef } from 'react';

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        const randomTrackIndex = Math.floor(Math.random() * this.props.tracklist.payload[0].tracks_in_order.length);
        this.state = {
            tracklist: this.props.tracklist,
            selectedPlaylist: this.props.tracklist.payload[0],
            selectedPlaylistLength: this.props.tracklist.payload[0].tracks_in_order.length,
            trackIndex: randomTrackIndex,
            selectedTrack: this.props.tracklist.payload[0].tracks_in_order[randomTrackIndex],
            display: 'Player Offline',
            isPlaying: false,
            trackProgress: 0,
            currentTrackTime: 0,
            currentTrackDuration: 0,
        };
        this.audio = React.createRef()
        this.displayText = React.createRef()
        this.displayTextContainer = React.createRef()
        this.progressBar = React.createRef()
        this.progressBarContainer = React.createRef()
    }
    render(props) {
        return (
        <div className="px-2">
            <div className="bg-gray-900 h-8 border-2 border-gray-600 text-blue-300 px-2 flex items-center my-2" ref={this.displayTextContainer}>
                <a target="_blank" href={this.state.selectedTrack.permalink_url} className="opacity-75 truncate cursor-point" ref={this.displayText}>Disabled {/*this.state.display*/}</a>
            </div>
            <p className="text-sm">Station: {this.state.selectedPlaylist.name}</p>
            <div className="w-full h-2 bg-black cursor-point" ref={this.progressBarContainer} onMouseUp={this.updateSongPosition}>
                <div ref={this.progressBar} className="bg-blue-300 h-2 pointer-events-none" style={{width:this.state.trackProgress}}></div>
            </div>
            <div style={this.state.currentTrackDuration ? {display:'block'} : {display:'none'}}>{this.convertDuration(this.state.currentTrackTime)} / {this.convertDuration(this.state.currentTrackDuration)}</div>
            <div className="flex flex-row space-x-4 text-sm mt-2 pb-2">
                <button onClick={this.previousTrack}>
                    <svg className="icon h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 9"> 
                        <path fill="var(--color-icon, #000)" d="M12 0v9h-1V8h-1V7H9V6H8V5H7v4H6V8H5V7H4V6H3V5H2v4H0V0h2v4h1V3h1V2h1V1h1V0h1v4h1V3h1V2h1V1h1V0h1z"/>
                    </svg>
                </button>
                <button onClick={this.togglePlay}>{!this.state.isPlaying ? 
                    <svg className="icon h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 9 9">
						<path fill="var(--color-icon, #000)" d="M3 9V0h1v1h1v1h1v1h1v1h1v1H7v1H6v1H5v1H4v1H3z"/>
					</svg> 
                    : 
                    <svg className="icon h-4" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" >
						<path d="M2 0H4V9H2V0Z" fill="var(--color-icon, #000)" />
						<path d="M5 0H7V9H5V0Z" fill="var(--color-icon, #000)" />
					</svg>}
                </button>
                <button onClick={this.nextTrack}>
                    <svg className="icon h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 9" >
							<path fill="var(--color-icon, #000)" d="M0 9V0h1v1h1v1h1v1h1v1h1V0h1v1h1v1h1v1h1v1h1V0h2v9h-2V5H9v1H8v1H7v1H6v1H5V5H4v1H3v1H2v1H1v1H0z"/>
					</svg>
                </button>
            </div>
            <div>Track {this.state.trackIndex} of {this.state.selectedPlaylistLength}</div>
            <p className="text-red-600 text-sm">Radio is disabled until a usable api is found</p>
            <audio ref={this.audio} onEnded={this.nextTrack} onTimeUpdate={this.updateTrackProgress} src={'https://api.poolsidefm.workers.dev/v2/get_sc_mp3_stream?track_id=' + this.state.selectedTrack.soundcloud_id}></audio>
        </div>
        );
    }

    updateSongPosition = (event) => {
        let boundingRect = event.target.getBoundingClientRect()
        let percentage = ((event.clientX - boundingRect.left) / boundingRect.width)
        this.audio.current.currentTime = percentage * this.audio.current.duration
    }

    convertDuration = (time) => {
        let mins = Math.floor(time / 60);
        if (mins < 10) {
            mins = '0' + String(mins);
        }
        let secs = Math.floor(time % 60);
        if (secs < 10) {
            secs = '0' + String(secs);
        }

        return mins + ':' + secs;
    }

    updateTrackProgress = (event) => {
        if(this.props.closed) {
            if(this.state.isPlaying) {
                this.togglePlay()
            }
        }
        const currentTime = event.target.currentTime
        const duration = event.target.duration
        this.setState({
            trackProgress: (currentTime + 0.25) / duration * 100 + '%',
            currentTrackDuration: duration,
            currentTrackTime: currentTime,
        })
    }

    componentDidMount() {
        // audio.addEventListener('ended', () => this.setState({ play: false }));
        this.intervalID = setInterval(
        () => this.tick(),
        1000
        );
    }
    componentWillUnmount() {
        // audio.removeEventListener('ended', () => this.setState({ play: false }));  
        clearInterval(this.intervalID);
    }

    togglePlay = () => {
        return;
        this.setState({ isPlaying: !this.state.isPlaying }, () => {
            this.state.isPlaying ? this.audio.current.play() : this.audio.current.pause();
        });
    }

    nextTrack = () => {
        return;
        if(this.state.trackIndex >= this.state.selectedPlaylist.tracks_in_order.length - 1) {
            return;
        }
        let replay = false;
        if(this.state.isPlaying) {
            this.togglePlay()
            replay = true
        }
        this.setState({
            selectedTrack: this.state.selectedPlaylist.tracks_in_order[this.state.trackIndex+1],
            trackIndex: this.state.trackIndex+1,
        }, () => {
            if(replay) {
                this.togglePlay()
            }
        })
        
    }

    previousTrack = () => {
        return;
        if(this.state.trackIndex <= 0) {
            return;
        }
        let replay = false;
        if(this.state.isPlaying) {
            togglePlay()
            replay = true
        }
        this.setState({
            selectedTrack: this.state.selectedPlaylist.tracks_in_order[this.state.trackIndex-1],
            trackIndex: this.state.trackIndex-1
        }, () => {
            if(replay) {
                this.togglePlay()
            }
        })
    }

    tick() {
        this.setState({
            display: this.state.selectedTrack.artist + ' - ' + this.state.selectedTrack.title
        })
        /**/
        // this.setState({
        //     date: new Date().toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        // });
    }

}
export default MusicPlayer;