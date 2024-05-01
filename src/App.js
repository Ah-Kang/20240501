import React, { useState,useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './component/Page/LoginPage';
import SignUpPage from './component/Page/SignUpPage';
import StudentMainPage from './component/Page/StudentMainPage';
import TeacherMainPage from './component/Page/TeacherMainPage';
import CoursePage from './component/Page/CoursePage';
import CoursePageT from './component/Page/CoursePageT';
import StudentPage from './component/Check/StudentPage';
import TeacherPage from './component/Check/TeacherPage';
import NoticeBoardPage from './component/Page/NoticeBoardPage';
// import DetailedNoticeBoard from './component/Page/DetailedNoticeBoard';
import NoticeDetail from './component/Page/NoticeDetail';
import GenerateNotice from './component/Page/GenerateNotice';
import MaterialsBoard from './component/Page/MaterialsBoard';
import MaterialDetail from './component/Page/MaterialDetail'; 




function App() {
  return (
    
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/SignUpPage" element={<SignUpPage />} />
            <Route path="/StudentMainPage" element={<StudentMainPage />} />
            <Route path="/TeacherMainPage" element={<TeacherMainPage />} />
          
            <Route path="/course/:courseName" element={<CoursePage />} />
            <Route path="/courseT/:courseName" element={<CoursePageT />} />
            <Route path="/StudentPage" element={<StudentPage />} />
            <Route path="/TeacherPage" element={<TeacherPage />} />
            <Route path="/NoticeBoardPage" element={<NoticeBoardPage />} />
          
            {/* <Route path="/notice/:noticeId" element={<DetailedNoticeBoard />} /> */}
            <Route path="/notice/:id" element={<NoticeDetail />} />
            <Route path="/new-notice" element={<GenerateNotice />} />

            <Route path="/materialsBoard" element={<MaterialsBoard />} />
            <Route path="/materials/:id" element={<MaterialDetail />} />
            

            
            {/* 추가적으로 다른 경로들도 여기에 구성할 수 있습니다. */}
          </Routes>
        </Router>

      
  );
}

export default App;