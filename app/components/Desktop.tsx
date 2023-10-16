import { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import { MusicPlayer } from '~/components/MusicPlayer';
import { Collaborate } from '~/components/Collaborate';
import { Clock } from '~/components/Clock';
import { Calendar } from '~/components/Calendar';
import { Resume } from '~/components/Resume';
import pkg from 'react-lazy-load-image-component';
import type { Tracklist } from '~/types';
const { LazyLoadImage } = pkg;

export const Desktop = (props: {tracklist: Tracklist}) => {
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
  const [anyMobileDevice, setAnyMobileDevice] = useState(false);
  const [usedMemory, setUsedMemory] = useState("0 MB");
  const iconTimeout = useRef<NodeJS.Timeout>();
  let memoryInterval: NodeJS.Timeout;

  const findParentWindow = (event: MouseEvent) => {
    if (!(event.target instanceof Element)) {
        return;
    }
    let daddyWindow = event.target;
    if (!daddyWindow) {
        return;
    }
    while (!daddyWindow.classList.contains('os-window')) {
      if (!daddyWindow.parentElement) {
        console.error('Could not find parent window. Contact developer.');
        return;
      }
      daddyWindow = daddyWindow.parentElement;
    }
    return daddyWindow;
  }

  const toggleWindowVisibility = (event: MouseEvent) => {
    event.stopPropagation();
    if (!(event.target instanceof Element)) {
        console.error("what did you click?")
        return;
    }
    if(runAdjacencyCheck(event)) {
      return;
    }
    if(!event.target) {
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

  const toggleWindowVisibilityViaId = (windowIndex: number) => {
    setWindows(windows.map((window, index) => {
      return index === windowIndex ? { ...window, focused: true, minimized: false } : { ...window, focused: false };
    }));
  }

  const toggleIconVisibility = (iconIndex: number) => {
    if (iconTimeout.current) {
      clearTimeout(iconTimeout.current);
    }
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
      resetIconsFocusedState(iconIndex);
    }, 2000);
    
  }

  const resetIconsFocusedState = (iconIndex: number) => {
    setIcons(icons.map((icon, index) => {
      const focused = icons[index].focused;
      return { ...icon, focused: focused, clicks: 0 };
    }));
  }
  
  const runAdjacencyCheck = (event: MouseEvent) => {
    if (!(event.target instanceof Element)) {
        return;
    }
    if(event.target.classList.contains('close-btn')) {
      toggleHideWindow(event);
      return true;
    }
    if(event.target.classList.contains('min-btn')) {
      toggleMinimizeWindow(event);
      return true;
    }
    return false;
  }

  const toggleHideWindow = (event: MouseEvent) => {
    const parentWindow = findParentWindow(event);
    if (!parentWindow) {
        return;
    }
    let windowIndex = parseInt(parentWindow.id.replace('window-', ''));
    setWindows(windows.map((window, index) => {
      return index === windowIndex ? { ...window, closed: true } : window;
    }));
  }

  const toggleMinimizeWindow = (event: MouseEvent) => {
    const parentWindow = findParentWindow(event);
    if (!parentWindow) {
        return;
    }
    let windowIndex = parseInt(parentWindow.id.replace('window-', ''));
    setWindows(windows.map((window, index) => {
      return index === windowIndex ? { ...window, minimized: true } : window;
    }));
  }

  const tick = () => {
    setAnyMobileDevice(window.matchMedia("(max-width: 412px)").matches);
  }

  useEffect(() => {
    const intervalID = setInterval(() => tick(), 250);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const apps = [
    {
      iconTitle: 'Presentation.rtf',
      iconImage: '/icons/Notes_Black.png',
      showOnDesktop: true,
    },
    {
      iconTitle: 'Music Player',
      iconImage: '/icons/Play_Blue.png',
      showOnDesktop: true,
    },
    {
      iconTitle: 'Resume.rtf',
      iconImage: '/icons/Notes_Blue.png',
      showOnDesktop: true,
    },
    {
      iconTitle: 'Collaboration',
      iconImage: '/icons/Planet_Orange.png',
      showOnDesktop: true,
    },
    {
      iconTitle: 'Credits.rtf',
      iconImage: '/icons/Notes_Pink.png',
      showOnDesktop: true,
    },
    {
      iconTitle: 'Milestones.rtf',
      iconImage: '/icons/Notes_Yellow.png',
      showOnDesktop: true,
    },
    {
      iconTitle: 'Bim Bam Boom',
      iconImage: '/easter/boom.webp',
      showOnDesktop: false, // Disabled due to bugs
    },
    {
      iconTitle: 'About',
      iconImage: '/icons/Wrench_Black.png',
      showOnDesktop: false,
    }
  ]

  return (
    <div className="flex-1 min-h-screen font-chicago">
      <div className="z-50 flex flex-row w-full border-b border-black bg-gray-mac">
          <div 
            className={ menu ? "flex flex-row items-center py-1 text-xs border-r border-black cursor-point bg-gray-400 px-2" : "flex flex-row items-center py-1 text-xs border-r border-black cursor-point px-2 hover:bg-black hover:text-white group"} 
            onMouseDown={ () => { setMenu(!menu) } }
          >
              <span>Remix OS</span>
              <LazyLoadImage className="inline ml-1 group-hover:invert" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAAHElEQVQImWNkYGD4z4AGQIIggCwBE0OSYGBgAABmWAMBPlQzgwAAAABJRU5ErkJggg==" height="3" width="auto"/>
          </div>
          <div className="flex-1 py-1"></div>
          <div className="py-1 pl-2 text-xs border-l border-black pr-2"><Clock /></div>
          <div className="hidden py-1 pl-2 text-xs border-l border-black sm:block pr-2"><Calendar /></div>
      </div>
      <div id="dropdown" className={ menu ? 'z-10 w-44 bg-gray-mac shadow-mac-os absolute' : 'hidden' }>
          <ul className="text-xs" aria-labelledby="dropdownDefault">
              <li>
                  <span 
                      className="block py-1 px-4 border-b border-black hover:text-white hover:bg-black cursor-pointer" 
                      onMouseDown={() => { 
                          setMenu(false)
                          
                          setWindows(windows.map((window, index) => {
                            return index === 7 ? { ...window, focused: true, closed: false } : window;
                          }));
                          
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
                  >About</span>
              </li>
              <li>
                  <span className="block py-1 px-4 border-b border-black text-gray-500">Settings</span>
              </li>
          </ul>
      </div>
      <div className="absolute z-0 flex flex-wrap w-screen p-2">
          <div className="grid w-full max-w-sm grid-cols-3 gap-4 mt-2">
            {
              apps.map((app, index) => {
                if (!app.showOnDesktop) {
                  return null;
                }
                return (
                  <Draggable
                    key={app.iconTitle}
                    handle=".handle"
                    onMouseDown={() => toggleIconVisibility(index)}>
                      <div
                        id={`icon-${index}`}
                        className="flex flex-col items-center handle os-icon"
                        style={icons[index].focused ? {zIndex: 50} : {zIndex:1}}
                      >
                          <LazyLoadImage src={app.iconImage} className="w-10 h-10 mx-auto pointer-events-none"/>
                          <span className={icons[index].clicks == 1 ? 'text-xs bg-blue-400 opacity-75' : 'text-xs'}>{app.iconTitle}</span>
                      </div>
                  </Draggable>
                )
              })
            }
          </div>
      </div>
      <div className="absolute z-0 w-screen pointer-events-none">
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                  <div className="flex flex-wrap items-start justify-center md:justify-between">
                      <Draggable handle=".handle" onMouseDown={toggleWindowVisibility}>
                          <div
                            id='window-0' 
                            className={windows[0].closed || windows[0].minimized ? 'hidden' : 'absolute p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto'} 
                            style={windows[0].focused ? {zIndex: 99} : {zIndex:10}}>
                              <div className="flex flex-row items-center pb-1">
                                  <div className="w-6 h-6 mr-1 border border-black close-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point"/>
                                  <div className="w-6 h-6 mr-2 border border-black min-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point hidden lg:block"/>
                                  <div className="flex items-center flex-1 h-4 handle cursor-grab">
                                      <div className="flex flex-col justify-between flex-1 h-2">
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
                                  <p className='mt-2'>For business inqueries contact me on <a className='text-blue-700' target='_blank' href='mailto:bogdan.mosteanu@hey.com' rel="noreferrer">bogdan.mosteanu@hey.com</a></p>
                                  <p className="mt-4">Links:</p>
                                  <div className='flex flex-wrap space-x-4 mb-2'>
                                      <a target="_blank" href="https://twitter.com/xndbogdan" className="flex flex-col items-center" rel="noreferrer">
                                          <LazyLoadImage src="/icons/Twitter.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                                          <span className='text-xs'>Twitter</span>
                                      </a>
                                      <a target="_blank" href="https://github.com/xndbogdan" className="flex flex-col items-center" rel="noreferrer">
                                          <LazyLoadImage src="/icons/github.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                                          <span className='text-xs'>Github</span>
                                      </a>
                                      <a target="_blank" href="https://www.linkedin.com/in/bogdan-mihai-mo%C8%99teanu-476262120/" className="flex flex-col items-center" rel="noreferrer">
                                          <LazyLoadImage src="/icons/linkedin.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                                          <span className='text-xs'>Linkedin</span>
                                      </a>
                                  </div>
                                  <a className='text-sm hover:text-blue-ukraine' href='https://helpukraine.center/' target="_blank" rel="noreferrer">Donate to HELP<span className='text-red-600'>UKRAINE</span>.CENTER <img alt='Ukraine flag' className='w-6 h-4 inline' src="/img/ukraine.svg"/> </a>
                              </div>
                          </div>
                      </Draggable>
                      <Draggable handle=".handle" onMouseDown={toggleWindowVisibility}>
                          <div id='window-1' className={windows[1].closed || windows[1].minimized ? 'hidden' : 'absolute p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto'} style={windows[1].focused ? {zIndex: 99} : {zIndex:10}}>
                              <div className="flex flex-row items-center pb-1">
                                  <div className="w-6 h-6 mr-1 border border-black close-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point"/>
                                  <div className="w-6 h-6 mr-2 border border-black min-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point hidden lg:block"/>
                                  <div className="flex items-center flex-1 h-4 handle cursor-grab">
                                      <div className="flex flex-col justify-between flex-1 h-2">
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
                                  <div className="flex items-center flex-1 h-4 handle cursor-grab">
                                      <div className="flex flex-col justify-between flex-1 h-2">
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                      </div>
                                  </div>
                                  <div className="ml-2 text-xs handle cursor-grab">Remix OS</div>
                              </div>
                              <div className="flex flex-wrap justify-start border border-gray-500 bg-gray-mac">
                                  <div className='py-1 px-2 text-xs border-gray-500 border-r cursor-point bg-gray-400'>Resume.rtf</div>
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
                                  <div className="flex items-center flex-1 h-4 handle cursor-grab">
                                      <div className="flex flex-col justify-between flex-1 h-2">
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
                                  <div className="flex items-center flex-1 h-4 handle cursor-grab">
                                      <div className="flex flex-col justify-between flex-1 h-2">
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                      </div>
                                  </div>
                                  <div className="ml-2 text-xs handle cursor-grab">Remix OS</div>
                              </div>
                              <div className="p-2 overflow-y-auto text-sm bg-white border border-black max-h-80 select-full">
                                  <p className="mb-2 text-lg">Credits</p>
                                  <p><a target="_blank" href="https://remix.run" className="text-blue-700 hover:text-blue-800" rel="noreferrer">• Remix framework</a>, for making this project possible.</p>
                                  <p><a target="_blank" href="https://poolsuite.net/" className="text-blue-700 hover:text-blue-800" rel="noreferrer">• Poolsuite</a>, for inspiring this project's design and providing awesome music playlists.</p>
                              </div>
                          </div>
                      </Draggable>
                      <Draggable handle=".handle" onMouseDown={toggleWindowVisibility}>
                          <div id='window-5' className={windows[5].closed || windows[5].minimized ? 'hidden' : 'absolute p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto'} style={windows[5].focused ? {zIndex: 99} : {zIndex:10}}>
                              <div className="flex flex-row items-center pb-1">
                                  <div className="w-6 h-6 mr-1 border border-black close-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point"/>
                                  <div className="w-6 h-6 mr-2 border border-black min-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point hidden lg:block"/>
                                  <div className="flex items-center flex-1 h-4 handle cursor-grab">
                                      <div className="flex flex-col justify-between flex-1 h-2">
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
                          <div id='window-7' className={windows[7].closed || windows[7].minimized ? 'hidden' : 'absolute p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto'} style={windows[7].focused ? {zIndex: 99} : {zIndex:10}}>
                              <div className="flex flex-row items-center pb-1">
                                  <div className="w-6 h-6 mr-1 border border-black close-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point"/>
                                  <div className="w-6 h-6 mr-2 border border-black min-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point hidden lg:block"/>
                                  <div className="flex items-center flex-1 h-4 handle cursor-grab">
                                      <div className="flex flex-col justify-between flex-1 h-2">
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                          <div className="border-t border-black"></div>
                                      </div>
                                  </div>
                                  <div className="ml-2 text-xs handle cursor-grab">Remix OS</div>
                              </div>
                              <div className="px-2 py-4 overflow-y-auto text-sm bg-white border border-black max-h-80 select-full flex justify-center">
                                  <div
                                    className="stack"
                                    style={{'--stacks': 3, 'minHeight': '3.5rem'} as React.CSSProperties}
                                  >
                                      <span className='pt-4' style={{ "--index": 0 } as React.CSSProperties}>REMIX OS</span>
                                      <span className='pt-4' style={{ "--index": 1 } as React.CSSProperties}>REMIX OS</span>
                                      <span className='pt-4' style={{ "--index": 2 } as React.CSSProperties}>REMIX OS</span>
                                  </div>
                                  
                              </div>
                              <div className="flex flex-wrap text-xs py-2">
                                  <div className="w-full md:w-1/2 md:pr-1">
                                      <p>Version: Remix OS 2.0</p>
                                      <p>Built-in Memory: 768 MB</p>
                                      <p>Used Memory: { usedMemory }</p>
                                  </div>
                                  <div className="w-full md:w-1/2 md:pl-1">
                                      <p>Remix Rom 2.0.1</p>
                                      
                                  </div>
                              </div>
                          </div>
                      </Draggable>
                  </div>
              </div>
          </div>
      </div>
      <div className='w-full fixed bottom-0 flex-row justify-center hidden lg:flex'>
          <div className="px-2 bg-gray-mac z-50 max-w-sm xl:max-w-prose mx-auto w-full rounded-t-lg py-2 bg-opacity-50 border-black border-t border-r border-l" style={{"minHeight": "65px"}}>
              <div className="flex-1 py-1 flex justify-start space-x-4 items-center">
                {
                  apps.map((app, index) => {
                    return (
                      <div 
                        key={app.iconTitle}
                        id={`dock-icon-${index}`} 
                        onMouseDown={() => toggleWindowVisibilityViaId(index)} 
                        className={windows[index].closed ? 'hidden' : "flex flex-col handle items-center os-icon p-2 hover:bg-gray-400 rounded-xl hover:bg-opacity-50 cursor-pointer" }
                        >
                          <LazyLoadImage src={app.iconImage} className="w-6 h-6 mx-auto pointer-events-none"/>
                          <span className={windows[index].minimized ? 'rounded-full bg-black h-1 w-1 mt-9 absolute' : 'hidden'}>&nbsp;</span>
                      </div>
                    )
                  })
                }
              </div>
          </div>
      </div>
    </div>
  );
}
