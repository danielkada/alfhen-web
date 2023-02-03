import backgroundImage from '../../assets/images/background-book.jpg';

import { ChangeEvent, FormEvent, useState } from 'react';

import { Link } from 'react-router-dom';

import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import Input from '../../components/Input';

import { Container, InputContainer } from './styles';
import useErrors from '../../hooks/useErrors';
import FormGroup from '../../components/FormGroup';

export default function SignUp() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const {
		errors,
		setError,
		removeError,
		getErrorByFieldName
	} = useErrors();

	const isFormValid = errors.length === 0
    && password.length > 0
    && password === confirmPassword;

	function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;

		if (value === ' ') {
			return;
		}

		setUsername(value);

		if (!value) {
			setError({ field: 'username', message: 'O nome de usuário é obrigatório!' });
		} else {
			removeError('username');
		}
	}

	function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;

		if (value === ' ') {
			return;
		}

		setPassword(value);

		if (value !== confirmPassword) {
			setError({ field: 'confirm_password', message: 'As senhas não correspondem!' });
		} else {
			if (!value) {
				setError({ field: 'password', message: 'A senha é obrigatória!' });
			} else {
				removeError('password');
				removeError('confirm_password');
			}
		}
	}

	function handleConfirmPasswordChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;

		if (value === ' ') {
			return;
		}

		setConfirmPassword(value);

		if (value !== password) {
			setError({ field: 'confirm_password', message: 'As senhas não correspondem!' });
		} else {
			if (!value) {
				setError({ field: 'confirm_password', message: 'A confirmação da senha é obrigatória!' });
			} else {
				removeError('confirm_password');
				removeError('password');
			}
		}
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

				<FormGroup error={getErrorByFieldName('username')}>
					<Input
						error={!!getErrorByFieldName('username')}
						placeholder='Nome de usuário'
						type="text"
						onChange={handleUsernameChange}
						value={username}
						IconComponent={AiOutlineUser}
					/>
				</FormGroup>

				<FormGroup error={getErrorByFieldName('password')}>
					<Input
						error={!!getErrorByFieldName('password')}
						placeholder='Senha'
						type="password"
						onChange={handlePasswordChange}
						value={password}
						IconComponent={AiOutlineLock}
						isPassword
					/>
				</FormGroup>


				<FormGroup error={getErrorByFieldName('confirm_password')}>
					<Input
						error={!!getErrorByFieldName('confirm_password')}
						placeholder='Repetir senha'
						type="password"
						onChange={handleConfirmPasswordChange}
						value={confirmPassword}
						IconComponent={AiOutlineLock}
						isPassword
					/>
				</FormGroup>


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
