import { useEffect } from 'react';
import { END } from 'redux-saga';
import { useDispatch, useSelector } from 'react-redux';

import Header from '/components/Header';
import Search from '../components/Search/Search';
import JobsList from '../components/Jobs/JobsList';
import { wrapper } from '../components/redux/store';
import { getJobsRequested } from '../components/redux/actions';
import styles from '../styles/Home.module.css';

const jobs = {
	message: 'OK',
	data: {
		jobs: [
			{
				id: 17348,
				degree: 'Diploma',
				job_title: 'System Engineer',
				job_country: 'Philippines',
				job_type: 'Full-time',
				job_location: 'Makati',
				salary_range_from: 30000,
				salary_range_to: 40000,
				company_name: 'wealth access inc.',
				company_location: 'Makati',
				xp_lvl: '3 - 5 years',
			},
			{
				id: 17567,
				degree: 'Diploma',
				job_title: 'gardener',
				job_country: 'Philippines',
				job_type: 'Full-time',
				job_location: 'Cebu',
				salary_range_from: 30000,
				salary_range_to: 40000,
				company_name: 'Hello inc.',
				company_location: 'Cebu',
				xp_lvl: '3 - 5 years',
			},
			{
				id: 1723,
				degree: 'Diploma',
				job_title: 'developer',
				job_country: 'Philippines',
				job_type: 'Full-time',
				job_location: 'Zamboanga',
				salary_range_from: 30000,
				salary_range_to: 40000,
				company_name: 'Hi Solution inc.',
				company_location: 'Zamboanga',
				xp_lvl: '3 - 5 years',
			},
			{
				id: 14323,
				degree: 'Degree',
				job_title: 'Cleaner',
				job_country: 'Philippines',
				job_type: 'Full-time',
				job_location: 'Zamboanga',
				salary_range_from: 30000,
				salary_range_to: 40000,
				company_name: 'Hi Solution inc.',
				company_location: 'Zamboanga',
				xp_lvl: '3 - 5 years',
			},
			{
				id: 1733,
				degree: 'Diploma',
				job_title: 'developer',
				job_country: 'Philippines',
				job_type: 'Full-time',
				job_location: 'Zamboanga',
				salary_range_from: 30000,
				salary_range_to: 40000,
				company_name: 'Hi Solution inc.',
				company_location: 'Zamboanga',
				xp_lvl: '3 - 5 years',
			},
		],
		page: 1,
		size: 10,
		total_num: 265,
		sort: 1,
	},
};

export default function Home(props) {
	const { data } = jobs;

	const dispatch = useDispatch();
	const jubs = useSelector((state) => state);

	console.log(jubs, 'jubo');

	// useEffect(() => {
	// 	dispatch(getJobsRequested());
	// }, [dispatch]);

	return (
		<div className={styles.app}>
			<div className={styles.appWrapper}>
				<Header />
				<Search />
				<div style={{ padding: '10px 20px' }}>
					<JobsList data={data} />
				</div>
			</div>
		</div>
	);
}

// export const getStaticProps = async () => {
// 	const response = await fetch(
// 		'https://search.bossjob.com/api/v1/search/job_filter?page=1&query&size=12'
// 	);

// 	const jobs = await response.json();

// 	return {
// 		props: {
// 			jobs: jobs.data,
// 		},
// 		revalidate: 10,
// 	};
// };

export const getStaticProps = wrapper.getStaticProps((store) => async ({}) => {
	store.dispatch(getJobsRequested());

	store.dispatch(END);

	await store.sagaTask.toPromise();
});
