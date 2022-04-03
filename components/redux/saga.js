import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getJobsSucceeded } from './actions';
import { GET_JOBS_REQUESTED } from './types';

function* getJobs() {
	try {
		const { data } = yield axios.request({
			method: 'get',
			url: 'https://search.bossjob.com/api/v1/search/job_filter?page=1&query&size=12',
		});

		console.log(data, 'PASS saga.js');
		yield put(getJobsSucceeded(data));
	} catch (err) {
		console.log('FAILED saga.js');
	}
}

function* rootSaga() {
	yield takeLatest(GET_JOBS_REQUESTED, getJobs);
}

export default rootSaga;
