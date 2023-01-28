import { ChangeEvent, useState } from 'react';

import Header from '../../components/Header';

import { Card, CardsContainer, Container } from './styles';
import { Link } from 'react-router-dom';

export default function GoogleBooks() {
	const [searchTerm, setSearchTerm] = useState('');

	const books = [
		{
			id: Math.random(),
			name: 'Teste',
			img: 'https://i.pinimg.com/564x/be/1a/50/be1a50259f805345d6aa8ac0e5beca40.jpg'
		},
		{
			id: Math.random(),
			name: 'Teste',
			img: 'https://i.pinimg.com/564x/05/7f/d5/057fd503a34f67680a4ad2b9ab3d55ec.jpg'
		},
		{
			id: Math.random(),
			name: 'Teste',
			img: 'https://i.pinimg.com/564x/ed/81/c3/ed81c38360e66b3e3daac095496ebcfe.jpg'
		},
		{
			id: Math.random(),
			name: 'Teste',
			img: 'https://i.pinimg.com/564x/ed/81/c3/ed81c38360e66b3e3daac095496ebcfe.jpg'
		},
		{
			id: Math.random(),
			name: 'Teste',
			img: 'https://i.pinimg.com/564x/ed/81/c3/ed81c38360e66b3e3daac095496ebcfe.jpg'
		},
		{
			id: Math.random(),
			name: 'Teste',
			img: 'https://i.pinimg.com/564x/ed/81/c3/ed81c38360e66b3e3daac095496ebcfe.jpg'
		},
		{
			id: Math.random(),
			name: 'Teste',
			img: 'https://i.pinimg.com/564x/ed/81/c3/ed81c38360e66b3e3daac095496ebcfe.jpg'
		},
		{
			id: Math.random(),
			name: 'Teste',
			img: 'https://i.pinimg.com/564x/ed/81/c3/ed81c38360e66b3e3daac095496ebcfe.jpg'
		},
		{
			id: Math.random(),
			name: 'Teste',
			img: 'https://i.pinimg.com/564x/ed/81/c3/ed81c38360e66b3e3daac095496ebcfe.jpg'
		},
		{
			id: Math.random(),
			name: 'Teste',
			img: 'https://i.pinimg.com/564x/ed/81/c3/ed81c38360e66b3e3daac095496ebcfe.jpg'
		},
	];

	//const filteredBooks = useMemo(() => yourBooks.filter((book) => {
	//	book.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
	//}
	//), [yourBooks, searchTerm]);

	function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>) {
		setSearchTerm(event.target.value);
	}
	return (
		<>
			<Container>
				<Header
					title='Biblioteca'
					onChange={handleSearchTermChange}
					searchTerm={searchTerm}
					placeholder='Digite o nome de um livro'
				/>

				<CardsContainer>
					{books.map((book) => (
						<Card key={book.id}>
							<img
								src={book.img}
								alt="Cover"
								width={100}
							/>

							<Link to={'/information'} state={{ book }}>
                Informações
							</Link>
						</Card>
					))}

				</CardsContainer>

			</Container>
		</>

	);
}
