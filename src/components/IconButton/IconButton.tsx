import { IconButtonProps } from './types';

const IconButton = ({ children, className = '', onClick }: IconButtonProps) => {
	return (
		<div className={`flex gap-4 ${className}`}>
			<button
				className="flex items-center w-10 h-10 rounded-full bg-dark-primary dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-black"
				onClick={onClick}>
				<div className="w-10 h-10 flex justify-center items-center">
					{children}
				</div>
			</button>
		</div>
	);
};

export default IconButton;
