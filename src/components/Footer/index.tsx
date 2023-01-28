import { AiOutlineHome, AiOutlineUser, AiOutlineSearch, AiOutlineLogout } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import { FooterProps } from './types';

export default function Footer({ onModalVisibility }: FooterProps) {
	return (
		<Container>
			<Link
				to='/profile'
			>
				<AiOutlineUser
					size={26}
					color='#E22D2D'
				/>
			</Link>

			<Link
				to='/readings'
			>
				<AiOutlineHome
					size={26}
					color='#E22D2D'
				/>
			</Link>

			<Link
				to='/search'
			>
				<AiOutlineSearch
					size={26}
					color='#E22D2D'
				/>
			</Link>

			<button onClick={onModalVisibility}>
				<AiOutlineLogout
					size={26}
					color='#E22D2D'
				/>
			</button>
		</Container>

	);
}
