import logo from '../../assets/images/logo.svg';

import { Link } from 'react-router-dom';

import { ButtonsContainer, Container } from './styles';

export default function Home() {
	return (
		<Container>
			<img src={logo} alt='Logo' width={110}/>

			<ButtonsContainer>
				<Link to='/signup'>Iniciar</Link>
				<Link to='/signin'>Já tenho uma conta</Link>
			</ButtonsContainer>
		</Container>
	);
}
