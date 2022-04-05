/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import styles from './JobItems.module.css';
import { useRouter } from 'next/router';
import moment from 'moment';

const JobItems = ({ job }) => {
	const router = useRouter();

	const createdDuration = (updateTime) => {
		const dateItem = new Date(updateTime);
		const dateNow = new Date();

		const diff = new Date(dateNow.getTime() - dateItem.getTime());
		console.log(diff);

		//if > 1 year
		if (diff.getUTCFullYear() - 1970 > 0)
			return `${diff.getUTCFullYear() - 1970} ${
				diff.getUTCFullYear() - 1970 > 1 ? 'years' : 'year'
			} ago`;

		//if > 1 month
		if (diff.getUTCMonth() > 0)
			return `${diff.getUTCMonth()} ${
				diff.getUTCMonth() > 1 ? 'months' : 'month'
			} ago`;

		//if > 1 day
		if (diff.getUTCDate() - 1 > 0)
			return `${diff.getUTCDate() - 1} ${
				diff.getUTCDate() - 1 > 1 ? 'days' : 'day'
			} ago`;

		//if > 1 hour
		if (diff.getUTCHours() > 0)
			return `${diff.getUTCHours()} ${
				diff.getUTCHours() > 1 ? 'hours' : 'hour'
			} ago`;

		//if > 1 min
		if (diff.getUTCMinutes() > 0)
			return `${diff.getUTCMinutes()} ${
				diff.getUTCMinutes() > 1 ? 'minutes' : 'minute'
			} ago`;

		return 'just now';
	};

	const handleViewJob = (title) => {
		router.push({ pathname: '/job/[jid]', query: { jid: title } });
	};

	const salaryRange = (from, to) => {
		if (typeof from !== 'number' || typeof from !== 'number')
			return <p>{from}</p>;

		return (
			<p>
				&#8369;{from / 1000}k - &#8369;
				{to / 1000}k
			</p>
		);
	};

	return (
		<div
			className={styles.container}
			onClick={(title) => handleViewJob(job.job_title)}>
			<div className={styles.roleContainer}>
				<h4>{job.job_title}</h4>
				{salaryRange(job.salary_range_from, job.salary_range_to)}
			</div>
			<div className={styles.roleInfos}>
				<div className={styles.infoWrapper}>
					<img
						src="https://assets.bossjob.com/website/pin.svg"
						alt="search"
						width={13}
						height={13}
					/>
					<p>{job.job_location}</p>
				</div>
				<div className={styles.infoWrapper}>
					<img
						src="https://assets.bossjob.com/website/briefcase.svg"
						alt="search"
						width={13}
						height={13}
					/>
					<p>{job.xp_lvl}</p>
				</div>
				<div className={styles.infoWrapper}>
					<img
						src="https://assets.bossjob.com/website/education.svg"
						alt="search"
						width={13}
						height={13}
					/>
					<p>{job.degree}</p>
				</div>
				<div className={styles.infoWrapper}>
					<img
						src="https://assets.bossjob.com/website/clock.svg"
						alt="search"
						width={13}
						height={13}
					/>
					<p>{job.job_type}</p>
				</div>
			</div>
			<div className={styles.companyAndDateWrapper}>
				<div className={styles.company}>
					<img src={job.company_logo} width={30} height={30} />
					<p>{job.company_name}</p>
				</div>
				<div className={styles.date}>
					<p>{createdDuration(job.updated_at)}</p>
				</div>
			</div>
		</div>
	);
};

export default JobItems;
