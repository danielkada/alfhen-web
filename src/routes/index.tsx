import { useContext } from 'react';

import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

import Books from '../pages/Books';
import GoogleBooks from '../pages/GoogleBooks';
import Home from '../pages/Home';
import Information from '../pages/Information';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

function NotPrivateRoute() {
	const { isAuthenticate } = useContext(AuthContext);

	return isAuthenticate ? <Navigate to='/books' /> : <Outlet />;
}

function PrivateRoute() {
	const { isAuthenticate } = useContext(AuthContext);

	// const location = useLocation();

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
				<Route path="/search" element={<GoogleBooks /> } />
				<Route path="/profile" element={<Profile /> } />
				<Route path="/information" element={<Information /> } />
			</Route>
		</Routes>
	);
}
