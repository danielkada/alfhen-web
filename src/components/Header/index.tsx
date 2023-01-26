import { Input } from '../Input';
import { Container } from './styles';
import { HeaderProps } from './types';

export default function Header({
	title,
	searchTerm,
	onChange,
	placeholder
}: HeaderProps) {
	return (
		<Container>
			<h3>{title}</h3>

			<Input
				placeholder={placeholder}
				value={searchTerm}
				onChange={onChange}
			/>
		</Container>
	);
}
