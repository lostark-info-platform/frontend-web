import { apiService } from '@/services';
import { useState } from 'react';

const ConfigClientBaseUrlPage = () => {
	const [url, setUrl] = useState('http://localhost:3000/auth/complete');
	return (
		<div>
			<input
				value={url}
				onChange={(event) => {
					setUrl(event.target.value);
				}}
			/>
			<button
				onClick={async () => {
					try {
						await apiService.postConfigClientBaseUrl(url);
						alert('성공');
					} catch (error) {
						alert('실패');
					}
				}}
			>
				update
			</button>
		</div>
	);
};

export default ConfigClientBaseUrlPage;
