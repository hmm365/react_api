import React from "react";

const ReferencesText = ({ id, title, desc, use }) => {
	return (
		<li>
			<a href='/'>
				<span className='num'>{id}</span>
				<span className='name'>{title}</span>
				<span className='desc'>{desc}</span>
				<span className='star'>{use}</span>
			</a>
		</li>
	);
};

const RaferCont = ({ references }) => {
	return (
		<section className='cont__refer'>
			<div className='container'>
				<div className='refer__inner'>
					<h2>CSS</h2>
					<ul className='refer__list'>
						{references.map((refer, idx) => (
							<ReferencesText key={idx} id={refer.id} title={refer.title} desc={refer.desc} use={refer.use} />
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default RaferCont;
