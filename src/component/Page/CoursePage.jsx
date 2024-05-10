import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../SideBar/S_SideBar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS를 임포트합니다.
import './testPage.css';
import NavigationBar from './NavBar/NavigationBar';



const CoursePage = () => {
  const { courseName } = useParams();
  const [announcements, setAnnouncements] = useState(['공지사항 1', '공지사항 2', '공지사항 3']);
  const [assignments, setAssignments] = useState(['과제 1', '과제 2', '과제 3']);
  

  const navigate = useNavigate(); // useNavigate 훅을 사용하여 네비게이션 함수 생성

  const handleNavigate = () => {
    navigate('/NoticeBoardPage'); // 이동할 경로
  };

  return (
    
    
    <div className="page-container">
      <div className="sidebar-container">
        <Sidebar width={320} />
      </div>

        <div className="greeting-header">
          <h1 className="mb-3 welcome-box">강좌명: {courseName}</h1>
        </div>

        <div className='section-header'>
          <h2 className="section-title under-line" style={{ cursor: 'pointer' }} onClick={handleNavigate}>
          <span className='vertical-bar'>❙</span>강좌 공지사항
              </h2>
        </div>

        <section className="section">
            
          <ul className="list-group">
            {announcements.map((announcement, index) => (
              <li key={index} className="list-item">
                {announcement}
              </li>
            ))}
          </ul>
        </section>

        <div className='section-header'>
         <h2 className='section-title'>
            <span className='vertical-bar'>❙</span>
            강좌 과제
          </h2>
        </div>
        <section className='section'>
          
          <ul className="list-group">
            {assignments.map((assignment, index) => (
              <li key={index} className="list-item">
                {assignment}
              </li>
            ))}
          </ul>
        </section>
      </div>
   
    
  );
};

export default CoursePage;
