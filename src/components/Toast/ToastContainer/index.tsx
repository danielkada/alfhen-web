import { useState, useEffect, useCallback } from 'react';

import ToastMessage from '../ToastMessage';

import { toastEventManager } from '../../../utils/toast';

import { MessageProps } from './types';

import { Container } from './styles';

export default function ToastContainer() {
	const [messages, setMessages] = useState<MessageProps[]>([]);

	const handleRemoveMessage = useCallback((id: number) => {
		setMessages((prevState) => prevState.filter((message) => (
			message.id !== id
		)));
	}, []);

	useEffect(() => {
		function handleAddToast({ type, text, duration}: MessageProps) {
			setMessages((prevState) => [
				...prevState,
				{
					id: Math.random(),
					type,
					text,
					duration,
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
				<ToastMessage
					key={message.id}
					message={message}
					onRemoveMessage={handleRemoveMessage}
				/>
			))}
		</Container>
	);
}
