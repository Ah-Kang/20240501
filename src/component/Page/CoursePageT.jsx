import React, { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Sidebar from '../SideBar/S_SideBar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS를 임포트합니다.
import './MainPage.css'; // 가정한 CSS 파일 경로입니다.

const CoursePageT = () => {
  const { courseNameT } = useParams();
  const [announcements, setAnnouncements] = useState(['공지사항 1', '공지사항 2', '공지사항 3']);
  const [assignments, setAssignments] = useState(['과제 1', '과제 2', '과제 3']);

  const navigate = useNavigate(); // useNavigate 훅을 사용하여 네비게이션 함수 생성

  const handleNavigate = () => {
    navigate('/NoticeBoardPage'); // 이동할 경로
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="main-container p-4 shadow bg-white rounded">
      <Sidebar width={320} /> {/* 사이드바를 포함하고 있습니다. */}

      

      <div className="container mt-3 ">
        <h1 className="mb-3 welcome-box">강좌명: {courseNameT}</h1>
        
        <section className="mb-4 p-4 shadow bg-white rounded">
            <h2 className="section-title under-line" style={{ cursor: 'pointer' }} onClick={handleNavigate}>
              강좌 공지사항
            </h2>
          <ul className="list-group">
            {announcements.map((announcement, index) => (
              <li key={index} className="list-group-item">
                {announcement}
              </li>
            ))}
          </ul>
        </section>

        <section className='p-4 shadow bg-white rounded'>
          <h2 className='section-title'>강좌 과제</h2>
          <ul className="list-group">
            {assignments.map((assignment, index) => (
              <li key={index} className="list-group-item">
                {assignment}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CoursePageT;
