import{ useContext, useState, ChangeEvent, useEffect, useMemo } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import YourBooks from '../../components/YourBooks';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ReadingService from '../../services/ReadingService';

import useAuth from '../../contexts/AuthContext/utils';

import { Container } from './styles';
import { ReadingProps } from './types';
import SignOutModal from '../../components/SignOutModal';

export default function Books() {
	const { logout } = useContext(AuthContext);
	const { getTokenLocalStorage } = useAuth();

	const [searchTerm, setSearchTerm] = useState('');
	const [readings, setReadings] = useState<Array<ReadingProps>>([]);

	const [isVisible, setIsVisible] = useState(false);

	const filteredReadings = useMemo(() => readings.filter((reading) => (
		reading.book.title.toLowerCase().includes(searchTerm.toLowerCase())
	)
	), [readings, searchTerm]);

	function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>) {
		setSearchTerm(event.target.value);
	}

	function handleModalVisibility() {
		setIsVisible((prevState) => prevState === true ? false : true);
	}

	useEffect(() => {
		async function loadReadings() {
			const token = getTokenLocalStorage(logout);
			const readingService = new ReadingService(token as string);

			const { data } = await readingService.list();
			setReadings(data);
		}

		loadReadings();
	}, [getTokenLocalStorage, logout]);

	console.log(isVisible);

	return (
		<>
			<Container>

				<SignOutModal onCancel={handleModalVisibility} isVisible={isVisible} />

				<Header
					title='Suas leituras'
					searchTerm={searchTerm}
					onChange={handleSearchTermChange}
					placeholder='Busque um livro que está lendo'
				/>

				<YourBooks readings={filteredReadings} />
			</Container>

			<Footer onModalVisibility={handleModalVisibility} />
		</>

	);
}
