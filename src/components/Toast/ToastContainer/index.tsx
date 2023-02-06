import ToastMessage from '../ToastMessage';
import { Container } from './styles';

export default function ToastContainer() {
	return (
		<Container>
			<ToastMessage type='default' text='default message' />
			<ToastMessage type='error' text='error message' />
			<ToastMessage type='success' text='success message' />
		</Container>
	);
}
