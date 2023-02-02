import { useEffect, useState } from 'react';

import { AiOutlineBook } from 'react-icons/ai';

import { GrFormSubtract, GrFormAdd} from 'react-icons/gr';

import { ReadingProps } from './types';

import { Container } from './styles';

export default function Reading({ book, current_page}: ReadingProps) {
	const [count, setCount] = useState<number>();

	console.log(count);

	function handleAddCount() {
		setCount((prevState) => prevState! += 1);
	}

	function handleSubtractCount() {
		setCount((prevState) => prevState! -= 1);
	}

	useEffect(() => {
		const number = parseInt(current_page);
		setCount(number);
	}, [current_page]);

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
		</Container>
	);
}
