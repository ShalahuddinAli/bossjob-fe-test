import { CLEAR_JOBS, GET_JOBS_REQUESTED, GET_JOBS_SUCCEEDED } from './types';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
	data: {},
	job: '',
};

function reducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case HYDRATE: {
			return { ...state, ...payload };
		}

		case GET_JOBS_SUCCEEDED: {
			return {
				...state,
				data: payload.data,
			};
		}

		default:
			return state;
	}
}

export default reducer;
