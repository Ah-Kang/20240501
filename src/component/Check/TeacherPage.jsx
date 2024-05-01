import React, { useState, useEffect } from 'react';
import { Button, Table, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TP.css';
import Sidebar from '../SideBar/S_SideBar';

function TeacherPage({ courseName }) {
  const [attendanceCode, setAttendanceCode] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [currentSession, setCurrentSession] = useState(1);
  const [sessionsData, setSessionsData] = useState({
    1: [{ name: "John Doe", status: "출석" }, { name: "Jane Smith", status: "지각" }],
    2: [{ name: "John Doe", status: "출석" }, { name: "Sam Johnson", status: "결석" }],
    3: [{ name: "Jane Smith", status: "출석" }, { name: "Sam Johnson", status: "결석" }],
    4: [{ name: "John Doe", status: "출석" }, { name: "Sam Johnson", status: "출석" }]
  });

  const generateCode = () => {
    const newCode = Math.floor(1000 + Math.random() * 9000).toString();
    setAttendanceCode(newCode);
  };

  const startSession = () => {
    console.log("Session started");
    generateCode();
    setCountdown(600); // 타이머를 10분(600초)로 고정
  };

  const endSession = () => {
    console.log("Session ended");
    setCountdown(0);
  };

  useEffect(() => {
    let interval = null;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      clearInterval(interval);
      console.log("Time's up! Session automatically ended.");
    }
    return () => clearInterval(interval);
  }, [countdown]);

  const handleSessionChange = (sessionNumber) => {
    setCurrentSession(sessionNumber);
  };

  return (
    
    <Container className="my-4 p-4 shadow bg-white rounded">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
        <div className='sidebar-container'>
        <Sidebar width={320} />
      </div>
          <h1 className="text-center">{courseName}</h1>

          <div className="text-center mb-3">
            <strong>시간</strong> {Math.floor(countdown / 60)}:{('0' + (countdown % 60)).slice(-2)}
          </div>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <Button variant="primary" onClick={startSession}>수업 시작하기</Button>
            <Button variant="secondary" onClick={endSession}>수업 끝내기</Button>
          </div>
          <div className="text-center my-3">
            <strong>출석 코드 : </strong> {attendanceCode}
          </div>
          <div className="d-flex justify-content-center mb-3">
            {[1, 2, 3, 4].map(session => (
              <Button key={session} variant={currentSession === session ? "primary" : "secondary"} onClick={() => handleSessionChange(session)}>
                {session}차시
              </Button>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>이름</th>
                <th>출결 여부</th>
              </tr>
            </thead>
            <tbody>
              {sessionsData[currentSession].map((student, index) => (
                <tr key={index} style={{ color: student.status === '출석' ? 'green' : student.status === '지각' ? 'orange' : 'red' }}>
                  <td>{student.name}</td>
                  <td>{student.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default TeacherPage;
