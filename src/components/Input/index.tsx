import { useState } from 'react';

import { InputProps } from './types';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { Container } from './styles';

export default function Input({
	placeholder,
	type,
	onChange,
	value,
	IconComponent,
	isPassword = false,
	error,

}: InputProps) {
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

	const isFilledInput = !!value;
	const iconColor = isFocused || isFilledInput ? '#E22D2D' : '#B5B3B3';
	const inputTypePasswordEnabled = visiblePassword ? 'text' : 'password';

	function handleVisiblePassword() {
		setVisiblePassword((prevState) => prevState ? false : true);
	}

	return (
		<Container isFocused={isFocused} error={error}>
			<div className="icon">
				<IconComponent size={22} color={error ? '#B80303' : iconColor} />
			</div>

			<input
				placeholder={placeholder}
				type={type === 'password' ? inputTypePasswordEnabled : type}
				onChange={onChange}
				value={value}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>

			{isPassword && (
				<button onClick={handleVisiblePassword} type='button' className="icon">
					{visiblePassword
						? (
							<AiFillEye size={22} color={iconColor} />
						) : (
							<AiFillEyeInvisible size={22} color={iconColor} />
						)}
				</button>
			)}

		</Container>
	);
}
