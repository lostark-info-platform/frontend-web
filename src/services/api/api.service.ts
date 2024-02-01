import { CommonApiResponse } from './types/commonApi.types';
import {
	RequestAuthRefresh,
	ResponseUsersMe,
	ResponseAuthRefresh,
	OAuth2Providers,
	ResponseOAuth2Login,
	RequestOAuth2Login,
	RequestConfigClientBaseUrl,
	ResponseSchedules,
} from './types/models.types';
import HttpService from './modules/http/http.module';

class ApiService extends HttpService {
	/**
	 * @description 토큰 갱신
	 */
	postAuthRefresh(payload: RequestAuthRefresh) {
		return this.service().post<
			CommonApiResponse<ResponseAuthRefresh>,
			RequestAuthRefresh
		>({
			url: '/api/auth/refresh',
			payload,
		});
	}

	getUsersMe() {
		return this.service().get<CommonApiResponse<ResponseUsersMe>>({
			url: '/api/users/me',
		});
	}

	postAuthLogout() {
		return this.service().post<any, any>({
			url: '/api/auth/logout',
			payload: null,
		});
	}

	/**
	 * @description 로그인 성공
	 */
	async postOAuth2Login(provider: OAuth2Providers, code: string) {
		return this.post<
			CommonApiResponse<ResponseOAuth2Login>,
			RequestOAuth2Login
		>({
			url: '/oauth2/login',
			payload: {
				provider,
				code,
			},
		});
	}

	postConfigClientBaseUrl(url: string) {
		return this.service().post<
			CommonApiResponse<null>,
			RequestConfigClientBaseUrl
		>({
			url: '/config/clientBaseUrl',
			payload: {
				url,
			},
		});
	}

	getSchedules() {
		return this.service().get<CommonApiResponse<ResponseSchedules>>({
			url: '/api/schedules',
		});
	}
}

export default ApiService;
