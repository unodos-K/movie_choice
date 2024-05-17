import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetail from './MovieDetail'; // MovieDetail 컴포넌트 가져오기

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* 초기 랜딩 경로를 '/'로 설정 */}
        <Route path="/movies/:id" element={<MovieDetail />} /> {/* 동적 경로 설정 */}
      </Routes>
    </Router>
  </React.StrictMode>,
)
