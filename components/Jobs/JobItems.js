import React from 'react';
import classes from './JobItems.module.css';

const JobItems = (props) => {
	return (
		<div className={classes.container}>
			<div className={classes.roleContainer}>
				<h4>Front-end Developer</h4>
				<p>$30k-$40k</p>
			</div>
			<div className={classes.roleInfos}>
				<div className={classes.infoWrapper}>
					<img
						src="https://assets.bossjob.com/website/pin.svg"
						alt="search"
						width={13}
						height={13}
					/>
					<p>Cebu city</p>
				</div>
				<div className={classes.infoWrapper}>
					<img
						src="https://assets.bossjob.com/website/briefcase.svg"
						alt="search"
						width={13}
						height={13}
					/>
					<p>1-3 years</p>
				</div>
				<div className={classes.infoWrapper}>
					<img
						src="https://assets.bossjob.com/website/education.svg"
						alt="search"
						width={13}
						height={13}
					/>
					<p>Diploma</p>
				</div>
				<div className={classes.infoWrapper}>
					<img
						src="https://assets.bossjob.com/website/clock.svg"
						alt="search"
						width={13}
						height={13}
					/>
					<p>Full time</p>
				</div>
			</div>
			<div className={classes.company}>
				<img
					src="https://assets.bossjob.com/companies/15216/logo/7g5C0SNFrpzV3w92JAIbAKSLvmBnNAhSe5Y4bEzS.jpeg"
					alt="search"
					width={30}
					height={30}
				/>
				<p>Full time</p>
			</div>
		</div>
	);
};

export default JobItems;
