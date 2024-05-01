import React, { useState } from 'react';
import { Button, Form, Table, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS를 임포트합니다.
import './TP.css'
import Sidebar from '../SideBar/S_SideBar';

function StudentPage({ courseName }) {
  const [attendanceCode, setAttendanceCode] = useState('');

  const handleInputChange = (event) => {
    setAttendanceCode(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted code:", attendanceCode);// 제출된 코드 로그 찍어둠
  };

  // 가짜 데이터
  const attendanceData = [
    { session: 1, status: 'Present' },
    { session: 2, status: 'Late' },
    { session: 3, status: 'Absent' },
    { session: 4, status: 'Present' },
    { session: 5, status: 'Late' }
  ];

  return (
    <div className='container mt-5 p-4 shadow bg-white rounded'>
      <div className='sidebar-container'>
        <Sidebar width={320} />
      </div>
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4 class-Name">과목명 : {courseName}</h1>
          <Form className='p-4 shadow bg-white rounded'>
            <Form.Group as={Row} className="mb-3 narrow-margins">
              <Col xs={12}>
                <Form.Control
                  className='input'
                  type="text"
                  placeholder="출석 코드를 입력하세요."
                  value={attendanceCode}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='narrow-margins'>
              <Col xs={12}>
                <Button className='button ' variant="primary" size="lg" onClick={handleSubmit} block>출석 하기</Button>
              </Col>
            </Form.Group>
          </Form>
          <div className='p-4 shadow bg-white rounded table'>
          <Table striped bordered hover>
            <thead className='table'>
              <tr>
                <th>차시</th>
                <th>출결 여부</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((session, index) => (
                <tr key={index}>
                  <td>Session {session.session}</td>
                  <td style={{ color: getColorForStatus(session.status) }}>
                    {session.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

function getColorForStatus(status) {
  switch (status) {
    case 'Present': return 'green';
    case 'Late': return 'orange';
    case 'Absent': return 'red';
    default: return 'black';
  }
}

export default StudentPage;
