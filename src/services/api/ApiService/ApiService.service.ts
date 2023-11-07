import { CommonApiResponse } from '../dataModels/commonApi.types';
import {
	RequestUsersLogin,
	RequestUsersRefresh,
	RequestUsersRegister,
	ResponseUsersLogin,
	ResponseUsersMe,
	ResponseUsersRefresh,
	ResponseUsersRegister,
} from '../dataModels/dataModels.types';
import HttpService from '../HttpService/HttpService.service';

class ApiService extends HttpService {
	getTestReactQuery(props: {
		id: string;
	}): Promise<{ testReactQuery: string }> {
		const { id } = props ?? {};
		return new Promise((reslove, reject) => {
			setTimeout(() => {
				if (!id) {
					reject(
						new Error(
							'테스트 리엑트 쿼리 API에 id가 전달되지 않았습니다.'
						)
					);
					return;
				}
				reslove({ testReactQuery: `테스트 리엑트 쿼리 ${id}` });
			}, 1000);
		});
	}

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
}

export default ApiService;
