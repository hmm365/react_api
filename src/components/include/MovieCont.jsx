import React from 'react';

const MoiveItem = (movie) => {
    return (
        <article className='card'>
            <figure className='card__top'>
                <a href={`https://www.themoviedb.org/movie/${movie.movieId}`}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} alt={`${movie.originName} poster`} />
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

const MovieCont = ({ movies }) => {
    // console.log({ movies });
    return (
        <section className='cont__movie'>
            <div className='container'>
                <div className='movie__inner'>
                    {movies.map((movie, idx) => (
                        <MoiveItem
                            key={idx}
                            movieId={movie.id}
                            title={movie.title}
                            voteAverage={movie.vote_average}
                            poster={movie.poster_path}
                            releasedate={movie.release_date}
                            originName={movie.original_title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MovieCont;
