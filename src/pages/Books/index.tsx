import{ useContext, useState, ChangeEvent } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import { AiOutlineHome, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';

import { Input } from '../../components/Input';
import YourBooks from '../../components/YourBooks';

import { Container, Footer, Header } from './styles';
import { Link } from 'react-router-dom';

export default function Books() {
	const { logout } = useContext(AuthContext);

	const [searchTerm, setSearchTerm] = useState('');

	const yourBooks = [
		{
			id: Math.random(),
			name: 'A arte da guerra',
			numberOfPages: 10,
		},
		{
			id: Math.random(),
			name: 'Máquina do tempo',
			numberOfPages: 10,
		},
		{
			id: Math.random(),
			name: 'Harry Potter: A Ordem da Fênix',
			numberOfPages: 10,
		},
	];

	//const filteredBooks = useMemo(() => yourBooks.filter((book) => {
	//	book.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
	//}
	//), [yourBooks, searchTerm]);

	function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>) {
		setSearchTerm(event.target.value);
	}

	// console.log(user);
	return (
		<>
			<Container>
				<Header>
					<h3>Seus livros</h3>
					<Input
						placeholder='Busque um livro que está lendo'
						value={searchTerm}
						onChange={handleSearchTermChange}
					/>
				</Header>

				<YourBooks books={yourBooks} />

				<button type='button' onClick={logout}>Sair</button>
			</Container>

			<Footer>
				<Link to='/books'><AiOutlineUser size={26} color='#E22D2D'/></Link>
				<Link to='/books'><AiOutlineHome size={26} color='#E22D2D'/></Link>
				<Link to='/books'><AiOutlineSearch size={26} color='#E22D2D'/></Link>
			</Footer>
		</>

	);
}
