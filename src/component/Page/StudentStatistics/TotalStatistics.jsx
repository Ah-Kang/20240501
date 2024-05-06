import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TotalStatistics = () => {
  const [viewMode, setViewMode] = useState('daily'); // 'daily' 또는 'monthly'로 보기 모드 관리

  // 일별 데이터 예시
  const dailyData = {
    labels: ['2024-04-01', '2024-04-02', '2024-04-03'],
    datasets: [
      {
        label: '전체 학생 수',
        data: [50, 45, 49],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '출석 학생 수',
        data: [47, 43, 46],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      }
    ]
  };

  // 월별 데이터 예시
  const monthlyData = {
    labels: ['2024-04', '2024-05', '2024-06'],
    datasets: [
      {
        label: '전체 학생 수',
        data: [1200, 1150, 1180],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '출석 학생 수',
        data: [1100, 1090, 1150],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: viewMode === 'daily' ? '일별 학생 출석 현황' : '월별 학생 출석 현황'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // 토글 버튼 핸들러
  const toggleViewMode = () => {
    setViewMode(viewMode === 'daily' ? 'monthly' : 'daily');
  };

  return (
    <div>
      <h2>{viewMode === 'daily' ? '일별 통계' : '월별 통계'}</h2>
      <button onClick={toggleViewMode} className="btn btn-secondary mb-3">
        {viewMode === 'daily' ? '월별 통계 보기' : '일별 통계 보기'}
      </button>
      <Bar data={viewMode === 'daily' ? dailyData : monthlyData} options={options} />
    </div>
  );
};

export default TotalStatistics;
