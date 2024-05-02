import React from 'react';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import TotalStatistics from './TotalStatistics';
import IndividualStatistics from './IndividualStatistics';

const Statistics = () => {
  return (
    <div className="container mt-5">
      <h1>학생 통계</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="/statistics/total" end>
            학생 전체 통계
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/statistics/individual" end>
            학생 개인 통계
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Navigate replace to="/statistics/total" />} />
        <Route path="/total" element={<TotalStatistics />} />
        <Route path="/individual" element={<IndividualStatistics />} />
      </Routes>
    </div>
  );
};

export default Statistics;
