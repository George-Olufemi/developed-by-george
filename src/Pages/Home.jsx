import React from 'react';
import Navbar from '../Components/Navbar';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <React.Fragment>
        <Navbar className='fixed' />
          {/* Hero - content goes here */}
          <div className='home h-screen bg-contain'>
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
    </React.Fragment>
  )
}

export default Home;