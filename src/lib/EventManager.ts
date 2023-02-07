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

	removeListener({ event, listener: ListenerToRemove }: OnProps) {
		const listeners = this.listeners[event];

		if (!listeners) {
			return;
		}

		const filteredListeners = listeners.filter(
			(listener) => listener !== ListenerToRemove
		);

		this.listeners[event] = filteredListeners;
	}
}

function addToast(payload: ListenerProps) {
	console.log('listener1', payload);
}

function addToast2(payload: ListenerProps) {
	console.log('listener2', payload);
}

const toastEventManagar = new EventManager();

// eslint-disable-next-line @typescript-eslint/no-empty-function
toastEventManagar.on({ event: 'addtoast', listener: addToast});

toastEventManagar.on({ event: 'addtoast', listener: addToast2});

toastEventManagar.emit({ event: 'addtoast', payload: { type: 'error', text: 'Error' }});

toastEventManagar.removeListener({event: 'addtoast', listener: addToast });

console.log(toastEventManagar);
