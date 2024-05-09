import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS를 임포트합니다.
import './LoginPage.css';
import axios from 'axios';


const LoginPage = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

   

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://cndowy23.cafe24.com:8080/api/auth/login',
                {
                    tel: phone,
                    password: password
                }, {
                    withCredentials: true
                });

            // 여기에서는 응답을 확인하고 조건에 따라 다르게 처리합니다.
            // 로그인 성공 시
            if (response.data !== 0) {
                if(response.data === "STUDENT"){
                    navigate('/StudentMainPage');
                }
                else if (response.data === "TEACHER") {
                    navigate('/TeacherMainPage');
                }

            } else {
                // 서버로부터 받은 에러 메시지를 활용할 수 있습니다.
                alert(response.data.message || '전화번호, 또는 비밀번호가 잘못되었습니다.');
            }
        } catch (error) {
            // 요청 자체가 실패한 경우
            console.log(error);
            alert('로그인 요청 중 문제가 발생했습니다');
        }
    };

    const handleSignUpClick = () => {
        navigate('/SignUpPage');
    };

    return (
        <div className="container mt-5">  {/* Bootstrap container 클래스 사용 */}
            <div className="row justify-content-center">  {/* Bootstrap row와 중앙 정렬 클래스 사용 */}
                <div className="col-md-6">  {/* Bootstrap column 클래스 사용 */}
                    <form onSubmit={handleSubmit}>
                        <h2 className='title-1 text-center'>
                            
                            AI&SW <br></br>새싹인재 양성교육
                        </h2>
                        
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">전화번호</label>
                            <input
                                type="tel"
                                id="phone"
                                className="form-control"
                                value={phone}
                                placeholder="전화번호를 입력하세요."
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                pattern="[0-9]{3}[0-9]{4}[0-9]{4}"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">비밀번호</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                value={password}
                                placeholder="비밀번호를 입력하세요."
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 btn2">로그인</button>
                        <button type="button" onClick={handleSignUpClick} className="btn btn-secondary w-100 mt-2">회원가입</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
