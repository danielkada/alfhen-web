import { ChangeEvent, useContext, useState, useMemo } from 'react';

import Header from '../../components/Header';

import { AiOutlineBook } from 'react-icons/ai';

import GoogleBooksService from '../../services/GoogleBooksService';

import { AuthContext } from '../../contexts/AuthContext';

import { GoogleBookProps } from './types';

import { Card, CardsContainer, Container, NoBooks } from './styles';
import LoadingAll from '../../components/LoadingAll';

export default function GoogleBooks() {
	const [searchTerm, setSearchTerm] = useState('');
	const [googleBooks, setGoogleBooks] = useState<GoogleBookProps[]>();

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const { token } = useContext(AuthContext);

	const googleBooksService = new GoogleBooksService(token as string);

	const filteredBooks = useMemo(() => googleBooks?.filter((book) => (
		book.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
	)), [googleBooks, searchTerm]);

	async function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;

		setSearchTerm(value);
	}

	async function handleSearchBooks() {
		setIsLoading(true);

		if (searchTerm.length > 0) {
			const { data: books } = await googleBooksService.findByTitle(searchTerm);
			setGoogleBooks(books.items);
		}

		setIsLoading(false);
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

				<CardsContainer isLoading={isLoading}>
					{isLoading && <LoadingAll />}

					{!isLoading && filteredBooks?.length === 0 && (
						<NoBooks>
							<p>
                Nenhum livro com o título <strong>{searchTerm}</strong> foi encontrado!
							</p>
						</NoBooks>
					)}

					{!isLoading && (googleBooks?.length === 0 || googleBooks === undefined) && (
						<NoBooks>
							<p>
                Nenhum livro para ser exibido, digite o
                título de algum livro na barra de
                pesquisa e clique no ícone para
                pesquisar.
							</p>
						</NoBooks>
					)}

					{!isLoading && filteredBooks?.map((book) => (
						<Card to={'/information'} state={{ book }} key={book.id}>
							<div className="text-container">
								<h4>{book.title}</h4>
							</div>

							{book.imageURL
								? (
									<img
										src={book.imageURL}
										alt="Cover"
										width={100}
									/>
								) : (
									<AiOutlineBook color='#E22D2D' size={64} />
								)}
						</Card>
					))}
				</CardsContainer>

			</Container>
		</>

	);
}
