import React, { useState, useEffect } from 'react';
import SwiperContainer from './Swiper';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar'; // Navbar 컴포넌트 불러오기

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR`;

      try {
        const response = await axios.get(url);
        setMovies(response.data.results);
        setIsLoading(false); // 데이터 로드 완료 시 isLoading 상태를 false로 설정합니다.
      } catch (error) {
        console.error('영화 데이터를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchMovies();
  }, []);
  console.log(movies);
  return (
    <>
      <Navbar 
        setIsLogin={setIsLogin} 
        isLogin={isLogin} 
      />
      { 
        isLoading?
        <div>로딩 중...</div> :
        <SwiperContainer movies={movies}/>
      }
    </>
  );
}

export default App;
