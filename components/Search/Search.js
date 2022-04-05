import React from 'react';
import styles from './Search.module.css';
import SearchBar from './SearchBar';
import FilterButton from './FilterButton';

const Search = () => {
	return (
		<div className={styles.container}>
			<SearchBar />
			<FilterButton />
		</div>
	);
};

export default Search;
