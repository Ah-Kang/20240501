import React, { useState, useEffect } from 'react';
import Sidebar from '../SideBar/S_SideBar';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS를 임포트합니다.
import './MainPage.css';
import axios from 'axios';

const TeacherMainPage = () => {
  const [userName, setUserName] = useState('선생');

  // 공지사항 데이터에 날짜 정보 추가
  const [announcements, setAnnouncements] = useState([
    { message: '공지사항 1', date: '2024-04-15' },
    { message: '공지사항 2', date: '2024-04-16' },
    { message: '공지사항 3', date: '2024-04-17' }
  ]);
  
  const [coursesT, setCoursesT] = useState(['수학', '음악', '국어']);
  const navigate = useNavigate();

  // url로 접근 못하게 막아주는 코드
  //
  //
  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const response =
  //           await axios.get('http://localhost:8080/api/auth/isLogin',
  //               {withCredentials : true});
  //       if (response.data !== "TEACHER") {
  //         navigate('/');
  //       }
  //     } catch (error) {
  //       console.error('로그인 상태 확인 실패:', error);
  //       navigate('/');
  //     }
  //   };

  //   checkLoginStatus();
  // }, [navigate]);

  const handleCourseClick = (courseNameT) => {
    navigate(`/courseT/${courseNameT}`);
  };

  return (
    <>
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
      <nav className="navbar">
        <div className="nav-icon">
          <i className="fas fa-home"></i>
        </div>
        <div className="nav-title">{userName}</div>
        <div className="nav-menu" >
          
          <button className="fas fa-bars" >

          </button>
          
        </div>
      </nav> */}



    <div className='main-container p-4 shadow bg-white rounded'>
      <div className='sidebar-container'>
        <Sidebar width={320} />
      </div>
      <div className="container mt-3">
        <div className='content-container'>
          <h1 className="mb-4 welcome-box">{userName}님, 환영합니다!</h1>

          <section className="mt-3 p-4 shadow bg-white rounded">
            <h2 className='section-title'>LMS 공지사항</h2>
            <ul className="list-group">
              {announcements.map((announcement, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {announcement.message}
                  <span className="text-muted" style={{ color: '#D3D3D3' }}>{announcement.date}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-4 p-4 shadow bg-white rounded">
            <h2 className='section-title'>진행중인 강의 목록</h2>
            <ul className="list-group">
              {coursesT.map((courseT, index) => (
                <li key={index} className="list-group-item list-group-item-action"
                    onClick={() => handleCourseClick(courseT)}
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>
                  {courseT}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
    </>
  );
};

export default TeacherMainPage;
