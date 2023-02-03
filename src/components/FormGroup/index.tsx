import { FormGroupProps } from './types';

import { Container, Error } from './styles';

export default function FormGroup({ children, error }: FormGroupProps) {
	return (
		<Container>
			{children}
			{error && <Error>{error}</Error>}
		</Container>
	);
}
