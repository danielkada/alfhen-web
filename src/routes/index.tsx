import { useContext } from 'react';

import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

import Books from '../pages/Books';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

function NotPrivateRoute() {
	const { isAuthenticate } = useContext(AuthContext);

	return isAuthenticate ? <Navigate to='/books' /> : <Outlet />;
}

function PrivateRoute() {
	const { isAuthenticate } = useContext(AuthContext);

	return isAuthenticate ? <Outlet /> : <Navigate to='/signin' />;
}


export default function Router() {
	return (
		<Routes>
			<Route element={<NotPrivateRoute />}>
				<Route path="/" element={<Home /> } />
				<Route path="/signin" element={<SignIn /> } />
				<Route path="/signup" element={<SignUp /> } />
			</Route>

			<Route element={<PrivateRoute />}>
				<Route path="/books" element={<Books /> } />
			</Route>
		</Routes>
	);
}
