import { DehydratedState, QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import ServerSideError from './serverSideError';

type InjectedProps = {
	queryClient: QueryClient;
	dehydrate: typeof dehydrate;
};

type GetServerSideInjectedProps = {
	context: GetServerSidePropsContext;
} & InjectedProps;

type ReturnProps = {
	dehydratedState?: DehydratedState;
};

type Callback = (
	context: GetServerSideInjectedProps
) => Promise<GetServerSidePropsResult<ReturnProps>>;

const extendsGetServerSideProps = (callback: Callback) => {
	return async (context: GetServerSidePropsContext) => {
		try {
			const injectedProps = {
				context,
				queryClient: new QueryClient(),
				dehydrate,
			};

			return (await callback?.(injectedProps)) || {};
		} catch (error) {
			if (error instanceof ServerSideError) {
				const errorInfo = error.getErrorInfo();
				console.log('errorInfo: ', errorInfo);
				if (errorInfo) {
					return errorInfo.serverSideResult;
				}
			}

			return {
				props: {},
			};
		}
	};
};

export default extendsGetServerSideProps;
