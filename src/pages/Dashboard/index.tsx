import { useState } from 'react';

import Footer from '../../components/Footer';
import SignOutModal from '../../components/SignOutModal';
import GoogleBooks from '../GoogleBooks';
import Profile from '../Profile';
import Readings from '../Readings';
import { SelectedProps } from './types';

export default function Dashboard() {
	const [selected, setSelected] = useState<'readings' | 'books' | 'profile'>('readings');
	const [isVisible, setIsVisible] = useState(false);

	function handleSelectedChange({ page }: SelectedProps) {
		setSelected(page);
	}

	function handleModalVisibility() {
		setIsVisible((prevState) => prevState === true ? false : true);
	}

	return (
		<>
			<SignOutModal onCancel={handleModalVisibility} isVisible={isVisible} />

			{selected === 'readings' && (
				<Readings />
			)}

			{selected === 'books' && (
				<GoogleBooks />
			)}

			{selected === 'profile' && (
				<Profile />
			)}

			<Footer
				selected={selected}
				onModalVisibility={handleModalVisibility}
				onSelectedChange={handleSelectedChange}
			/>
		</>
	);
}
