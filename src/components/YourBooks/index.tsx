import { ReadingsProps } from '../../pages/Readings/types';
import Reading from '../Reading';


import { Container } from './styles';

export default function YourBooks({ readings }: ReadingsProps) {
	return (
		<Container>
			{readings.map((reading) => (
				<Reading
					key={reading.id}
					book={reading.book}
					current_page={reading.current_page}
				/>
			))}

		</Container>
	);
}
