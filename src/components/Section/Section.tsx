import { SectionProps } from "./types";

const Section = ({ children, className = "" }: SectionProps) => {
  return <section className={`mt-10 pb-10 ${className}`}>{children}</section>;
};

export default Section;
