import { GetServerSidePropsContext } from 'next';
import { apiService, tokenService } from '@/services';
import cookieModule from '@/module/cookie/cookie.module';
import ServerSideError from './serverSideError';
import { serverSideErrorResult } from './enhanceGetServerSideProps';

const withAuthSSR = () => {
	return async (context: GetServerSidePropsContext) => {
		// const queryClient = new QueryClient();

		try {
			const refreshToken = cookieModule.getSSRItem('refreshToken')(
				context.req.headers.cookie
			);

			if (refreshToken) {
				const { data: response } = await apiService.postAuthRefresh({
					refreshToken,
				});

				cookieModule.setSSRItem(
					'refreshToken',
					response.refreshToken
				)(context.res.setHeader);

				return {
					props: {
						encryptAccessToken:
							tokenService.formatEncryptAccessToken(
								response.accessToken
							),
					},
				};
			} else {
				const serverSideError = new ServerSideError();

				serverSideError.redirect({
					destination: '/auth/login',
				});
			}

			return {
				props: {
					// dehydratedState: dehydrate(queryClient),
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

export default withAuthSSR;
