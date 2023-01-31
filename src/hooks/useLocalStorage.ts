import { useState, useCallback } from 'react';

export default function useLocalStorage(key: string, initialValue: string) {
	const [state, setState] = useState(() => {
		try {
			const storedValue = localStorage.getItem(key);

			return storedValue ? JSON.parse(storedValue) : initialValue;
		} catch {
			return initialValue;
		}
	});

	const setValue: (value: JSON) => void = useCallback(
		(value: JSON) => {
			try {
				setState(value);
				localStorage.setItem(key, JSON.stringify(value));
			} catch (error) {
				//
			}
		}, [key]
	);

	return [state, setValue];
}


