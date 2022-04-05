import JobItems from './JobItems';
import Pagination from '../Pagination/Pagination';
import styles from './JobsList.module.css';
import { useSelector } from 'react-redux';

const JobsList = () => {
	const data = useSelector((state) => state.data);

	return (
		<div className={styles.container}>
			<div className={styles.jobsFoundWrapper}>
				<p>{data.total_num} jobs found</p>
			</div>
			{data.jobs.map((job) => (
				<JobItems job={job} key={job.id} />
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
