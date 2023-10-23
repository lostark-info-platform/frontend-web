import HttpService from '../HttpService';

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

	getUsersMe() {
		return this.service().get({
			url: '/api/users/me',
		});
	}
}

export default ApiService;
