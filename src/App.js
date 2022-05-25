import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import RoadMap from './Pages/RoadMap';
import NoPage from './Pages/NoPage';
import HtmlCourseVideos from './Pages/HtmlCourseVideos';
import CssCourseVideos from './Pages/CssCourseVideos';
import BootstrapCourseVideos from './Pages/BootstrapCourseVideos';
import JavascriptCourseVideos from './Pages/JavascriptCourseVideos';
import GitAndGithubCourseVideos from './Pages/GitAndGithubCourseVideos';
import ReactCourseVideos from './Pages/ReactCourseVideos';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/roadmap" element={<RoadMap />} />
          <Route path="/htmlcoursevideos" element={<HtmlCourseVideos />} />
          <Route path="/csscoursevideos" element={<CssCourseVideos />} />
          <Route path="/bootstrapcoursevideos" element={<BootstrapCourseVideos />} />
          <Route path="/javascriptcoursevideos" element={<JavascriptCourseVideos />} />
          <Route path="/gitandgithubcoursevideos" element={<GitAndGithubCourseVideos />} />
          <Route path="/reactcoursevideos" element={<ReactCourseVideos />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
