import React from 'react'
import HtmlNav from '../Components/HtmlNav';

function BootstrapcourseVideos() {
  return (
    <React.Fragment>
      <HtmlNav />
        <div>      
          <iframe width="560" height="315" src="https://www.youtube.com/embed/bzZyCB5QT9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </React.Fragment>
  )
}

export default BootstrapcourseVideos;