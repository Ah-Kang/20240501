import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationBar = ({ barName }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/'); // 홈으로 이동
  };

  return (
    
    <nav className="navbar">
      <div className="nav-icon" onClick={handleHomeClick}>
        <i className="fas fa-home"></i>
      </div>
      <div className="nav-title">{barName}</div>
      <div className="nav-menu">
        <i className="fas fa-bars" ></i>
      </div>
    </nav>
  );
};

export default NavigationBar;
