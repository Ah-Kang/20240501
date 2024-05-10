import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../../api/axios';
import Sidebar from '../SideBar/S_SideBar';

const NoticeDetail = () => {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const goToNoticeBoardPage =()=>{
    navigate('../NoticeBoardPage');
  };      
  const userName = 'kangsan'

//// 원래 NoticeBoardPage에서 받아와야하는디 안 받아와짐 그래서 여기에다가 mock데이터를 만들어서 출력하니 됐는데 1일 낮에 해봤을 땐 이래 안 해도 됐거덩 우예 해야하노...
/// const response = await axiosInstance.get('https://api.yourdomain.com/notices'); => 이거 axiosInstance넣어야 가짜 데이터 적용

// const axiosInstance = axios.create();
// const mock = new MockAdapter(axiosInstance);


// mock.onGet("https://api.yourdomain.com/notices").reply(200, [
//   { id: 1, title: '첫 번째 공지', content: '이것은 공지사항 예시입니다.', date: '2024-04-18' },
//   { id: 2, title: '두 번째 공지', content: '세부 내용을 여기에 포함합니다.', date: '2024-04-19' },
// ]);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await axiosInstance.get('https://api.yourdomain.com/notices');
        console.log("Response data:", response.data);  // 응답 데이터 로깅
        const selectedNotice = response.data.find(n => n.id === parseInt(id));
        if (selectedNotice) {
          setNotice(selectedNotice);
        } else {
          setError('Notice not found');
          console.log('Notice not found for ID:', id);  // 로그 추가
        }
      } catch (error) {
        console.error('Error fetching the notice:', error);
        setError('Failed to fetch notice');
      }
      
    };
    

    fetchNotice();
  }, [id]);
  

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!notice) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="sidebar-container">
        <Sidebar width={320} />
      </div>

    <div className="notice-detail-container">
      
      <h1 className="notice-detail-title">{notice.title}</h1>

      <div className='notice-name'>
        <h2>{userName}</h2>
        <h2 className="notice-date"> 작성일 {notice.date}</h2>
      </div>

      <p className="notice-content">{notice.content}</p>

      <div className='notice-btn-div'>
        <button className="notice-back-button" onClick={goToNoticeBoardPage}>목록</button>
      </div>
  </div>
  </div>
    
  );
};

export default NoticeDetail;
