import { YourBooksProps } from './types';

import { Book, Container } from './styles';

export default function YourBooks({ books }: YourBooksProps) {
	return (
		<Container>
			{books.map((book) => (
				<Book key={book.id}>
					<div className="info img">
						<img src={book.img} alt="Cover" />
					</div>


					<div className="info number-of-pages">
						<span>{book.numberOfPages}</span>
					</div>

					<h6>{book.name}</h6>
				</Book>
			))}

		</Container>
	);
}
