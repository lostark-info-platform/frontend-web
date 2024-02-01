import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import ServerSideError from './serverSideError';

type InjectedProps = {
	queryClient: QueryClient;
};

type GetServerSideInjectedProps = {
	context: GetServerSidePropsContext;
} & InjectedProps;

type SsrCallback = (
	context: GetServerSideInjectedProps
) => Promise<GetServerSidePropsResult<any>> | Promise<any> | any;

export type EnhanceGetServerSideProps = {
	ssrCallback?: SsrCallback;
};

const enhanceGetServerSideProps = (props?: EnhanceGetServerSideProps) => {
	return async (context: GetServerSidePropsContext) => {
		try {
			const { ssrCallback } = props ?? {};

			const injectedProps: GetServerSideInjectedProps = {
				context,
				queryClient: new QueryClient(),
			};

			const { props: resultProps, ...result } =
				(ssrCallback && (await ssrCallback(injectedProps))) ?? {};

			return {
				...result,
				props: {
					dehydratedState: dehydrate(injectedProps.queryClient),
					...resultProps,
				},
			};
		} catch (error) {
			if (error instanceof ServerSideError) {
				return serverSideErrorResult(error);
			}

			return {
				props: {},
			};
		}
	};
};

export const serverSideErrorResult = (error: ServerSideError) => {
	const errorInfo = error.getErrorInfo();
	if (errorInfo) {
		return errorInfo.serverSideResult;
	}
};

export default enhanceGetServerSideProps;
