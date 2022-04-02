import React from 'react';
import JobItems from './JobItems';
import PageDirectory from './PageDirectory';
import classes from './JobsList.module.css';

const JobsList = ({ data }) => {
	return (
		<div className={classes.container}>
			<div className={classes.jobsFoundWrapper}>
				<p>{data.size} jobs found</p>
			</div>
			{data.jobs.map((job) => (
				<JobItems key={job.id} />
			))}
			<PageDirectory />
		</div>
	);
};

export default JobsList;
