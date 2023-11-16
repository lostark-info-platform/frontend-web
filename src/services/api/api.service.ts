import { CommonApiResponse } from './types/commonApi.types';
import {
	RequestUsersLogin,
	RequestUsersRefresh,
	RequestUsersRegister,
	ResponseUsersLogin,
	ResponseUsersMe,
	ResponseUsersRefresh,
	ResponseUsersRegister,
	RequestUsersLogout,
} from './types/models.types';
import HttpService from './modules/http/http.module';

class ApiService extends HttpService {
	/**
	 * @description 회원가입
	 */
	postUsersRegister(payload: RequestUsersRegister) {
		return this.service().post<
			CommonApiResponse<ResponseUsersRegister>,
			RequestUsersRegister
		>({
			url: '/api/users/register',
			payload,
		});
	}

	/**
	 * @description 로그인
	 */
	postUsersLogin(payload: RequestUsersLogin) {
		return this.service().post<
			CommonApiResponse<ResponseUsersLogin>,
			RequestUsersLogin
		>({
			url: '/api/users/login',
			payload,
		});
	}

	/**
	 * @description 토큰 갱신
	 */
	postUsersRefresh(payload: RequestUsersRefresh) {
		return this.service().post<
			CommonApiResponse<ResponseUsersRefresh>,
			RequestUsersRefresh
		>({
			url: '/api/users/refresh',
			payload,
		});
	}

	getUsersMe() {
		return this.service().get<CommonApiResponse<ResponseUsersMe>>({
			url: '/api/users/me',
		});
	}

	postUsersLogout(payload: RequestUsersLogout) {
		return this.service().post<any, any>({
			url: '/api/users/logout',
			payload,
		});
	}
}

export default ApiService;
