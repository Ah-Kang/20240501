import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SidebarButtons.module.css'; // CSS 모듈 스타일, 실제 파일 경로에 맞게 조정


const SidebarButtons3 = () => {
  const navigate = useNavigate();

  // 페이지 이동 함수
  const goToCourses = () => alert('준비 중입니다.')//navigate('/CourseList');
  const goToAnnouncements = () => alert('준비 중입니다.')//navigate('/announcements');
  const goToNewCourses = () => alert('준비 중입니다.')//navigate('/new-courses');
  const goToRecruit = () => alert('준비 중입니다.')
  const goToMakeLecture = () => alert('준비 중입니다.')

  return (
    <div className={styles.buttonContainer}>
      <button onClick={goToCourses} className={`${styles.button} ${styles.textButton}`}> 진행중인 강좌 목록</button>
      <button onClick={goToAnnouncements} className={`${styles.button} ${styles.textButton}`}> 공지사항</button>
      <button onClick={goToRecruit} className={`${styles.button} ${styles.textButton}`}> 모집중인 강좌 목록</button>
      <button onClick={goToMakeLecture} className={`${styles.button} ${styles.textButton}`}> 강좌 개설하기</button>
      <button onClick={goToNewCourses} className={`${styles.button} ${styles.textButton}`}>새로운 강좌 찾아보기</button>
    </div>
  );
};

//강의 목록, 공지사항, 

export default SidebarButtons3;