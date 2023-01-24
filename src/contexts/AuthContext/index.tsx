import { AxiosError } from 'axios';
import { createContext, useState, useEffect } from 'react';

import SessionService from '../../services/SessionService';

import { IAuthProvider, IContext, IUser } from './types';

import { getTokenLocalStorage, getUserLocalStorage, setTokenLocalStorage, setUserLocalStorage } from './utils';

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: IAuthProvider ) {
	const [user, setUser] = useState<IUser | null>(null);
	const [token, setToken] = useState<string | null>(null);

	async function authenticate(username: string, password: string) {
		try {
			const { data } = await SessionService.login({ username, password });

			setUser(data.user);
			setToken(data.token);

			setUserLocalStorage(data.user);
			setTokenLocalStorage(data.token);
		} catch(error) {
			if (error instanceof AxiosError) {
				console.log(error.response?.data);

				return;
			}
			console.log(error);
		}
	}

	function logout() {
		setUser(null);
		setUserLocalStorage(null);
		setTokenLocalStorage(null);
	}

	useEffect(() => {
		const userLocalStorage = getUserLocalStorage();
		const tokenLocalStorage = getTokenLocalStorage(logout);

		console.log(userLocalStorage);
		console.log(tokenLocalStorage);
	}, []);

	return (
		<AuthContext.Provider value={{
			...user,
			authenticate,
			logout
		}}>
			{ children }
		</AuthContext.Provider>
	);
}
