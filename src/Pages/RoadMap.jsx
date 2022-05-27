import React from 'react'
import NavbarRoadMap from '../Components/NavbarRoadMap';
import Footer from '../Components/Footer';

function RoadMap() {
  const name = "George Olufemi"
  return (
    <React.Fragment>
        <NavbarRoadMap />
        <div className="bg-gray-500 h-auto text-white">
          <h1 className="pt-10 px-10 md:px-16 text-2xl md:text-3xl font-serif tracking-wider">Front End Web Development RoadMap</h1>
            <div className='px-10 pt-5 md:px-16 font-light text-xl tracking-wider md:text-xl'>
              First off, there are many resouses out there that shows you the RoadMap to becoming a Front End Web Developer, but this is a carefully curated list of that I <span className="font-bold"> ({name}) </span> have personally reviewed and selected based on Personal experience to guide you to becoming a Front End Web Developer. Today, I will help you out with all the questions you might have for building a career as a front-end developer. Please note that this roadmap is merely here to help you identify what you should learn next and understand the need for certain tools, libraries and frameworks. So let’s start with the basics.<br /><br />
              <h1 className="text-2xl md:text-3xl font-serif tracking-wider pb-5">Who is a Front End Web Developer?</h1>
              A front-end developer is a person who develops the user interface of the website and applications. They are responsible for determining the structure and design of the web application, build features to improve user experience, make a balance between design and functionality, optimize web apps for different devices, optimize pages for speed and scalability, use different markup languages for coding web pages, maintain brand consistency and write reusable codes. In simple terms, front-end development refers to the lines of code that determine the operation and structure of the user interface.
              However, the front-end web development is not just limited to using HTML, CSS or JS instead there are a bunch of other technologies that you need to learn if you wanna become a prominent web developer.<br /><br />
              <h1 className="text-2xl md:text-3xl font-serif tracking-wider pb-5">The RoadMap for Front End Web Developer</h1>
              <h1 className="pb-16">Below is the roadmap to becoming a Front End Web Developer. It includes personal recommendations, alternative options, and other good-to-know technologies and tools that you can learn anytime.</h1>
                <center>
                  <div className=''>
                    <h1 className='text-xl font-bold tracking-wider'>1.) HTML</h1><br />
                    <h1 className='text-xl font-bold tracking-wider'>2.) CSS</h1><br />
                    <h1 className='text-xl font-bold tracking-wider'>3.) Bootstrap</h1><br />
                    <h1 className='text-xl font-bold tracking-wider'>4.) JavaScript</h1><br />
                    <h1 className='text-xl font-bold tracking-wider'>5.) Asynchronous JavaScript (AJAX)</h1><br />
                    <h1 className='text-xl font-bold tracking-wider'>6.) GIT and GitHub</h1><br />
                    <h1 className='text-xl font-bold tracking-wider'>7.) Command Line Interface</h1><br />
                    <h1 className='text-xl font-bold tracking-wider'>8.) React</h1><br />
                    <h1 className='text-xl font-bold tracking-wider'>9.) TailwindCSS</h1><br />
                    <h1 className='text-xl font-bold tracking-wider'>10.) Next.js</h1><br />
                    <h1 className='text-xl font-bold tracking-wider'>11.) Keep Learning</h1><br />
                  </div>
                </center>
            </div>
            <div className="flex justify-center items-center pt-5 pb-10 px-1">
              <iframe className='shadow-2xl rounded-lg' width="560" height="315" src="https://www.youtube.com/embed/F3ztn4H6Ftg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <Footer />
    </React.Fragment>
  )
}

export default RoadMap;