import React from 'react';
import Navbar from '../Components/Navbar';
import './Home.css';
import { Link } from 'react-router-dom';
import code from '../code/code.png';
import design from '../design/design.png';
import develop from '../develop/develop.png';
import cert from '../cert/cert.png'

function Home() {
  return (
    <React.Fragment>
        <Navbar className='fixed' />
          {/* Hero - content goes here */}
          <div className='home h-screen bg-contain overflow-hidden'>
            <div className="text-center">
              <h1 className='text-white text-4xl md:text-6xl font-serif pt-64 md:pt-52 pb-10'>Coding and design courses</h1>
              <p className='hidden md:block text-white md:text-3xl font-serif pb-10'>Learn Front End Web Development with technologies like HTML,<br /> CSS, JavaScript, React and more.</p>
              {/* responsive for mobile devices below */}
                <p className='md:hidden px-7 text-2xl text-white md:text-3xl font-serif pb-10'>Learn Front End Web Development with technologies like HTML, CSS, JavaScript, React and more.</p>
                <div className="">
                  <Link to="/courses"><button className="text-white font-serif text-xl bg-gray-800 px-6 py-3 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300">View Courses</button></Link>
                </div>
            </div>
          </div>
          <div className='h-full overflow-hidden'>
            <h1 className="text-gray-800 font-bold text-5xl text-center pt-32 pb-20">WHAT YOU'LL GET FROM THE COURSE</h1>
                <div class="md:grid md:gap-10 md:grid-cols-4 md:pb-44 md:pt-20 md:pl-40 px-32">
                  <div className="">
                    <img className='pb-5 pl-3 md:pl-12' src={code} alt="" />
                    <h1 className="pb-3 text-lg font-semibold pl-3 text-center">LEARN TO CODE</h1>
                    <h1 className="pb-10 text-lg font-light text-center">You'll be able to code fluently in React.js or Next.js and be able to start building your own Web Apps.</h1>
                  </div>
                  <div className="">
                    <img className='pb-5 pl-3 md:pl-12' src={design} alt="" />
                    <h1 className="pb-3 text-lg font-semibold text-center">LEARN WEB DESIGN</h1>
                    <h1 className="pb-10 text-lg font-light text-center">You'll know how to design Beautiful Websites and be familiar with mobile UI and UX design.</h1>
                  </div>
                  <div className="">
                    <img className='pb-5 pl-3 md:pl-12' src={develop} alt="" />
                    <h1 className="pb-3 text-lg font-semibold text-center">BUILD WEB APPS</h1>
                    <h1 className="pb-10 text-lg font-light text-center">You'll be taught how to deploy your Websites and start your web Businesses.</h1>
                  </div>
                  <div className="">
                    <img className='pb-5 pl-3 md:pl-12' src={cert} alt="" />
                    <h1 className="pb-3 text-lg font-semibold text-center">GET CERTIFIED</h1>
                    <h1 className="pb-7 text-lg font-light text-center md:text-left">You'll get Certified in Web Development so you can get recognition for your new sills.</h1>
                  </div>
                </div>
          </div>
          <div className='bg-blue-400 h-screen '>
            
          </div>
    </React.Fragment>
  )
}

export default Home;