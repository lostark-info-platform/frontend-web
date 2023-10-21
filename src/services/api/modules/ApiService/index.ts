import HttpService from '../httpService';

class ApiService extends HttpService {
	getUsersMe() {
		return this.service().get({
			url: '/api/users/me',
		});
	}
}

export default ApiService;
