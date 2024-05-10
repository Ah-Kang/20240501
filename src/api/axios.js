import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Axios 인스턴스 생성
const axiosInstance = axios.create();

// Mock Adapter 설정
const mock = new MockAdapter(axiosInstance);

// 공지사항 API 경로와 가짜 데이터 설정
mock.onGet("https://api.yourdomain.com/notices").reply(200, [
  { id: 1, title: '첫 번째 공지', content: '이것은 공지사항 예시입니다. 아무말이나 길게 써야하기 때문에 아무말이나 짓껄이겠습니다.오늘 날씨는 너무 좋고 밖으로 나가 농구를 하면 좋을듯 합니다. 이상.', date: '2024.04.18' },
  { id: 2, title: '두 번째 공지', content: '세부 내용을 여기에 포함합니다.', date: '2024.04.19' },
  { id: 3, title: '두 번째 공지', content: '세부 내용을 여기에 포함합니다.', date: '2024.04.19' },
  { id: 4, title: '두 번째 공지', content: '세부 내용을 여기에 포함합니다.', date: '2024.04.19' },
  { id: 5, title: '두 번째 공지', content: '세부 내용을 여기에 포함합니다.', date: '2024.04.19' },
  { id: 6, title: '두 번째 공지', content: '세부 내용을 여기에 포함합니다.', date: '2024.04.19' },
  { id: 7, title: '두 번째 공지', content: '세부 내용을 여기에 포함합니다.', date: '2024.04.19' },
]);

// 가짜 로그인 상태 데이터
mock.onGet("https://api.yourdomain.com/user-status").reply(200, {
  isLoggedIn: true,
  role: 'teacher'
});

export default axiosInstance;
