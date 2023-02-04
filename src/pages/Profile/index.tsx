import { ChangeEvent, useContext, useEffect, useState } from 'react';
import LoadingButton from '../../components/LoadingButton';

import { AuthContext } from '../../contexts/AuthContext';

import { Container } from './styles';

export default function Profile() {
	const { getUserLocalStorage, update } = useContext(AuthContext);
	const user = getUserLocalStorage();

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [name, setName] = useState<string>();
	const [surname, setSurname] = useState<string>();
	const [username, setUsername] = useState<string>();

	function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;

		if (value === ' ') {
			return;
		}

		setName(value);
	}

	function handleSurnameChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;

		if (value === ' ') {
			return;
		}

		setSurname(value);
	}

	function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;

		if (value === ' ') {
			return;
		}

		setUsername(value);
	}

	async function handleProfileUpdate(event: ChangeEvent<HTMLFormElement>) {
		event.preventDefault();

		setIsLoading(true);

		setName(name);
		setSurname(surname);
		setUsername(username);

		await update({
			name: name as string || user.name,
			surname: surname as string || user.surname,
			username: username as string || user.username,
		});

		setIsLoading(false);
	}

	useEffect(() => {
		setName(user.name);
		setSurname(user.surname);
		setUsername(user.username);
	}, [user.name, user.surname, user.username]);

	return (
		<>
			<Container>
				<h3>Perfil</h3>

				<form onSubmit={handleProfileUpdate}>
					<div className="input-container">
						<label htmlFor="name">Nome</label>
						<input
							placeholder={user.name}
							type="text"
							id='name'
							onChange={handleNameChange}
							value={name}
						/>
					</div>

					<div className="input-container">
						<label htmlFor="name">Sobrenome</label>
						<input
							placeholder={user.surname}
							type="text"
							id='name'
							onChange={handleSurnameChange}
							value={surname}
						/>
					</div>

					<div className="input-container">
						<label htmlFor="name">Nome de Uusário</label>
						<input
							placeholder={user.username}
							type="text"
							id='name'
							onChange={handleUsernameChange}
							value={username}
						/>
					</div>

					<div className="button-container">
						<button type='submit'>
							{isLoading
								? <LoadingButton />
								: 'Atualzar'}
						</button>
					</div>
				</form>
			</Container>
		</>

	);
}
