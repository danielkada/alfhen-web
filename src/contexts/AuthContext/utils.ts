import jwtDecode from 'jwt-decode';

import { ITokenDecode, IUser } from './types';

export function setUserLocalStorage(user: IUser | null) {
	localStorage.setItem('u', JSON.stringify(user));
}

export function getUserLocalStorage() {
	const json = localStorage.getItem('u');

	if (!json) {
		return null;
	}

	const user = JSON.parse(json);
	return user ?? null;
}

export function setTokenLocalStorage(token: string | null) {
	localStorage.setItem('t', JSON.stringify(token));
}

export function getTokenLocalStorage(logout: () => void) {
	const json = localStorage.getItem('t');

	if (!json) {
		return null;
	}

	if (json) {
		const token = JSON.parse(json);
		const tokenDecode: ITokenDecode = jwtDecode(token);
		const date = Date.now();

		if (tokenDecode.exp <= Math.floor(date / 1000)) {
			logout();

			return;
		}

		return `Beare ${token}`;
	}
}
