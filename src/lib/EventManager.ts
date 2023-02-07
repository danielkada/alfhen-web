type Keys = string;

type ListenersProps = {
  [key in Keys]: Array<() => void>;
}

interface OnProps {
  event: string;
  listener: (payload?: any) => void;
}

interface ListenerProps {
  type: string;
  text: string;
}

interface EmitProps {
  event: string;
  payload?: ListenerProps;
}

export default class EventManager {
	listeners: ListenersProps;

	constructor() {
		this.listeners = {};
	}

	on({ event, listener }: OnProps) {
		if (!this.listeners[event]) {
			this.listeners[event] = [];
		}

		this.listeners[event].push(listener);
	}

	emit({ event, payload }: EmitProps) {
		if (!this.listeners[event]) {
			return;
		}

		this.listeners[event].forEach((listener: (payload: any) => void) => {
			listener(payload);
		});
	}
}

const toastEventManagar = new EventManager();

// eslint-disable-next-line @typescript-eslint/no-empty-function
toastEventManagar.on({ event: 'addtoast', listener: (payload: ListenerProps) => {
	console.log('listener1', payload);
}});

toastEventManagar.emit({ event: 'addtoast', payload: { type: 'error', text: 'Error' }});

console.log(toastEventManagar);
