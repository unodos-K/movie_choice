// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Navbar 스타일을 위한 CSS 파일

function Navbar({isLogin, setIsLogin}) {
  const handleLogOn = () => {
    console.log('로그인 버튼');
    setIsLogin(!isLogin)
  }
  console.log(isLogin);
  return (
    <nav className="navbar">
      <Link to="/" className="logo">로고</Link>
      <div>
        <input type="text" placeholder="검색어를 입력하세요" className="search-input" />
        <button className="search-button">검색</button>
      </div>
      <div className="actions">
        {
        isLogin?
          <button className="logout" onClick={handleLogOn}>로그아웃</button>:
          <button className="login" onClick={handleLogOn}>로그인</button>
        }
      </div>
    </nav>
  );
}

export default Navbar;
