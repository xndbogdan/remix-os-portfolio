import React from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import MusicPlayer from '~/components/MusicPlayer';
import Collaborate from '~/components/Collaborate';
import Clock from '~/components/Clock';
import Calendar from '~/components/Calendar';
import Resume from '~/components/Resume';
import Projects from '~/components/Projects';
import { LazyLoadImage } from 'react-lazy-load-image-component';


class Desktop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windows: [
                { focused: false, closed: false, },
                { focused: false, closed: true, },
                { focused: false, closed: true, },
                { focused: false, closed: true, },
                { focused: false, closed: true, },
                { focused: false, closed: true, },
                { focused: false, closed: true, },
                { focused: false, closed: true, },
            ],
            icons: [
                { focused: false, clicks: 0, dragging: false, },
                { focused: false, clicks: 0, dragging: false, },
                { focused: false, clicks: 0, dragging: false, },
                { focused: false, clicks: 0, dragging: false },
                { focused: false, clicks: 0, dragging: false },
                { focused: false, clicks: 0, dragging: false },
                { focused: false, clicks: 0, dragging: false },
                { focused: false, clicks: 0, dragging: false },
            ],
            resumeTab: 0,
            anyMobileDevice: false,
        };
        this.iconTimeout = null;
    }

    render() {
        const resumeTab = this.state.resumeTab
        let resumeContent;
        if(resumeTab === 0) {
            resumeContent = <Projects></Projects>
        } else {
            resumeContent = <Resume></Resume>
        }
        return (
            <div className="flex-1 min-h-screen font-chicago">
                <div className="w-full border-b border-black px-2 flex flex-row bg-gray-mac z-50">
                    <div className="border-r border-black text-xs pr-2 flex flex-row items-center py-1 cursor-point">
                        <span>Remix OS</span>
                        <LazyLoadImage className="inline ml-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAAHElEQVQImWNkYGD4z4AGQIIggCwBE0OSYGBgAABmWAMBPlQzgwAAAABJRU5ErkJggg==" height="3" width="auto"/>
                    </div>
                    <div className="flex-1 py-1"></div>
                    <div className="text-xs border-l border-black pl-2 py-1 sm:pr-2"><Clock /></div>
                    <div className="text-xs border-l border-black pl-2 py-1 hidden sm:block"><Calendar /></div>
                </div>
                <div className="fixed bottom-0 right-0 text-white p-2 text-sm flex flex-col items-end">
                    <span>Remix OS Beta Release v0.2</span>
                </div>
                <div className="w-screen flex flex-wrap absolute p-2 z-0">
                    <div className="mt-2 w-full grid grid-cols-3 gap-4 max-w-sm">
                        <Draggable handle=".handle" onMouseDown={this.toggleIconVisibility}>
                            <div id='icon-0' className="flex flex-col handle items-center os-icon" style={this.state.icons[0].focused ? {zIndex: 50} : {zIndex:1}}>
                                <LazyLoadImage src="/icons/Notes_Black.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                                <span className={this.state.icons[0].clicks == 1 ? 'text-xs bg-blue-400 opacity-75' : 'text-xs'}>Presentation.rtf</span>
                            </div>
                        </Draggable>
                        <Draggable handle=".handle" onMouseDown={this.toggleIconVisibility}>
                            <div id='icon-1' className="flex flex-col handle items-center os-icon" style={this.state.icons[1].focused ? {zIndex: 50} : {zIndex:1}}>
                                <LazyLoadImage src="/icons/Play_Blue.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                                <span className={this.state.icons[1].clicks == 1 ? 'text-xs bg-blue-400 opacity-75' : 'text-xs'}>Music Player</span>
                            </div>
                        </Draggable>
                        <Draggable handle=".handle" onMouseDown={this.toggleIconVisibility}>
                            <div id='icon-2' className="flex flex-col handle items-center os-icon" style={this.state.icons[2].focused ? {zIndex: 50} : {zIndex:1}}>
                                <LazyLoadImage src="/icons/Notes_Black.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                                <span className={this.state.icons[2].clicks == 1 ? 'text-xs bg-blue-400 opacity-75' : 'text-xs'}>Resume.rtf</span>
                            </div>
                        </Draggable>
                        <Draggable handle=".handle" onMouseDown={this.toggleIconVisibility}>
                            <div id='icon-3' className="flex flex-col handle items-center os-icon" style={this.state.icons[3].focused ? {zIndex: 50} : {zIndex:1}}>
                                <LazyLoadImage src="/icons/Planet_Orange.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                                <span className={this.state.icons[3].clicks == 1 ? 'text-xs bg-blue-400 opacity-75' : 'text-xs'}>Collaboration</span>
                            </div>
                        </Draggable>
                        <Draggable handle=".handle" onMouseDown={this.toggleIconVisibility}>
                            <div id='icon-4' className="flex flex-col handle items-center os-icon" style={this.state.icons[4].focused ? {zIndex: 50} : {zIndex:1}}>
                                <LazyLoadImage src="/icons/Notes_Black.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                                <span className={this.state.icons[4].clicks == 1 ? 'text-xs bg-blue-400 opacity-75' : 'text-xs'}>Credits.rtf</span>
                            </div>
                        </Draggable>
                        <Draggable handle=".handle" onMouseDown={this.toggleIconVisibility}>
                            <div id='icon-5' className="flex flex-col handle items-center os-icon" style={this.state.icons[5].focused ? {zIndex: 50} : {zIndex:1}}>
                                <LazyLoadImage src="/icons/Notes_Black.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                                <span className={this.state.icons[5].clicks == 1 ? 'text-xs bg-blue-400 opacity-75' : 'text-xs'}>Milestones.rtf</span>
                            </div>
                        </Draggable>
                    </div>
                </div>
                <div className="w-screen absolute pointer-events-none z-0">
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center md:justify-between items-start">

                                <Draggable handle=".handle" onMouseDown={this.toggleWindowVisibility}>
                                    <div id='window-0' className={this.state.windows[0].closed ? 'hidden' : 'absolute p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto'} style={this.state.windows[0].focused ? {zIndex: 99} : {zIndex:10}}>
                                        <div className="flex flex-row items-center pb-1">
                                            <div className="close-btn h-6 w-6 md:h-4 md:w-4 border border-black mr-2 hover:invert hover:bg-white cursor-point" onMouseDown={this.toggleHideWindow}></div>
                                            <div className="flex-1 flex handle h-4 items-center">
                                                <div className="flex-1 flex flex-col justify-between cursor-grab h-2">
                                                    <div className="border-t border-black"></div>
                                                    <div className="border-t border-black"></div>
                                                    <div className="border-t border-black"></div>
                                                </div>
                                            </div>
                                            <div className="text-xs ml-2 handle cursor-grab">Remix OS</div>
                                        </div>
                                        <div className="bg-white p-2 overflow-y-auto border border-black text-sm select-full">
                                            <p>I'm Bogdan, an independent full-stack developer from Bucharest.</p>
                                            <p>Big fan of Laravel, Vue and Tailwind.</p>
                                            <p className="mt-4">This project was made using Remix. It combines React and Node.<br/>It's still under development.</p>
                                            <p className="mt-2">You should try moving the windows around and playing some music. Maybe fax me your music playlist while you're at it.</p>
                                            <p className="mt-2">Close this window or move it lower if you are on a mobile device, there are desktop icons under it that you can click to find more about me or listen to some sweet music.</p>
                                            <p className="mt-4">Links:</p>
                                            <div className='flex flex-wrap space-x-4'>
                                                <a target="_blank" href="https://twitter.com/xndbogdan" className="flex flex-col items-center">
                                                    <LazyLoadImage src="/icons/Twitter.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                                                    <span className='text-xs'>Twitter</span>
                                                </a>
                                                <a target="_blank" href="https://github.com/xndbogdan" className="flex flex-col items-center">
                                                    <LazyLoadImage src="/icons/github.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                                                    <span className='text-xs'>Github</span>
                                                </a>
                                                <a target="_blank" href="https://www.linkedin.com/in/bogdan-mihai-476262120/" className="flex flex-col items-center">
                                                    <LazyLoadImage src="/icons/linkedin.png" className="w-10 h-10 mx-auto pointer-events-none"/>
                                                    <span className='text-xs'>Linkedin</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Draggable>
                                <Draggable handle=".handle" onMouseDown={this.toggleWindowVisibility}>
                                    <div id='window-1' className={this.state.windows[1].closed ? 'hidden' : 'absolute p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto'} style={this.state.windows[1].focused ? {zIndex: 99} : {zIndex:10}}>
                                        <div className="flex flex-row items-center pb-1">
                                            <div className="close-btn h-6 w-6 md:h-4 md:w-4 border border-black mr-2 hover:invert hover:bg-white cursor-point" onMouseDown={this.toggleHideWindow}></div>
                                            <div className="flex-1 flex handle h-4 items-center">
                                                <div className="flex-1 flex flex-col justify-between cursor-grab h-2">
                                                    <div className="border-t border-black"></div>
                                                    <div className="border-t border-black"></div>
                                                    <div className="border-t border-black"></div>
                                                </div>
                                            </div>
                                            <div className="text-xs ml-2 handle cursor-grab">Remix OS</div>
                                        </div>
                                        <MusicPlayer tracklist={this.props.tracklist} closed={this.state.windows[1].closed}/>
                                    </div>
                                </Draggable>
                                <Draggable handle=".handle" onMouseDown={this.toggleWindowVisibility}>
                                    <div id='window-2' className={this.state.windows[2].closed ? 'hidden' : 'absolute p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto'} style={this.state.windows[2].focused ? {zIndex: 99} : {zIndex:10}}>
                                        <div className="flex flex-row items-center pb-1">
                                            <div className="close-btn h-6 w-6 md:h-4 md:w-4 border border-black mr-2 hover:invert hover:bg-white cursor-point" onMouseDown={this.toggleHideWindow}></div>
                                            <div className="flex-1 flex handle h-4 items-center">
                                                <div className="flex-1 flex flex-col justify-between cursor-grab h-2">
                                                    <div className="border-t border-black"></div>
                                                    <div className="border-t border-black"></div>
                                                    <div className="border-t border-black"></div>
                                                </div>
                                            </div>
                                            <div className="text-xs ml-2 handle cursor-grab">Remix OS</div>
                                        </div>
                                        <div className="bg-gray-mac border border-gray-500 flex flex-wrap justify-start">
                                            <a onMouseDown={this.changeResumeVisibility} data-tab="0" className={this.state.resumeTab == 0 ? 'py-1 px-2 text-xs border-gray-500 border-r cursor-point bg-gray-400' : 'py-1 px-2 text-xs border-gray-600 border-r cursor-point hover:bg-gray-200'}>Projects.rtf</a>
                                            <a onMouseDown={this.changeResumeVisibility} data-tab="1" className={this.state.resumeTab == 1 ? 'py-1 px-2 text-xs border-gray-500 border-r cursor-point bg-gray-400' : 'py-1 px-2 text-xs border-gray-600 border-r cursor-point hover:bg-gray-200'}>Resume.rtf</a>
                                        </div>
                                        { resumeContent }
                                        
                                    </div>
                                </Draggable>
                                <Draggable handle=".handle" onMouseDown={this.toggleWindowVisibility}>
                                    <div id='window-3' className={this.state.windows[3].closed ? 'hidden' : 'absolute p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto'} style={this.state.windows[3].focused ? {zIndex: 99} : {zIndex:10}}>
                                        <div className="flex flex-row items-center pb-1">
                                            <div className="close-btn h-6 w-6 md:h-4 md:w-4 border border-black mr-2 hover:invert hover:bg-white cursor-point" onMouseDown={this.toggleHideWindow}></div>
                                            <div className="flex-1 flex handle h-4 items-center">
                                                <div className="flex-1 flex flex-col justify-between cursor-grab h-2">
                                                    <div className="border-t border-black"></div>
                                                    <div className="border-t border-black"></div>
                                                    <div className="border-t border-black"></div>
                                                </div>
                                            </div>
                                            <div className="text-xs ml-2 handle cursor-grab">Remix OS</div>
                                        </div>
                                        <div className="p-2 overflow-y-auto bordertext-sm">
                                            <Collaborate />
                                        </div>
                                    </div>
                                </Draggable>
                                <Draggable handle=".handle" onMouseDown={this.toggleWindowVisibility}>
                                    <div id='window-4' className={this.state.windows[4].closed ? 'hidden' : 'absolute p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto'} style={this.state.windows[4].focused ? {zIndex: 99} : {zIndex:10}}>
                                        <div className="flex flex-row items-center pb-1">
                                            <div className="close-btn h-6 w-6 md:h-4 md:w-4 border border-black mr-2 hover:invert hover:bg-white cursor-point" onMouseDown={this.toggleHideWindow}></div>
                                            <div className="flex-1 flex handle h-4 items-center">
                                                <div className="flex-1 flex flex-col justify-between cursor-grab h-2">
                                                    <div className="border-t border-black"></div>
                                                    <div className="border-t border-black"></div>
                                                    <div className="border-t border-black"></div>
                                                </div>
                                            </div>
                                            <div className="text-xs ml-2 handle cursor-grab">Remix OS</div>
                                        </div>
                                        <div className="bg-white p-2 overflow-y-auto border border-black text-sm max-h-80 select-full">
                                            <p className="text-lg mb-2">Credits</p>
                                            <p><a target="_blank" href="https://remix.run" className="text-blue-700 hover:text-blue-800">• Remix framework</a>, for making this project possible.</p>
                                            <p><a target="_blank" href="https://poolsuite.net/" className="text-blue-700 hover:text-blue-800">• Poolsuite</a>, for inspiring this project's design and providing awesome music playlists.</p>
                                        </div>
                                    </div>
                                </Draggable>
                                <Draggable handle=".handle" onMouseDown={this.toggleWindowVisibility}>
                                    <div id='window-5' className={this.state.windows[5].closed ? 'hidden' : 'absolute p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto'} style={this.state.windows[5].focused ? {zIndex: 99} : {zIndex:10}}>
                                        <div className="flex flex-row items-center pb-1">
                                            <div className="close-btn h-6 w-6 md:h-4 md:w-4 border border-black mr-2 hover:invert hover:bg-white cursor-point" onMouseDown={this.toggleHideWindow}></div>
                                            <div className="flex-1 flex handle h-4 items-center">
                                                <div className="flex-1 flex flex-col justify-between cursor-grab h-2">
                                                    <div className="border-t border-black"></div>
                                                    <div className="border-t border-black"></div>
                                                    <div className="border-t border-black"></div>
                                                </div>
                                            </div>
                                            <div className="text-xs ml-2 handle cursor-grab">Remix OS</div>
                                        </div>
                                        <div className="bg-white p-2 overflow-y-auto border border-black text-sm max-h-80 select-full">
                                            <p className="text-lg mb-2">Project milestones</p>
                                            <p className="text-gray-800"><span className="text-green-500">✓</span> Replace Poolsuite api calls with internal calls</p>
                                            <p className="text-gray-800"><span className="text-green-500">✓</span> Let the user move the windows around</p>
                                            <p className="text-gray-800"><span className="text-green-500">✓</span> Fix window z-index when user focuses said window</p>
                                            <p className="text-gray-800">• Let the user change the music player's playlist</p>
                                            <p className="text-gray-800"><span className="text-green-500">✓</span> Let the user close windows, and reopen them through the desktop icons</p>
                                            <p className="text-gray-800">• Let the user minimize windows to an applications dock</p>
                                            <p className="text-lg mb-2 mt-4">Changelog</p>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    changeResumeVisibility = (event) => {
        this.setState({
            resumeTab: parseInt(event.target.dataset.tab)
        });
    }

    toggleWindowVisibility = (event) => {
        let daddyWindow = event.target
        while(daddyWindow.classList.contains('os-window') === false) {
            if(!daddyWindow.parentElement) {
                console.error('Could not find parent window. Contact developer.')
                return;
            }
            daddyWindow = daddyWindow.parentElement
        }
        let windowIndex = parseInt(daddyWindow.id.replace('window-', ''))
        let visibleWindows = this.state.windows
        visibleWindows.forEach((window, index) => {
            if (index === windowIndex) {
                visibleWindows[index] = { ...window, focused: true}
            } else {
                visibleWindows[index] = {...window, focused: false}
            }
        });
        this.setState({ windows: visibleWindows })
    }

    toggleIconVisibility = (event) => {
        clearTimeout(this.iconTimeout)
        let daddyIcon = event.target
        while(daddyIcon.classList.contains('os-icon') === false) {
            if(!daddyIcon.parentElement) {
                console.error('Could not find parent icon. Contact developer.')
                return;
            }
            daddyIcon = daddyIcon.parentElement
        }
        let iconIndex = parseInt(daddyIcon.id.replace('icon-', ''))
        let visibleIcons = this.state.icons
        visibleIcons.forEach((icon, index) => {
            if (index === iconIndex) {
                let clicks = visibleIcons[index].clicks
                visibleIcons[index] = { ...window, focused: true, clicks: clicks+1}
                if((clicks == 1 || this.state.anyMobileDevice) && !icon.dragging) {
                    /* An icon was double clicked
                     * We need to reset the iconns state and show the window corresponding to the double clicked icon
                     */
                    let visibleIcons = this.state.icons
                    visibleIcons.forEach((icon, index) => {
                        let focused = visibleIcons[index].focused
                        visibleIcons[index] = { ...icon, focused: focused, clicks: 0}
                    })
                    this.setState({ icons: visibleIcons })
                    // Set window state to visible
                    let visibleWindows = this.state.windows
                    const windowIndex = iconIndex
                    visibleWindows.forEach((window, index) => {
                        if (index == windowIndex) {
                            visibleWindows[index] = { ...window, focused: true, closed: false}
                            this.setState({ windows: visibleWindows })
                            return
                        } else {
                            visibleWindows[index] = { ...window, focused: false, closed: visibleWindows[index].closed}
                        }
                    });
                }
            } else {
                visibleIcons[index] = {...icon, focused: false, clicks: 0, dragging: false}
            }
        });
        this.setState({ icons: visibleIcons })

        this.iconTimeout = setTimeout(() => {
            let visibleIcons = this.state.icons
            visibleIcons.forEach((icon, index) => {
                let focused = visibleIcons[index].focused
                visibleIcons[index] = { ...icon, focused: focused, clicks: 0}
            })
            this.setState({ icons: visibleIcons })
        }, 2000)
    }

    toggleHideWindow = (event) => {
        let daddyWindow = event.target
        while(daddyWindow.classList.contains('os-window') === false) {
            if(!daddyWindow.parentElement) {
                console.error('Could not find parent window. Contact developer.')
                return;
            }
            daddyWindow = daddyWindow.parentElement
        }
        let windowIndex = parseInt(daddyWindow.id.replace('window-', ''))
        let visibleWindows = this.state.windows
        visibleWindows.forEach((window, index) => {
            if (index === windowIndex) {
                visibleWindows[index] = { ...window, closed: true}
                this.setState({ windows: visibleWindows })
                return
            }
        });
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            250
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            anyMobileDevice: window.matchMedia("(max-width: 412px)").matches
        })
    }

}
export default Desktop;

