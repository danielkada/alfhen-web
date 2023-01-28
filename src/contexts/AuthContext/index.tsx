import { AxiosError } from 'axios';
import { createContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import SessionService from '../../services/SessionService';

import { IAuthProvider, IContext, IUser } from './types';

import useAuth from './utils';

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: IAuthProvider ) {
	const [user, setUser] = useState<IUser | null>(null);
	const [token, setToken] = useState<string | null | undefined>(null);

	const isAuthenticate = !!user && !!token;

	const navigate = useNavigate();

	const {
		getUserLocalStorage,
		getTokenLocalStorage,
		setUserLocalStorage,
		setTokenLocalStorage
	} = useAuth();

	async function authenticate(username: string, password: string) {
		try {
			const { data } = await SessionService.login({ username, password });

			setUser(data.user);
			setToken(data.token);

			setUserLocalStorage(data.user);
			setTokenLocalStorage(data.token);

			navigate('/dashboard');
		} catch(error) {
			if (error instanceof AxiosError) {
				console.log(error.response?.data);

				return;
			}
			console.log(error);
		}
	}

	const logout = useCallback(() => {
		setUser(null);

		localStorage.removeItem('u');
		localStorage.removeItem('t');

		navigate('/signin');
	}, [navigate]);

	useEffect(() => {
		const userLocalStorage: IUser | null = getUserLocalStorage();
		const tokenLocalStorage: string | null | undefined = getTokenLocalStorage(() => logout);

		if (!(userLocalStorage || tokenLocalStorage)) {
			setUser(null);
			setToken(null);
		}

		setUser(userLocalStorage);
		setToken(tokenLocalStorage);
	}, [getUserLocalStorage, getTokenLocalStorage, logout]);

	return (
		<AuthContext.Provider value={{
			...user,
			isAuthenticate,
			token,
			authenticate,
			logout
		}}>
			{ children }
		</AuthContext.Provider>
	);
}
