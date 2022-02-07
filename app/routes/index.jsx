import Draggable from 'react-draggable';

export default function Index() {
  const currentDateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = new Date()
  return (
    <div className="bg-tile-3 flex-1 min-h-screen font-chicago">
      <div className="w-full border-b border-black px-2 flex flex-row bg-gray-mac">
        <div className="border-r border-black text-xs font-bold pr-2 flex flex-row items-center py-1 cursor-point">
          <span>Remix OS</span>
          <img className="inline ml-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAAHElEQVQImWNkYGD4z4AGQIIggCwBE0OSYGBgAABmWAMBPlQzgwAAAABJRU5ErkJggg==" height="3" width="auto"></img>
        </div>
        <div className="flex-1 py-1"></div>
        <div className="text-xs font-bold border-l border-black pl-2 py-1 sm:pr-2">{currentDate.toLocaleTimeString("en-US")}</div>
        <div className="text-xs font-bold border-l border-black pl-2 py-1 hidden sm:block">{currentDate.toLocaleDateString("en-US", currentDateOptions)}</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Draggable handle=".handle">
            <div className="p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window">
              <div className="flex flex-row items-center pb-1">
                <div className="close-btn h-4 w-4 border border-black mr-2 hover:invert hover:bg-white cursor-point"></div>
                <div className="flex-1 flex flex-col justify-between cursor-grab h-2 handle">
                  <div className="border-t border-black"></div>
                  <div className="border-t border-black"></div>
                  <div className="border-t border-black"></div>
                </div>
                <div className="text-xs ml-2 font-bold">Remix OS</div>
              </div>
              <div className="bg-white p-2 overflow-y-auto border border-black text-sm">
                <p>I'm Bogdan, an independent full-stack developer from Bucharest.</p>
                <p>I'm interested in Laravel, Vue, Tailwind, music production, and goofy projects, like this one.</p>
              </div>
            </div>
          </Draggable>
        </div>
      </div>

      
    </div>

  );
}
