import { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import MusicPlayer from '~/components/MusicPlayer';
import Collaborate from '~/components/Collaborate';
import Clock from '~/components/Clock';
import Calendar from '~/components/Calendar';
import Resume from '~/components/Resume';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Desktop(props) {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const [easter, setEaster] = useState(false);
  const [easterPhase, setEasterPhase] = useState(0);
  const [windows, setWindows] = useState([
    { focused: false, closed: false, minimized: false },
    { focused: false, closed: true, minimized: false },
    { focused: false, closed: true, minimized: false },
    { focused: false, closed: true, minimized: false },
    { focused: false, closed: true, minimized: false },
    { focused: false, closed: true, minimized: false },
    { focused: false, closed: true, minimized: false },
    { focused: false, closed: true, minimized: false },
  ]);
  const [icons, setIcons] = useState([
    { focused: false, clicks: 0, dragging: false },
    { focused: false, clicks: 0, dragging: false },
    { focused: false, clicks: 0, dragging: false },
    { focused: false, clicks: 0, dragging: false },
    { focused: false, clicks: 0, dragging: false },
    { focused: false, clicks: 0, dragging: false },
    { focused: false, clicks: 0, dragging: false },
    { focused: false, clicks: 0, dragging: false },
  ]);
  const [menu, setMenu] = useState(false);
  const [aboutWindow, setAboutWindow] = useState({
    focused: false,
    closed: true,
  });
  const [resumeTab, setResumeTab] = useState(0);
  const [anyMobileDevice, setAnyMobileDevice] = useState(false);
  const [usedMemory, setUsedMemory] = useState("0 MB");

  const easterEggPlayer = useRef(null);
  const iconTimeout = useRef(null);

  useEffect(() => {
    const intervalID = setInterval(() => tick(), 250);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  // Switch useEffect for easter true/false
  useEffect(() => {
    if (easter) {
      setEasterPhase(0);
      let playPromise = easterEggPlayer.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          incrementBims();
        });
      } else {
        incrementBims();
      }
    } else {
      endBimBamBoom();
    }
  }, [easter]);

  const findParentWindow = (event) => {
    let daddyWindow = event.target;
    while (!daddyWindow.classList.contains('os-window')) {
      if (!daddyWindow.parentElement) {
        console.error('Could not find parent window. Contact developer.');
        return;
      }
      daddyWindow = daddyWindow.parentElement;
    }
    return daddyWindow;
  }

  const bimBamBoom = () => {
    easterEggPlayer.current.volume = 0.15;
    if (easter) {
      endBimBamBoom();
      return;
    }
    setEaster(true);
  }

  const endBimBamBoom = () => {
    clearTimeout(iconTimeout.current);
    easterEggPlayer.current.pause();
    easterEggPlayer.current.currentTime = 0;
    setEaster(false);
    setEasterPhase(0);
  }

  const changeResumeVisibility = (event) => {
    setResumeTab(parseInt(event.target.dataset.tab));
  }

  const toggleWindowVisibility = (event) => {
    event.stopPropagation();
    if(runAdjacencyCheck(event.target)) {
      return;
    }

    if (event.target.classList.contains('min-btn')) {
      return;
    }
    let daddyWindow = event.target;
    
    while (!daddyWindow.classList.contains('os-window')) {
      if (!daddyWindow.parentElement) {
        console.error('Could not find parent window. Contact developer.');
        return;
      }
      daddyWindow = daddyWindow.parentElement;
    }
    let windowIndex = parseInt(daddyWindow.id.replace('window-', ''));
  
    setWindows(windows.map((window, index) => {
      return index === windowIndex ? { ...window, focused: true, minimized: false } : { ...window, focused: false };
    }));
  }

  const toggleWindowVisibilityViaId = (event) => {
    let windowIndex = parseInt(event.target.dataset.index);
    
    setWindows(windows.map((window, index) => {
      return index === windowIndex ? { ...window, focused: true, minimized: false } : { ...window, focused: false };
    }));
  }

  const toggleIconVisibility = (event) => {
    clearTimeout(iconTimeout.current);
    let daddyIcon = event.target;
    while (!daddyIcon.classList.contains('os-icon')) {
      if (!daddyIcon.parentElement) {
        console.error('Could not find parent icon. Contact developer.');
        return;
      }
      daddyIcon = daddyIcon.parentElement;
    }
    let iconIndex = parseInt(daddyIcon.id.replace('icon-', ''));
    let visibleIcons = [...icons];
    visibleIcons.forEach((icon, index) => {
      if (index === iconIndex) {
        let clicks = visibleIcons[index].clicks;
        visibleIcons[index] = { ...icon, focused: true, clicks: clicks >= 1 ? 0 : clicks + 1 };
        if ((clicks == 1 || anyMobileDevice) && !icon.dragging) {
          let visibleIcons = [...icons];
          visibleIcons.forEach((icon, index) => {
            let focused = visibleIcons[index].focused;
            visibleIcons[index] = { ...icon, focused: focused, clicks: 0 };
          });
          if (index === 6) {
            bimBamBoom();
            return;
          }
          setIcons(visibleIcons);

          setWindows(windows.map((window, index) => {
            return index === iconIndex ? 
              { ...window, focused: true, closed: false, minimized: false } :
              { ...window, focused: false };
          }));

        }
      } else {
        visibleIcons[index] = { ...icon, focused: false, clicks: 0, dragging: false };
      }
    });
    setIcons(visibleIcons);

    iconTimeout.current = setTimeout(() => {
      resetIconsFocusedState();
    }, 2000);
    
  }

  const resetIconsFocusedState = () => {
    setIcons(icons.map((icon, index) => {
      const focused = icons[index].focused;
      return { ...icon, focused: focused, clicks: 0 };
    }));
  }
  
  const runAdjacencyCheck = (target) => {
    if(target.classList.contains('close-btn')) {
      toggleHideWindow(event);
      return true;
    }
    if(target.classList.contains('min-btn')) {
      toggleMinimizeWindow(event);
      return true;
    }
    return false;
  }

  const toggleHideWindow = (event) => {
    let windowIndex = parseInt(findParentWindow(event).id.replace('window-', ''));
    setWindows(windows.map((window, index) => {
      return index === windowIndex ? { ...window, closed: true } : window;
    }));
  }

  const toggleMinimizeWindow = (event) => {
    let windowIndex = parseInt(findParentWindow(event).id.replace('window-', ''));
    setWindows(windows.map((window, index) => {
      return index === windowIndex ? { ...window, minimized: true } : window;
    }));
  }

  const tick = () => {
    setAnyMobileDevice(window.matchMedia("(max-width: 412px)").matches);
  }

  const steps = [
    {
        waitTime: 500,
        action: 'increment',
        value: 1,
    }, {
        waitTime: 500,
        action: 'increment',
        value: 1,
    }, {
        waitTime: 500,
        action: 'increment',
        value: 1,
    },{
        waitTime: 500,
        action: 'set',
        value: -1,
    }, {
        waitTime: 1800,
        action: 'increment',
        value: 1,
    }, {
        waitTime: 500,
        action: 'increment',
        value: 1,
    }, {
        waitTime: 500,
        action: 'increment',
        value: 1,
    }, {
        waitTime: 500,
        action: 'set',
        value: -1,
    }, {
        waitTime: 1900,
        action: 'increment',
        value: 1,
    }, {
        waitTime: 500,
        action: 'increment',
        value: 1,
    }, {
        waitTime: 500,
        action: 'increment',
        value: 1,
    }, {
        waitTime: 500,
        action: 'set',
        value: -1,
    }, {
        waitTime: 2300,
        action: 'increment',
        value: 1,
    }, {
        waitTime: 500,
        action: 'increment',
        value: 1,
    }, {
        waitTime: 500,
        action: 'increment',
        value: 1,
    }, {
        waitTime: 500,
        action: 'set',
        value: -1,
    },
  ];

  const incrementBims = async () => {
    let counter = 0;
    let currentEasterPhase = easterPhase;
    while (counter < steps.length && easter) {
      await sleep(steps[counter].waitTime);
      switch (steps[counter].action) {
        case 'increment':
          currentEasterPhase += steps[counter].value;
          setEasterPhase(currentEasterPhase);
          break;
        case 'set':
          currentEasterPhase = steps[counter].value;
          setEasterPhase(currentEasterPhase);
          break;
        default:
          console.error('Invalid action in easter egg steps. Contact developer.');
          break;
      }
      counter++;
    }
  }

  return (
    <div className="flex-1 min-h-screen font-chicago">
      <div className="z-50 flex flex-row w-full border-b border-black bg-gray-mac">
          <div 
            className={ menu ? "flex flex-row items-center py-1 text-xs border-r border-black cursor-point bg-gray-400 px-2" : "flex flex-row items-center py-1 text-xs border-r border-black cursor-point px-2 hover:bg-black hover:text-white group"} 
            onMouseDown={ () => { setMenu(!menu) } }
          >
              <span>Remix OS { easterPhase }</span>
              <LazyLoadImage className="inline ml-1 group-hover:invert" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAAHElEQVQImWNkYGD4z4AGQIIggCwBE0OSYGBgAABmWAMBPlQzgwAAAABJRU5ErkJggg==" height="3" width="auto"/>
          </div>
          <div className="flex-1 py-1"></div>
          <div className="py-1 pl-2 text-xs border-l border-black pr-2"><Clock /></div>
          <div className="hidden py-1 pl-2 text-xs border-l border-black sm:block pr-2"><Calendar /></div>
      </div>
      <div id="dropdown" className={ menu ? 'z-10 w-44 bg-gray-mac shadow-mac-os absolute' : 'hidden' }>
          <ul className="text-xs" aria-labelledby="dropdownDefault">
              <li>
                  <a 
                      href="#" 
                      className="block py-1 px-4 border-b border-black hover:text-white hover:bg-black" 
                      onMouseDown={() => { 
                          setMenu(false)
                          
                          setWindows([...windows, { ...windows[6], closed: false }])
                          if(!memoryInterval) {
                              memoryInterval = setInterval(() => {
                                  let currentUsage = 0
                                  windows.forEach((item) => {
                                      if (!item.closed) {
                                          currentUsage += 1
                                      }
                                  })
                                  setUsedMemory(currentUsage * (768 / windows.length) + " MB")
                              }, 1000)
                          }
                      }}
                  >About</a>
              </li>
              <li>
                  <span href="#" className="block py-1 px-4 border-b border-black text-gray-500">Settings</span>
              </li>
          </ul>
      </div>
      <div className="absolute z-0 flex flex-wrap w-screen p-2">
          <div className="grid w-full max-w-sm grid-cols-3 gap-4 mt-2">
              <Draggable handle=".handle" onMouseDown={toggleIconVisibility}>
                  <div id='icon-0' className="flex flex-col items-center handle os-icon" style={icons[0].focused ? {zIndex: 50} : {zIndex:1}}>
                      <LazyLoadImage src="/icons/Notes_Black.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                      <span className={icons[0].clicks == 1 ? 'text-xs bg-blue-400 opacity-75' : 'text-xs'}>Presentation.rtf</span>
                  </div>
              </Draggable>
              <Draggable handle=".handle" onMouseDown={toggleIconVisibility}>
                  <div id='icon-1' className="flex flex-col items-center handle os-icon" style={icons[1].focused ? {zIndex: 50} : {zIndex:1}}>
                      <LazyLoadImage src="/icons/Play_Blue.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                      <span className={icons[1].clicks == 1 ? 'text-xs bg-blue-400 opacity-75' : 'text-xs'}>Music Player</span>
                  </div>
              </Draggable>
              <Draggable handle=".handle" onMouseDown={toggleIconVisibility}>
                  <div id='icon-2' className="flex flex-col items-center handle os-icon" style={icons[2].focused ? {zIndex: 50} : {zIndex:1}}>
                      <LazyLoadImage src="/icons/Notes_Blue.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                      <span className={icons[2].clicks == 1 ? 'text-xs bg-blue-400 opacity-75' : 'text-xs'}>Resume.rtf</span>
                  </div>
              </Draggable>
              <Draggable handle=".handle" onMouseDown={toggleIconVisibility}>
                  <div id='icon-3' className="flex flex-col items-center handle os-icon" style={icons[3].focused ? {zIndex: 50} : {zIndex:1}}>
                      <LazyLoadImage src="/icons/Planet_Orange.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                      <span className={icons[3].clicks == 1 ? 'text-xs bg-blue-400 opacity-75' : 'text-xs'}>Collaboration</span>
                  </div>
              </Draggable>
              <Draggable handle=".handle" onMouseDown={toggleIconVisibility}>
                  <div id='icon-4' className="flex flex-col items-center handle os-icon" style={icons[4].focused ? {zIndex: 50} : {zIndex:1}}>
                      <LazyLoadImage src="/icons/Notes_Pink.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                      <span className={icons[4].clicks == 1 ? 'text-xs bg-blue-400 opacity-75' : 'text-xs'}>Credits.rtf</span>
                  </div>
              </Draggable>
              <Draggable handle=".handle" onMouseDown={toggleIconVisibility}>
                  <div id='icon-5' className="flex flex-col items-center handle os-icon" style={icons[5].focused ? {zIndex: 50} : {zIndex:1}}>
                      <LazyLoadImage src="/icons/Notes_Yellow.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                      <span className={icons[5].clicks == 1 ? 'text-xs bg-blue-400 opacity-75' : 'text-xs'}>Milestones.rtf</span>
                  </div>
              </Draggable>
              <Draggable handle=".handle" onMouseDown={toggleIconVisibility}>
                  <div id='icon-6' className="flex flex-col items-center handle os-icon" style={icons[6].focused ? {zIndex: 50} : {zIndex:1}}>
                      <LazyLoadImage src="/easter/boom.webp" className="w-10 h-10 mx-auto pointer-events-none"/>
                      <span className={icons[6].clicks == 1 ? 'text-xs bg-blue-400 opacity-75' : 'text-xs'}>Bim Bam Boom</span>
                  </div>
              </Draggable>
          </div>
      </div>
      <div className={easter ? 'absolute z-50 w-screen pointer-events-none h-screen' : 'absolute z-50 w-screen pointer-events-none h-screen hidden'}>
          <div className='flex flex-wrap h-screen'>
              <div className='w-1/3 flex flex-col items-top h-screen'>
                  <img alt="easter-egg" className={easterPhase === 1 ? 'w-full my-auto transition-all duration-500 scale-100 ease-in-out' : 'w-full my-auto transition-all duration-500 scale-0 ease-in-out'} src='/easter/bam.png'></img>
              </div>
              <div className='w-1/3 flex flex-col items-top h-screen'>
                  <img alt="easter-egg" className={easterPhase === 2 ? 'w-full mb-auto mt-32 transition-all duration-500 scale-100 ease-in-out' : 'w-full mb-auto mt-32 transition-all duration-500 scale-0 ease-in-out'} src='/easter/boom.png'></img>
              </div>
              
              <div className='w-1/3 flex flex-col items-end h-screen'>
                  <img alt="easter-egg" className={easterPhase === 0 ? 'w-full mt-auto mb-32 transition-all duration-500 scale-100 ease-in-out' : 'w-full mt-auto mb-32 transition-all duration-500 scale-0 ease-in-out'} src='/easter/bim.png'></img>
              </div>
          </div>
      </div>
      <div className="absolute z-0 w-screen pointer-events-none">
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                  <div className="flex flex-wrap items-start justify-center md:justify-between">

                      <Draggable handle=".handle" onMouseDown={toggleWindowVisibility}>
                          <div id='window-0' className={windows[0].closed || windows[0].minimized ? 'hidden' : 'absolute p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto'} style={windows[0].focused ? {zIndex: 99} : {zIndex:10}}>
                              <div className="flex flex-row items-center pb-1">
                                  <div className="w-6 h-6 mr-1 border border-black close-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point"/>
                                  <div className="w-6 h-6 mr-2 border border-black min-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point hidden lg:block"/>
                                  <div className="flex items-center flex-1 h-4 handle">
                                      <div className="flex flex-col justify-between flex-1 h-2 cursor-grab">
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                      </div>
                                  </div>
                                  <div className="ml-2 text-xs handle cursor-grab">Remix OS</div>
                              </div>
                              <div className="p-2 overflow-y-auto text-sm bg-white border border-black select-full">
                                  <p>I'm Bogdan, an independent full-stack developer from Bucharest.</p>
                                  <p>Big fan of Laravel, Vue and Tailwind.</p>
                                  <p className="mt-4">This project was made using Remix. It combines React and Node.<br/>It's still under development.</p>
                                  <p className="mt-2">You should try moving the windows around and playing some music. Maybe fax me your music playlist while you're at it.</p>
                                  <p className="mt-2">Close this window or move it lower if you are on a mobile device, there are desktop icons under it that you can click to find more about me or listen to some sweet music.</p>
                                  <p className='mt-2'>For business inqueries contact me on <a className='text-blue-700' target='_blank' href='mailto:bogdan.mosteanu@hey.com'>bogdan.mosteanu@hey.com</a></p>
                                  <p className="mt-4">Links:</p>
                                  <div className='flex flex-wrap space-x-4 mb-2'>
                                      <a target="_blank" href="https://twitter.com/xndbogdan" className="flex flex-col items-center">
                                          <LazyLoadImage src="/icons/Twitter.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                                          <span className='text-xs'>Twitter</span>
                                      </a>
                                      <a target="_blank" href="https://github.com/xndbogdan" className="flex flex-col items-center">
                                          <LazyLoadImage src="/icons/github.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                                          <span className='text-xs'>Github</span>
                                      </a>
                                      <a target="_blank" href="https://www.linkedin.com/in/bogdan-mihai-mo%C8%99teanu-476262120/" className="flex flex-col items-center">
                                          <LazyLoadImage src="/icons/linkedin.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                                          <span className='text-xs'>Linkedin</span>
                                      </a>
                                  </div>
                                  <a className='text-sm hover:text-blue-ukraine' href='https://helpukraine.center/' target="_blank">Donate to HELP<span className='text-red-600'>UKRAINE</span>.CENTER <img alt='Ukraine flag' className='w-6 h-4 inline' src="/img/ukraine.svg"/> </a>
                              </div>
                          </div>
                      </Draggable>
                      <Draggable handle=".handle" onMouseDown={toggleWindowVisibility}>
                          <div id='window-1' className={windows[1].closed || windows[1].minimized ? 'hidden' : 'absolute p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto'} style={windows[1].focused ? {zIndex: 99} : {zIndex:10}}>
                              <div className="flex flex-row items-center pb-1">
                                  <div className="w-6 h-6 mr-1 border border-black close-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point"/>
                                  <div className="w-6 h-6 mr-2 border border-black min-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point hidden lg:block"/>
                                  <div className="flex items-center flex-1 h-4 handle">
                                      <div className="flex flex-col justify-between flex-1 h-2 cursor-grab">
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                      </div>
                                  </div>
                                  <div className="ml-2 text-xs handle cursor-grab">Remix OS</div>
                              </div>
                              <MusicPlayer tracklist={props.tracklist} closed={windows[1].closed}/>
                          </div>
                      </Draggable>
                      <Draggable handle=".handle" onMouseDown={toggleWindowVisibility}>
                          <div id='window-2' className={windows[2].closed || windows[2].minimized ? 'hidden' : 'absolute p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto'} style={windows[2].focused ? {zIndex: 99} : {zIndex:10}}>
                              <div className="flex flex-row items-center pb-1">
                                  <div className="w-6 h-6 mr-1 border border-black close-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point"/>
                                  <div className="w-6 h-6 mr-2 border border-black min-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point hidden lg:block"/>
                                  <div className="flex items-center flex-1 h-4 handle">
                                      <div className="flex flex-col justify-between flex-1 h-2 cursor-grab">
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                      </div>
                                  </div>
                                  <div className="ml-2 text-xs handle cursor-grab">Remix OS</div>
                              </div>
                              <div className="flex flex-wrap justify-start border border-gray-500 bg-gray-mac">
                                  <a onMouseDown={changeResumeVisibility} data-tab="0" className={resumeTab == 0 ? 'py-1 px-2 text-xs border-gray-500 border-r cursor-point bg-gray-400' : 'py-1 px-2 text-xs border-gray-600 border-r cursor-point hover:bg-gray-200'}>Resume.rtf</a>
                                  <div className='flex justify-end flex-1'>
                                      <a href='/resume' target='_blank' className="flex flex-row px-2 py-1 text-xs border-l border-gray-600 cursor-grab cursor-point hover:bg-gray-200">
                                          <img alt="link" className='w-auto h-4 mr-2' src='/img/link.svg'></img>
                                          <span>Open in new tab</span>
                                      </a>
                                  </div>
                              </div>
                              <div className="bg-white p-2 overflow-y-auto max-h-80 border border-black text-sm select-full">
                                  <Resume/>
                              </div>
                          </div>
                      </Draggable>
                      <Draggable handle=".handle" onMouseDown={toggleWindowVisibility}>
                          <div id='window-3' className={windows[3].closed || windows[3].minimized ? 'hidden' : 'absolute p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto'} style={windows[3].focused ? {zIndex: 99} : {zIndex:10}}>
                              <div className="flex flex-row items-center pb-1">
                                  <div className="w-6 h-6 mr-1 border border-black close-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point"/>
                                  <div className="w-6 h-6 mr-2 border border-black min-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point hidden lg:block"/>
                                  <div className="flex items-center flex-1 h-4 handle">
                                      <div className="flex flex-col justify-between flex-1 h-2 cursor-grab">
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                      </div>
                                  </div>
                                  <div className="ml-2 text-xs handle cursor-grab">Remix OS</div>
                              </div>
                              <div className="p-2 overflow-y-auto bordertext-sm">
                                  <Collaborate />
                              </div>
                          </div>
                      </Draggable>
                      <Draggable handle=".handle" onMouseDown={toggleWindowVisibility}>
                          <div id='window-4' className={windows[4].closed || windows[4].minimized ? 'hidden' : 'absolute p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto'} style={windows[4].focused ? {zIndex: 99} : {zIndex:10}}>
                              <div className="flex flex-row items-center pb-1">
                                  <div className="w-6 h-6 mr-1 border border-black close-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point"/>
                                  <div className="w-6 h-6 mr-2 border border-black min-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point hidden lg:block"/>
                                  <div className="flex items-center flex-1 h-4 handle">
                                      <div className="flex flex-col justify-between flex-1 h-2 cursor-grab">
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                      </div>
                                  </div>
                                  <div className="ml-2 text-xs handle cursor-grab">Remix OS</div>
                              </div>
                              <div className="p-2 overflow-y-auto text-sm bg-white border border-black max-h-80 select-full">
                                  <p className="mb-2 text-lg">Credits</p>
                                  <p><a target="_blank" href="https://remix.run" className="text-blue-700 hover:text-blue-800">• Remix framework</a>, for making this project possible.</p>
                                  <p><a target="_blank" href="https://poolsuite.net/" className="text-blue-700 hover:text-blue-800">• Poolsuite</a>, for inspiring this project's design and providing awesome music playlists.</p>
                              </div>
                          </div>
                      </Draggable>
                      <Draggable handle=".handle" onMouseDown={toggleWindowVisibility}>
                          <div id='window-5' className={windows[5].closed || windows[5].minimized ? 'hidden' : 'absolute p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto'} style={windows[5].focused ? {zIndex: 99} : {zIndex:10}}>
                              <div className="flex flex-row items-center pb-1">
                                  <div className="w-6 h-6 mr-1 border border-black close-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point"/>
                                  <div className="w-6 h-6 mr-2 border border-black min-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point hidden lg:block"/>
                                  <div className="flex items-center flex-1 h-4 handle">
                                      <div className="flex flex-col justify-between flex-1 h-2 cursor-grab">
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                      </div>
                                  </div>
                                  <div className="ml-2 text-xs handle cursor-grab">Remix OS</div>
                              </div>
                              <div className="p-2 overflow-y-auto text-sm bg-white border border-black max-h-80 select-full">
                                  <p className="mb-2 text-lg">Project milestones</p>
                                  <p className="text-gray-800"><span className="text-green-500">✓</span> Replace Poolsuite api calls with internal calls</p>
                                  <p className="text-gray-800"><span className="text-green-500">✓</span> Let the user move the windows around</p>
                                  <p className="text-gray-800"><span className="text-green-500">✓</span> Fix window z-index when user focuses said window</p>
                                  <p className="text-gray-800"><span className='text-red-500 font-bold'>-</span> Let the user change the music player's playlist - Cancelled as there are enough songs</p>
                                  <p className="text-gray-800"><span className="text-green-500">✓</span> Let the user close windows, and reopen them through the desktop icons</p>
                                  <p className="text-gray-800"><span className="text-green-500">✓</span> Let the user minimize windows to an applications dock</p>
                                  <p className="mt-4 mb-2 text-lg">Changelog</p>
                                  <p className="text-blue-700 hover:text-blue-800">• 18/09/2022 - Desktop dock.</p>
                                  <p>You now have an app dock. You can thank me on Twitter.</p>
                                  <p className="text-blue-700 hover:text-blue-800">• 15/09/2022 - Music player goodness.</p>
                                  <p>You can now change the music player loudness, thanks to the new volume slider.</p>
                                  <p className="text-blue-700 hover:text-blue-800">• 14/09/2022 - Juicy Stuff.</p>
                                  <p>Added a dropdown and about window.</p>
                                  <p className="text-blue-700 hover:text-blue-800">• 12/03/2022 - Made the windows absolute.</p>
                                  <p>Window positioning is now absolute.<br></br> They will now open on top of each other.</p>
                                  <p className="text-blue-700 hover:text-blue-800">• 10/03/2022 - Fixed music player.</p>
                                  <p>Replaced poolsuite api calls with internal calls.</p>
                                  <p className="text-blue-700 hover:text-blue-800">• 21/02/2022 - Fixed music player bug.</p>
                                  <p>Fixed a bug where the music player would continue playing even if it was closed.</p>
                                  <p className="text-blue-700 hover:text-blue-800">• 20/02/2022 - Close and re-open windows.</p>
                                  <p>The user can now close windows and open them by clicking the desktop icons.</p>
                                  <p className="text-blue-700 hover:text-blue-800">• 18/02/2022 - Changed the date.</p>
                                  <p>The year was changed to something more appropriate. Be careful, Y2K is coming!</p>
                                  <p className="text-blue-700 hover:text-blue-800">• 13/02/2022 - Added window focus.</p>
                                  <p>If you click on a window, it will now be placed in front of the others, as it's focused, just as it would on any sane operating system.</p>
                              </div>
                          </div>
                      </Draggable>

                      <Draggable handle=".handle" onMouseDown={toggleWindowVisibility}>
                          <div id='window-6' className={windows[6].closed || windows[6].minimized ? 'hidden' : 'absolute p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto'} style={windows[6].focused ? {zIndex: 99} : {zIndex:10}}>
                              <div className="flex flex-row items-center pb-1">
                                  <div className="w-6 h-6 mr-1 border border-black close-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point"/>
                                  <div className="w-6 h-6 mr-2 border border-black min-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point hidden lg:block"/>
                                  <div className="flex items-center flex-1 h-4 handle">
                                      <div className="flex flex-col justify-between flex-1 h-2 cursor-grab">
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                      </div>
                                  </div>
                                  <div className="ml-2 text-xs handle cursor-grab">Remix OS</div>
                              </div>
                              <div className="px-2 py-4 overflow-y-auto text-sm bg-white border border-black max-h-80 select-full flex justify-center">
                                  <div className="stack" style={{'--stacks': 3, 'minHeight': '3.5rem'}}>
                                      <span className='pt-4' style={{ "--index": 0 }}>REMIX OS</span>
                                      <span className='pt-4' style={{ "--index": 1 }}>REMIX OS</span>
                                      <span className='pt-4' style={{ "--index": 2 }}>REMIX OS</span>
                                  </div>
                                  
                              </div>
                              <div className="flex flex-wrap text-xs py-2">
                                  <div className="w-full md:w-1/2 md:pr-1">
                                      <p>Version: Remix OS 0.4.0</p>
                                      <p>Built-in Memory: 768 MB</p>
                                      <p>Used Memory: { usedMemory }</p>
                                  </div>
                                  <div className="w-full md:w-1/2 md:pl-1">
                                      <p>Remix Rom 1.1.3</p>
                                      
                                  </div>
                              </div>
                          </div>
                      </Draggable>
                  </div>
              </div>
          </div>
      </div>
      <audio ref={easterEggPlayer} onEnded={endBimBamBoom} id="easter-egg-player" src='/easter/audio.mp3'></audio>
      <div className='w-full fixed bottom-0 flex-row justify-center hidden lg:flex'>
          <div className="px-2 bg-gray-mac z-50 max-w-sm xl:max-w-prose mx-auto w-full rounded-t-lg py-2 bg-opacity-50 border-black border-t border-r border-l" style={{"minHeight": "65px"}}>
              <div className="flex-1 py-1 flex justify-start space-x-4 items-center">
                  <div id='dock-icon-0' onMouseDown={toggleWindowVisibilityViaId} data-index="0" className={windows[0].closed ? 'hidden' : "flex flex-col handle items-center os-icon p-2 hover:bg-gray-400 rounded-xl hover:bg-opacity-50 cursor-pointer" }>
                      <LazyLoadImage src="/icons/Notes_Black.png" className="w-6 h-6 mx-auto pointer-events-none"/>
                      <span className={windows[0].minimized ? 'rounded-full bg-black h-1 w-1 mt-9 absolute' : 'hidden'}>&nbsp;</span>
                  </div>
                  <div id='dock-icon-1' onMouseDown={toggleWindowVisibilityViaId} data-index="1" className={windows[1].closed ? 'hidden' : "flex flex-col handle items-center os-icon p-2 hover:bg-gray-400 rounded-xl hover:bg-opacity-50 cursor-pointer" }>
                      <LazyLoadImage src="/icons/Play_Blue.png" className="w-6 h-6 mx-auto pointer-events-none"/>
                      <span className={windows[1].minimized ? 'rounded-full bg-black h-1 w-1 mt-9 absolute' : 'hidden'}>&nbsp;</span>
                  </div>
                  <div id='dock-icon-2' onMouseDown={toggleWindowVisibilityViaId} data-index="2" className={windows[2].closed ? 'hidden' : "flex flex-col handle items-center os-icon p-2 hover:bg-gray-400 rounded-xl hover:bg-opacity-50 cursor-pointer" }>
                      <LazyLoadImage src="/icons/Notes_Blue.png" className="w-6 h-6 mx-auto pointer-events-none"/>
                      <span className={windows[2].minimized ? 'rounded-full bg-black h-1 w-1 mt-9 absolute' : 'hidden'}>&nbsp;</span>
                  </div>
                  <div id='dock-icon-3' onMouseDown={toggleWindowVisibilityViaId} data-index="3" className={windows[3].closed ? 'hidden' : "flex flex-col handle items-center os-icon p-2 hover:bg-gray-400 rounded-xl hover:bg-opacity-50 cursor-pointer" }>
                      <LazyLoadImage src="/icons/Planet_Orange.png" className="w-6 h-6 mx-auto pointer-events-none"/>
                      <span className={windows[3].minimized ? 'rounded-full bg-black h-1 w-1 mt-9 absolute' : 'hidden'}>&nbsp;</span>
                  </div>
                  <div id='dock-icon-4' onMouseDown={toggleWindowVisibilityViaId} data-index="4" className={windows[4].closed ? 'hidden' : "flex flex-col handle items-center os-icon p-2 hover:bg-gray-400 rounded-xl hover:bg-opacity-50 cursor-pointer" }>
                      <LazyLoadImage src="/icons/Notes_Pink.png" className="w-6 h-6 mx-auto pointer-events-none"/>
                      <span className={windows[4].minimized ? 'rounded-full bg-black h-1 w-1 mt-9 absolute' : 'hidden'}>&nbsp;</span>
                  </div>
                  <div id='dock-icon-5' onMouseDown={toggleWindowVisibilityViaId} data-index="5" className={windows[5].closed ? 'hidden' : "flex flex-col handle items-center os-icon p-2 hover:bg-gray-400 rounded-xl hover:bg-opacity-50 cursor-pointer" }>
                      <LazyLoadImage src="/icons/Notes_Yellow.png" className="w-6 h-6 mx-auto pointer-events-none"/>
                      <span className={windows[5].minimized ? 'rounded-full bg-black h-1 w-1 mt-9 absolute' : 'hidden'}>&nbsp;</span>
                  </div>
                  <div id='dock-icon-6' onMouseDown={toggleWindowVisibilityViaId} data-index="6" className={windows[6].closed ? 'hidden' : "flex flex-col handle items-center os-icon p-2 hover:bg-gray-400 rounded-xl hover:bg-opacity-50 cursor-pointer" }>
                      <LazyLoadImage src="/icons/Wrench_Black.png" className="w-6 h-6 mx-auto pointer-events-none"/>
                      <span className={windows[6].minimized ? 'rounded-full bg-black h-1 w-1 mt-9 absolute' : 'hidden'}>&nbsp;</span>
                  </div>
                  <div id='dock-icon-7' onMouseDown={endBimBamBoom} className={!easter ? 'hidden' : "flex flex-col handle items-center os-icon p-2 hover:bg-gray-400 rounded-xl hover:bg-opacity-50 cursor-pointer" }>
                      <LazyLoadImage src="/easter/boom.webp" className="w-6 h-6 mx-auto pointer-events-none"/>
                  </div>
                  
              </div>
          </div>
      </div>
    </div>
  );
}

export default Desktop;
