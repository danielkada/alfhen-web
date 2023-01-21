import logo from '../../assets/images/logo.svg';

import { Link } from 'react-router-dom';

import { ButtonsContainer, Container } from './styles';

export default function Home() {
	return (
		<Container>
			<img src={logo} alt='Logo' width={110}/>

			<ButtonsContainer>
				<Link to='/signin'>Iniciar</Link>
				<Link to='/signup'>Já tenho uma conta</Link>
			</ButtonsContainer>
		</Container>
	);
}
