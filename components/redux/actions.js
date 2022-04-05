import { GET_JOBS_REQUESTED, GET_JOBS_SUCCEEDED } from './types';

export const getJobsRequested = (query = '', page = 1) => {
	return {
		type: GET_JOBS_REQUESTED,
		payload: { page, query },
	};
};

export const getJobsSucceeded = (data) => {
	return {
		type: GET_JOBS_SUCCEEDED,
		payload: data,
	};
};
