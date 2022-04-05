/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getJobsRequested } from '../redux/actions';
import styles from './SearchBar.module.css';

const SearchBar = () => {
	const dispatch = useDispatch();
	const [text, setText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getJobsRequested(text));
	};
	const handleChange = (text) => {
		setText(text.target.value);
	};

	return (
		<div className={styles.container}>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className={styles.wrapper}>
					<img
						src="https://assets.bossjob.com/website/Search.svg"
						alt="search"
						width={18}
						height={18}
					/>
					<input
						placeholder="Search for job title or company name"
						value={text}
						onChange={(text) => handleChange(text)}
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
