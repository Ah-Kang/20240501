import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SidebarButtons.module.css'; // 동일한 스타일 적용
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faBullhorn, faPlusCircle, faHome, faCheckSquare, faCommentDots, faBell, faEdit, faFolder, faCalendarAlt, faFileAlt} from '@fortawesome/free-solid-svg-icons';
import './SidebarButtons.module.css'

const SidebarButtons2 = () => {
  const navigate = useNavigate();

  // 예시로, 각 버튼 클릭 시 동작하는 함수를 추가합니다.
  // 실제 경로('/attendance', '/board' 등)는 앱의 라우트 구조에 맞게 조정하세요.
  const goToMainPage = () => navigate('../StudentMainPage')
  const goToAttendance = () => navigate('../StudentPage');
  const goToQuestion = () =>alert('준비 중입니다.')
  const goToAnnounce = () =>navigate('../NoticeBoardPage');
  const goToAssignment = () =>alert('준비 중입니다.')
  const goToMaterials = () =>navigate('../MaterialsBoard')
  const goToStudyPlan = () =>alert('준비 중입니다.')
  const goToSurvey = () =>alert('준비 중입니다.')
  // 다른 페이지 이동 함수들...

  return (
    <div className={styles.buttonContainer}>
       
        <button onClick={goToMainPage} className={`${styles.button} ${styles.textButton}`}>
        
        <FontAwesomeIcon icon={faHome} /> 메인페이지</button>
            
        <button onClick={goToAttendance} className={`${styles.button} ${styles.textButton}`}>
        
      <FontAwesomeIcon icon={faCheckSquare} /> 출석</button>
      <button onClick={goToQuestion} className={`${styles.button} ${styles.textButton}`}><FontAwesomeIcon icon={faCommentDots} /> 질문게시판</button>
      <button onClick={goToAnnounce} className={`${styles.button} ${styles.textButton}`}><FontAwesomeIcon icon={faBell} /> 공지사항</button>
      <button onClick={goToAssignment} className={`${styles.button} ${styles.textButton}`}><FontAwesomeIcon icon={faEdit} /> 과제</button>
      <button onClick={goToMaterials} className={`${styles.button} ${styles.textButton}`}><FontAwesomeIcon icon={faFolder} /> 강의자료</button>
      <button onClick={goToStudyPlan} className={`${styles.button} ${styles.textButton}`}><FontAwesomeIcon icon={faCalendarAlt} /> 강좌 계획서</button>
      <button onClick={goToSurvey} className={`${styles.button} ${styles.textButton}`}><FontAwesomeIcon icon={faFileAlt} /> 설문</button>
    </div>
    
  );
};

export default SidebarButtons2;