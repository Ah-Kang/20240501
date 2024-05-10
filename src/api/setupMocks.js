// src/mocks/setupMocks.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const setupMocks = () => {
  const mock = new MockAdapter(axios);

  // 가짜 학생 리스트 데이터
  const students = [
    { id: 1, name: '이철수', phone: '010-1234-5678', attendance: 20, misses: 3, details: '인적사항 들어갈 자리~~', comments: [{id: 1, text: '이대로만 하면 개근!'}] },
    { id: 2, name: '김민지', phone: '010-8765-4321', attendance: 18, misses: 5, details: '인적사항 들어갈 자리~~', comments: [{id: 2, text: '조금 더 열심히 나와야겠어요...'}] },
    { id: 3, name: '박재민', phone: '010-1357-2468', attendance: 22, misses: 1, details: '인적사항 들어갈 자리~~', comments: [{id: 3, text: '아주 모범생이이에요~'}] }
  ];

  // 학생 리스트 응답
  mock.onGet('https://api.yourdomain.com/students').reply(200, students);

  // 개별 학생 상세 정보 응답
  students.forEach(student => {
    mock.onGet(`https://api.yourdomain.com/students/${student.id}`).reply(200, student);
  });
};

export default setupMocks;
