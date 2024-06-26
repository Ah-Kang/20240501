import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const MaterialsBoard = () => {
  const navigate = useNavigate();
  const [materials, setMaterials] = useState([
    { id: 1, subject: '수학', title: '함수의 이해' },
    { id: 2, subject: '과학', title: '뉴턴의 운동 법칙' },
    { id: 3, subject: '영어', title: '과거 완료 시제' }
  ]);

  const handleRowClick = (id) => {
    navigate(`/materials/${id}`); // 세부 강의 자료 페이지로 네비게이션
  };

  return (
    <div className="container mt-5">
      <h1>강의 자료</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>번호</th>
            <th>과목</th>
            <th>강의 자료</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material, index) => (
            <tr key={material.id} onClick={() => handleRowClick(material.id)} style={{ cursor: 'pointer' }}>
              <td>{index + 1}</td> {/* 나중에 id받아와야 할수도 있음 */}
              <td>{material.subject}</td>
              <td>{material.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaterialsBoard;
