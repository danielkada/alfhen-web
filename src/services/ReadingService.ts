import HttpClient from './utils/HttpClient';

export default class ReadingService {
	httpClient: HttpClient;

	constructor(token: string) {
		this.httpClient = new HttpClient('http://localhost:3001',
			{
				authorization: token
			}
		);
	}

	list() {
		return this.httpClient.get('/readings');
	}
}
