import api from '@/services/api';
import { useQuery } from '@tanstack/react-query';

// https://stackoverflow.com/questions/76961108/react-query-onsuccess-onerror-onsettled-are-deprecated-what-should-i-use-ins
function PlaygroundTestReactQueryPage() {
	const { data } = useQuery({
		queryKey: ['users', 'me'],
		queryFn: api.getUsersMe,
		// throwOnError: true,
		meta: {},
	});
	return <>{data}</>;
}

export default PlaygroundTestReactQueryPage;
