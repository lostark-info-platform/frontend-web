import useTestReactQuery from '@/hooks/testReactQuery/useTestReactQuery';
import api from '@/services/api';
import extendsGetServerSideProps from '@/services/next/extendsGetServerSideProps';
// import ServerSideError from '@/services/next/serverSideError';
import testReactQueryKeys from '@/services/queryKeys/testReactQuery';

const TestExtendsGetServerSidePropsPage = () => {
	const { data } = useTestReactQuery({ id: '2' });
	return <>{data?.testReactQuery}</>;
};

export default TestExtendsGetServerSidePropsPage;

export const getServerSideProps = extendsGetServerSideProps(
	async ({ queryClient, dehydrate }) => {
		const id = '2';

		await queryClient.prefetchQuery({
			queryKey: testReactQueryKeys.testReactQuery({ id }),
			queryFn: () => api.getTestReactQuery({ id }),
		});

		// const serverSideError = new ServerSideError();
		// throw serverSideError.notFound();
		// throw serverSideError.redirect({
		// 	destination: '/',
		// });

		return {
			props: {
				dehydratedState: dehydrate(queryClient),
			},
		};
	}
);
