import React from 'react';
import { useRouter } from 'next/router';

const JobTitle = () => {
	const router = useRouter();

	return (
		<div style={{ position: 'absolute', top: '50%', left: '50%' }}>
			{router.query.jid}
		</div>
	);
};

export default JobTitle;
