import backgroundImage from '../../assets/images/background-book.jpg';

import { ChangeEvent, FormEvent, useState } from 'react';

import { Link } from 'react-router-dom';

import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import Input from '../../components/Input';

import { Container, InputContainer } from './styles';

export default function SignUp() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const isFormValid = username.length > 0
    && password.length > 0
    && confirmPassword.length > 0
    && password === confirmPassword;

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

	function handleConfirmPasswordChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;

		if (value === ' ') {
			return;
		}

		setConfirmPassword(value);
	}

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		console.log(username);
		console.log(password);
		console.log(confirmPassword);
	}

	return (
		<Container>
			<img className='book-img' src={backgroundImage} alt="Books" />

			<InputContainer onSubmit={handleSubmit}>
				<h3>Ao infinito e conhecimento!</h3>

				<Input
					placeholder='Nome de usuário'
					type="text"
					onChange={handleUsernameChange}
					value={username}
					IconComponent={AiOutlineUser}
				/>

				<Input
					placeholder='Senha'
					type="password"
					onChange={handlePasswordChange}
					value={password}
					IconComponent={AiOutlineLock}
					isPassword
				/>

				<Input
					placeholder='Repetir senha'
					type="password"
					onChange={handleConfirmPasswordChange}
					value={confirmPassword}
					IconComponent={AiOutlineLock}
					isPassword
				/>

				<button className='create' type='submit' disabled={!isFormValid}>
					Começar
				</button>

				<Link to="/signin">
          Já tenho uma conta
				</Link>
			</InputContainer>
		</Container>
	);
}
