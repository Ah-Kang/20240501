import React, { useState } from 'react';
import { Button, Form, Table, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS를 임포트합니다.
import './SP.css'
import Sidebar from '../SideBar/S_SideBar';

function StudentPage({ courseName }) {
  const [attendanceCode, setAttendanceCode] = useState('');
  const pageName = '출석';
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
    <div className='background mt-5 p-4 '>
      
      <div className='sidebar-container'>
        <Sidebar width={320} pageTitle={courseName} />
        {/* pageTitle에 변수를 줘서 하는게 나은가 아님 그냥 직접 입력 하는게 나은가 */}
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>

          <h2 className='attendance-title'><span className='vertical-bar'>❙</span>  출석체크</h2>
          <Form className="attendance-form">
          <Form.Group as={Row} className="mb-3">
            <Col xs={12}>
              <Form.Control
                className="input-field"
                type="text"
                placeholder="출석코드를 입력하세요"
                value={attendanceCode}
                onChange={handleInputChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col xs={12}>
              <Button className="submit-button" variant="primary" size="lg" block onClick={handleSubmit}>
                출석 하기
              </Button>
            </Col>
          </Form.Group>
        </Form>


          <h2 className='attendance-title'><span className='vertical-bar'>❙</span>  출석 현황</h2>
          
          <Table hover className="table-sp">
            <thead >
              <tr className='table-attendance'>
                <th>차시</th>
                <th>출결여부</th>
              </tr>
            </thead>
            <tbody className='table-data'>
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
