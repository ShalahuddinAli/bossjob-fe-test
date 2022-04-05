import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { getJobsSucceeded } from './actions';

import { GET_JOBS_REQUESTED } from './types';
import { BOSSJOB_SEARCH } from '../../constant/ApiConstant';

function* getJobs({ payload }) {
	try {
		const { data } = yield axios.request({
			method: 'get',
			url: BOSSJOB_SEARCH,
			params: payload,
		});
		console.log(payload, 'saga');
		yield put(getJobsSucceeded(data));
	} catch (err) {
		console.log('FAILED saga.js');
	}
}

function* rootSaga() {
	yield takeLatest(GET_JOBS_REQUESTED, getJobs);
}

export default rootSaga;
