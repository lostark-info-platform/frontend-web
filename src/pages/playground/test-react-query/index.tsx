import api from '@/services/api';
import testReactQueryKeys from '@/services/queryKeys/testReactQuery';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';

// https://stackoverflow.com/questions/76961108/react-query-onsuccess-onerror-onsettled-are-deprecated-what-should-i-use-ins
function PlaygroundTestReactQueryPage() {
	const id = '2';
	const { data } = useQuery({
		queryKey: testReactQueryKeys.testReactQuery({ id }),
		queryFn: () => api.getTestReactQuery({ id }),
		throwOnError: true,
	});

	return <>{data?.testReactQuery}</>;
}

export default PlaygroundTestReactQueryPage;

export const getServerSideProps = async () => {
	const queryClient = new QueryClient();

	const id = '2';
	await queryClient.prefetchQuery({
		queryKey: testReactQueryKeys.testReactQuery({ id }),
		queryFn: () => api.getTestReactQuery({ id }),
	});

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};
