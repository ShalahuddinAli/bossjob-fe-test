import { useState } from 'react';
import JobItems from './JobItems';
import Pagination from '../Pagination/Pagination';
import classes from './JobsList.module.css';

const JobsList = ({ data }) => {
	const [currentPage, setCurrentPage] = useState(1);
	return (
		<div className={classes.container}>
			<div className={classes.jobsFoundWrapper}>
				<p>{data.size} jobs found</p>
			</div>
			{data.jobs.map((job) => (
				<JobItems key={job.id} />
			))}
			<Pagination
				currentPage={2}
				totalCount={42}
				pageSize={6}
				onPageChange={(page) => setCurrentPage(page)}
			/>
		</div>
	);
};

export default JobsList;
