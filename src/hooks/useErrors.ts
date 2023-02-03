import { useState } from 'react';

interface ErrorProps {
  field: string;
  message: string;
}

export default function useErrors() {
	const [errors, setErrors] = useState<ErrorProps[]>();

	const setError = ({ field, message }: ErrorProps) => {
		const errorAlreadyExists = errors?.find((error) => error.field === field);

		if (errorAlreadyExists) {
			return;
		}

		setErrors((prevState) => [
			...prevState!,
			{ field, message }
		]);
	};

	const removeError = (fieldName: string): void => {
		setErrors((prevState) => prevState?.filter((error) => (
			error.field !== fieldName
		)));
	};

	const getErrorByFieldName = (fieldName: string): string | null => {
		return errors?.find((error) => (
			error.field === fieldName
		))?.message || null;
	};

	return {
		errors,
		setError,
		removeError,
		getErrorByFieldName,
	};
}
