import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header id='header'>
			<div className='header__left'>
				<ul>
					<li>
						<Link to='/about'>About</Link>
						<Link to='/reference'>reference</Link>
					</li>
				</ul>
			</div>
			<h1 className='header__center'>
				<Link to='/'>API SITE</Link>
			</h1>
			<div className='header__right'>
				<ul>
					<li>
						<Link to='/youtube'>Youtube</Link>
					</li>
					<li>
						<Link to='/movie'>Movie</Link>
					</li>
					<li>
						<Link to='/unsplash'>Unsplash</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
