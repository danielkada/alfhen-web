import backgroundImage from '../../assets/images/background-book.jpg';
import logo from '../../assets/images/logo.svg';

import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { FaSignInAlt } from 'react-icons/fa';

import { AuthContext } from '../../contexts/AuthContext';

import { ChangeEvent, FormEvent, useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import Input from '../../components/Input';

import { Container, InputContainer } from './styles';
import FormGroup from '../../components/FormGroup';
import useErrors from '../../hooks/useErrors';

export default function SignIn() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { authenticate } = useContext(AuthContext);

	const {
		errors,
		setError,
		removeError,
		getErrorByFieldName
	} = useErrors();

	const isFormValid = errors.length === 0;
	const iconColor = isFormValid ? '#fff' : '#B5B3B3';

	console.log(errors.length === 0);

	function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;

		if (value === ' ') {
			return;
		}

		setUsername(value);

		if (!value) {
			setError({ field: 'username', message: 'Nome de usuário obrigatório!' });
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

		if (!value) {
			setError({ field: 'password', message: 'A senha é obrigatória!' });
		} else {
			removeError('password');
		}
	}

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		await authenticate(username, password);
	}

	return (
		<Container>
			<InputContainer onSubmit={handleSubmit}>
				<img width={110} src={logo} alt='Logo' />

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


				<button className='to-enter' type='submit' disabled={!isFormValid}>
					<FaSignInAlt color={iconColor} size={36}/>
				</button>

				<Link to="/signup">
          Criar conta
				</Link>
			</InputContainer>

			<img className='book-img' src={backgroundImage} alt="Books" />
		</Container>
	);
}
