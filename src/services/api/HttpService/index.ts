import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import getConfig from 'next/config';
import cookie from '@/services/cookie';
import type { HttpServiceMethods, HttpServiceParams } from './HttpService.type';

/**
 * API 비동기 호출 Http 모듈
 * @description API 비동기 호출을 위한 데이터 패칭 모듈입니다.
 * @refefence https://blog.stackademic.com/how-to-develop-an-advanced-and-reusable-axios-api-service-for-your-react-next-js-solutions-a4685cfd78f1
 */
const { publicRuntimeConfig } = getConfig();

class HttpService {
	private http: AxiosInstance;

	private baseURL = publicRuntimeConfig.PUBLIC_API_BASE_URL;

	constructor() {
		this.http = axios.create({
			baseURL: this.baseURL,
			withCredentials: false,
			headers: this.setupHeaders(),
		});
	}

	private get getAuthorization() {
		const accessToken = cookie.getItem('AccessToken') || '';
		return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
	}

	/**
	 * http service의 설정을 초기화합니다.
	 */
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
			...this.getAuthorization,
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

	public async post<T, P>({
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
		// Set up request interceptor
		this.http.interceptors.request.use((request) => {
			// * Perform an action
			// TODO: implement an NProgress
			return request;
		});

		// Set up response interceptor
		this.http.interceptors.response.use(
			(response) => {
				// * Do something
				return response;
			},

			(error) => {
				// * Implement a global error alert
				return Promise.reject(error);
			}
		);
	}

	private normalizeError(error: unknown) {
		return Promise.reject(error);
	}
}

export default HttpService;
