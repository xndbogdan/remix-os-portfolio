import React, { useRef } from 'react';

class MusicPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tracklist: this.props.tracklist,
            selectedPlaylist: this.props.tracklist.payload[0],
            trackIndex: 0,
            selectedTrack: this.props.tracklist.payload[0].tracks_in_order[0],
            display: 'Player Offline',
            isPlaying: false,
        };
        this.audio = React.createRef()
        console.log(this.state)
    }
    render(props) {
        return (
        <div className="px-2">
            <div className="bg-gray-900 h-8 border-2 border-gray-600 text-blue-300 px-2 flex items-center my-2">
                <span className="opacity-75 whitespace-nowrap overflow-auto scrollbars-hidden">{this.state.display}</span>
            </div>
            <p className="text-xs">Station: {this.state.selectedPlaylist.name}</p>
            <div className="flex flex-row space-x-4 text-sm mt-2 pb-2">
                <button>Previous</button>
                <button onClick={this.togglePlay}>{this.state.isPlaying ? 'Pause' : 'Play'}</button>
                <button>Next</button>
            </div>
            <audio ref={this.audio} src={'https://api.poolsidefm.workers.dev/v2/get_sc_mp3_stream?track_id=' + this.state.selectedTrack.soundcloud_id}></audio>
        </div>
        );
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
        this.setState({ play: !this.state.isPlaying }, () => {
            console.log(this.state.isPlaying)
            !this.state.isPlaying ? this.audio.current.play() : this.audio.current.pause();
            this.state.isPlaying = !this.state.isPlaying
        });
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