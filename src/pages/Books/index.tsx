import{ useContext, useState, ChangeEvent } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import YourBooks from '../../components/YourBooks';
import Header from '../../components/Header';

import { Container } from './styles';
import Footer from '../../components/Footer';

export default function Books() {
	const { logout } = useContext(AuthContext);

	const [searchTerm, setSearchTerm] = useState('');

	const yourBooks = [
		{
			id: Math.random(),
			name: 'A arte da guerra',
			numberOfPages: 10,
			img: 'https://i.pinimg.com/564x/be/1a/50/be1a50259f805345d6aa8ac0e5beca40.jpg'
		},
		{
			id: Math.random(),
			name: 'Máquina do tempo',
			numberOfPages: 10,
			img: 'https://i.pinimg.com/564x/be/1a/50/be1a50259f805345d6aa8ac0e5beca40.jpg'
		},
		{
			id: Math.random(),
			name: 'Harry Potter: A Ordem da Fênix',
			numberOfPages: 10,
			img: 'https://i.pinimg.com/564x/be/1a/50/be1a50259f805345d6aa8ac0e5beca40.jpg'
		},
		{
			id: Math.random(),
			name: 'Harry Potter: A Ordem da Fênix',
			numberOfPages: 10,
			img: 'https://i.pinimg.com/564x/be/1a/50/be1a50259f805345d6aa8ac0e5beca40.jpg'
		},
		{
			id: Math.random(),
			name: 'Harry Potter: A Ordem da Fênix',
			numberOfPages: 10,
			img: 'https://i.pinimg.com/564x/be/1a/50/be1a50259f805345d6aa8ac0e5beca40.jpg'
		},
		{
			id: Math.random(),
			name: 'Harry Potter: A Ordem da Fênix',
			numberOfPages: 10,
			img: 'https://i.pinimg.com/564x/be/1a/50/be1a50259f805345d6aa8ac0e5beca40.jpg'
		},
		{
			id: Math.random(),
			name: 'Harry Potter: A Ordem da Fênix',
			numberOfPages: 10,
			img: 'https://i.pinimg.com/564x/be/1a/50/be1a50259f805345d6aa8ac0e5beca40.jpg'
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
					title='Seus livros'
					searchTerm={searchTerm}
					onChange={handleSearchTermChange}
					placeholder='Busque um livro que está lendo'
				/>

				<YourBooks books={yourBooks} />

				<button type='button' onClick={logout}>Sair</button>
			</Container>

			<Footer />
		</>

	);
}
