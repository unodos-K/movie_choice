import React from 'react';
import './MovieCard.css'; // MovieCard의 스타일 파일을 import 합니다.

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
      <div>
        <h3>{movie.title}</h3>
        <h4>⭐️ 4.0</h4>
      </div>
    </div>
  );
}

export default MovieCard;
