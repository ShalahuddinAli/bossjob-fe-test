import JobItems from './JobItems';
import Pagination from '../Pagination/Pagination';
import classes from './JobsList.module.css';
import { useSelector } from 'react-redux';

const JobsList = () => {
	const jobs = useSelector((state) => state.jobs.data);

	return (
		<div className={classes.container}>
			<div className={classes.jobsFoundWrapper}>
				<p>{jobs.total_num} jobs found</p>
			</div>
			{jobs.jobs.map((job) => (
				<JobItems key={job.id} job={job} />
			))}
			<Pagination
				currentPage={jobs.page}
				totalCount={jobs.total_num}
				pageSize={jobs.size}
				query={jobs.query}
			/>
		</div>
	);
};

export default JobsList;
