import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
        <nav className="md:flex md:justify-between h-42 md:h-16 bg-gray-800 md:px-48 text-white z-10 shadow-md">
            {/* Logo div */}
            <div>
                <h1 className="pt-5 pl-5 pb-5 text-xl font-serif">developedbyGeorge</h1>
            </div>
            {/* hamburger */}
            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden">
                <ion-icon name={ open ? 'close' : 'menu' }></ion-icon>
            </div>
            {/* nav links div */}
            <div>
                <ul className={(open ? 'left-0':'-left-full') + ' md:flex pt-5 absolute md:static bg-gray-800 md:z-auto  w-full md:w-auto transition-all duration-500'}>
                    <Link to="/"><li className='pr-7 pl-7 pb-3 pt-3 md:pt-0 text-center text-base font-serif tracking-wider md:border-b-4 hover:text-blue-600 md:hover:border-blue-600 transition-all hover:scale-105'>Home</li></Link>
                    <Link to="/courses"><li className='pr-7 pl-7 pb-3 pt-3 md:pt-0 text-center text-base font-serif tracking-wider hover:text-blue-600 md:hover:border-blue-600 transition-all hover:scale-105'>Courses</li></Link>
                    <Link to="/roadmap"><li className='pr-7 pl-7 pb-3 pt-3 md:pt-0 text-center text-base font-serif tracking-wider hover:text-blue-600 md:hover:border-blue-600 transition-all hover:scale-105'>RoadMap</li></Link>
                </ul>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Navbar;