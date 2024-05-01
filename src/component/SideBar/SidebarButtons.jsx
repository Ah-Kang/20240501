import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faBullhorn, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './SidebarButtons.module.css'; // CSS 모듈 스타일, 실제 파일 경로에 맞게 조정

const SidebarButtons = () => {
  const navigate = useNavigate();

  // 페이지 이동 함수
  const goToCourses = () => alert('준비 중입니다.')//navigate('/CourseList');
  const goToAnnouncements = () => alert('준비 중입니다.')//navigate('/announcements');
  const goToNewCourses = () => alert('준비 중입니다.')//navigate('/new-courses');

  return (
    <div className='space'>
    <div className={styles.buttonContainer}>
      <button onClick={goToCourses} className={`${styles.button} ${styles.textButton}`}>
        <FontAwesomeIcon icon={faList} className={styles.icon} />
        강의 목록
      </button>
      <button onClick={goToAnnouncements} className={`${styles.button} ${styles.textButton}`}>
        <FontAwesomeIcon icon={faBullhorn} className={styles.icon} />
        공지사항
      </button>
      <button onClick={goToNewCourses} className={`${styles.button} ${styles.filledButton}`}>
        <FontAwesomeIcon icon={faPlusCircle} className={styles.icon} />
        새로운 강좌 찾아보기
      </button>
    </div>
    </div>
  );
};

//강의 목록, 공지사항, 

export default SidebarButtons;