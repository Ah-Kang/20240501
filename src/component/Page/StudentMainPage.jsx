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
    { title: '수학 프로젝트 제출 어쩌구 저쩌구 샬라샬라마하밤넝만어마ㅣㄴ어미ㅏㄴ엄ㄴㅇㅁㄴㅇㄴㅁㅇㅁㄴㅇㅁㅇㄴㄴㅁㅇ ', date: '2024-01-03',course:'수학',dueDate:'D-4' },
    { title: '수학 프로젝트 제출 어쩌구 저쩌구 샬라샬라마하밤넝만어마ㅣㄴ어미ㅏㄴ엄ㄴㅇ ', date: '2024-01-03',course:'수학',dueDate:'D-4' },
    { title: '수학 프로젝트 제출 어쩌구 저쩌구 샬라샬라마하밤넝만어마ㅣㄴ어미ㅏㄴ엄ㄴㅇ ', date: '2024-01-03',course:'수학' ,dueDate:'D-4'},
    { title: '수학 프로젝트 제출 어쩌구 저쩌구 샬라샬라마하밤넝만어마ㅣㄴ어미ㅏㄴ엄ㄴㅇ ', date: '2024-01-03',course:'수학',dueDate:'D-4' },
    { title: '수학 프로젝트 제출 어쩌구 저쩌구 샬라샬라마하밤넝만어마ㅣㄴ어미ㅏㄴ엄ㄴㅇ ', date: '2024-01-03',course:'수학' ,dueDate:'D-4'},
    { title: '수학 프로젝트 제출 어쩌구 저쩌구 샬라샬라마하밤넝만어마ㅣㄴ어미ㅏㄴ엄ㄴㅇ ', date: '2024-01-03',course:'수학' ,dueDate:'D-4'},
    { title: '수학 프로젝트 제출 어쩌구 저쩌구 샬라샬라마하밤넝만어마ㅣㄴ어미ㅏㄴ엄ㄴㅇ ', date: '2024-01-03',course:'수학' ,dueDate:'D-4'},
    { title: '수학 프로젝트 제출 어쩌구 저쩌구 샬라샬라마하밤넝만어마ㅣㄴ어미ㅏㄴ엄ㄴㅇ ', date: '2024-01-03',course:'수학' ,dueDate:'D-4'},
    { title: '수학 프로젝트 제출 어쩌구 저쩌구 샬라샬라마하밤넝만어마ㅣㄴ어미ㅏㄴ엄ㄴㅇ ', date: '2024-01-03',course:'수학' ,dueDate:'D-4'}
  ];
  const colors = ['light-red', 'light-green', 'light-blue']; //과제 카드 색상
  const limitText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }

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

  const goToLMS_Announce = ()=> alert('준비중입니다.')
  const goToLectureList = ()=> alert('준비중입니다.')
  const goToMyAssignment = ()=> alert('준비중입니다.')

  return (
    <div className="page-container">
      <div className="sidebar-container">
        <Sidebar width={320} />
      </div>

      <div className="greeting-header">
        <h1><span className='userName'>{userName}</span>님, 환영합니다!</h1>
      </div>


        <div className="section-header">
            <h2><span className='vertical-bar'>❙</span>  LMS 공지사항</h2>
            <a href="" onClick={goToLMS_Announce}>더 보기 ❯</a>
          </div>
      <section className="section">
        
        <ul className="list-group">
          {announcements.map((announcement, index) => (
            <li key={index} className="list-item">
              {announcement.message}
              <span className="date">{announcement.date}</span>
            </li>
          ))}
        </ul>
      </section>


      <div className="section-header">
          <h2><span className='vertical-bar'>❙</span>  수강중인 강의</h2>
          <a href="" onClick={goToLectureList}>더 보기 ❯</a>
        </div>
      <section className="section">
        
        <ul className="list-group">
          {courses.map((course, index,announcement) => (
            <li key={index} className="list-item" onClick={() => handleCourseClick(course)}
            style={{ cursor: 'pointer' }}>{course}
            <span className="date">{announcement.date}</span></li>
          ))}
        </ul>
      </section>


      <div className="section-header">
          <h2><span className='vertical-bar'>❙</span>  나의 과제 <span className='assign-length'>({assignments.length})</span></h2>
          <a href="" onClick={goToMyAssignment}>더보기 ❯</a>
        </div>
      
        <div className="scroll-container">
          {assignments.map((assignment, index) => (
            <div key={index} className={`assignment-card ${colors[index % colors.length]}`}>
              <div className="assignment-content">
                <div className="title">{limitText(assignment.title, 20)}</div>
                <div className="details">
                  <span className="due-date">{assignment.dueDate}</span>
                  <span className="course">{assignment.course}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default StudentMainPage;