import React from 'react';
import Draggable from 'react-draggable';
import MusicPlayer from '~/components/MusicPlayer';
import Collaborate from '~/components/Collaborate';
import Clock from '~/components/Clock';
import Calendar from '~/components/Calendar';
import Resume from '~/components/Resume';
import Projects from '~/components/Projects';


class Desktop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windows: [
                { focused: false, closed: false},
                { focused: false, closed: false},
                { focused: false, closed: false},
                { focused: false, closed: false},
                { focused: false, closed: false},
                { focused: false, closed: false},
                { focused: false, closed: false},
            ],
            resumeTab: 0,
        };
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
                        <img className="inline ml-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAAHElEQVQImWNkYGD4z4AGQIIggCwBE0OSYGBgAABmWAMBPlQzgwAAAABJRU5ErkJggg==" height="3" width="auto"></img>
                    </div>
                    <div className="flex-1 py-1"></div>
                    <div className="text-xs border-l border-black pl-2 py-1 sm:pr-2"><Clock /></div>
                    <div className="text-xs border-l border-black pl-2 py-1 hidden sm:block"><Calendar /></div>
                </div>
                <div className="fixed bottom-0 right-0 text-white p-2 text-sm flex flex-col items-end">
                    <span>Remix OS Alpha Release v0.1</span>
                    <span>Evaluation Copy</span>
                </div>
                <div className="w-screen flex flex-wrap absolute p-2">
                    <div className="w-full">DESKTOP ICONS PLACEHOLDER</div>
                    <div className="w-full flex flex-wrap space-x-4">
                        <Draggable handle=".handle">
                            <div className="w-8 flex flex-col handle">
                                <div className="w-8 h-8 bg-black"></div>
                                <span className="text-xs">APP NAME</span>
                            </div>
                        </Draggable>
                        <Draggable handle=".handle">
                            <div className="w-8 flex flex-col handle">
                                <div className="w-8 h-8 bg-black"></div>
                                <span className="text-xs">APP NAME</span>
                            </div>
                        </Draggable>
                    </div>
                </div>
                <div className="w-screen absolute pointer-events-none z-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center md:justify-between items-start">

                                <Draggable handle=".handle" onMouseDown={this.toggleWindowVisibility}>
                                    <div id='window-0' className="p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto" style={this.state.windows[0].focused ? {zIndex: 99} : {zIndex:1}}>
                                        <div className="flex flex-row items-center pb-1">
                                            <div className="close-btn h-4 w-4 border border-black mr-2 hover:invert hover:bg-white cursor-point"></div>
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
                                            <p className="mt-2">This project was made using Remix.<br/>It's still under development.</p>
                                        </div>
                                    </div>
                                </Draggable>

                                <Draggable handle=".handle" onMouseDown={this.toggleWindowVisibility}>
                                    <div id='window-1' className="p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto" style={this.state.windows[1].focused ? {zIndex: 99} : {zIndex:1}}>
                                        <div className="flex flex-row items-center pb-1">
                                            <div className="close-btn h-4 w-4 border border-black mr-2 hover:invert hover:bg-white cursor-point"></div>
                                            <div className="flex-1 flex handle h-4 items-center">
                                                <div className="flex-1 flex flex-col justify-between cursor-grab h-2">
                                                    <div className="border-t border-black"></div>
                                                    <div className="border-t border-black"></div>
                                                    <div className="border-t border-black"></div>
                                                </div>
                                            </div>
                                            <div className="text-xs ml-2 handle cursor-grab">Remix OS</div>
                                        </div>
                                        <MusicPlayer tracklist={this.props.tracklist} />
                                    </div>
                                </Draggable>

                                <Draggable handle=".handle" onMouseDown={this.toggleWindowVisibility}>
                                    <div id='window-2' className="p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto" style={this.state.windows[2].focused ? {zIndex: 99} : {zIndex:1}}>
                                        <div className="flex flex-row items-center pb-1">
                                            <div className="close-btn h-4 w-4 border border-black mr-2 hover:invert hover:bg-white cursor-point"></div>
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
                                    <div id='window-3' className="p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full max-w-sm pointer-events-auto" style={this.state.windows[3].focused ? {zIndex: 99} : {zIndex:1}}>
                                        <div className="flex flex-row items-center pb-1">
                                            <div className="close-btn h-4 w-4 border border-black mr-2 hover:invert hover:bg-white cursor-point"></div>
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
                                    <div id='window-4' className="p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full mb-16 max-w-sm pointer-events-auto" style={this.state.windows[5].focused ? {zIndex: 99} : {zIndex:1}}>
                                        <div className="flex flex-row items-center pb-1">
                                            <div className="close-btn h-4 w-4 border border-black mr-2 hover:invert hover:bg-white cursor-point"></div>
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
                                    <div id='window-5' className="p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full mb-16 max-w-sm pointer-events-auto" style={this.state.windows[6].focused ? {zIndex: 99} : {zIndex:1}}>
                                        <div className="flex flex-row items-center pb-1">
                                            <div className="close-btn h-4 w-4 border border-black mr-2 hover:invert hover:bg-white cursor-point"></div>
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
                                            <p className="text-lg mb-2">Changelog</p>
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

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
    }

}
export default Desktop;

