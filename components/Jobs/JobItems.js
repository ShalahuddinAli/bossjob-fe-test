/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import classes from './JobItems.module.css';
import { useRouter } from 'next/router';

const JobItems = ({ job }) => {
	const router = useRouter();

	const handleViewJob = (title) => {
		router.push('/job/' + title);
	};

	return (
		<div
			className={classes.container}
			onClick={(title) => handleViewJob(job.job_title)}>
			<div className={classes.roleContainer}>
				<h4>{job.job_title}</h4>
				<p>
					&#8369;{job.salary_range_from / 1000}k - &#8369;
					{job.salary_range_to / 1000}k
				</p>
			</div>
			<div className={classes.roleInfos}>
				<div className={classes.infoWrapper}>
					<img
						src="https://assets.bossjob.com/website/pin.svg"
						alt="search"
						width={13}
						height={13}
					/>
					<p>{job.job_location}</p>
				</div>
				<div className={classes.infoWrapper}>
					<img
						src="https://assets.bossjob.com/website/briefcase.svg"
						alt="search"
						width={13}
						height={13}
					/>
					<p>{job.xp_lvl}</p>
				</div>
				<div className={classes.infoWrapper}>
					<img
						src="https://assets.bossjob.com/website/education.svg"
						alt="search"
						width={13}
						height={13}
					/>
					<p>{job.degree}</p>
				</div>
				<div className={classes.infoWrapper}>
					<img
						src="https://assets.bossjob.com/website/clock.svg"
						alt="search"
						width={13}
						height={13}
					/>
					<p>{job.job_type}</p>
				</div>
			</div>
			<div className={classes.company}>
				<img src={job.company_logo} width={30} height={30} />
				<p>{job.company_name}</p>
			</div>
		</div>
	);
};

export default JobItems;
