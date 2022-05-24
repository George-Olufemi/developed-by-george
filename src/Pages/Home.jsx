import React from 'react';
import Navbar from '../Components/Navbar';

function Home() {
  return (
    <React.Fragment>
        <Navbar />
            <div>
                {/* Hero - content goes here */}
                <h1>Home</h1>
            </div>
    </React.Fragment>
  )
}

export default Home;