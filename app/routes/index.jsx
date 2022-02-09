import Draggable from 'react-draggable';
import { useLoaderData } from "remix";
import LRUCache from 'lru-cache';
import Clock from '~/components/Clock';
import Calendar from '~/components/Calendar';
import MusicPlayer from '~/components/MusicPlayer';
import Collaborate from '~/components/Collaborate';



export let loader = async () => {
  const options = {
    // the number of most recently used items to keep.
    // note that we may store fewer items than this if maxSize is hit.
    max: 500,
  
    // if you wish to track item size, you must provide a maxSize
    // note that we still will only keep up to max *actual items*,
    // so size tracking may cause fewer than max items to be stored.
    // At the extreme, a single item of maxSize size will cause everything
    // else in the cache to be dropped when it is added.  Use with caution!
    // Note also that size tracking can negatively impact performance,
    // though for most cases, only minimally.
    maxSize: 5000,
  
    // function to calculate size of items.  useful if storing strings or
    // buffers or other items where memory size depends on the object itself.
    // also note that oversized items do NOT immediately get dropped from
    // the cache, though they will cause faster turnover in the storage.
    sizeCalculation: (value, key) => {
      // return an positive integer which is the size of the item,
      // if a positive integer is not returned, will use 0 as the size.
      return 1
    },
  
    // function to call when the item is removed from the cache
    // Note that using this can negatively impact performance.
    dispose: (value, key) => {
      freeFromMemoryOrWhatever(value)
    },
  
    // max time to live for items before they are considered stale
    // note that stale items are NOT preemptively removed by default,
    // and MAY live in the cache, contributing to its LRU max, long after
    // they have expired.
    // Also, as this cache is optimized for LRU/MRU operations, some of
    // the staleness/TTL checks will reduce performance, as they will incur
    // overhead by deleting items.
    // Must be a positive integer in ms, defaults to 0, which means "no TTL"
    ttl: 1000 * 60 * 5,
  
    // return stale items from cache.get() before disposing of them
    // boolean, default false
    allowStale: false,
  
    // update the age of items on cache.get(), renewing their TTL
    // boolean, default false
    updateAgeOnGet: false,
  
    // update the age of items on cache.has(), renewing their TTL
    // boolean, default false
    updateAgeOnHas: false,
  
    // update the "recently-used"-ness of items on cache.has()
    // boolean, default false
    updateRecencyOnHas: false,
  }
  const cache = new LRUCache(options)
  let data = cache.get('tracklist')
  if(!data) {
    data = await fetch('https://api.poolsidefm.workers.dev/v1/get_tracks_by_playlist');
    cache.set('tracklist', data)
  }
  
  // return userTimeline;
  return data;
};

export default function Index() {
  const tracklist = useLoaderData();
  return (
    <div className="bg-tile-3 flex-1 min-h-screen font-chicago">
      <div className="w-full border-b border-black px-2 flex flex-row bg-gray-mac">
        <div className="border-r border-black text-xs font-bold pr-2 flex flex-row items-center py-1 cursor-point">
          <span>Remix OS</span>
          <img className="inline ml-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAADCAYAAABbNsX4AAAAHElEQVQImWNkYGD4z4AGQIIggCwBE0OSYGBgAABmWAMBPlQzgwAAAABJRU5ErkJggg==" height="3" width="auto"></img>
        </div>
        <div className="flex-1 py-1"></div>
        <div className="text-xs font-bold border-l border-black pl-2 py-1 sm:pr-2"><Clock/></div>
        <div className="text-xs font-bold border-l border-black pl-2 py-1 hidden sm:block"><Calendar/></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-between">
          <Draggable handle=".handle">
            <div className="p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full">
              <div className="flex flex-row items-center pb-1">
                <div className="close-btn h-4 w-4 border border-black mr-2 hover:invert hover:bg-white cursor-point"></div>
                <div className="flex-1 flex handle h-4 items-center">
                  <div className="flex-1 flex flex-col justify-between cursor-grab h-2">
                    <div className="border-t border-black"></div>
                    <div className="border-t border-black"></div>
                    <div className="border-t border-black"></div>
                  </div>
                </div>
                <div className="text-xs ml-2 font-bold handle cursor-grab">Remix OS</div>
              </div>
              <div className="bg-white p-2 overflow-y-auto border border-black text-sm">
                <p>I'm Bogdan, an independent full-stack developer from Bucharest.</p>
                <p>I'm interested in Laravel, Vue, Tailwind, music production, and goofy projects, like this one.</p>
              </div>
            </div>
          </Draggable>

          <Draggable handle=".handle">
            <div className="p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full">
              <div className="flex flex-row items-center pb-1">
                <div className="close-btn h-4 w-4 border border-black mr-2 hover:invert hover:bg-white cursor-point"></div>
                <div className="flex-1 flex handle h-4 items-center">
                  <div className="flex-1 flex flex-col justify-between cursor-grab h-2">
                    <div className="border-t border-black"></div>
                    <div className="border-t border-black"></div>
                    <div className="border-t border-black"></div>
                  </div>
                </div>
                <div className="text-xs ml-2 font-bold handle cursor-grab">Remix OS</div>
              </div>
              <MusicPlayer tracklist={tracklist}/>
            </div>
          </Draggable>

          <Draggable handle=".handle">
            <div className="p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window w-full">
              <div className="flex flex-row items-center pb-1">
                <div className="close-btn h-4 w-4 border border-black mr-2 hover:invert hover:bg-white cursor-point"></div>
                <div className="flex-1 flex handle h-4 items-center">
                  <div className="flex-1 flex flex-col justify-between cursor-grab h-2">
                    <div className="border-t border-black"></div>
                    <div className="border-t border-black"></div>
                    <div className="border-t border-black"></div>
                  </div>
                </div>
                <div className="text-xs ml-2 font-bold handle cursor-grab">Remix OS</div>
              </div>
              <div className="p-2 overflow-y-auto bordertext-sm">
                <Collaborate/>
              </div>
            </div>
          </Draggable>
        </div>
      </div>

      
    </div>

  );
}
