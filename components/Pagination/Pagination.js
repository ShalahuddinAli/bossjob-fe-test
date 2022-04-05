import React from 'react';
import { usePagination, DOTS } from './usePagination';
import styles from './Pagination.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getJobsRequested } from '../redux/actions';

import {
	BOSSJOB_PAGINATION_SIBLINGS as siblingCount,
	BOSSJOB_PAGE_SIZE as pageSize,
} from '../../constant/ApiConstant';

const Pagination = ({ totalCount, currentPage, query }) => {
	const dispatch = useDispatch();

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

		dispatch(getJobsRequested(query, pageToChange));
	};

	let lastPage = paginationRange[paginationRange.length - 1];

	return (
		<ul className={styles.container}>
			{/* previous arrow pagination */}
			{currentPage !== 1 && (
				<li
					className={styles.paginationItem}
					onClick={() => onPageChange('prev')}>
					<div className={styles.arrow}>&#60;</div>
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
								? styles.currentPage
								: styles.paginationItem
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
					className={styles.paginationItem}
					onClick={() => onPageChange('next')}>
					<div className={styles.arrow}>&#62;</div>
				</li>
			)}
		</ul>
	);
};

export default Pagination;
