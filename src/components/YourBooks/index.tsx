import { AiOutlineBook } from 'react-icons/ai';

import { ReadingsProps } from '../../pages/Readings/types';

import { Book, Container } from './styles';

export default function YourBooks({ readings }: ReadingsProps) {
	return (
		<Container>
			{readings.map((reading) => (
				<Book key={reading.id}>
					<div className="info img">
						{reading.book.imageURL
							? (
								<img src={reading.book.imageURL as string} alt="Cover" />
							): (
								<AiOutlineBook size={32}/>
							)}
					</div>


					<div className="info number-of-pages">
						<span>{reading.current_page}</span>
					</div>

					<h6>{reading.book.title}</h6>
				</Book>
			))}

		</Container>
	);
}
