import backgroundImage from '../../assets/images/background-book.jpg';

import { ChangeEvent, FormEvent, useState, useContext } from 'react';

import { Link } from 'react-router-dom';

import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';

import useErrors from '../../hooks/useErrors';

import Input from '../../components/Input';
import FormGroup from '../../components/FormGroup';

import { Container, InputContainer } from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import LoadingButton from '../../components/LoadingButton';

export default function SignUp() {
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const { create } = useContext(AuthContext);

	const {
		errors,
		setError,
		removeError,
		getErrorByFieldName
	} = useErrors();

	const isFormValid = errors.length === 0
    && password.length > 0
    && password === confirmPassword;

	function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;

		if (value === ' ') {
			return;
		}

		setName(value);

		if (!value) {
			setError({ field: 'name', message: 'O nome é obrigatório!' });
		} else {
			removeError('name');
		}
	}

	function handleSurnameChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;

		if (value === ' ') {
			return;
		}

		setSurname(value);

		if (!value) {
			setError({ field: 'surname', message: 'O sobrenome é obrigatório!' });
		} else {
			removeError('surname');
		}
	}

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

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		setIsLoading(true);

		await create({ name, surname, username, password, confirm_password: confirmPassword});

		setIsLoading(false);
	}

	return (
		<Container>
			<img className='book-img' src={backgroundImage} alt="Books" />

			<InputContainer onSubmit={handleSubmit}>
				<h3>Ao infinito e conhecimento!</h3>

				<FormGroup error={getErrorByFieldName('name')}>
					<Input
						error={!!getErrorByFieldName('name')}
						placeholder='Nome'
						type="text"
						onChange={handleNameChange}
						value={name}
						IconComponent={AiOutlineUser}
					/>
				</FormGroup>

				<FormGroup error={getErrorByFieldName('surname')}>
					<Input
						error={!!getErrorByFieldName('surname')}
						placeholder='Sobrenome'
						type="text"
						onChange={handleSurnameChange}
						value={surname}
						IconComponent={AiOutlineUser}
					/>
				</FormGroup>

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
					{isLoading
						? <LoadingButton />
						: 'Começar'}
				</button>

				<Link to="/signin">
          Já tenho uma conta
				</Link>
			</InputContainer>
		</Container>
	);
}
