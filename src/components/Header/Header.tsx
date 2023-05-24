import { setLocalStorageItem } from '@/utils/localStorage';
import { memo } from 'react';
import { MdDarkMode } from 'react-icons/md';
import IconButton from '../IconButton/IconButton';

const Header = () => {
	const handleChangeTheme = () => {
		const hasClassNameDark =
			document.documentElement.classList.value === 'dark';
		if (hasClassNameDark) {
			document.documentElement.classList.remove('dark');
			setLocalStorageItem('theme', 'light');
			return;
		}
		document.documentElement.classList.add('dark');
		setLocalStorageItem('theme', 'dark');
	};

	return (
		<header className="flex h-full box-border justify-end items-center bg-white dark:bg-dark-primary p-4">
			<IconButton onClick={handleChangeTheme}>
				<MdDarkMode size={24} />
			</IconButton>
		</header>
	);
};

export default memo(Header);
