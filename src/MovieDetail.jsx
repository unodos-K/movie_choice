import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MovieDetail.css'; // 스타일 파일 불러오기
import Navbar from './Navbar'; // Navbar 컴포넌트 불러오기


function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=ko-KR`;

        const response = await axios.get(url);
        setMovie(response.data);
      } catch (error) {
        console.error('영화 데이터를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div className="loading">로딩 중...</div>;
  }

  return (
    <>
      <Navbar /> {/* Navbar 추가 */}
      <div className="movie-detail">
        <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="포스터" className="poster" />
        <div className="movie-info">
          <h2 className="title">{movie.title}</h2>
          <p className="genres">장르: {movie.genres.map(genre => genre.name).join(', ')}</p>
          <p className="release-date">개봉일: {movie.release_date}</p>
          <p className="overview">줄거리: {movie.overview}</p>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
