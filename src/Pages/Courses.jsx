import React from 'react'
import NavbarCourses from '../Components/NavbarCourses';
import htm from '../htm/htm.png';
import css from '../css/css.png';
import bootstrap from '../bootstrap/bootstrap.png';
import javascript from '../javascript/javascript.png';
import git from '../git/git.png';
import { Link } from 'react-router-dom';
import reactjs from '../reactjs/reactjs.png';
import Footer from '../Components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import next from '../next/next.png';

function Courses() {
  toast.info("More Courses Comimg Soon!");
  const infoToast = () => {
    toast("Unavailable to you! Finish Previous Modules before you can access this.", {
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.TOP_CENTER
    });
  }
  
  return (
    <React.Fragment>
        <NavbarCourses />
        <ToastContainer />
          <div className='md:grid md:gap-10 md:grid-cols-3  px-10 md:px-16 pt-10'>
              <Link to="/htmlcoursevideos">
                <div className='bg-gray-200 rounded-t-3xl rounded-b-3xl mb-10 hover:shadow-2xl hover:scale-105 transition-all duration-300 pr-0'>
                  <img className="rounded-t-3xl object-contain" src={htm} alt='html' />
                    <h1 className='text-center text-gray-800 text-xl font-semibold pt-5 px-4 pb-6'>Beginner HTML5 course</h1>
                </div>
              </Link>
              <Link to="/csscoursevideos">
                <div className='bg-gray-200 rounded-t-3xl rounded-b-3xl mb-10 hover:shadow-2xl hover:scale-105 transition-all duration-300 pr-0'>
                  <img className="rounded-t-3xl object-contain" src={css} alt='css' />
                    <h1 className='text-center text-gray-800 text-xl font-semibold pt-5 px-4 pb-6'>Beginner HTML & CSS course</h1>
                </div>
              </Link>
              <Link to="/bootstrapcoursevideos">
                <div className='bg-gray-200 rounded-t-3xl rounded-b-3xl mb-10 hover:shadow-2xl hover:scale-105 transition-all duration-300 pr-0'>
                  <img className="rounded-t-3xl h-full w-full object-cover" src={bootstrap} alt='bootstrap' />
                    <h1 className='text-center text-gray-800 text-xl font-semibold pt-5 px-4 pb-6'>Learn Bootstrap</h1>
                </div>
              </Link>
              <Link to="/javascriptcoursevideos">
                <div className='bg-gray-200 rounded-t-3xl rounded-b-3xl mb-10 hover:shadow-2xl hover:scale-105 transition-all duration-300 pr-0'>
                <img className="rounded-t-3xl object-contain" src={javascript} alt='javascript' />
                  <h1 className='text-center text-gray-800 text-xl font-semibold pt-5 px-4 pb-6'>Beginner JavaScript course</h1>
                </div>
              </Link>
              <Link to="/gitandgithubcoursevideos">
                <div className='bg-gray-200 rounded-t-3xl rounded-b-3xl mb-10 hover:shadow-2xl hover:scale-105 transition-all duration-300 pr-0'>
                <img className="rounded-t-3xl object-cover h-full w-full" src={git} alt='git and github' />
                  <h1 className='text-center text-gray-800 text-xl font-semibold pt-5 px-4 pb-6'>Learn Git and Github</h1>
                </div>
              </Link>
              <Link to="/reactcoursevideos">
                <div className='bg-gray-200 rounded-t-3xl rounded-b-3xl mb-10 hover:shadow-2xl hover:scale-105 transition-all duration-300 pr-0'>
                <img className="rounded-t-3xl object-cover" src={reactjs} alt='react' />
                  <h1 className='text-center text-gray-800 text-xl font-semibold pt-5 px-4 pb-6'>Learn React</h1>
                </div>
              </Link>
                <div onClick={infoToast} className='bg-gray-200 rounded-t-3xl rounded-b-3xl mb-10 hover:shadow-2xl hover:scale-105 transition-all duration-300 pr-0'>
                <img className="rounded-t-3xl object-cover" src={next} alt='react' />
                  <h1 className='text-center text-gray-800 text-xl font-semibold pt-5 px-4 pb-6'>Learn Next.js</h1>
                </div>
          </div>
          <Footer />
    </React.Fragment>
  )
}

export default Courses;