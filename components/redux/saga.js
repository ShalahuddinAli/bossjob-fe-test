import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { clearJobs, getJobsSucceeded } from './actions';
import { GET_JOBS_REQUESTED } from './types';
import { BOSSJOB_SEARCH } from '../../constant/ApiConstant';

function* getJobs({ payload }) {
	try {
		const { data } = yield axios.request({
			method: 'get',
			url: BOSSJOB_SEARCH,
			params: payload,
		});
		yield put(getJobsSucceeded(data));
	} catch (err) {
		console.log('FAILED saga.js');
	}
}

function* rootSaga() {
	yield takeLatest(GET_JOBS_REQUESTED, getJobs);
}

export default rootSaga;
