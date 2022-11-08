import React from "react";

const MoiveItem = movie => {
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
					<div className='movie__card__wrap'>
						{popularMovies.map((movie, idx) =>
							idx < 10 ? (
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
							) : null
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MoviePopular;
