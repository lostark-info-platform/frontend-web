import api from '@/services/api';
import { useEffect } from 'react';

function PlaygroundTestApiPage() {
	useEffect(() => {
		(async () => {
			const result = await api.getUsersMe();
			console.log('result: ', result);
		})();
	}, []);
	return <></>;
}

export default PlaygroundTestApiPage;
