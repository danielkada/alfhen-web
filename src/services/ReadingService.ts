import HttpClient from './utils/HttpClient';

interface CreateReadingProps {
  book_id: string;
  current_page: string;
  numberOfPages: number;
}

interface UpdateReadingProps {
  reading_id: string;
  current_page: string;
}

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

	create({ book_id, current_page, numberOfPages }: CreateReadingProps) {
		return this.httpClient.post('/readings', {
			book_id,
			current_page,
			numberOfPages,
		});
	}

	update({ reading_id, current_page }: UpdateReadingProps) {
		return this.httpClient.patch(`/readings/${reading_id}`, {
			current_page,
		});
	}
}
