import { HTextProps } from './types';

const HText = ({ type, children, className = '' }: HTextProps) => {
	switch (type) {
		case 'h2':
			return <h2 className={`text-2xl ${className}`}>{children}</h2>;
		case 'h3':
			return <h3 className={`text-3xl ${className}`}>{children}</h3>;
		default:
			return <h1 className={`text-4xl ${className}`}>{children}</h1>;
	}
};

export default HText;
