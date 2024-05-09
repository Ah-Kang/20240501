import React, { useState } from 'react';
import axios from 'axios';

const AddFiles = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // 파일 상태 업데이트
    };

    const handleUpload = async () => {
        if (!file) {
            alert('파일을 선택해주세요.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file); // 파일 데이터 추가

        try {
            // 파일 업로드 및 DB 정보 저장을 위한 API 호출
            const response = await axios.post('https://api.yourdomain.com/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // 서버 응답 처리
            if (response.status === 200) {
                alert(`파일 ${file.name} 업로드 및 DB 저장 성공!`);
            } else {
                throw new Error('서버 오류 발생');
            }
        } catch (error) {
            console.error('업로드 및 DB 저장 실패:', error);
            alert('파일 업로드 및 DB 저장에 실패했습니다.');
        }
    };

    return (
        <div className="container mt-5">
            <h1>파일 업로드</h1>
            <input 
                type="file" 
                onChange={handleFileChange}
                accept=".ipynb, .pdf, .jpg, .pptx"
            />
            <button onClick={handleUpload} className="btn btn-primary mt-3">
                업로드 및 저장
            </button>
        </div>
    );
};

export default AddFiles;
