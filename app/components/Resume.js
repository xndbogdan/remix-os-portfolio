import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

class Resume extends React.Component {
    render() {
        return (
            <div>
                <a className='flex flex-row items-center mt-2 cursor-point' onMouseDown={this.saveToFile}>
                    <img src='/img/floppy.svg' alt='Save to file' className='w-6 h-6'/> <span className='text-blue-600 hover:text-blue-700 cursor-pointer ml-2 font-bold'>Save to file</span>
                </a> 
                <div id='resume-content'>
                    <h1 className='text-2xl mb-2 mt-4'>Contact Information</h1>
                    <p><span className='font-bold'>Personal Website: </span><a className='text-blue-600' target="_blank" href="https://remixos.dev">remixos.dev</a></p>
                    <p><span className='font-bold'>Phone Number: </span><a className='text-blue-600' target="_blank" href="tel:+40723400149">+40723400149</a></p>
                    <p><span className='font-bold'>E-Mail: </span><a className='text-blue-600' target="_blank" href="mailto:bogdan.mosteanu@hey.com">bogdan.mosteanu@hey.com</a></p>

                    <h1 className='text-2xl mb-2 mt-4'>Presentation</h1>
                    <p>I'm Bogdan, an independent Full-Stack Developer from Bucharest.</p>
                    <p className='mt-1'>Most of my projects were made using Laravel, Vue and Tailwind.</p>
                    <p>I've also worked with Python (Cli apps & Flask apps) and Node (Express). I'm okay any tech stack, as long as it makes sense and it's supported.</p>
                    <p className='mt-1'>I want to build clean codebases that are easy to extend and work with.</p>
                    <p>I'm also a big fan of open-source software and I try to contribute to the community when I have the time.</p>

                    <p className='mt-2'>In my free time, I like making music and goofy projects.</p>
                    <p>I'm into Sci-Fi movies, video games, and dream of the 90's.</p>
                    
                    <img id='ship' className="my-2" src="/img/ship.gif"/>

                    <h1 className="text-2xl mb-2 mt-4">Work experience</h1>
                    
                    <p className="mt-2"><span className="text-blue-700">► Independent Contractor / Freelancer</span> (Nov 2019 - Present day)</p>
                    <p>Switched to contracting to enjoy the freedom of remote work and a larger variety of projects.</p>
                    <p className="mt-1">Tech stack typically used: Laravel, Vue, Tailwindcss, Inertia.js, Elastic Search, Alpine, Websockets, Amazon SES, SNS, S3, Cloudfront.</p>
                    
                    <p>Some of the I did included:</p>
                    <p>- Full Stack Development of new projects</p>
                    <p>- Integerations with various providers/apis including payment providers.</p>
                    <p>- Upgrading older php5.6 & laravel 5 apps to laravel 8/9</p>
                    <p>- New feature implementations & bugfixes, depending on the client's needs</p>
                    <p>- Came up with solutions that worked better for the client and their customers</p>
                    <p>- Helped junior devs understand the tech stack and get better at their job</p>

                    <p className="mt-2"><span className="text-blue-700">► Full Stack Web Developer</span> at <a href="http://artgames.ro/" target="_blank">Art Games</a> (Jul 2018 - Oct 2019)</p>
                    <p>Worked on many internal projects, including <a target="_blank" href="https://artmark.ro">Artmark.ro</a>, and <a target="_blank" href="https://artsafari.ro">Artsafari.ro</a> and <a target="_blank" href="https://www.sothebysrealty.ro/">Sotheby's Realty Romania</a> .</p>
                    <p>Started working on Artmark since it's beginning, to the end. Worked solo on many internal projects.</p>
                    <p>Gained valuable experience with Laravel, Laravel Nova (also building Resource Tools), Laravel Scout, Vue.js, Vuex, Websockets, AWS services and Elasticsearch.</p>

                    <p className="mt-2"><span className="text-blue-700"> ► Junior Web Developer</span> at <a href="https://machteamsoft.ro/" target="_blank">Machteamsoft</a> (Apr 2018 - Jul 2018)</p>
                    <p>Worked in a small team, as a junior developer, on an in-house project, <a href="https://www.sentimente.ro/" target="_blank">Sentimente.ro</a>, a dating platform similar to Tinder.</p>
                    <p>Learned the basics of PHP and Symfony framework.</p>

                    <p><span className="text-blue-700">► .Net Backend Developer</span> at <a href="https://www.exesoftware.ro/ro" target="_blank">EXE Software</a> (Apr 2017 - Sep 2017)</p>
                    <p>Worked full time, prior to my first year at university, in a professional, medium sized team.</p>
                    <p>Learned to manage a fast-paced workflow, delivering features for important clients like L'Oreal and Rail Cargo Group</p>

                    <h1 className="text-2xl mb-2 mt-4">Projects</h1>
                    <p className="mb-2 text-red-600">Note: The list of projects is longer but not all can be mentioned due to NDAs or due to the projects not being public yet. Most of my private projects are made using Laravel and Vue.js</p>
                    <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://github.com/xndbogdan/statamic-bard-text-color">► Bard Text Color</a> - Statamic Framework Plugin</p>
                    <a target="_blank" href="https://packagist.org/packages/xndbogdan/statamic-bard-text-color" rel="nofollow">
                        <LazyLoadImage className="my-1" src="/img/bard-text-color.svg" alt="Total Downloads" />
                    </a>
                    <p>This is a statamic bard plugin that lets you change text color! It allows you to use the default tailwind palette, but you can also add your own. At the moment it's still under development, so please report any bugs that you encounter. New feature suggestions are welcomed too.</p>
                    
                    <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://voice.ai/">► Voice AI</a> - App & Website</p>
                    <p className="mt-2">Part of the main development team for the website & desktop app. This is an AI-powered voice changer that makes you sound like various celebrities.</p>

                    <p className="mt-2 mb-1"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://www.artmark.ro/">► A10 by Artmark</a> - Website</p>
                    <span className="text-xs rounded-md py-1 px-2">~70k visits per month</span>
                    <p className='mt-1'>Live auctions website, built with Laravel and Vue. Also used angular & express.js for development of internal auction management tools.</p>
                    <p>I was part of the main development team that built the website from scratch, tasked with implementing features and fixing bugs.</p>

                    <p className="mt-2 mb-1"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://www.artsafari.ro/">► Art Safari</a> - Website</p>
                    <span className="text-xs rounded-md py-1 px-2">~70k visits per month</span>
                    <p className='mt-1'>Two websites made for the Art Safari event, <a target="_blank" className="text-blue-700 hover:text-blue-700" href="https://www.artsafari.ro/">artsafari.ro</a> and <a target="_blank" className="text-blue-700 hover:text-blue-700" href="https://tickets.artsafari.ro/">tickets.artsafari.ro</a>. Built with Laravel and Wordpress</p>
                    <p>Art Safari is an art exhibition event, under the patronage of Romania's Ministry of Culture.</p>
                    <p>I was part of the team that migrated the project from laravel 5.4 to laravel 7</p>

                    <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://www.sothebysrealty.ro/">► Sotheby's Realty Romania</a> - Website</p>
                    <p className="mt-2">This is a realty ecommerce platform. Built with Laravel and Vue.js.</p>
                    <p>I was part of the main development team that built the website from scratch, tasked with implementing features and fixing bugs.</p>

                    <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://demo.oxplay.com/">► Oxplay</a> - Website</p>
                    <p>White-label gaming platform built with Nuxt, Laravel and Lumen frameworks.</p>
                    <p>I was part of the main development team that built the website from scratch, tasked with implementing features and fixing bugs.</p>
                    <p>The API was migrated from php5.6 to lumen 8, a two year long endeavour.</p>

                    <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://github.com/xndbogdan/laravel-ray-legacy">► Laravel Ray Legacy</a> - Laravel Plugin</p>
                    <a href="https://packagist.org/packages/xndbogdan/laravel-ray-legacy" rel="nofollow">
                        <LazyLoadImage className="my-1" src="/img/ray.svg" alt="Total Downloads" />
                    </a>
                    <p>This package can be installed in any PHP application to send messages to the Ray app. It was modified to work with older laravel installations.<br />It was tested on 5.6 but may work with even lower versions.</p>
                </div>
            </div>
        );
    }
    saveToFile = () => {
        const doc = new jsPDF('p', 'pt', 'a3');
        const resumeContent = document.getElementById('resume-content')
        const shipImage = document.getElementById('ship')
        resumeContent.style.width = '1000px'
        resumeContent.style.height = '5000px'
        shipImage.style.display = 'none'

        html2canvas(resumeContent, {
            removeContainer: false,
            useCORS: false,
            allowTaint: false,
            height: 3000,
        }).then(canvas => {
                console.log('rendered')
                var imgData = canvas.toDataURL('image/png');
                doc.addImage(imgData, 'PNG', 15, 0);
                doc.save('resume.pdf');
                setTimeout(() => {
                    resumeContent.style.width = null
                    resumeContent.style.height = null
                    shipImage.style.display = null
                }, 50)
                
        })
    }
}
export default Resume;