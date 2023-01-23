import axios, { AxiosInstance } from 'axios';

class HttpClient {
	api: AxiosInstance;

	constructor(baseURL: string) {
		this.api = axios.create({ baseURL });
	}

	post(path: string, body: object) {
		return this.api.post(path, body);
	}
}

export default HttpClient;
