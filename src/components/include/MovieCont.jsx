import React from "react";

const MoiveInfo = ({ title, voteAverage, poster, releasedate, originName }) => {
	return (
		<article className='card'>
			<figure className='card__top'>
				<a href='/'>
					<img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={`${originName} poster`} />
				</a>
			</figure>
			<div className='card__bottom'>
				<a className='title' href='/'>
					{title}
				</a>
				<p className='vote_average'>평점 : {voteAverage}</p>
				<p className='releasedate'>{releasedate}</p>
			</div>
		</article>
	);
};

const MovieCont = ({ movies }) => {
	console.log({ movies });
	return (
		<section className='cont__movie'>
			<div className='container'>
				<div className='movie__inner'>
					{movies.map((movie, idx) => (
						<MoiveInfo
							key={idx}
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
