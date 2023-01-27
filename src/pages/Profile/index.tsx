import Footer from '../../components/Footer';

import { Container } from './styles';

export default function Profile() {
	return (
		<>
			<Container>
				<h3>Perfil</h3>

				<form>
					<div className="input-container">
						<label htmlFor="name">Nome</label>
						<input type="text" id='name'/>
					</div>

					<div className="input-container">
						<label htmlFor="name">Sobrenome</label>
						<input type="text" id='name'/>
					</div>

					<div className="input-container">
						<label htmlFor="name">Nome de Uusário</label>
						<input type="text" id='name'/>
					</div>

					<div className="button-container">
						<button type='button'>Atualizar</button>
					</div>
				</form>
			</Container>
			<Footer />
		</>

	);
}
