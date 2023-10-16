import { useRef, useState, useEffect } from 'react';
// import AudioSpectrum from 'react-audio-spectrum2';
import AudioSpectrum from './Shared/AudioSpectrum';
import type { Tracklist } from '~/types';
// import { sleep } from '~/utils/sleep';

export const MusicPlayer = (props: { tracklist: Tracklist, closed: boolean }) => {
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  const randomTrackIndex = 0;
  const musicApiEndpoint = 'https://misty-butterfly-7016.fly.dev/api/play/';

  const [selectedPlaylist] = useState(props.tracklist);
  const [selectedPlaylistLength] = useState(props.tracklist.length);
  const [trackIndex, setTrackIndex] = useState(randomTrackIndex);
  const [selectedTrack, setSelectedTrack] = useState(props.tracklist[0]);
  const [display, setDisplay] = useState('Player Offline');
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState("0%");
  const [currentTrackTime, setCurrentTrackTime] = useState(0);
  const [currentTrackDuration, setCurrentTrackDuration] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(1);

  const audio = useRef<HTMLAudioElement>(null);
  const displayText = useRef<HTMLAnchorElement>(null);
  const displayTextContainer = useRef<HTMLDivElement>(null);
  const progressBar = useRef<HTMLDivElement>(null);
  const progressBarContainer = useRef<HTMLDivElement>(null);
  const previousWaveformUrl = useRef<string>(selectedTrack.waveform_url);
  
  const updateTrackProgress = (event: React.ChangeEvent<HTMLAudioElement>) => {
    if (props.closed) {
      if (isPlaying) {
        togglePlay();
      }
    }
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;
    setTrackProgress((currentTime + 0.25) / duration * 100 + '%');
    setCurrentTrackDuration(duration);
    setCurrentTrackTime(currentTime);
  };

  const updateSongPosition = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof Element)) {
      return;
  }
    let boundingRect = event.target.getBoundingClientRect();
    let percentage = ((event.clientX - boundingRect.left) / boundingRect.width);
    if(!audio.current) {
      return;
    }
    audio.current.currentTime = percentage * audio.current.duration;
  };

  const convertDuration = (time: number) => {
    let mins = Math.floor(time / 60);
    let secs = Math.floor(time % 60);
    // if (mins < 10) {
    //   mins = '0' + String(mins);
    // }
    // if (secs < 10) {
    //   secs = '0' + String(secs);
    // }
    let returnResult = mins < 10 ? '0' + String(mins) : String(mins);
    returnResult += ':';
    returnResult += secs < 10 ? '0' + String(secs) : String(secs);
    return returnResult;
  };

  const togglePlay = () => {
    if (!audio.current) {
      return;
    }
    if (audio.current.src !== musicApiEndpoint + selectedTrack.waveform_url.split('/')[3].replace('_m.png', '.mp3')) {
      audio.current.src = musicApiEndpoint + selectedTrack.waveform_url.split('/')[3].replace('_m.png', '.mp3');
    }
    setIsPlaying(!isPlaying);
    if (previousWaveformUrl.current !== selectedTrack.waveform_url && !isPlaying) {
      return;
    }
    if (isPlaying) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
  };

  const nextTrack = async () => {
    if (trackIndex >= selectedPlaylist.length - 1) {
      return;
    }
    setSelectedTrack(selectedPlaylist[trackIndex + 1]);
    setTrackIndex(trackIndex + 1);
  };

  const previousTrack = () => {
    if (trackIndex <= 0) {
      return;
    }
    setSelectedTrack(selectedPlaylist[trackIndex - 1]);
    setTrackIndex(trackIndex - 1);
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const volume = document.getElementById('music-player-volume') as HTMLInputElement | null;
      if(volume) {
        volume.value = "1";
      }
    }

    const updateScreen = () => {
      setDisplay(selectedTrack.artist + ' - ' + selectedTrack.title);
    };
    
    // Add event listeners and cleanup
    const audioElement = audio.current;

    const intervalID = setInterval(updateScreen, 1000);
    if(!audioElement) {
      return;
    }

    audioElement.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      clearInterval(intervalID);
      audioElement.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [props.closed, isPlaying, selectedTrack.artist, selectedTrack.title]);

  useEffect(() => {
    const silentlyPause = () => {
      if (!audio.current) {
        return;
      }
      if (audio.current.src !== musicApiEndpoint + selectedTrack.waveform_url.split('/')[3].replace('_m.png', '.mp3')) {
        audio.current.src = musicApiEndpoint + selectedTrack.waveform_url.split('/')[3].replace('_m.png', '.mp3');
      }
      audio.current.pause();
    };
  
    const silentlyPlay = () => {
      if (!audio.current) {
        return;
      }
      if (audio.current.src !== musicApiEndpoint + selectedTrack.waveform_url.split('/')[3].replace('_m.png', '.mp3')) {
        audio.current.src = musicApiEndpoint + selectedTrack.waveform_url.split('/')[3].replace('_m.png', '.mp3');
      }
      audio.current.play();
    };
    if (selectedTrack.waveform_url !== previousWaveformUrl.current) {
      if (isPlaying) {
        silentlyPause();
      }
      sleep(100);
      if (isPlaying) {
        silentlyPlay();
      }
    } else {
      previousWaveformUrl.current = selectedTrack.waveform_url;
    }
    
  }, [trackIndex, isPlaying, selectedTrack.waveform_url]);

  return (
    <div className="px-2">
      <div className='bg-gray-900 border-2 border-gray-600 my-2'>
        <div className=" h-8 text-blue-300 px-2 flex items-center" ref={displayTextContainer}>
          <a target="_blank" href={selectedTrack.permalink_url} className="opacity-75 cursor-point truncate" ref={displayText} rel="noreferrer">
            <span className='pr-16'>
              {display}
            </span>
          </a>
        </div>
        <div className={isPlaying ? 'h-8 text-blue-300 flex items-center justify-center' : 'hidden'} ref={displayTextContainer}>
          <div>
            <AudioSpectrum
              id="audio-canvas"
              height={25}
              width={340}
              audioId={'music-player'}
              capColor={'2564eb'}
              capHeight={2}
              meterWidth={2}
              meterCount={512}
              meterColor={[
                { stop: 0, color: '#2564eb' },
                { stop: 0.1, color: '#fff' },
                { stop: 1, color: '#fff' }
              ]}
              gap={2}
            />
          </div>
        </div>
        <div className={!isPlaying ? 'h-8 text-blue-300 flex items-center justify-start' : 'hidden'} ref={displayTextContainer}>
          <div className='opacity-75 px-2'>
            &#47;&#47;&#47; Remix OS Player - Paused &#47;&#47;&#47;
          </div>
        </div>
      </div>

      <p className="text-sm">Station: Poolsuite FM</p>
      <div className="w-full h-2 bg-black cursor-point" ref={progressBarContainer} onMouseUp={updateSongPosition}>
        <div ref={progressBar} className="bg-blue-300 h-2 pointer-events-none" style={{ width: trackProgress }}></div>
      </div>
      <div style={currentTrackDuration ? { display: 'block' } : { display: 'none' }}>{convertDuration(currentTrackTime)} / {convertDuration(currentTrackDuration)}</div>
      <div className='flex flex-row justify-between items-center'>
        <div className="flex flex-row space-x-4 text-sm mt-2 pb-2">
          <button onClick={previousTrack}>
            <svg className="icon h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 9">
              <path fill="var(--color-icon, #000)" d="M12 0v9h-1V8h-1V7H9V6H8V5H7v4H6V8H5V7H4V6H3V5H2v4H0V0h2v4h1V3h1V2h1V1h1V0h1v4h1V3h1V2h1V1h1V0h1z" />
            </svg>
          </button>
          <button onClick={togglePlay}>
            {!isPlaying ?
              <svg className="icon h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 9 9">
                <path fill="var(--color-icon, #000)" d="M3 9V0h1v1h1v1h1v1h1v1h1v1H7v1H6v1H5v1H4v1H3z" />
              </svg>
              :
              <svg className="icon h-4" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M2 0H4V9H2V0Z" fill="var(--color-icon, #000)" />
                <path d="M5 0H7V9H5V0Z" fill="var(--color-icon, #000)" />
              </svg>}
          </button>
          <button onClick={nextTrack}>
            <svg className="icon h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 9" >
              <path fill="var(--color-icon, #000)" d="M0 9V0h1v1h1v1h1v1h1v1h1V0h1v1h1v1h1v1h1V0h2v9h-2V5H9v1H8v1H7v1H6v1H5V5H4v1H3v1H2v1H1v1H0z" />
            </svg>
          </button>
        </div>
        <div className="wrapper">
          <input id="music-player-volume" value={currentVolume} className='mac-input' type="range" min="0" max="1" step="0.025" onChange={(e) => {
            const currentVolume = parseFloat(e.target.value)
            const musicPlayer = document.getElementById('music-player') as HTMLAudioElement | null;
            if(musicPlayer) {
              musicPlayer.volume = currentVolume
            }
            setCurrentVolume(currentVolume)
          }} />
          <label className="hidden" htmlFor="volume">Volume</label>
        </div>
      </div>
      <div>Track {trackIndex + 1} of {selectedPlaylistLength}</div>
      <audio id="music-player" crossOrigin="anonymous" ref={audio} onEnded={nextTrack} onTimeUpdate={updateTrackProgress} />
    </div>
  );
};
