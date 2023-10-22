// import api from '@/services/api';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';

function getTest() {
	return { test: 'testBefore' };
}
// https://stackoverflow.com/questions/76961108/react-query-onsuccess-onerror-onsettled-are-deprecated-what-should-i-use-ins
function PlaygroundTestReactQueryPage() {
	const { data } = useQuery({
		queryKey: ['test'],
		queryFn: () => ({
			test: 'testAfter',
		}),
		throwOnError: true,
		retry: 1,
	});

	return <>{data?.test}</>;
}

export default PlaygroundTestReactQueryPage;

export const getServerSideProps = async () => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['test'],
		queryFn: getTest,
	});

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};
