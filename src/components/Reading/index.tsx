import { useContext, useState } from 'react';

import { AiOutlineBook, AiOutlineCheck } from 'react-icons/ai';
import { GrFormSubtract, GrFormAdd } from 'react-icons/gr';
import { BsCheckAll } from 'react-icons/bs';

import { ReadingProps } from './types';

import { ButtonContainer, Container } from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import ReadingService from '../../services/ReadingService';

export default function Reading({ id, book, current_page}: ReadingProps) {
	const { token } = useContext(AuthContext);

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
		const readingService = new ReadingService(token as string);

		readingService.update({ reading_id: id, current_page: count.toString() });

		setIsMovedTheNumber(false);
	}

	return (
		<Container>
			<button onClick={handleAddCount} type='button' className="add">
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

			<button onClick={handleSubtractCount} type='button' className="subtract">
				<GrFormSubtract />
			</button>

			<h6>{book.title}</h6>

			{isMovedTheNumber && !isMaximumPageNumber ? (
				<ButtonContainer>
					<button
						onClick={handleSubmit}
						type='button'>
						<AiOutlineCheck size={18} color='#E22D2D'/>
					</button>
				</ButtonContainer>
			) : isMovedTheNumber && isMaximumPageNumber && (
				<ButtonContainer>
					<button
						onClick={handleSubmit}
						type='button'>
						<BsCheckAll size={18} color='#E22D2D'/>
					</button>
				</ButtonContainer>
			)}

		</Container>
	);
}
