import React from 'react';
import { usePagination, DOTS } from './usePagination';
import classes from './Pagination.module.css';

const Pagination = (props) => {
	const {
		onPageChange,
		totalCount,
		siblingCount = 1,
		currentPage,
		pageSize,
	} = props;

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	let lastPage = paginationRange[paginationRange.length - 1];

	return (
		<ul className={classes.container}>
			{currentPage !== 1 && (
				<li className={classes.paginationItem} onClick={onPrevious}>
					<div className={classes.arrow}>&#60;</div>
				</li>
			)}
			{paginationRange.map((pageNumber, index) => {
				if (pageNumber === DOTS) {
					return <li key={index}>&#8230;</li>;
				}

				return (
					<li
						className={
							pageNumber === currentPage
								? classes.currentPage
								: classes.paginationItem
						}
						onClick={() => onPageChange(pageNumber)}
						key={index}>
						{pageNumber}
					</li>
				);
			})}
			{currentPage !== lastPage && (
				<li className={classes.paginationItem} onClick={onNext}>
					<div className={classes.arrow}>&#62;</div>
				</li>
			)}
		</ul>
	);
};

export default Pagination;
