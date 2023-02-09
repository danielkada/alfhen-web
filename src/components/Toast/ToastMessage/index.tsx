import { BiErrorCircle } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import { ToastMessageProps } from './types';

import { Container } from './styles';

export default function ToastMessage({ message, onRemoveMessage }: ToastMessageProps) {
	function handleRemoveToast() {
		onRemoveMessage(message.id);
	}

	return (
		<Container type={message.type} onClick={handleRemoveToast}>
			{message.type === 'error' && <BiErrorCircle size={22} />}
			{message.type === 'success' && <AiOutlineCheckCircle size={22} />}
			<strong>{message.text}</strong>
		</Container>
	);
}
