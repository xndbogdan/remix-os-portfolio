import { LazyLoadImage } from 'react-lazy-load-image-component';

const Projects = () => {
  return (
    <div className="bg-white p-2 overflow-y-auto border border-black text-sm max-h-80 select-full">
      <p className="text-lg mb-2">Projects</p>
      <p className="mb-2 text-red-600">Note: The list of projects is longer but not all can be mentioned due to NDAs or due to the projects not being public yet. Most of my private projects are made using Laravel and Vue.js</p>
      <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://github.com/xndbogdan/statamic-bard-text-color">• Bard Text Color</a> - Statamic Framework Plugin</p>
      <a target="_blank" href="https://packagist.org/packages/xndbogdan/statamic-bard-text-color" rel="nofollow">
        <LazyLoadImage className="my-1" src="https://camo.githubusercontent.com/24a62dc163252f3a80f5299c2a597f396673facac5f5aae9b775da728ff51b14/68747470733a2f2f696d672e736869656c64732e696f2f7061636b61676973742f64742f786e64626f6764616e2f73746174616d69632d626172642d746578742d636f6c6f722e737667" alt="Total Downloads" />
      </a>
      <p>This is a statamic bard plugin that lets you change text color! It allows you to use the default tailwind palette, but you can also add your own. At the moment it's still under development, so please report any bugs that you encounter. New feature suggestions are welcomed too.</p>

      <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://www.artmark.ro/">• A10 by Artmark</a> - Website</p>
      <div className="my-1">
        <a className="bg-gray-700 text-xs rounded-md p-1 text-white">~70k visits per month</a>
      </div>
      <p>Live auctions website, built with Laravel and Vue. Also used angular & express.js for development of internal auction management tools.</p>

      <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://www.artsafari.ro/">• Art Safari</a> - Website</p>
      <div className="my-1">
        <a className="bg-gray-700 text-xs rounded-md p-1 text-white">~70k visits per month</a>
      </div>
      <p>Two websites made for the Art Safari event, <a target="_blank" className="text-blue-700 hover:text-blue-700" href="https://www.artsafari.ro/">artsafari.ro</a> and <a target="_blank" className="text-blue-700 hover:text-blue-700" href="https://tickets.artsafari.ro/">tickets.artsafari.ro</a>. Built with Laravel and Wordpress</p>
      <p>Art Safari is an art exhibition event, under the patronage of Romania's Ministry of Culture.</p>

      <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://www.sothebysrealty.ro/">• Sotheby's Realty Romania</a> - Website</p>
      <p className="mt-2">This is a realty ecommerce platform. Built with Laravel and Vue.js.</p>

      <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://demo.oxplay.com/">• Oxplay</a> - Website</p>
      <p>White-label gaming platform built with Nuxt, Laravel and Lumen frameworks.</p>

      <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://github.com/xndbogdan/laravel-ray-legacy">• Laravel Ray Legacy</a> - Laravel Plugin</p>
      <a href="https://packagist.org/packages/xndbogdan/laravel-ray-legacy" rel="nofollow">
        <LazyLoadImage className="my-1" src="https://camo.githubusercontent.com/6debe83b1f16d95acccf7a553db2591245d3556fcecb01af87903bc03cabdd09/687474703a2f2f706f7365722e707567782e6f72672f786e64626f6764616e2f6c61726176656c2d7261792d6c65676163792f646f776e6c6f616473" alt="Total Downloads" />
      </a>
      <p>This package can be installed in any PHP application to send messages to the Ray app. It was modified to work with older laravel installations.<br />It was tested on 5.6 but may work with even lower versions.</p>
    </div>
  );
};
export default Projects;