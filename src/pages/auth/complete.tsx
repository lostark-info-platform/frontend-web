import cookieModule from '@/module/cookie/cookie.module';
import { apiService } from '@/services';
import { RequestOAuth2Login } from '@/services/api/types/models.types';
import AuthTemplate from '@/templates/Auth';
import { GetServerSidePropsContext } from 'next';

const AuthCompletePage = () => {
	return (
		<AuthTemplate>
			<div>123</div>
		</AuthTemplate>
	);
};

export default AuthCompletePage;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	let accessToken = '';
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
			const { refreshToken, accessToken: updateAccessToken } =
				response.data;

			accessToken = updateAccessToken;
			cookieModule.setSSRItem(
				'refreshToken',
				refreshToken
			)(res.setHeader);

			return {
				redirect: {
					permanent: false,
					destination: redirectTo || '/',
				},
				props: {
					accessToken,
				},
			};
		} catch (error) {
			console.error(error);
			return {
				props: {},
			};
		}
	}
};
