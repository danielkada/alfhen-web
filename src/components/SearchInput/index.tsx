import { useState } from 'react';

import { BiSearchAlt } from 'react-icons/bi';

import { SearchInputProps } from './types';

import { Container } from './styles';

export default function SearchInput({
	placeholder,
	value,
	onChange,
	googleBooks = false,
	onSearchGoogleBooks
}: SearchInputProps) {
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const iconColor = isFocused ? '#E22D2D' : '#B5B3B3';

	return (
		<Container googleBooks={googleBooks} isFocused={isFocused}>
			<input
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>

			{googleBooks ? (
				<button onClick={onSearchGoogleBooks} type='button' className="icon-container">
					<BiSearchAlt color='#fff' size={26} />
				</button>
			) : (
				<div className="icon-container">
					<BiSearchAlt color={iconColor} size={26} />
				</div>
			)}

		</Container>
	);
}
