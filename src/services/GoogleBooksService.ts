import HttpClient from './utils/HttpClient';

export default class GoogleBooksService {
	httpClient: HttpClient;

	constructor(token: string) {
		this.httpClient = new HttpClient('http://localhost:3001', {
			authorization: token
		});
	}

	findByTitle(title: string) {
		return this.httpClient.get(`/books/title/${title}`);
	}
}
