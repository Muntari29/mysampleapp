import { HTextProps } from './types';

const HText = ({ type, children, className = '' }: HTextProps) => {
	switch (type) {
		case 'h5':
			return <h5 className={`text-lg font-medium ${className}`}>{children}</h5>;
		case 'h4':
			return <h4 className={`text-xl font-medium ${className}`}>{children}</h4>;
		case 'h3':
			return (
				<h3 className={`text-2xl font-semibold ${className}`}>{children}</h3>
			);
		case 'h2':
			return (
				<h2 className={`text-3xl font-semibold ${className}`}>{children}</h2>
			);
		default:
			return (
				<h1 className={`text-4xl font-semibold ${className}`}>{children}</h1>
			);
	}
};

export default HText;
