import{ useContext, useState, ChangeEvent, useEffect, useMemo } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import YourBooks from '../../components/YourBooks';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ReadingService from '../../services/ReadingService';

import useAuth from '../../contexts/AuthContext/utils';

import { Container } from './styles';
import { ReadingProps } from './types';

export default function Books() {
	const { logout } = useContext(AuthContext);

	const [searchTerm, setSearchTerm] = useState('');
	const [readings, setReadings] = useState<Array<ReadingProps>>([]);

	const { getTokenLocalStorage } = useAuth();

	//const filteredBooks = useMemo(() => yourBooks.filter((book) => {
	//	book.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
	//}
	//), [yourBooks, searchTerm]);

	const filteredReadings = useMemo(() => readings.filter((reading) => (
		reading.book.title.toLowerCase().includes(searchTerm.toLowerCase())
	)
	), [readings, searchTerm]);

	function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>) {
		setSearchTerm(event.target.value);
	}

	useEffect(() => {
		async function loadReadings() {
			const token = getTokenLocalStorage(logout);
			const readingService = new ReadingService(token as string);

			const { data } = await readingService.list();
			setReadings(data);
			console.log(data);
		}

		loadReadings();
	}, [getTokenLocalStorage, logout]);

	return (
		<>
			<Container>

				<Header
					title='Seus livros'
					searchTerm={searchTerm}
					onChange={handleSearchTermChange}
					placeholder='Busque um livro que está lendo'
				/>

				<YourBooks readings={filteredReadings} />

				<button type='button' onClick={logout}>Sair</button>
			</Container>

			<Footer />
		</>

	);
}
