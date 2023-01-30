
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Container } from './styles';

export default function Profile() {
	const { getUserLocalStorage } = useContext(AuthContext);
	const user = getUserLocalStorage();

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

	function handleProfileUpdate(event: ChangeEvent<HTMLFormElement>) {
		event.preventDefault();

		console.log('a');
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
						<button type='submit'>Atualizar</button>
					</div>
				</form>
			</Container>
		</>

	);
}
