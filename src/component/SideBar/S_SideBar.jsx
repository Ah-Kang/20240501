//S_SideBar의 앞 S는 Student를 의미함 *T_SideBar는 Teacher.

import React, {useEffect, useRef, useState } from "react";
import styles from "./S_SideBar.module.css";

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import SidebarButtons from './SidebarButtons';
import SidebarButtons2 from './SidebarButtons2';
import SidebarButtons3 from "./SideBarButtons3";
import SidebarButtons4 from "./SideBarButtons4";


import { faHome, faChartLine, faShoppingCart, faBoxOpen, faUserFriends, faSignOutAlt, faUserCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
// 기타 필요한 아이콘 import

import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Sidebar = ({ width=320, children,pageTitle }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const side = useRef();

  const [user, setUser] = useState("학생") // 사이드바 상단에 나타낼 유저 네임(api로 사용자 정보 받아와서 사용자 이름 띄우기

  const navigate = useNavigate();

  const location = useLocation();
  //로케이션이 정의가 됐음
  
 
  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
  };
 
  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async e => {
    let sideArea = side.current;
    let sideChildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideChildren)) {
      await setX(-width); 
      await setOpen(false);
    }
  }

  const closeSidebar = () => {
    setX(-width); // 사이드바를 왼쪽으로 밀어 닫습니다.
    setOpen(false); // 열린 상태를 false로 설정합니다.
  };

  useEffect(()=> {
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  })


    // 마이페이지 이동 함수
    const goToMyPage = () => {
      alert('준비 중입니다.')//navigate('/mypage'); // '/mypage' 경로로 이동
    };
    const goToHome = () => {
     navigate('/'); 
    };
  
    // 로그아웃 함수
    const logout = () => {
      // 로그아웃 처리 로직 구현
      navigate('/'); // 로그아웃 후 '/login' 경로로 이동
    };

    // 현재 페이지 상태 ('studentMain' 또는 'coursePage')
  const [currentPage, setCurrentPage] = useState('./StudentMainPage');
// 아래 코드 추가됨(로케이션으로 바꿈)
  const renderSidebarButtons = () => {
    if (location.pathname.startsWith('/TeacherMainPage')) {
      return <SidebarButtons3 />;
    } else if (location.pathname.startsWith('/courseT')|| location.pathname.startsWith('/TeacherPage')) {
      return <SidebarButtons4 />;
    } else if (location.pathname.startsWith('/course')
    || location.pathname.startsWith('/StudentPage')
    || location.pathname.startsWith('/NoticeBoardPage')
    || location.pathname.startsWith('/new-notice')
    || location.pathname.startsWith('/notice')
    || location.pathname.startsWith('/MaterialsBoard')
    || location.pathname.startsWith('/materials')
    || location.pathname.startsWith('/AddFiles')
    )  {
      return <SidebarButtons2 />;
    } else if (location.pathname === '/StudentMainPage') {
      return <SidebarButtons />;
    }
  }


  return (
    
    <div className={styles.container} ref={side}>
      <div  className={styles.navbar} >
        <button onClick={goToHome}>
        <FontAwesomeIcon  icon={faHome} size="lg" />
        </button>
        <span>{pageTitle}</span>
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>
      <div ref={side} className={styles.sidebar} style={{ width: `${width}px`, height: '100%',  transform: `translateX(${-xPosition}px)`}}>
        
        
        {/* 여기에 사이드바의 각 버튼들과 아이콘을 추가하세요 */}
        
        {/* ... 기타 메뉴 아이템 ... */}


          <div className={styles.topPage}>
            <span className={styles.userName}>{user}님</span>
            <button onClick={closeSidebar} className={styles.exitBtn}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
           
          </div>

          
        <div className={styles.inBoxButton}>
          
          <button onClick={goToMyPage}>
            <FontAwesomeIcon icon={faUserCircle} className="me-2 sideBtn" />
            마이페이지
          </button>

          <button onClick={logout}>
            <FontAwesomeIcon icon={faSignOutAlt} className="me-2 sideBtn" />
            로그아웃
          </button>
        </div>
       

        <div>
          {renderSidebarButtons()}
        </div>

           
          {/* <button onClick={closeSidebar} className={styles.closeButton}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            닫기 
          </button> */}

      </div>
    </div>
  );
};




export default Sidebar;