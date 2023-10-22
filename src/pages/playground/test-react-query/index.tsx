import api from '@/services/api';
import { useQuery } from '@tanstack/react-query';

// https://stackoverflow.com/questions/76961108/react-query-onsuccess-onerror-onsettled-are-deprecated-what-should-i-use-ins
function PlaygroundTestReactQueryPage() {
	useQuery({
		queryKey: ['users', 'me'],
		queryFn: () => api.getUsersMe(),
		throwOnError: true,
		retry: 1,
	});

	return <>{1}</>;
}

export default PlaygroundTestReactQueryPage;
