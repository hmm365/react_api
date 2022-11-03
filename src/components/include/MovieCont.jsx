import React from "react";

const MovieCont = ({ movies }) => {
	return (
		<section className='cont__movie'>
			<div className='container'>
				<div className='movie__inner'>
					<article className='card'>
						<figure className='card__header'>
							<img
								src='https://images.unsplash.com/photo-1667312402040-2a656f309e4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
								alt='고양이 사진1'
							/>
						</figure>
						<div className='card__body'>
							<h3 className='tit'>저녁 에</h3>
							<p className='desc'>
								저렇게 많은 별 중에서
								<br />
								별 하나가 나를 내려다본다
								<br />
								이렇게 많은 사람 중에서
								<br />그 별 하나를 쳐다본다
							</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default MovieCont;
