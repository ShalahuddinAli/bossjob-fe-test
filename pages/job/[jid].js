import React from 'react';
import { useRouter } from 'next/router';

const JobTitle = () => {
	const router = useRouter();
	console.log(router);
	return <div>jobTitle</div>;
};

export default JobTitle;
