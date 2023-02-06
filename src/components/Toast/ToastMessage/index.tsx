import { BiErrorCircle } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import { ToastMessageProps } from './types';

import { Container } from './styles';

export default function ToastMessage({ text, type }: ToastMessageProps) {
	console.log(type);

	return (
		<Container type={type}>
			{type === 'error' && <BiErrorCircle size={22} />}
			{type === 'success' && <AiOutlineCheckCircle size={22} />}
			<strong>{text}</strong>
		</Container>
	);
}
