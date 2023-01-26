import { AiOutlineHome, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Footer() {
	return (
		<Container>
			<Link
				to='/books'
				className='profile'
			>
				<AiOutlineUser
					size={26}
					color='#E22D2D'
				/>
			</Link>

			<Link
				to='/books'
				className='books'
			>
				<AiOutlineHome
					size={26}
					color='#E22D2D'
				/>
			</Link>

			<Link
				to='/search'
				className='google-books'
			>
				<AiOutlineSearch
					size={26}
					color='#E22D2D'
				/>
			</Link>
		</Container>
	);
}
