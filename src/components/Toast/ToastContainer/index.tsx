import { useState, useEffect } from 'react';

import ToastMessage from '../ToastMessage';

import { toastEventManager } from '../../../utils/toast';

import { MessageProps } from './types';

import { Container } from './styles';

export default function ToastContainer() {
	const [messages, setMessages] = useState<MessageProps[]>([]);

	useEffect(() => {
		function handleAddToast({ type, text }: MessageProps) {
			setMessages((prevState) => [
				...prevState,
				{
					id: Math.random(),
					type,
					text
				}
			]);
		}

		toastEventManager.on({ event: 'addtoast', listener: handleAddToast });

		return () => {
			toastEventManager.removeListener({ event: 'addtoast', listener: handleAddToast });
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
