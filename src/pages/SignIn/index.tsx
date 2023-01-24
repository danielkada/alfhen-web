import backgroundImage from '../../assets/images/background-book.jpg';
import logo from '../../assets/images/logo.svg';
import loginButton from '../../assets/images/login-button.svg';

import { AuthContext } from '../../contexts/AuthContext';

import { ChangeEvent, FormEvent, useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';

import { Container, InputContainer } from './styles';

export default function SignIn() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { authenticate } = useContext(AuthContext);

	const isFormValid = username.length > 0 && password.length > 0;

	function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;

		if (value === ' ') {
			return;
		}

		setUsername(value);
	}

	function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;

		if (value === ' ') {
			return;
		}

		setPassword(value);
	}

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		await authenticate(username, password);
	}

	return (
		<Container>
			<InputContainer onSubmit={handleSubmit}>
				<img width={110} src={logo} alt='Logo' />

				<Input
					placeholder='Nome de usuário'
					type="text"
					onChange={handleUsernameChange}
					value={username}
				/>

				<Input
					placeholder='Senha'
					type="password"
					onChange={handlePasswordChange}
					value={password}
				/>

				<button type='submit' disabled={!isFormValid}>
					<img src={loginButton} alt="Login" />
				</button>

				<Link to="/signup">
          Criar conta
				</Link>
			</InputContainer>

			<img className='book-img' src={backgroundImage} alt="Books" />
		</Container>
	);
}
