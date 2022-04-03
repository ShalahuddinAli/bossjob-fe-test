import { GET_JOBS_REQUESTED, GET_JOBS_SUCCEEDED } from './types';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
	jobs: [],
	job: '',
};

function reducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case HYDRATE: {
			return { ...state, ...payload };
		}

		case GET_JOBS_SUCCEEDED: {
			return { ...state, jobs: payload };
		}

		default:
			return state;
	}
}

export default reducer;
