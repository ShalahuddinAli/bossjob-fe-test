import { END } from 'redux-saga';

import Header from '/components/Header';
import Search from '../components/Search/Search';
import JobsList from '../components/Jobs/JobsList';
import { wrapper } from '../components/redux/store';
import { getJobsRequested } from '../components/redux/actions';

import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.app}>
			<div className={styles.appWrapper}>
				<Header />
				<Search />
				<div style={{ padding: '10px 20px' }}>
					<JobsList />
				</div>
			</div>
		</div>
	);
}

export const getStaticProps = wrapper.getStaticProps((store) => async ({}) => {
	store.dispatch(getJobsRequested());

	store.dispatch(END);

	await store.sagaTask.toPromise();
});
