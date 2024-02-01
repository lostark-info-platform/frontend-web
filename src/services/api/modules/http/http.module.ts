import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	isAxiosError,
} from 'axios';
import getConfig from 'next/config';
import type { HttpServiceMethods, HttpServiceParams } from './http.type';

/**
 * API 비동기 호출 Http 모듈
 * @description API 비동기 호출을 위한 데이터 패칭 모듈입니다.
 * @refefence https://blog.stackademic.com/how-to-develop-an-advanced-and-reusable-axios-api-service-for-your-react-next-js-solutions-a4685cfd78f1
 */
const { publicRuntimeConfig } = getConfig();

class HttpService {
	private http: AxiosInstance;

	private baseURL = publicRuntimeConfig.PUBLIC_API_BASE_URL;

	private updateTokenApiList: string[];

	constructor() {
		this.http = axios.create({
			baseURL: this.baseURL,
			withCredentials: false,
			headers: this.setupHeaders(),
		});
		this.updateTokenApiList = ['/oauth2/login', '/api/auth/refresh'];
	}

	private getAuthorization() {
		const accessToken =
			'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzAyMTQxMTQ1LCJleHAiOjE3MDIxNDQ3NDV9.e4F8kh-fuJY7q--KyQdgF8Jrww-cMO-55AG6pRI270U';
		// const accessToken = tokenService.getAccessToken();
		return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
	}

	service() {
		this.injectInterceptors();
		return this;
	}

	private setupHeaders(
		// 첨부파일 여부
		hasAttachment = false
	) {
		return {
			'Content-Type': hasAttachment
				? 'multipart/form-data'
				: 'application/json',
			...this.getAuthorization(),
		};
	}

	private async request<T>({
		method,
		url,
		options,
	}: {
		method: HttpServiceMethods;
		url: string;
		options: AxiosRequestConfig;
	}): Promise<T> {
		try {
			const response: AxiosResponse<T> = await this.http.request<T>({
				method,
				url,
				...options,
			});

			return response.data;
		} catch (error) {
			return this.normalizeError(error);
		}
	}

	public async get<T>({
		url,
		params,
		hasAttachment = false,
	}: {
		url: string;
		params?: HttpServiceParams;
		hasAttachment?: boolean;
	}) {
		return this.request<T>({
			method: 'GET',
			url,
			options: {
				params,
				headers: this.setupHeaders(hasAttachment),
			},
		});
	}

	public async post<Response, Payload>({
		url,
		payload,
		params,
		hasAttachment = false,
	}: {
		url: string;
		payload: Payload;
		params?: HttpServiceParams;
		hasAttachment?: boolean;
	}) {
		return this.request<Response>({
			method: 'POST',
			url,
			options: {
				params,
				data: payload,
				headers: this.setupHeaders(hasAttachment),
			},
		});
	}

	public async put<T, P>({
		url,
		payload,
		params,
		hasAttachment = false,
	}: {
		url: string;
		payload: P;
		params?: HttpServiceParams;
		hasAttachment?: boolean;
	}) {
		return this.request<T>({
			method: 'PUT',
			url,
			options: {
				params,
				data: payload,
				headers: this.setupHeaders(hasAttachment),
			},
		});
	}

	public async delete<T>({
		url,
		params,
		hasAttachment = false,
	}: {
		url: string;
		params?: HttpServiceParams;
		hasAttachment?: boolean;
	}) {
		return this.request<T>({
			method: 'DELETE',
			url,
			options: {
				params,
				headers: this.setupHeaders(hasAttachment),
			},
		});
	}

	private injectInterceptors() {
		this.http.interceptors.request.use((request) => {
			return request;
		});

		this.http.interceptors.response.use(
			(response) => {
				// const { config, data } = response;

				// const isUpdateToken =
				// 	config.method === 'post' &&
				// 	config.url &&
				// 	this.updateTokenApiList.some((url) => config.url === url);
				// console.log('isUpdateToken: ', isUpdateToken);

				// if (isUpdateToken) {
				// 	const { accessToken, refreshToken: newRefreshToken } =
				// 		data.data as ResponseOAuth2Login;

				// 	const encryptToken = tokenService.encryptToken(accessToken);

				// 	if (encryptToken) {
				// 		if (typeof window === 'undefined') {
				// 			cookieModule.setItem(
				// 				'refreshToken',
				// 				newRefreshToken
				// 			);
				// 		} else {
				// 			console.log('csr: ', newRefreshToken);
				// 		}
				// 		tokenService.setAccessToken(encryptToken);
				// 	}
				// }

				return response;
			},

			async (error) => {
				// * Implement a global error alert

				if (isAxiosError(error)) {
					// const isNotRedirectLoginApi =
					// 	config?.url &&
					// 	this.updateTokenApiList.some(
					// 		(url) => config.url === url
					// 	);

					const isExpiredAuthenication =
						error?.response?.status === 401 ||
						error?.response?.status === 403;

					if (isExpiredAuthenication) {
						if (typeof window !== 'undefined') {
							// window.location.href = '/auth/login';
							// return Promise.reject(error);
						}
					}
				}

				return Promise.reject(error);
			}
		);
	}

	private normalizeError(error: unknown) {
		return Promise.reject(error);
	}
}

export default HttpService;
