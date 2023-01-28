import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Container, Overlay } from './styles';
import { SignOutModalProps } from './types';

export default function SignOutModal({ isVisible, onCancel }: SignOutModalProps) {
	const { logout } = useContext(AuthContext);

	if (!isVisible) {
		return null;
	}

	return (
		<Overlay>
			<Container>
				<h3>Encerrar sessão</h3>

				<div className="content">
					<p>Tem certeza que deseja sair?</p>

					<div className="buttons-container">
						<button className='leave' onClick={logout}>Sair</button>
						<button className='cancel' onClick={onCancel}>Cancelar</button>
					</div>

				</div>

			</Container>
		</Overlay>
	);
}
