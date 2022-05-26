import React from 'react';
import HtmlNav from '../Components/HtmlNav';

function JavascriptCourseVideos() {
  return (
    <React.Fragment>
      <HtmlNav />
      <div className='md:grid md:gap-5 md:grid-cols-3 px-8 md:px-16 pt-10 md:ml-12 pb-12'>
        <div className='pb-5'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/iWOYAxlnaww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className='pb-5'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FhguwBJeqWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className='pb-5'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JloLGV9DmtQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className='pb-5'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xUI5Tsl2JpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className='pb-5'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/X0ipw1k7ygU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className='pb-5'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wKBu_dEaF9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </React.Fragment>
  )
}

export default JavascriptCourseVideos;