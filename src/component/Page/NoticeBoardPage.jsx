import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../../api/axios';

//package.jason에 "proxy": "https://api.yourdomain.com" 설정을 넣어둠 cors오류 때문에 넣은건데 해결 된진 모르겠으나 페이지가 동작, api실 주소 적용할 때 저 주소도 바꿔줘야함


// const axiosInstance = axios.create();
// const mock = new MockAdapter(axiosInstance);


// mock.onGet("https://api.yourdomain.com/notices").reply(200, [
//   { id: 1, title: '첫 번째 공지', content: '이것은 공지사항 예시입니다. 아무말이나 길게 써야하기 때문에 아무말이나 짓껄이겠습니다.오늘 날씨는 너무 좋고 밖으로 나가 오토바이를 타지 않는다면 범죄입니다. 이상.', date: '2024-04-18' },
//   { id: 2, title: '두 번째 공지', content: '세부 내용을 여기에 포함합니다.', date: '2024-04-19' },
// ]);


// mock.onGet("https://api.yourdomain.com/user-status").reply(200, {
//   isLoggedIn: true,
//   role: 'teacher'
// });

const NoticeBoard = ({ courseName }) => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);
  const [userStatus, setUserStatus] = useState({ isLoggedIn: false, role: '' });

  useEffect(() => {
    const fetchData = async () => {
      const noticesResponse = await axiosInstance.get('https://api.yourdomain.com/notices');
      setNotices(noticesResponse.data);
      const userStatusResponse = await axiosInstance.get('https://api.yourdomain.com/user-status');
      setUserStatus(userStatusResponse.data);
    };

    fetchData();
  }, []);

  const handleRowClick = (id) => {
    navigate(`/notice/${id}`);
  };

    // 내용 문자열을 20글자로 제한하는 함수
    const truncateContent = (content) => {
      return content.length > 20 ? `${content.substring(0, 20)}...` : content;
    };

  return (
    <div className="container mt-5">
      <h1>공지사항</h1>
      <h2 style={{ fontSize: '1.5em', color: 'gray' }}>{courseName}</h2>
      {userStatus.isLoggedIn && userStatus.role === 'teacher' && (
        <button onClick={() => navigate('/new-notice')} className="btn btn-primary">
          글쓰기
        </button>
      )}
      <table className="table table-hover">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {notices.map(({ id, title, content, date }) => (
            <tr key={id} onClick={() => handleRowClick(id)}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{truncateContent(content)}</td>
              <td>{date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoticeBoard;
