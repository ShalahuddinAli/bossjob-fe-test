import { useState } from 'react';
import JobItems from './JobItems';
import Pagination from '../Pagination/Pagination';
import classes from './JobsList.module.css';
import { useDispatch, useSelector } from 'react-redux';

const JobsList = ({ data }) => {
	const dispatch = useDispatch();
	const jobs = useSelector((state) => state.jobs.data);
	console.log(jobs, 'jobslist');
	const [currentPage, setCurrentPage] = useState(1);
	return (
		<div className={classes.container}>
			<div className={classes.jobsFoundWrapper}>
				<p>{jobs.total_num} jobs found</p>
			</div>
			{jobs.jobs.map((job) => (
				<JobItems key={job.id} job={job} />
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
