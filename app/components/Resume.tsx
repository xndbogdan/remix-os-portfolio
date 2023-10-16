import pkg from 'react-lazy-load-image-component';
const { LazyLoadImage } = pkg;

export const Resume = () => {
  return (
    <div>
      <div id='resume-content'>
        <h1 className='text-2xl mb-2 mt-4'>Contact Information</h1>
        <p><span className='font-bold'>Personal Website: </span><a className='text-blue-600' target="_blank" href="https://remixos.dev" rel="noreferrer">remixos.dev</a></p>
        <p><span className='font-bold'>Phone Number: </span><a className='text-blue-600' target="_blank" href="tel:+40723400149" rel="noreferrer">+40723400149</a></p>
        <p><span className='font-bold'>E-Mail: </span><a className='text-blue-600' target="_blank" href="mailto:bogdan.mosteanu@hey.com" rel="noreferrer">bogdan.mosteanu@hey.com</a></p>
        <p><span className='font-bold'>Name: </span>Bogdan-Mihai Moșteanu</p>

        <h1 className='text-2xl mb-2 mt-4'>Overview</h1>
        <p>I'm Bogdan, a Full-Stack Developer & hobbyist composer from Bucharest.</p>
        <p className='mt-1'>I want to build clean codebases that are easy to extend and work with.</p>
        <p>I'm also a big fan of open-source software and I try to contribute to the community when I have the time.</p>

        <p className='mt-2'>In my free time, I like making music and goofy projects.</p>
        <p>I'm into Sci-Fi movies, video games, and dream of the 90's.</p>

        <img id='ship' className="my-2" src="/img/ship.gif" alt="Ship" />

        <h1 className="text-2xl mb-2 mt-4">Contract experience</h1>

        <p className="mt-2"><span className="text-blue-700">► Independent Contractor / Freelancer</span> (Nov 2019 - Present day)</p>
        <p>Switched to contracting to enjoy the freedom of remote work and a larger variety of projects.</p>
        <p className="mt-1">Tech stack typically used: Laravel, Vue, Tailwindcss, Inertia.js, Elastic Search, Alpine, Websockets, Amazon SES, SNS, S3, Cloudfront.</p>

        <p className='mt-2 text-xl'>Collaboration history:</p>
        <div className="flex flex-col px-4 pb-4">
          <div className='mt-4'>
            <a className='text-blue-700 hover:text-blue-600' href='https://www.reelcrafter.com/' target='_blank' rel="noreferrer">→ ReelCrafter</a>
            <p className='whitespace-pre-wrap mt-2'>
              ReelCrafter is a platform that allows users to create tailored reels to showcase their music, offering a unique and engaging way to showcase their work.<br/>
              Working as a Full Stack Developer at ReelCrafter, I have had the opportunity to work closely with the CEO to develop new features and fix bugs, making this collaboration by far the best I have had so far.<br/> 
              My main responsibilities include implementing features, fixing bugs, and coming up with ways to solve issues experienced by ReelCrafter's users.<br/>
              One of the most exciting aspects of this role has been my involvement in re-making part of the project with Vue3 & GraphQL and the opportunity to work with a bunch of technologies for the first time.<br/> 
              This has allowed me to expand my skillset and contribute to the ongoing success of the platform.
            </p>
            <p className='mt-4'><span className='font-bold'>Tech Stack:</span> SST · AWS Lambda · MySQL · GraphQL · TypeScript · Amazon Web Services (AWS) · Node.js · JavaScript</p>
          </div>
          <div className='mt-4'>
            <a className='text-blue-700 hover:text-blue-600' href='https://voice.ai/' target='_blank' rel="noreferrer">→ Voice.ai</a>
            <p className='whitespace-pre-wrap mt-2'>
              Contributed to the Voice.AI application by developing various features on the Frontend/Backend related to user interaction & user features.<br/>
              Got some hands-on experience with vuetify & desktop app development.<br/> 
            </p>
            <p className='mt-4'><span className='font-bold'>Tech Stack:</span> MySQL · Vuetify · Electron.js · Laravel · Vue.js · Laravel Nova</p>
          </div>
          <div className='mt-4'>
            <a className='text-blue-700 hover:text-blue-600' href='https://www.quest-global.com/' target='_blank' rel="noreferrer">→ Quest Global</a>
            <p className='whitespace-pre-wrap mt-2'>
              At Quest Global, I had the opportunity to work on a social media platform project (details of which are confidential due to NDA) as part of a team, utilizing React.js, Neo4j, and Laravel.
              Although React.js and Neo4j were new to me, I was able to quickly adapt and contribute to the project's success.<br/>
              The project allowed me some flexibility in suggesting new technologies and approaches, which helped me develop my skills and enhance the platform's functionality. 
              Working collaboratively with the team and the client, we were able to deliver a high-quality product that met their specific needs and specifications.<br/> 
              Through this experience, I was able to improve my communication, project management, and team collaboration skills, as well as gain a deeper understanding of software development principles and best practices.<br/>
              Gained valuable experience in the corporate environment.
            </p>
            <p className='mt-4'><span className='font-bold'>Tech Stack:</span> MySQL · SCSS · React.js · Neo4j · Laravel</p>
          </div>
          <div className='mt-4'>
            <a className='text-blue-700 hover:text-blue-600' href='https://www.webfusion.ro/' target='_blank' rel="noreferrer">→ WEBFUSION</a>
            <div className='whitespace-pre-wrap mt-2'>
              <p>Some of the I did included:</p>
              <p>- Full Stack Development of new projects</p>
              <p>- Integerations with various providers/apis including payment providers.</p>
              <p>- Upgrading older php5.6 & laravel 5 apps to laravel 8/9</p>
              <p>- New feature implementations & bugfixes, depending on the client's needs</p>
              <p>- Came up with solutions that worked better for the client and their customers</p>
              <p>- Helped junior devs understand the tech stack and get better at their job</p>
              <p>- Worked on a few projects solo, from start to finish</p>
            </div>
            <p className='mt-4'><span className='font-bold'>Tech Stack:</span> MySQL · Inertia.js · Elasticsearch · Laravel · Vue.js · PHP · Tailwind CSS</p>
          </div>
          <div className='mt-4'>
            <a className='text-blue-700 hover:text-blue-600' href='https://boostit.com/' target='_blank' rel="noreferrer">→ BoostIT HUB</a>
            <p className='whitespace-pre-wrap mt-2'>
              During my time at BoostIT Hub as a software developer, I had the opportunity to work on the CryptoCoin Pro project, a crypto exchange platform. Throughout the contract period I utilized my expertise in Laravel and Vue.js to deliver high-quality software solutions.<br/>
              As instructed by my project manager, I was responsible for identifying and fixing bugs, as well as implementing new features to enhance the functionality of the platform. Working collaboratively with my team members.<br/>
              My experience at BoostIT Hub allowed me to further develop my skills in Laravel and Vue.js, as well as gain a deeper understanding of software development principles and best practices.
            </p>
            <p className='mt-4'><span className='font-bold'>Tech Stack:</span> MySQL · Laravel · Vue.js</p>
          </div>
          <div className='mt-4'>
            <a className='text-blue-700 hover:text-blue-600' href='http://dawn.ro/' target='_blank' rel="noreferrer">→ Dawn Consulting Group</a>
            <p className='whitespace-pre-wrap mt-2'>
              Dawn Consulting is a technology consulting firm that specializes in providing custom software development solutions to businesses across various industries. As a software developer at Dawn Consulting, my primary responsibility was to develop and implement software solutions for the company's clients using a variety of programming languages and frameworks.<br/>
              Specifically, in my role at Dawn Consulting, I have worked on various projects for the company's clients, utilizing my expertise in Express.js, Python, Node.js, Laravel, and JavaScript. I have worked closely with the company's CEO to understand client requirements and develop new features for their applications.<br/>
            </p>
            <p className='mt-4'><span className='font-bold'>Tech Stack:</span> MySQL · Express.js · Python (Programming Language) · Node.js · Laravel · JavaScript</p>
          </div>
          <div className='mt-4'>
            <a className='text-blue-700 hover:text-blue-600' href='https://artgames.ro/' target='_blank' rel="noreferrer">→ ART GAMES</a>
            <div className='whitespace-pre-wrap mt-2'>
              Some of the work I did included:
              <p>- Develop Wordpress presentation websites for the company's clients.</p>
              <p>- Integrations with various providers/apis including payment providers.</p>
              <p>- Reworking/upgrading older laravel 5 apps to laravel 8/9</p>
              <p>- New feature implementations & bugfixes, depending on the client's needs</p>
              <p>- Elasticsearch implementation where database queries were not the best solution</p>
              <p>- Speed optimisations on endpoints where response time was critical</p>
              <p>- Came up with solutions that worked better for the client and their customers</p>
              <p>- Helped junior devs understand the tech stack and get better at their job</p>
              <p>- Worked solo on projects from start to finish</p>
              <p>- Part of the main development team for major projects like Artmark, Sotheby's Romania</p>
              <p>- Part of the main development team for a project with a banking partner (cannot give details due to nda)</p>
            </div>
            <p className='mt-4'><span className='font-bold'>Tech Stack:</span> Webrtc · MySQL · Inertia.js · Elasticsearch · WebSocket · Laravel · Vue.js · PHP · WordPress · Tailwind CSS</p>
          </div>
        </div>

        <h1 className="text-2xl mb-2 mt-4">Work experience</h1>
        <p className="mt-2"><span className="text-blue-700">► Full Stack Web Developer</span> at <a href="http://artgames.ro/" target="_blank" rel="noreferrer">Art Games</a> (Jul 2018 - Oct 2019)</p>
        <p>Worked on many internal projects, including <a target="_blank" href="https://artmark.ro" rel="noreferrer">Artmark.ro</a>, and <a target="_blank" href="https://artsafari.ro" rel="noreferrer">Artsafari.ro</a> and <a target="_blank" href="https://www.sothebysrealty.ro/" rel="noreferrer">Sotheby's Realty Romania</a> .</p>
        <p>Started working on Artmark since it's beginning, to the end. Worked solo on many internal projects.</p>
        <p>Gained valuable experience with Laravel, Laravel Nova (also building Resource Tools), Laravel Scout, Vue.js, Vuex, Websockets, AWS services and Elasticsearch.</p>

        <p className="mt-2"><span className="text-blue-700"> ► Junior Web Developer</span> at <a href="https://machteamsoft.ro/" target="_blank" rel="noreferrer">Machteamsoft</a> (Apr 2018 - Jul 2018)</p>
        <p>Worked in a small team, as a junior developer, on an in-house project, <a href="https://www.sentimente.ro/" target="_blank" rel="noreferrer">Sentimente.ro</a>, a dating platform similar to Tinder.</p>
        <p>Learned the basics of PHP and Symfony framework.</p>

        <p><span className="text-blue-700">► .Net Backend Developer</span> at <a href="https://www.exesoftware.ro/ro" target="_blank" rel="noreferrer">EXE Software</a> (Apr 2017 - Sep 2017)</p>
        <p>Worked full time, prior to my first year at university, in a professional, medium sized team.</p>
        <p>Learned to manage a fast-paced workflow, delivering features for important clients like L'Oreal and Rail Cargo Group</p>

        <h1 className="text-2xl mb-2 mt-4">Projects</h1>
        <p className="mb-2 text-red-600">Note: The list of projects is longer but not all can be mentioned due to NDAs or due to the projects not being public yet.</p>
        <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://github.com/xndbogdan/statamic-bard-text-color" rel="noreferrer">► Bard Text Color</a> - Statamic Framework Plugin</p>
        <a target="_blank" href="https://packagist.org/packages/xndbogdan/statamic-bard-text-color" rel="nofollow noreferrer">
          <LazyLoadImage className="my-1" src="https://img.shields.io/packagist/dt/xndbogdan/statamic-bard-text-color.svg" alt="Total Downloads" />
        </a>
        <p>This is a statamic bard plugin that lets you change text color!<br/>It allows you to use the default tailwind palette, but you can also add your own.<br/>It is under active development. New feature suggestions are welcomed.</p>

        <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://voice.ai/" rel="noreferrer">► Voice AI</a> - App & Website</p>
        <p className="mt-2">Part of the main development team for the website & desktop app.<br/>This is an AI-powered voice changer that makes you sound like various celebrities.</p>

        <p className="mt-2 mb-1"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://www.artmark.ro/" rel="noreferrer">► A10 by Artmark</a> - Website</p>
        <span className="text-xs rounded-md py-1 px-2">~70k visits per month</span>
        <p className='mt-1'>Live auctions website, built with Laravel and Vue. Also used angular & express.js for development of internal auction management tools.</p>
        <p>I was part of the main development team that built the website from scratch, tasked with implementing features and fixing bugs.</p>

        <p className="mt-2 mb-1"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://www.artsafari.ro/" rel="noreferrer">► Art Safari</a> - Website</p>
        <span className="text-xs rounded-md py-1 px-2">~70k visits per month</span>
        <p className='mt-1'>Two websites made for the Art Safari event, <a target="_blank" className="text-blue-700 hover:text-blue-700" href="https://www.artsafari.ro/" rel="noreferrer">artsafari.ro</a> and <a target="_blank" className="text-blue-700 hover:text-blue-700" href="https://tickets.artsafari.ro/" rel="noreferrer">tickets.artsafari.ro</a>. Built with Laravel and Wordpress</p>
        <p>Art Safari is an art exhibition event, under the patronage of Romania's Ministry of Culture.</p>
        <p>I was part of the team that migrated the project from laravel 5.4 to laravel 7</p>

        <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://www.sothebysrealty.ro/" rel="noreferrer">► Sotheby's Realty Romania</a> - Website</p>
        <p className="mt-2">This is a realty ecommerce platform. Built with Laravel and Vue.js.</p>
        <p>I was part of the main development team that built the website from scratch, tasked with implementing features and fixing bugs.</p>

        <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://demo.oxplay.com/" rel="noreferrer">► Oxplay</a> - Website</p>
        <p>White-label gaming platform built with Nuxt, Laravel and Lumen frameworks.</p>
        <p>I was part of the main development team that built the website from scratch, tasked with implementing features and fixing bugs.</p>
        <p>The API was migrated from php5.6 to lumen 8, a two year long endeavour.</p>

        <p className="mt-2"><a className="text-blue-700 hover:text-blue-700" target="_blank" href="https://github.com/xndbogdan/laravel-ray-legacy" rel="noreferrer">► Laravel Ray Legacy</a> - Laravel Plugin</p>
        <a href="https://packagist.org/packages/xndbogdan/laravel-ray-legacy" rel="nofollow">
          <LazyLoadImage className="my-1" src="https://img.shields.io/packagist/dt/xndbogdan/laravel-ray-legacy.svg" alt="Total Downloads" />
        </a>
        <p>This package can be installed in any PHP application to send messages to the Ray app. It was modified to work with older laravel installations.<br />It was tested on 5.6 but may work with even lower versions.</p>
      </div>
    </div>
  );
}