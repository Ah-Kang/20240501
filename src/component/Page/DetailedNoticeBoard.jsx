import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


const axiosInstance = axios.create();
const mock = new MockAdapter(axiosInstance);


const mockNotices = [
  { id: 1, title: "공지사항 1", date: "2023-04-01", content: "첫 번째 공지 내용입니다." },
  { id: 2, title: "공지사항 2", date: "2023-04-02", content: "두 번째 공지 내용입니다." }
];


mock.onGet("/notices").reply(200, {
  notices: mockNotices
});

const DetailedNoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get('/notices')
      .then(response => {
        setNotices(response.data.notices);
        setLoading(false);
      })
      .catch(error => {
        console.error('API error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const noticeId = 1; // URL에서 가져올 noticeId 대신 하드코딩
  const notice = notices.find(n => n.id === parseInt(noticeId));

  if (!notice) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="container mt-5">
      <h1>{notice.title}</h1>
      <h2>{notice.date}</h2>
      <p>{notice.content}</p>
    </div>
  );
};

export default DetailedNoticeBoard;
