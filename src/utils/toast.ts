interface ToastProps {
  type: string;
  text: string;
}

export default function toast({ type, text }: ToastProps) {
	const event = new CustomEvent('addtoast', {
		detail: {
			id: Math.random(),
			type,
			text,
		}
	});

	document.dispatchEvent(event);
}
