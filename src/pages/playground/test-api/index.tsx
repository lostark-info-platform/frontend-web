import { apiService } from '@/services';
import { useEffect } from 'react';

function PlaygroundTestApiPage() {
	useEffect(() => {
		(async () => {
			const result = await apiService.getUsersMe();
			console.log('result: ', result);
		})();
	}, []);
	return <></>;
}

export default PlaygroundTestApiPage;
