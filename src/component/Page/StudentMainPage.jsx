import React, { useState, useEffect } from 'react';
import Sidebar from '../SideBar/S_SideBar';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS를 임포트합니다.
import './testPage.css';
import axios from 'axios';

const StudentMainPage = () => {
  const [userName, setUserName] = useState('학생');

  // 공지사항 데이터에 날짜 정보 추가
  const [announcements, setAnnouncements] = useState([
    { message: '공지사항 1', date: '2024-04-15' },
    { message: '공지사항 2', date: '2024-04-16' },
    { message: '공지사항 3', date: '2024-04-17' }
  ]);
  
  const [courses, setCourses] = useState(['수학', '음악', '국어']);
  const assignments = [
    { title: '수학 프로젝트 제출 D-1', date: '2024-01-03' },
    { title: '음악 프로젝트 제출 D-4', date: '2024-01-03' }
  ];
  const navigate = useNavigate();

  

  // url로 접속 막아주는 코드
  //
  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const response =
  //           await axios.get('http://localhost:8080/api/auth/isLogin',
  //               {withCredentials : true});
  //       if (response.data !== "STUDENT") {
  //         navigate('/');
  //       }
  //     } catch (error) {
  //       console.error('로그인 상태 확인 실패:', error);
  //       navigate('/');
  //     }
  //   };

  //   checkLoginStatus();
  // }, [navigate]);

  const handleCourseClick = (courseName) => {
    navigate(`/course/${courseName}`);
  };

  return (
  <div>
    
      
      <div className='sidebar-container'>
        <Sidebar width={320} />
      </div>

      
       

    <div className='main-container'>
      <div className="container">
        <h1>{userName}님, 환영합니다!</h1>
        <div className='mini-title'>
          <h2 className='section-title'>LMS 공지사항</h2>
          <a href="#">더보기 </a>
        </div>
        <section className="section">
          
            <div className="section2">
              <ul className="list-group">
                {announcements.map((announcement, index) => (
                  <li key={index} className="list-group-item">
                    {announcement.message}
                    <span className="text-muted">{announcement.date}</span>
                  </li>
                ))}
              </ul>
            </div>
        </section>
        <div className='mini-title'>
          <h2 className='section-title'>수강중인 강의 목록</h2>
          <a href="#">더보기 </a>
        </div>
        <section className="section">
          
          <ul className="list-group">
            {courses.map((course, index) => (
              <li key={index} className="list-group-item"onClick={() => handleCourseClick(course)}
              style={{ cursor: 'pointer' }}>
                {course}
              </li>
            ))}
          </ul>
        </section>
        <section className="section">
          <h2 className='section-title'>나의 과제 (5)</h2>
          <ul className="list-group">
            {assignments.map((assignment, index) => (
              <li key={index} className="list-group-item">
                {assignment.title}
                <span className="text-muted">{assignment.date}</span>
              </li>
            ))}
          </ul>
        </section>
        

      </div>
    </div>
   </div>
  );
};

export default StudentMainPage;