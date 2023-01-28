import { useContext } from 'react';

import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

import Home from '../pages/Home';
import Information from '../pages/Information';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

function NotPrivateRoute() {
	const { isAuthenticate } = useContext(AuthContext);

	return isAuthenticate ? <Navigate to='/dashboard' /> : <Outlet />;
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
				<Route path="/dashboard" element={<Dashboard /> } />
				<Route path="/information" element={<Information /> } />
			</Route>
		</Routes>
	);
}
