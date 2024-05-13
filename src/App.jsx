import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import MovieCard from './MovieCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return <div>로딩 중...</div>; // 데이터가 로드되는 동안 로딩 메시지를 표시합니다.
  }
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {movies.map(movie => (
        <SwiperSlide key={movie.id}>
          <MovieCard movie={movie}></MovieCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default App;
