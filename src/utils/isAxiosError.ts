import { AxiosError } from 'axios';

export default function isAxiosError(error: unknown): error is AxiosError {
	if (error && typeof error === 'object' && 'isAxiosError' in error) {
		return true;
	}
	return false;
}
