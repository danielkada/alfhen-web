import { useState } from 'react';

import { BiSearchAlt } from 'react-icons/bi';

import { SearchInputProps } from './types';

import { Container } from './styles';

export default function SearchInput({
	placeholder,
	value,
	onChange
}: SearchInputProps) {
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const iconColor = isFocused ? '#E22D2D' : '#B5B3B3';

	return (
		<Container isFocused={isFocused}>
			<input
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>

			<div className="icon-container">
				<BiSearchAlt color={iconColor} size={26} />
			</div>
		</Container>
	);
}
