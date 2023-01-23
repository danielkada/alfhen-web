import HttpClient from './HttpClient';

interface Credentials {
  username: string;
  password: string;
}

class SessionService {
	httpClient: HttpClient;

	constructor() {
		this.httpClient = new HttpClient('http://localhost:3001');
	}

	async login({ username, password }: Credentials) {
		return this.httpClient.post('/sessions', {
			username, password
		});
	}
}

export default new SessionService();
