// src/mocks/setupMocks.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const setupMocks = () => {
  const mock = new MockAdapter(axios);

  // 가짜 학생 리스트 데이터
  const students = [
    { id: 1, name: 'John Doe', phone: '010-1234-5678', attendance: 20, misses: 3, details: 'Example details here.', comments: [{id: 1, text: 'Great attendance!'}] },
    { id: 2, name: 'Jane Smith', phone: '010-8765-4321', attendance: 18, misses: 5, details: 'More details here.', comments: [{id: 2, text: 'Needs improvement.'}] },
    { id: 3, name: 'Alice Johnson', phone: '010-1357-2468', attendance: 22, misses: 1, details: 'Additional details.', comments: [{id: 3, text: 'Excellent student.'}] }
  ];

  // 학생 리스트 응답
  mock.onGet('https://api.yourdomain.com/students').reply(200, students);

  // 개별 학생 상세 정보 응답
  students.forEach(student => {
    mock.onGet(`https://api.yourdomain.com/students/${student.id}`).reply(200, student);
  });
};

export default setupMocks;
