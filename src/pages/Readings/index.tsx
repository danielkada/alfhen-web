import{ useContext, useState, ChangeEvent, useEffect, useMemo } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import Header from '../../components/Header';
import Reading from '../../components/Reading';

import ReadingService from '../../services/ReadingService';

import useAuth from '../../contexts/AuthContext/utils';

import { ReadingProps } from './types';

import { Container, YourReadings } from './styles';
import LoadingAll from '../../components/LoadingAll';

export default function Readings() {
	const { logout } = useContext(AuthContext);
	const { getTokenLocalStorage } = useAuth();

	const [searchTerm, setSearchTerm] = useState('');
	const [readings, setReadings] = useState<Array<ReadingProps>>([]);

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [hasError, setHasError] = useState<boolean>(false);

	const filteredReadings = useMemo(() => readings.filter((reading) => (
		reading.book.title.toLowerCase().includes(searchTerm.toLowerCase())
	)
	), [readings, searchTerm]);

	function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>) {
		setSearchTerm(event.target.value);
	}

	useEffect(() => {
		async function loadReadings() {
			try {
				const token = getTokenLocalStorage(logout);
				const readingService = new ReadingService(token as string);

				const { data } = await readingService.list();
				setHasError(false);
				setReadings(data);
			} catch(error) {
				setHasError(true);
			} finally {
				setIsLoading(false);
			}
		}

		loadReadings();
	}, [getTokenLocalStorage, logout]);

	return (
		<>
			<Container>
				<Header
					title='Suas leituras'
					searchTerm={searchTerm}
					onChange={handleSearchTermChange}
					placeholder='Busque um livro que está lendo'
				/>

				<YourReadings isLoading={isLoading}>
					{isLoading && !hasError && (
						<LoadingAll />
					)}

					{!isLoading && hasError && (
						<h3>Houve um erro ao carregar suas leituras!</h3>
					)}

					{!isLoading && !hasError && filteredReadings.map((reading) => (
						<Reading
							id={reading.id}
							key={reading.id}
							book={reading.book}
							current_page={reading.current_page}
						/>
					))}

				</YourReadings>
			</Container>
		</>

	);
}
