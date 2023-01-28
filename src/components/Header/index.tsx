import SearchInput from '../SearchInput';

import { HeaderProps } from './types';

import { Container } from './styles';

export default function Header({
	title,
	searchTerm,
	onChange,
	placeholder
}: HeaderProps) {
	return (
		<Container>
			<h3>{title}</h3>

			<SearchInput
				placeholder={placeholder}
				value={searchTerm}
				onChange={onChange}
			/>
		</Container>
	);
}
