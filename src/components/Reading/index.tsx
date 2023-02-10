import { useContext, useState } from 'react';

import { AiOutlineBook, AiOutlineCheck } from 'react-icons/ai';
import { GrFormSubtract, GrFormAdd } from 'react-icons/gr';
import { BsCheckAll } from 'react-icons/bs';

import { ReadingProps } from './types';

import { ButtonContainer, Container } from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import ReadingService from '../../services/ReadingService';
import toast from '../../utils/toast';
import useAuth from '../../contexts/AuthContext/utils';
import LoadingButton from '../LoadingButton';

export default function Reading({ id, book, current_page}: ReadingProps) {
	const { logout } = useContext(AuthContext);
	const { getTokenLocalStorage } = useAuth();

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [count, setCount] = useState<number>(parseInt(current_page));
	const [isMovedTheNumber, setIsMovedTheNumber] = useState<boolean>(false);

	const [isMaximumPageNumber, setIsMaximumPageNumber] = useState<boolean>(false);

	function handleAddCount() {
		if (count >= book.numberOfPages) {
			return;
		}

		setIsMovedTheNumber(true);

		const newCount = count + 1;
		if (newCount === book.numberOfPages) {
			setIsMaximumPageNumber(true);
		}
		setCount(newCount);
	}

	function handleSubtractCount() {
		if (count <= 0) {
			return;
		}

		setIsMovedTheNumber(true);

		const newCount = count - 1;
		setCount(newCount);
	}

	async function handleSubmit() {
		setIsLoading(true);

		try {
			const token = getTokenLocalStorage(logout);
			const readingService = new ReadingService(token as string);

			await readingService.update({ reading_id: id, current_page: count.toString() });
		} catch(error) {
			toast({
				type: 'error',
				text: `Houve um erro ao atualizar a página do livro ${book.title}`
			});
		} finally {
			setIsMovedTheNumber(false);
			setIsLoading(true);
		}
	}

	return (
		<Container>
			<button
				onClick={handleAddCount}
				type='button'
				className="add"
				disabled={isLoading}
			>
				<GrFormAdd />
			</button>

			<div className="info img">
				{book.imageURL
					? (
						<img src={book.imageURL as string} alt="Cover" />
					): (
						<AiOutlineBook size={32}/>
					)}
			</div>


			<div className="info number-of-pages">
				<span>{count}</span>
			</div>

			<button
				onClick={handleSubtractCount}
				type='button'
				className="subtract"
				disabled={isLoading}
			>
				<GrFormSubtract />
			</button>

			<h6>{book.title}</h6>

			{isMovedTheNumber && !isMaximumPageNumber ? (
				<ButtonContainer>
					<button
						onClick={handleSubmit}
						type='button'
						disabled={isLoading}
					>
						{isLoading && (<LoadingButton />)}
						{!isLoading && (
							<AiOutlineCheck size={18} color='#E22D2D'/>
						)}
					</button>
				</ButtonContainer>
			) : isMovedTheNumber && isMaximumPageNumber && (
				<ButtonContainer>
					<button
						onClick={handleSubmit}
						type='button'
						disabled={isLoading}
					>
						<BsCheckAll size={18} color='#E22D2D'/>
					</button>
				</ButtonContainer>
			)}

		</Container>
	);
}
