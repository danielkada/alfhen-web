import { BiErrorCircle } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import { ToastMessageProps } from './types';

import { Container } from './styles';
import { useEffect } from 'react';

export default function ToastMessage({ message, onRemoveMessage }: ToastMessageProps) {
	function handleRemoveToast() {
		onRemoveMessage(message.id);
	}

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			onRemoveMessage(message.id);
		}, message.duration || 4000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [message, onRemoveMessage]);

	return (
		<Container
			type={message.type}
			onClick={handleRemoveToast}
			tabIndex={0}
			role='button'
		>
			{message.type === 'error' && <BiErrorCircle size={22} />}
			{message.type === 'success' && <AiOutlineCheckCircle size={22} />}
			<strong>{message.text}</strong>
		</Container>
	);
}
