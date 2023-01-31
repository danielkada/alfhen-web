import HttpClient from './utils/HttpClient';

interface IUser {
  name: string;
  surname: string;
  username: string;
}

class UserService {
	httpClient: HttpClient;

	constructor(token: string) {
		this.httpClient = new HttpClient('http://localhost:3001', {
			authorization: token
		});
	}

	async update({ name, surname, username }: IUser) {
		return this.httpClient.put('/users', {
			name, surname, username
		});
	}
}

export default UserService;
