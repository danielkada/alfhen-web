import { ChangeEvent, useContext, useState } from 'react';

import Header from '../../components/Header';
import { AiOutlineBook } from 'react-icons/ai';

import GoogleBooksService from '../../services/GoogleBooksService';

import { Link } from 'react-router-dom';
import { Card, CardsContainer, Container } from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import { GoogleBookProps } from './types';

export default function GoogleBooks() {
	const [searchTerm, setSearchTerm] = useState('');
	const [googleBooks, setGoogleBooks] = useState<GoogleBookProps[]>();

	const { token } = useContext(AuthContext);

	const googleBooksService = new GoogleBooksService(token as string);

	//const filteredBooks = useMemo(() => yourBooks.filter((book) => {
	//	book.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
	//}
	//), [yourBooks, searchTerm]);

	async function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;

		setSearchTerm(value);
	}

	async function handleSearchBooks() {
		if (searchTerm.length > 0) {
			const { data: books } = await googleBooksService.findByTitle(searchTerm);
			console.log(books.items);
			setGoogleBooks(books.items);
		}
	}

	return (
		<>
			<Container>
				<Header
					title='Biblioteca'
					onChange={handleSearchTermChange}
					searchTerm={searchTerm}
					placeholder='Digite o nome de um livro'
					googleBooks
					onSearchGoogleBooks={handleSearchBooks}
				/>

				<CardsContainer>
					{googleBooks?.map((book) => (
						<Card key={book.id}>
							<div className="text-container">
								<h3>{book.title}</h3>
							</div>

							{book.imageURL
								? (
									<img
										src={book.imageURL}
										alt="Cover"
										width={100}
									/>
								) : (
									<AiOutlineBook size={64} />
								)}

							<div className="text-container">
								<Link to={'/information'} state={{ book }}>
                  Informações
								</Link>
							</div>

						</Card>
					))}
				</CardsContainer>

			</Container>
		</>

	);
}
