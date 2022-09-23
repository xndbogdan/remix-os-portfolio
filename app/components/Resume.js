import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Resume extends React.Component {
    render() {
        return (
            <div className="bg-white p-2 overflow-y-auto max-h-80 border border-black text-sm select-full">
                <p>I'm Bogdan, an independent Full-Stack Developer from Bucharest.</p>
                <p className='mt-1'>Most of my projects were made using Laravel, Vue and Tailwind.</p>
                <p>I've also worked with Python (Cli apps & Flask apps) and Node (Express). I'm okay any tech stack, as long as it makes sense and it's supported.</p>
                <p className='mt-1'>I want to build clean codebases that are easy to extend and work with.</p>
                <p>I'm also a big fan of open-source software and I try to contribute to the community when I have the time.</p>

                <p className='mt-2'>In my free time, I like making music and goofy projects.</p>
                <p>I'm into Sci-Fi movies, video games, and dream of the 90's.</p>
                
                <LazyLoadImage className="my-2" src="/img/ship.gif"/>

                <p className="text-lg mb-2">Projects</p>
                <p className="mb-2 text-red-600">Note: The list of projects is longer but not all can be mentioned due to NDAs or due to the projects not being public yet. Most of my private projects are made using Laravel and Vue.js</p>
                <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://github.com/xndbogdan/statamic-bard-text-color">• Bard Text Color</a> - Statamic Framework Plugin</p>
                <a target="_blank" href="https://packagist.org/packages/xndbogdan/statamic-bard-text-color" rel="nofollow">
                    <LazyLoadImage className="my-1" src="https://camo.githubusercontent.com/24a62dc163252f3a80f5299c2a597f396673facac5f5aae9b775da728ff51b14/68747470733a2f2f696d672e736869656c64732e696f2f7061636b61676973742f64742f786e64626f6764616e2f73746174616d69632d626172642d746578742d636f6c6f722e737667" alt="Total Downloads" />
                </a>
                <p>This is a statamic bard plugin that lets you change text color! It allows you to use the default tailwind palette, but you can also add your own. At the moment it's still under development, so please report any bugs that you encounter. New feature suggestions are welcomed too.</p>

                
                <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://voice.ai/">• Voice AI</a> - App & Website</p>
                <p className="mt-2">Part of the main development team for the website & desktop app. This is an AI-powered voice changer that makes you sound like various celebrities.</p>

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

                <p className="my-2 text-base mt-2">• Work experience</p>
                <p><span className="text-blue-700">.Net Backend Developer</span> at <a href="https://www.exesoftware.ro/ro" target="_blank">EXE Software</a> (Apr 2017 - Sep 2017)</p>
                <p>Worked full time, prior to my first year at university, in a professional, medium sized team.</p>
                <p>Learned to manage a fast-paced workflow, delivering features for important clients like L'Oreal and Rail Cargo Group</p>
            </div>
        );
    }

}
export default Resume;