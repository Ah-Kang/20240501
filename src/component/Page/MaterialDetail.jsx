import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import './MaterialDetail.css';
import { FaFileUpload, FaTimes,FaFile } from 'react-icons/fa';

import Sidebar from '../SideBar/S_SideBar';
// Axios 인스턴스와 Mock Adapter 설정
const axiosInstance = axios.create();
const mock = new MockAdapter(axiosInstance);

const userName = "kangsan"
// Mock 데이터 설정
mock.onGet("https://api.yourdomain.com/materials/1").reply(200, {
  subject: "데이터 과학",
   date: '2024.04.19',
  files: [
    { name: "Lecture 1", url: "https://api.yourdomain.com/files/lecture1.ipynb", type: "ipynb", date: '2024-04-19' },
    { name: "Chapter 2", url: "https://api.yourdomain.com/files/chapter2.pdf", type: "pdf" },
    { name: "Image data", url: "https://api.yourdomain.com/files/imagedata.jpg", type: "jpg" },
    { name: "Presentation", url: "https://api.yourdomain.com/files/presentation.pptx", type: "pptx" }
  ]
});

const MaterialDetail = () => {
  const { id } = useParams();
  const [material, setMaterial] = useState(null);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    const fetchMaterial = async () => {
      try {
        const response = await axiosInstance.get(`https://api.yourdomain.com/materials/${id}`);
        setMaterial(response.data);
      } catch (error) {
        console.error('Error fetching material details:', error);
        setError('Failed to fetch material details');
      }
    };

    fetchMaterial();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!material) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-files">
      <div className="sidebar-container">
                <Sidebar width={320} />
                </div>
      <h1>{material.subject}</h1>
      <div className='material-name'>
        <h2>{userName}</h2>
        <h2 className="material-date"> 작성일 {material.date}</h2>
      </div>
      <div className='material-down'>
        {material.files.map((file, index) => (
          <div key={index} className='material-down2'>
            <div className='file2'>
              <FaFile className="file-icon"/>
              <span>{file.name}.{file.type}</span>
            </div>
            <div>
              <button className="material-down-btn" onClick={() => window.location.href = file.url} >
                다운하기
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialDetail;
