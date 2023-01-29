import { useCallback } from 'react';

import jwtDecode from 'jwt-decode';

import { ITokenDecode, IUser } from './types';

export default function useAuth() {
	function setUserLocalStorage(user: IUser | null) {
		localStorage.setItem('u', JSON.stringify(user));
	}

	const getUserLocalStorage = useCallback(() => {
		const json = localStorage.getItem('u');

		if (!json) {
			return null;
		}

		const user = JSON.parse(json);
		return user ?? null;
	}, []);

	function setTokenLocalStorage(token: string | null) {
		localStorage.setItem('t', JSON.stringify(token));
	}

	const getTokenLocalStorage = useCallback((logout: () => void)=> {
		const json = localStorage.getItem('t');

		if (!json) {
			return null;
		}


		if (json) {
			const token: string = JSON.parse(json);
			const tokenDecode: ITokenDecode = jwtDecode(token);
			const date = Date.now();

			if (tokenDecode.exp <= Math.floor(date / 1000)) {
				logout();

				return null;
			}

			return `Beare ${token}`;
		}
	}, []);

	return {
		setUserLocalStorage,
		getUserLocalStorage,
		setTokenLocalStorage,
		getTokenLocalStorage,
	};
}


