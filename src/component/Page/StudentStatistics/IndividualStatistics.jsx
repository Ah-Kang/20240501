import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Chart.js 라이브러리에 필요한 컴포넌트 등록
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const IndividualStatistics = () => {
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('https://api.yourdomain.com/students')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    useEffect(() => {
        if (selectedStudent) {
            axios.get(`https://api.yourdomain.com/students/${selectedStudent.id}`)
                .then(response => {
                    setComments(response.data.comments);
                })
                .catch(error => console.error('Error fetching student details:', error));
        }
    }, [selectedStudent]);

    const attendanceData = {
        labels: ['출석', '결석'],
        datasets: [
            {
                data: selectedStudent ? [selectedStudent.attendance, selectedStudent.misses] : [0, 0],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB']
            }
        ]
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <h2>학생 리스트</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>이름</th>
                                <th>ID</th>
                                <th>전화번호</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map(student => (
                                <tr key={student.id} onClick={() => setSelectedStudent(student)}>
                                    <td>{student.name}</td>
                                    <td>{student.id}</td>
                                    <td>{student.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-8">
                    <h2>학생 상세 정보</h2>
                    {selectedStudent && (
                        <>
                            <p><strong>이름:</strong> {selectedStudent.name}</p>
                            <p><strong>인적사항:</strong> {selectedStudent.details}</p>
                            <Doughnut data={attendanceData} />
                            <div>
                                <h3>학생 코멘트</h3>
                                {comments.map(comment => (
                                    <p key={comment.id}>{comment.text}</p>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default IndividualStatistics;
