import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
                  <div className="p-2 overflow-y-auto text-sm bg-white select-full">
                    <h1 className="mb-2 text-lg font-bold">About me</h1>
                    <p >I'm Bogdan, an independent full-stack developer from Bucharest.</p>
                    <p>Most of my projects were made using Laravel, Vue and Tailwind.</p>
                    <p>I like making music and goofy projects, like this one.</p>
                    <p>I'm into Sci-Fi movies, video games, and dream of the 90's.</p>
                    <LazyLoadImage className="my-2" src="/img/ship.gif"/>
      
                    <p className="my-2 text-lg font-bold">Projects</p>
                    <p className="mb-2 text-red-600">Note: The list of projects is longer but not all can be mentioned due to NDAs or due to the projects not being public yet. Most of my private projects are made using Laravel and Vue.js</p>
                    <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://github.com/xndbogdan/statamic-bard-text-color">• Bard Text Color</a> - Statamic Framework Plugin</p>
                    <a target="_blank" href="https://packagist.org/packages/xndbogdan/statamic-bard-text-color" rel="nofollow">
                        <LazyLoadImage className="my-1" src="https://camo.githubusercontent.com/24a62dc163252f3a80f5299c2a597f396673facac5f5aae9b775da728ff51b14/68747470733a2f2f696d672e736869656c64732e696f2f7061636b61676973742f64742f786e64626f6764616e2f73746174616d69632d626172642d746578742d636f6c6f722e737667" alt="Total Downloads" />
                    </a>
                    <p>This is an open source, free to use statamic bard plugin that lets you change text color! <br/>It allows you to use the default tailwind palette, but you can also add your own. <br/>At the moment it's still under development, so please report any bugs that you encounter.<br/>New feature suggestions are welcomed too.</p>
      
                    <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://www.artmark.ro/">• A10 by Artmark</a> - Website</p>
                    <div className="my-1">
                        <a className="p-1 text-xs text-white bg-gray-700 rounded-md">~70k visits per month</a>
                    </div>
                    <p>Live auctions website, built with Laravel and Vue.<br/>Also used angular & express.js for development of internal auction management tools.</p>
                    <p>I was part of the main development team on this project, and I got tasks relating to both the front-end and the back-end.</p>
      
                    <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://www.artsafari.ro/">• Art Safari</a> - Website</p>
                    <div className="my-1">
                        <a className="p-1 text-xs text-white bg-gray-700 rounded-md">~70k visits per month</a>
                    </div>
                    <p>Two websites made for the Art Safari event, <a target="_blank" className="text-blue-700 hover:text-blue-700" href="https://www.artsafari.ro/">artsafari.ro</a> and <a target="_blank" className="text-blue-700 hover:text-blue-700" href="https://tickets.artsafari.ro/">tickets.artsafari.ro</a>. Built with Laravel and Wordpress</p>
                    <p>Art Safari is an art exhibition event, under the patronage of Romania's Ministry of Culture.</p>
                    <p>I was part of the main development team on this project, and was also tasked with upgrading it from laravel 5.5 to 7, at the time.</p>
      
                    <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://www.sothebysrealty.ro/">• Sotheby's Realty Romania</a> - Website</p>
                    <p className="mt-2">This is a realty ecommerce platform. Built with Laravel and Vue.js.</p>
                    <p>I was part of the main development team on this project, and I got tasks relating to both the front-end and the back-end.</p>
                    <p>I was also tasked with implementing elastic search functionality.</p>
      
                    <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://demo.oxplay.com/">• Oxplay</a> - Website</p>
                    <p>White-label gaming platform built with Nuxt, Laravel and Lumen frameworks.</p>
                    <p>Part of the main development team, tasked with upgrading some components of the project from php 5.6 to laravel 8 & 9.</p>
      
                    <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://github.com/xndbogdan/laravel-ray-legacy">• Laravel Ray Legacy</a> - Laravel Plugin</p>
                    <a href="https://packagist.org/packages/xndbogdan/laravel-ray-legacy" rel="nofollow">
                        <LazyLoadImage className="my-1" src="https://camo.githubusercontent.com/6debe83b1f16d95acccf7a553db2591245d3556fcecb01af87903bc03cabdd09/687474703a2f2f706f7365722e707567782e6f72672f786e64626f6764616e2f6c61726176656c2d7261792d6c65676163792f646f776e6c6f616473" alt="Total Downloads" />
                    </a>
                    <p>This package can be installed in any PHP application to send messages to the Ray app. It was modified to work with older laravel installations.<br />It was tested on 5.6 but may work with even lower versions.</p>
                    <p>This is an open soruce, free to use fork of Ray, so that developers using laravel 5.6 can use ray for logging. The original package was made only for laravel 7 and up.</p>
                  </div>
      
                  <div className="p-2 overflow-y-auto text-sm bg-white select-full">
                    <h1 className="mb-2 text-lg font-bold">Work History</h1>
      
                    <p className="mb-2 text-base">• Work experience</p>
                    <p className="mt-2"><span className="text-blue-700">Independent Contractor</span> (Nov 2019 - Present day)</p>
                    <p>Switched to contracting to enjoy the freedom of remote work and a larger variety of projects.</p>
                    <p className="mt-1">Tech stack typically used: Laravel, Vue, Tailwindcss, Elastic Search, Alpine, Websockets, Amazon SES, SNS, S3, Cloudfront.</p>
      
                    <p>Some of the work I did included:</p>
                    <p>- Integerations with various providers/apis including payment providers.</p>
                    <p>- Reworking/upgrading older php5.6 & laravel 5 apps to laravel 8/9</p>
                    <p>- New feature implementations & bugfixes, depending on the client's needs</p>
                    <p>- Came up with solutions that worked better for the client and their customers</p>
                    <p>- Helped junior devs understand the tech stack and get better at their job</p>
      
                    <p className="mt-2"><span className="text-blue-700">Full Stack Web Developer</span> at <a href="http://artgames.ro/" target="_blank">Art Games</a> (Jul 2018 - Oct 2019)</p>
                    <p>Worked on many internal projects, including <a target="_blank" href="https://artmark.ro">Artmark.ro</a>, and <a target="_blank" href="https://artsafari.ro">Artsafari.ro</a> and <a target="_blank" href="https://www.sothebysrealty.ro/">Sotheby's Realty Romania</a> .</p>
                    <p>Started working on Artmark since it's beginning, to the end. Worked solo on many internal projects.</p>
                    <p>Gained valuable experience with Laravel, Laravel Nova (also building Resource Tools), Laravel Scout, Vue.js, Vuex, Websockets, AWS services and Elasticsearch.</p>
      
                    <p className="mt-2"><span className="text-blue-700">Junior Web Developer</span> at <a href="https://machteamsoft.ro/" target="_blank">Machteamsoft</a> (Apr 2018 - Jul 2018)</p>
                    <p>Worked in a small team, as a junior developer, on an in-house project, <a href="https://www.sentimente.ro/" target="_blank">Sentimente.ro</a>, a dating platform similar to Tinder.</p>
                    <p>Learned the basics of PHP and Symfony framework.</p>
      
                    <p className="my-2 mt-2 text-base">• Work experience</p>
                    <p><span className="text-blue-700">.Net Backend Developer</span> at <a href="https://www.exesoftware.ro/ro" target="_blank">EXE Software</a> (Apr 2017 - Sep 2017)</p>
                    <p>Worked full time, prior to my first year at university, in a professional, medium sized team.</p>
                    <p>Learned to manage a fast-paced workflow, delivering features for important clients like L'Oreal and Rail Cargo Group</p>
                  </div>
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