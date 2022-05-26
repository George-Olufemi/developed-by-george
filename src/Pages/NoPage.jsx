import React from 'react';
import { Link } from 'react-router-dom'

function NoPage() {
  return (
    <React.Fragment>
      <div>
        <h1 className="text-center text-5xl font-bold mt-10 text-red-500">Error 404!</h1>
        <h1 className="text-center text-5xl font-bold mt-10">Oops, Page doesn't exist...</h1>
        <h1 className="text-center text-5xl font-bold mt-10">Click the button below to return back to safe zone...</h1>
        <div className='text-center flex justify-center items-center mt-10 text-2xl'>
          <Link to="/">
              <button className="bg-gradient-to-r from-red-600 to-blue-600 px-10 py-3 rounded-xl text-white hover:scale-105 transition-all">Back to Home</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NoPage;