import React from 'react';
import './MovieCard.css'; // MovieCard의 스타일 파일을 import 합니다.

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
    </div>
  );
}

export default MovieCard;
