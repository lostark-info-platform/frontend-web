import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import ServerSideError from './serverSideError';
import { apiService, tokenService } from '../../services';
import cookieModule from '@/module/cookie/cookie.module';

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
			const { ssrCallback, permissions } = props ?? {};
			const { user: permissionUser = true } = permissions ?? {};

			const injectedProps: GetServerSideInjectedProps = {
				context,
				queryClient: new QueryClient(),
			};

			let token: string | null = null;
			if (permissionUser) {
				token = tokenService.getToken();
				if (!token) {
					const response = await getTokenWithRefreshToken(context);

					if (response) {
						cookieModule.setSSRItem(
							'refreshToken',
							response.refreshToken
						)(context.res.setHeader);
						token = response.token;
					}
				}
			}

			const { props: resultProps, ...result } =
				(ssrCallback && (await ssrCallback(injectedProps))) ?? {};

			return {
				...result,
				props: {
					dehydratedState: dehydrate(injectedProps.queryClient),
					...resultProps,
					token: token && tokenService.encryptToken(token),
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
/**
 * 1. token이 없는 경우 refreshToken을 이용하여 token을 발급받는다.
 * 2. token이 있는 경우 token을 이용하여 api 요청을 보낸다.
 */
const getTokenWithRefreshToken = async (context: GetServerSidePropsContext) => {
	const refreshToken = cookieModule.getSSRItem('refreshToken')(
		context.req.headers.cookie
	);

	if (refreshToken) {
		const { data: response } = await apiService.postUsersRefresh({
			refreshToken,
		});

		return response;
	}
};

export default enhanceGetServerSideProps;
