import EventManager from '../lib/EventManager';

export const toastEventManager = new EventManager();

interface ToastProps {
  type: string;
  text: string;
}

export default function toast({ type, text }: ToastProps) {
	toastEventManager.emit({ event: 'addtoast', payload: { type, text }});
}
