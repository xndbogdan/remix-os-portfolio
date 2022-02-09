import Draggable from 'react-draggable';
import { useLoaderData } from "remix";
import Clock from '~/components/Clock';
import Calendar from '~/components/Calendar';

export let loader = async () => {
  // // Instanciate with desired auth type (here's Bearer v2 auth)
  // const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAFfpYwEAAAAAJUvhJPJUnhreyXIox%2BlafmhgpEs%3DAiwVShmm21CVUErSrirGwinZXZ7CRdpWpLtk0Nq0N5qvR5cYpb');

  // // Tell typescript it's a readonly app
  // const roClient = twitterClient.readOnly;
  // // Play with the built in methods
  // // const user = await roClient.v2.userByUsername('plhery');
  // const userTimeline = await roClient.v2.userTimeline('956682724751929344', {
  //   expansions: ['attachments.media_keys', 'attachments.poll_ids', 'referenced_tweets.id'],
  //   'media.fields': ['url'],
  // });
  
  // return userTimeline;
  return null;
};

export default function Index() {
  let products = useLoaderData();
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
        <div className="max-w-3xl mx-auto">
          <Draggable handle=".handle">
            <div className="p-1 border border-black mt-4 bg-gray-mac shadow-mac-os os-window">
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
        </div>
      </div>

      
    </div>

  );
}
