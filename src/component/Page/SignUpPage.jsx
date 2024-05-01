import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('STUDENT');  // 'STUDENT' 또는 'TEACHER' 역할 상태
  const [parentPhone, setParentPhone] = useState('');  // 부모님 전화번호 상태
  const [verificationCode, setVerificationCode] = useState('');
  const [showVerification, setShowVerification] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(name, phone, password, email, role, parentPhone);
      const response = await axios.post('http://localhost:8080/api/user/register',
          {
            name: name,
            tel: phone,
            password: password,
            email: email,
            memberRole: role,
            parent_tel: role === "TEACHER" ? 0 : parentPhone,
          }, {
            withCredentials: true
          });

      if (response.data === 1){
        alert("회원가입이 완료되었습니다.");
        navigate("/");
      }
      else{
        alert(response.data);
      }

    } catch (error) {
      // 요청 자체가 실패한 경우
      //console.log(error);
      if (error.response.status === 409) {
        alert("이미 가입된 회원입니다.");
      } else {
        alert('서버에 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      }
    }
  };

  // 인증 버튼 클릭 이벤트 핸들러
  const handleVerificationClick = () => {
    // 여기에 인증번호 요청을 보내는 로직을 작성하세요.
    
    //1. 번호 검증
    //2. 번호 변경 못하게 readonly로
    //3. 번호 검증되면 인증번호 입력창, 인증 완료 버튼 표시
    setShowVerification(true); // 인증번호 입력창과 인증 완료 버튼을 표시
  };


  // 인증 버튼 클릭 이벤트 핸들러
  const handleVerification = () => {
    // 전화번호 인증 요청을 보내는 로직을 여기에 작성하세요.
    // 예를 들어, 백엔드 서버에 인증번호를 요청하는 API 호출을 할 수 있습니다.
    console.log('인증번호 요청:', phone);
    // 예시: sendVerificationCode(phone);
  };

  // 인증 완료 버튼 클릭 이벤트 핸들러
  const handleVerifyComplete = () => {
    // 사용자가 입력한 인증번호를 검증하는 로직을 여기에 작성하세요.
    // 예를 들어, 입력된 인증번호를 백엔드 서버로 보내어 검증하는 API 호출을 할 수 있습니다.
    console.log('입력한 인증번호:', verificationCode);
    // 예시: verifyCode(verificationCode);
  };

  const handleVerificationComplete = () => {
    // 인증번호 검증 로직
    console.log('인증 완료', verificationCode);
  };

  return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="p-4 shadow bg-white rounded">
              <h2 className="text-center mb-4">회원가입</h2>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">이름</label>
                <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={name}
                    placeholder="이름을 입력하세요."
                    onChange={(e) => setName(e.target.value)}
                    required
                />
              </div>

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
                <button type="button" className="btn btn-primary mt-2" onClick={handleVerificationClick}>인증</button>
              </div>

              {showVerification && (
                  <div className="mb-3">
                    <label htmlFor="verificationCode" className="form-label">인증번호</label>
                    <input
                        type="text"
                        id="verificationCode"
                        className="form-control"
                        value={verificationCode}
                        placeholder="인증번호를 입력하세요."
                        onChange={(e) => setVerificationCode(e.target.value)}
                        required
                    />
                    <button type="button" className="btn btn-success mt-2" onClick={handleVerificationComplete}>인증 완료</button>
                  </div>
              )}

              <div className="mb-3">
                <label htmlFor="password" className="form-label">비밀번호</label>
                <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    placeholder="비밀번호를 입력하세요"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    placeholder="Email을 입력하세요."
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
              </div>

              <div className="mb-3">
                <div className="form-check form-check-inline">
                  <input
                      type="radio"
                      id="STUDENT"
                      name="role"
                      value="STUDENT"
                      className="form-check-input"
                      checked={role === 'STUDENT'}
                      onChange={() => setRole('STUDENT')}
                  />
                  <label className="form-check-label" for="STUDENT">학생</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                      type="radio"
                      id="TEACHER"
                      name="role"
                      value="TEACHER"
                      className="form-check-input"
                      checked={role === 'TEACHER'}
                      onChange={() => setRole('TEACHER')}
                  />
                  <label className="form-check-label" for="TEACHER">선생님</label>
                </div>
              </div>

              {role === 'STUDENT' && (
                  <div className="mb-3">
                    <label htmlFor="parentPhone" className="form-label">보호자 전화번호</label>
                    <input
                        type="tel"
                        id="parentPhone"
                        className="form-control"
                        value={parentPhone}
                        placeholder="보호자 전화번호를 입력하세요"
                        onChange={(e) => setParentPhone(e.target.value)}
                        required
                        pattern="[0-9]{3}[0-9]{4}[0-9]{4}"
                    />
                  </div>
              )}

              <button type="submit" className="btn btn-primary w-100">회원가입</button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default SignUpPage;
