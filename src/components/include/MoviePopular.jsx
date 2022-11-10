import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper';

const MoiveItem = (movie) => {
    return (
        <article className='card'>
            <figure className='card__top'>
                <a href={`https://www.themoviedb.org/movie/${movie.movieId}`}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} alt={`${movie.originName} poster`} />
                    <span>{movie.rank}</span>
                </a>
            </figure>
            <div className='card__bottom'>
                <a href={`https://www.themoviedb.org/movie/${movie.movieId}`}>{movie.title}</a>
                <p className='vote_average'>평점 : {movie.voteAverage}</p>
                <p className='releasedate'>{movie.releasedate}</p>
            </div>
        </article>
    );
};

const MoviePopular = ({ popularMovies }) => {
    console.log(popularMovies);
    return (
        <div className='popular__movie'>
            <div className='container'>
                <h2>Best Movie</h2>
                <div className='movie__inner'>
                    <Swiper
                        initialSlide={'5'}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className='mySwiper'
                    >
                        {popularMovies.map((movie, idx) =>
                            idx < 10 ? (
                                <SwiperSlide>
                                    <MoiveItem
                                        key={idx}
                                        rank={idx + 1}
                                        movieId={movie.id}
                                        title={movie.title}
                                        voteAverage={movie.vote_average}
                                        poster={movie.poster_path}
                                        releasedate={movie.release_date}
                                        originName={movie.original_title}
                                    />
                                </SwiperSlide>
                            ) : null
                        )}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default MoviePopular;
