import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Resume extends React.Component {
    render() {
        return (
            <div className="bg-white p-2 overflow-y-auto max-h-80 border border-black text-sm select-full">
                <h1 className="text-lg mb-2">Resume</h1>

                <p className="mb-2 text-base">• About me</p>
                <p >I'm Bogdan, an independent full-stack developer from Bucharest.</p>
                <p>Most of my projects were made using Laravel, Vue and Tailwind.</p>
                <p>I like making music and goofy projects, like this one.</p>
                <p>I'm into Sci-Fi movies, video games, and dream of the 90's.</p>
                <LazyLoadImage className="my-2" src="/img/ship.gif"/>
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