import React from 'react';
import '../stylesheets/navbar.css';

const Navbar = () => {
	return (
		<nav className='teal'>
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<p className='brand-logo'>Meme Generator</p>
		</nav>
	);
};

export default Navbar;
