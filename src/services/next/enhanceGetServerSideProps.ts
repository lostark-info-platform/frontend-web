import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import ServerSideError from './serverSideError';
import { tokenService } from '@/services';
import { apiService, cookieService } from '..';

type InjectedProps = {
	queryClient: QueryClient;
};

type GetServerSideInjectedProps = {
	context: GetServerSidePropsContext;
} & InjectedProps;

type SsrCallback = (
	context: GetServerSideInjectedProps
) => Promise<GetServerSidePropsResult<any>> | Promise<any> | any;

type EnhanceGetServerSideProps = {
	ssrCallback?: SsrCallback;
	permissions?: {
		user: boolean;
	};
};

const enhanceGetServerSideProps = (props?: EnhanceGetServerSideProps) => {
	return async (context: GetServerSidePropsContext) => {
		try {
			const { ssrCallback = () => {}, permissions } = props ?? {};
			const { user: permissionUser = true } = permissions ?? {};

			if (permissionUser) {
				await conditionSettingsTokenForUser();
			}

			const injectedProps = {
				context,
				queryClient: new QueryClient(),
			};

			const { props: resultProps, ...result } =
				await ssrCallback(injectedProps);

			return {
				...result,
				props: {
					dehydratedState: dehydrate(injectedProps.queryClient),
					...resultProps,
				},
			};
		} catch (error) {
			if (error instanceof ServerSideError) {
				const errorInfo = error.getErrorInfo();
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

const conditionSettingsTokenForUser = async () => {
	const refreshToken = cookieService.getItem('refreshToken');

	if (!tokenService.getToken()) {
		if (refreshToken) {
			const response = await apiService.postUsersRefresh({
				refreshToken,
			});
			tokenService.setToken(response.data.token);
		}
	}
};

export default enhanceGetServerSideProps;
