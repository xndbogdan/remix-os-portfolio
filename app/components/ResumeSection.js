import React from 'react';
import Resume from './Resume';

class ResumeSection extends React.Component {
    render() {
        return (
          <div className='p-2'>
            <div className='w-full max-h-screen p-1 border border-black pointer-events-auto bg-gray-mac shadow-mac-os os-window'>
                <div className="flex flex-row items-center pb-1 font-chicago">
                    <div className="w-6 h-6 mr-2 border border-black close-btn md:h-4 md:w-4 hover:invert hover:bg-white cursor-point" onMouseDown={this.closeResume}></div>
                    <div className="flex items-center flex-1 h-4 handle">
                        <div className="flex flex-col justify-between flex-1 h-2">
                            <div className="border-t border-black"></div>
                            <div className="border-t border-black"></div>
                            <div className="border-t border-black"></div>
                        </div>
                    </div>
                    <div className="ml-2 text-xs handle">Remix OS</div>
                </div>
                <div className='overflow-y-auto' style={{maxHeight:"95vh"}}>
                  <div className="py-2 px-4 overflow-y-auto text-sm bg-white select-full">
                    <Resume></Resume>
                  </div>
                  <div className='pb-32 sm:hidden bg-white'>&nbsp;</div>
                </div>
            </div>
        </div>
        );
    }

    closeResume = () => {
        window.close()
    }
}
export default ResumeSection;