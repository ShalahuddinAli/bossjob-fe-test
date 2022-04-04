import JobItems from './JobItems';
import Pagination from '../Pagination/Pagination';
import classes from './JobsList.module.css';
import { useSelector } from 'react-redux';

const JobsList = () => {
	const data = useSelector((state) => state.data);

	return (
		<div className={classes.container}>
			<div className={classes.jobsFoundWrapper}>
				<p>{data.total_num} jobs found</p>
			</div>
			{data.jobs.map((job) => (
				<JobItems key={job.id} job={job} />
			))}
			<Pagination
				currentPage={data.page}
				totalCount={data.total_pages}
				query={data.query}
			/>
		</div>
	);
};

export default JobsList;
