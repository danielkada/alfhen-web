import { AiOutlineHome, AiOutlineUser, AiOutlineSearch, AiOutlineLogout } from 'react-icons/ai';

import { Container } from './styles';
import { FooterProps } from './types';

export default function Footer({ selected, onSelectedChange, onModalVisibility }: FooterProps) {
	return (
		<Container selected={selected}>
			<button
				type='button'
				onClick={() => onSelectedChange({ page: 'profile'})}
				className='profile'
			>
				<AiOutlineUser
					size={26}
					color='#E22D2D'
				/>
			</button>

			<button
				type='button'
				onClick={() => onSelectedChange({ page: 'readings'})}
				className='readings'
			>
				<AiOutlineHome
					size={26}
					color='#E22D2D'
				/>
			</button>

			<button
				type='button'
				onClick={() => onSelectedChange({ page: 'books'})}
				className='books'
			>
				<AiOutlineSearch
					size={26}
					color='#E22D2D'
				/>
			</button>

			<button onClick={onModalVisibility}>
				<AiOutlineLogout
					size={26}
					color='#E22D2D'
				/>
			</button>
		</Container>

	);
}
