import React, { useEffect } from 'react';

const LoadFontAwesome = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return null; // 아무것도 렌더링하지 않음
};

export default LoadFontAwesome;
