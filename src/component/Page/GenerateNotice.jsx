import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NoticeBoardPage'
import Sidebar from '../SideBar/S_SideBar';

const GenerateNotice = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState({ student: '', parent: '' });
  const [sendMessageTo, setSendMessageTo] = useState({ student: false, parent: false });

  useEffect(() => {
    const fetchPhoneNumbers = async () => {
      try {
        const response = await axios.get('https://api.yourdomain.com/phone-numbers');
        setPhoneNumbers(response.data);
      } catch (error) {
        console.error('Error fetching phone numbers:', error);
      }
    };

    fetchPhoneNumbers();
  }, []);

  const handleCheckboxChange = (target) => {
    setSendMessageTo(prev => ({ ...prev, [target]: !prev[target] }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const date = new Date().toISOString().slice(0, 10);

    try {
      await axios.post('https://api.yourdomain.com/notices', {
        title,
        content,
        date
      });

      // 문자 메시지 보내기
      if (sendMessageTo.student && phoneNumbers.student) {
        // 학생에게 문자 보내기
        await axios.post('https://api.yourdomain.com/send-sms', {
          phoneNumber: phoneNumbers.student,
          message: `New notice: ${title}`
        });
      }

      if (sendMessageTo.parent && phoneNumbers.parent) {
        // 부모님에게 문자 보내기
        await axios.post('https://api.yourdomain.com/send-sms', {
          phoneNumber: phoneNumbers.parent,
          message: `New notice: ${title}`
        });
      }

      alert('공지사항이 게시되었습니다.');
    } catch (error) {
      console.error('Error posting notice or sending SMS:', error);
      alert('공지사항 게시에 실패했습니다.');
    }
  };

  return (
    <div className="generate-notice-container">
      <div className="sidebar-container">
        <Sidebar width={320} />
      </div>
      <h1><span className='vertical-bar'>❙</span>새 공지사항 작성</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea
            className="form-control"
            id="content"
            placeholder="내용을 입력하세요"
            rows="5"
            value={content}
            onChange={e => setContent(e.target.value)}
            required
          />
        </div>
        <div className="radio-check">
          <input
            type="checkbox"
            className="radio-check-input"
            id="sendToStudent"
            checked={sendMessageTo.student}
            onChange={() => handleCheckboxChange('student')}
          />
          <label className="radio-check-label" htmlFor="sendToStudent">학생에게 문자 보내기</label>
        </div>
        <div className="radio-check">
          <input
            type="checkbox"
            className="radio-check-input"
            id="sendToParent"
            checked={sendMessageTo.parent}
            onChange={() => handleCheckboxChange('parent')}
          />
          <label className="radio-check-label" htmlFor="sendToParent">부모님에게 문자 보내기</label>
        </div>
        <button type="submit" className="generate-notice-button">게시하기</button>
      </form>
    </div>
  );
};

export default GenerateNotice;
