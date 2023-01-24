import { BrowserRouter } from 'react-router-dom';

import Router from './routes';

import { AuthProvider  } from './contexts/AuthContext';

import { GlobalStyles } from './styles/GlobalStyles';

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />

			<AuthProvider>
				<Router />
			</AuthProvider>

		</BrowserRouter>
	);
}

export default App;
