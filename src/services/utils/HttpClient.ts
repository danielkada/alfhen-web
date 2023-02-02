import axios, { AxiosInstance } from 'axios';

interface Header {
  authorization: string;
}

class HttpClient {
	api: AxiosInstance;

	constructor(baseURL: string, header?: Header) {
		this.api = axios.create({
			baseURL,
			headers: {'Authorization': header?.authorization} }
		);
	}

	get(path: string) {
		return this.api.get(path);
	}

	post(path: string, body: object) {
		return this.api.post(path, body);
	}

	put(path: string, body: object) {
		return this.api.put(path, body);
	}

	patch(path: string, body: object) {
		return this.api.patch(path, body);
	}
}

export default HttpClient;
