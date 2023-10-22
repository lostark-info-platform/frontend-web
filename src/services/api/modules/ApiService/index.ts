import HttpService from '../httpService';

class ApiService extends HttpService {
	constructor() {
		super();
		return this;
	}

	getUsersMe() {
		return this.service().get({
			url: '/api/users/me',
		});
	}
}

export default ApiService;
