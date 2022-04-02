import React from 'react';
import classes from './SearchBar.module.css';
import Image from 'next/image';
// import SearchImage from 'https://assets.bossjob.com/website/Search.svg';

const SearchBar = () => {
	return (
		<div className={classes.container}>
			<form>
				<div className={classes.wrapper}>
					<img
						src="https://assets.bossjob.com/website/Search.svg"
						alt="search"
						width={18}
						height={18}
					/>
					<input placeholder="Search for job title or company name" />
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
