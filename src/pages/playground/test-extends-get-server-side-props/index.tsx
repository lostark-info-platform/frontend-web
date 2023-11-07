import useTestReactQuery from '@/hooks/testReactQuery/useTestReactQuery';
import extendsGetServerSideProps from '@/services/next/enhanceGetServerSideProps';
// import ServerSideError from '@/services/next/serverSideError';

const TestExtendsGetServerSidePropsPage = () => {
	const { data } = useTestReactQuery({ id: '3' });
	return <>{data?.testReactQuery}</>;
};

export default TestExtendsGetServerSidePropsPage;

export const getServerSideProps = extendsGetServerSideProps(
	async ({ queryClient }) => {
		const id = '3';

		await queryClient.prefetchQuery({
			...useTestReactQuery.queryFactory(id),
		});

		// const serverSideError = new ServerSideError();
		// throw serverSideError.notFound();
		// throw serverSideError.redirect({
		// 	destination: '/',
		// });
	}
);
