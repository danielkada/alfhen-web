import { BrowserRouter } from 'react-router-dom';

import Router from './routes';

import { AuthProvider  } from './contexts/AuthContext';

import { GlobalStyles } from './assets/styles/GlobalStyles';
import ToastContainer from './components/Toast/ToastContainer';

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />

			<ToastContainer />

			<AuthProvider>
				<Router />
			</AuthProvider>

		</BrowserRouter>
	);
}

export default App;
