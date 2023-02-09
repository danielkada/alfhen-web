import backgroundImage from '../../assets/images/background-book.jpg';
import logo from '../../assets/images/logo.svg';

import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { FaSignInAlt } from 'react-icons/fa';

import { AuthContext } from '../../contexts/AuthContext';

import { ChangeEvent, FormEvent, useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import Input from '../../components/Input';

import useErrors from '../../hooks/useErrors';

import FormGroup from '../../components/FormGroup';
import LoadingButton from '../../components/LoadingButton';

import { Container, InputContainer } from './styles';
import toast from '../../utils/toast';
import { AxiosError } from 'axios';

interface EventProps extends Event {
  detail: {
    id: number;
  type: string;
  text: string;
  }
}

export default function SignIn() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const { authenticate } = useContext(AuthContext);

	const {
		errors,
		setError,
		removeError,
		getErrorByFieldName
	} = useErrors();

	const isFormValid = username.length > 0 && password.length > 0 &&  errors.length === 0;
	const iconColor = isFormValid ? '#fff' : '#B5B3B3';

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

		setIsLoading(true);

		try {
			await authenticate(username, password);
		} catch (error) {
			if (error instanceof AxiosError) {
				// console.log(error.response?.data?.error.includes('These credentials do not match an account in our system!'));
				if (error.response?.data?.error.includes('These credentials do not match an account in our system!')) {
					toast({
						type: 'danger',
						text: 'As credenciais de login não coincidem com uma conta em nosso sistema!'
					});

					setPassword('');

					return;
				}
			}

			toast({
				type: 'danger',
				text: 'Houve um erro ao autenticar o usuário!'
			});
		} finally { setIsLoading(false); }

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
					{isLoading
						? (
							<LoadingButton />
						) : (
							<FaSignInAlt color={iconColor} size={36}/>
						)}
				</button>

				<Link to="/signup">
          Criar conta
				</Link>
			</InputContainer>

			<img className='book-img' src={backgroundImage} alt="Books" />
		</Container>
	);
}
