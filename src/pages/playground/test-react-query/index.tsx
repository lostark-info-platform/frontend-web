import useTestReactQuery from '@/hooks/testReactQuery/useTestReactQuery';
import { QueryClient, dehydrate } from '@tanstack/react-query';
// https://stackoverflow.com/questions/76961108/react-query-onsuccess-onerror-onsettled-are-deprecated-what-should-i-use-ins
function PlaygroundTestReactQueryPage() {
	const id = '2';
	const { data } = useTestReactQuery({ id });

	return <>{data?.testReactQuery}</>;
}

export default PlaygroundTestReactQueryPage;

export const getServerSideProps = async () => {
	const queryClient = new QueryClient();

	const id = '2';
	await queryClient.prefetchQuery({ ...useTestReactQuery.queryFactory(id) });

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};
