import { ChangeEvent, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { TbArrowBack } from 'react-icons/tb';
import { AiOutlineBook } from 'react-icons/ai';

import { ButtonContainer, Container } from './styles';
import ReadingService from '../../services/ReadingService';
import { AuthContext } from '../../contexts/AuthContext';

export default function Information() {
	const [currentPage, setCurrentPage] = useState<string>('0');

	const location = useLocation();
	const { book } = location.state;

	const { token } = useContext(AuthContext);

	const readingsService = new ReadingService(token as string);

	const navigate = useNavigate();

	function handleCurrentPageChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;

		if (value > book.numberOfPages) {
			return;
		}

		setCurrentPage(event.target.value);
	}

	async function handleCreateReading() {
		await readingsService.create({
			book_id: book.id,
			current_page: currentPage
		});

		navigate('/dashboard');
	}

	return (
		<Container>
			<div className="header">
				<button type='button' onClick={() => navigate('/dashboard', {
					state: { selected: 'books' }
				})}>
					<TbArrowBack color='#E22D2D' size={26} />
					<span>Voltar</span>
				</button>

			</div>

			<div className="book">
				<h3>Informações</h3>

				<div className="img">
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
					<p className='description'>
						{book.description}
					</p>
				</div>

				<div className="book-information">
					<div className="informations">
						<div className="text-container">
							<p>Nome: </p>
							<span>{book.title}</span>
						</div>
						<div className="text-container">
							<p>Autors: </p>
							<span>{book.authors}</span>
						</div>
						<div className="text-container">
							<p>Data de Publicação: </p>
							<span>{book.publishedDate}</span>
						</div>
						<div className="text-container">
							<p>Número de Páginas: </p>
							<span>{book.numberOfPages}</span>
						</div>
					</div>

					<div className="number-of-pages">
						<span>Página atual: </span>
						<input value={currentPage} onChange={handleCurrentPageChange} type={'number'} />
						<span> /{book.numberOfPages}</span>
					</div>
				</div>

				<ButtonContainer>
					<button disabled={
						currentPage === undefined
            || currentPage.length === 0
					}
					onClick={handleCreateReading}
					type='button'
					>
            Adicionar livro
					</button>
				</ButtonContainer>


			</div>
		</Container>
	);
}
