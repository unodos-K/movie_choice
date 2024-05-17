import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom'; // React Router의 관련 컴포넌트 및 Hook 가져오기
import MovieCard from './MovieCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperContainer ({movies}) {
    return (
        <>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={100}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            >
            {movies.map(movie => (
                <SwiperSlide key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                <MovieCard movie={movie}></MovieCard>
                </Link>
            </SwiperSlide>
            ))}
        </Swiper>
        </>
    )
}

export default SwiperContainer;