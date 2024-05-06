import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Axios 인스턴스와 Mock Adapter 설정
const axiosInstance = axios.create();
const mock = new MockAdapter(axiosInstance);

// Mock 데이터 설정
mock.onGet("https://api.yourdomain.com/materials/1").reply(200, {
  subject: "데이터 과학",
  files: [
    { name: "Lecture 1", url: "https://api.yourdomain.com/files/lecture1.ipynb", type: "ipynb" },
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
    <div className="container mt-5">
      <h1>{material.subject}</h1>
      <div>
        {material.files.map((file, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <button className="btn btn-primary" onClick={() => window.location.href = file.url} style={{ marginRight: "10px" }}>
              다운하기
            </button>
            <span>{file.name}.{file.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialDetail;
