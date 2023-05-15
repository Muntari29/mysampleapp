import { HTextProps } from "./types";

const HText = ({ type, children }: HTextProps) => {
  switch (type) {
    case "h2":
      return <h2>{children}</h2>;
    case "h3":
      return <h3>{children}</h3>;
    default:
      return <h1>{children}</h1>;
  }
};

export default HText;
