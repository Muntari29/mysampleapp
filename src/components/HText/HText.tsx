import { HTextProps } from "./types";

const HText = ({ type, children, className = "" }: HTextProps) => {
  switch (type) {
    case "h5":
      return <h5 className={`text-lg md:text-xl ${className}`}>{children}</h5>;
    case "h4":
      return <h4 className={`text-lg md:text-2xl ${className}`}>{children}</h4>;
    case "h3":
      return <h3 className={`text-xl md:text-3xl ${className}`}>{children}</h3>;
    case "h2":
      return (
        <h2 className={`text-2xl md:text-4xl ${className}`}>{children}</h2>
      );
    default:
      return (
        <h1 className={`text-3xl md:text-5xl ${className}`}>{children}</h1>
      );
  }
};

export default HText;
