import { useState, useEffect } from 'react';

import ToastMessage from '../ToastMessage';

import { MessageProps } from './types';

import { Container } from './styles';

export default function ToastContainer() {
	const [messages, setMessages] = useState<MessageProps[]>([]);

	useEffect(() => {
		function handleAddToast(event: CustomEvent) {
			const { id, type, text } = event.detail;

			setMessages((prevState) => [
				...prevState,
				{
					id,
					type,
					text
				}
			]);
		}

		document.addEventListener('addtoast', handleAddToast as EventListener);

		return () => {
			document.removeEventListener('addtoast', handleAddToast as EventListener);
		};
	}, []);

	return (
		<Container>
			{messages.map((message) => (
				<ToastMessage key={message.id} type={message.type} text={message.text} />
			))}
		</Container>
	);
}
