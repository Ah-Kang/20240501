import React, { useState } from 'react';
import axios from 'axios';
import { FaFileUpload, FaTimes,FaFile } from 'react-icons/fa';
import './AddFiles.css'; 
import Sidebar from '../SideBar/S_SideBar';

const AddFiles = () => {
    const [files, setFiles] = useState([]);
    const [hover, setHover] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleFileChange = (event) => {
        const newFiles = [...event.target.files];
        setFiles([...files, ...newFiles]);
    };

    const handleUpload = async () => {
        if (files.length === 0) {
            alert('파일을 선택해주세요.');
            return;
        }

        const formData = new FormData();
        files.forEach((file, index) => {
            formData.append(`file${index}`, file);
        });

        try {
            const response = await axios.post('https://api.yourdomain.com/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (progressEvent) => {
                    const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                    if (totalLength) {
                        setProgress(Math.round((progressEvent.loaded * 100) / totalLength));
                    }
                }
            });

            if (response.status === 200) {
                alert('파일 업로드 및 저장 성공!');
                setFiles([]); // 업로드 후 파일 목록 초기화
            } else {
                throw new Error('서버 오류 발생');
            }
        } catch (error) {
            console.error('파일 업로드 및 저장 실패:', error);
            alert('파일 업로드 및 저장에 실패했습니다.');
        }
    };

    const handleRemoveFile = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setHover(true);
    };

    const handleDragLeave = () => {
        setHover(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const newFiles = [...event.dataTransfer.files];
        setFiles([...files, ...newFiles]);
        setHover(false);
    };

    return (
        <div className="container-files mt-5">
            <div className="sidebar-container">
                <Sidebar width={320} />
            </div>
            <h1 className='file-title'><span className='vertical-bar'>❙</span>파일 업로드</h1>
            <div
                className={`file-drop-area ${hover ? 'file-drop-hover' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input
                    type="file"
                    onChange={handleFileChange}
                    multiple
                    style={{ display: 'none' }}
                />
                <div>
                    <FaFileUpload className="upload-icon" />
                </div>
                <div>
                    <label className="custom-file-upload">
                        <input type="file" onChange={handleFileChange} multiple style={{ display: 'none' }} />
                        + Choose File
                    </label>
                </div>
            </div>
            <div className="selected-files">
                {files.map((file, index) => (
                    <div className="file" key={index}>
                        <div className="file2">
                            <FaFile className="file-icon"/>
                            <span>{file.name}</span>
                        </div>
                        <div>
                        <FaTimes onClick={() => handleRemoveFile(index)} className="remove-icon" />
                        </div>
                    </div>
                ))}
            </div>
            {progress > 0 && <div className="progress">{progress}% completed</div>}
            <button onClick={handleUpload} className="add-file-btn mt-3">
                업로드 및 저장
            </button>
        </div>
    );
};

export default AddFiles;
