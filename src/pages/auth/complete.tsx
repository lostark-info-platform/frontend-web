import cookieModule from '@/module/cookie/cookie.module';
import { apiService } from '@/services';
import { RequestOAuth2Login } from '@/services/api/types/models.types';
import { GetServerSidePropsContext } from 'next';

const AuthCompletePage = () => {
	return <></>;
};

export default AuthCompletePage;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const { query, res } = ctx;

	const {
		code,
		provider,
		state: redirectTo,
	} = query as RequestOAuth2Login & {
		state?: string;
	};
	if (query.code && query.provider) {
		try {
			const response = await apiService.postOAuth2Login(provider, code);
			const { refreshToken, accessToken } = response.data;

			cookieModule.setSSRItem(
				'refreshToken',
				refreshToken
			)(res.appendHeader);
			cookieModule.setSSRItem(
				'accessToken',
				accessToken
			)(res.appendHeader);

			return {
				redirect: {
					permanent: false,
					destination: redirectTo || '/',
				},
				props: {},
			};
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
};
