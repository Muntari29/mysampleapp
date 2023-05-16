import { SectionProps } from './types';

const Section = ({ children }: SectionProps) => {
	return <section className="mt-10">{children}</section>;
};

export default Section;
