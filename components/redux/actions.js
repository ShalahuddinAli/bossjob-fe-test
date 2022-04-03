import { GET_JOBS_REQUESTED, GET_JOBS_SUCCEEDED } from './types';

export const getJobsRequested = (params) => {
	return {
		type: GET_JOBS_REQUESTED,
		payload: params,
	};
};

export const getJobsSucceeded = (data) => {
	return {
		type: GET_JOBS_SUCCEEDED,
		payload: data,
	};
};
