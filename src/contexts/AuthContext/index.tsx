import { createContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import SessionService from '../../services/SessionService';
import UserService from '../../services/UserService';
import toast from '../../utils/toast';

import { IAuthProvider, IContext, IUser, IUserCreate } from './types';

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
		const { data } = await SessionService.login({ username, password });

		setUser(data.user);
		setToken(data.token);

		setUserLocalStorage(data.user);
		setTokenLocalStorage(data.token);

		navigate('/dashboard');
	}

	const logout = useCallback(() => {
		setUser(null);

		localStorage.removeItem('u');
		localStorage.removeItem('t');

		navigate('/signin');
	}, [navigate]);

	async function create({name, surname, username, password, confirm_password }: IUserCreate) {
		const userService = new UserService(null);

		await userService.create({ name, surname, username, password, confirm_password });

		toast({
			type: 'success',
			text: 'Usuário criado com sucesso!'
		});

		navigate('/signin');
	}

	async function update({ name, surname, username }: IUser) {
		const token = getTokenLocalStorage(logout);
		const userService = new UserService(token as string);

		await userService.update({ name, surname, username });

		setUser({ name, surname, username});

		setUserLocalStorage({ name, surname, username});
	}

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
			isAuthenticate,
			token,
			authenticate,
			logout,
			getUserLocalStorage,
			update,
			create,
		}}>
			{ children }
		</AuthContext.Provider>
	);
}
