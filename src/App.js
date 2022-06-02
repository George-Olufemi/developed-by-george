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
import Login from './Pages/Login';
import { AuthProvider } from './Components/auth';
import ProtectedRoutes from './Components/ProtectedRoutes';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element=
              {
                <ProtectedRoutes>
                  <Courses />
                </ProtectedRoutes>
              } 
            />
            <Route path="/roadmap" element=
              {
                <ProtectedRoutes>
                  <RoadMap />
                </ProtectedRoutes>
              } 
            />
            <Route path="/htmlcoursevideos" element={<HtmlCourseVideos />} />
            <Route path="/csscoursevideos" element={<CssCourseVideos />} />
            <Route path="/bootstrapcoursevideos" element={<BootstrapCourseVideos />} />
            <Route path="/javascriptcoursevideos" element={<JavascriptCourseVideos />} />
            <Route path="/gitandgithubcoursevideos" element={<GitAndGithubCourseVideos />} />
            <Route path="/reactcoursevideos" element={<ReactCourseVideos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
