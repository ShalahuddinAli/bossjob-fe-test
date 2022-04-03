import React from 'react';
import { usePagination, DOTS } from './usePagination';
import classes from './Pagination.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getJobsRequested } from '../redux/actions';

import { BOSSJOB_PAGINATION_SIBLINGS as siblingCount } from '../../constant/ApiConstant';

const Pagination = (props) => {
	const dispatch = useDispatch();
	const { totalCount, currentPage, pageSize, query } = props;

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}

	const onPageChange = (type) => {
		let pageToChange;

		if (typeof type === 'number') {
			pageToChange = type;
		} else if (type === 'next') {
			pageToChange = currentPage + 1;
		} else {
			pageToChange = currentPage - 1;
		}

		dispatch(getJobsRequested({ page: pageToChange, query: query }));
	};

	let lastPage = paginationRange[paginationRange.length - 1];

	return (
		<ul className={classes.container}>
			{/* previous arrow pagination */}
			{currentPage !== 1 && (
				<li
					className={classes.paginationItem}
					onClick={() => onPageChange('prev')}>
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
						key={index}
						id={pageNumber}>
						{pageNumber}
					</li>
				);
			})}
			{/* next arrow pagination */}
			{currentPage !== lastPage && (
				<li
					className={classes.paginationItem}
					onClick={() => onPageChange('next')}>
					<div className={classes.arrow}>&#62;</div>
				</li>
			)}
		</ul>
	);
};

export default Pagination;
