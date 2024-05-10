import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../SideBar/S_SideBar';
import './NoticeBoard.css';

const MaterialsBoard = () => {
  const navigate = useNavigate();
  const [materials, setMaterials] = useState([
    { id: 1, subject: '수학', title: '함수의 이해',date: '2024-04-18' },
    { id: 2, subject: '과학', title: '뉴턴의 운동 법칙',date: '2024-04-18' },
    { id: 3, subject: '영어', title: '과거 완료 시제' ,date: '2024-04-18'}
  ]);
  const [userStatus, setUserStatus] = useState({ isLoggedIn: true, role: 'teacher' }); // 가정: 로그인 정보

  const handleUploadClick = () => {
    navigate('/AddFiles'); // 파일 업로드 컴포넌트로 이동
  };

  // 로우 클릭 핸들러 추가
  const handleRowClick = (id) => {
    navigate(`/materials/${id}`); // 세부 자료 페이지로 이동
  };

  return (
    <div className="notice-board-container">
      <div className="sidebar-container">
        <Sidebar width={320} />
      </div>
      <div className='notice-title'>
        <div>
         <h1><span className='vertical-bar'>❙</span>강의 자료</h1>
        </div>
        <div className='notice-btn-div'>
          {userStatus.isLoggedIn && userStatus.role === 'teacher' && (
            <button onClick={handleUploadClick} className="notice-btn notice-btn-primary">
              +파일 올리기
            </button>
      )}
        </div>
      </div>

      <div className='notice-table'>
      <table className="table table-hover">
        <thead className='table-first-line'>
          <tr>
            <th>번호</th>
            <th>강의 자료</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material, index, date) => (
            <tr key={material.id} onClick={() => handleRowClick(material.id)} style={{ cursor: 'pointer' }}>
              <td>{index + 1}</td>
              <td>{material.title}</td>
              <td>{material.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default MaterialsBoard;
