import HttpClient from './utils/HttpClient';

interface IUser {
  name: string;
  surname: string;
  username: string;
}

interface IUserCreate {
  name: string;
  surname: string;
  username: string;
  password: string;
  confirm_password: string;
}

class UserService {
	httpClient: HttpClient;

	constructor(token: string | null) {
		this.httpClient = new HttpClient('http://localhost:3001', {
			authorization: token as string
		});
	}

	async create({ name, surname, username, password, confirm_password }: IUserCreate) {
		return this.httpClient.post('/users', {
			name, surname, username, password, confirm_password
		});
	}

	async update({ name, surname, username }: IUser) {
		return this.httpClient.put('/users', {
			name, surname, username
		});
	}
}

export default UserService;
