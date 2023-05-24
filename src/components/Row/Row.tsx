import HText from "../HText/HText";
import { RowProps } from "./types";

const Row = ({ title, period, description }: RowProps) => {
  return (
    <div className="pt-8 pb-8 border-b-[1px]">
      <HText type="h3">{title}</HText>
      <span>{period}</span>
      <p className="mt-8 text-lg md:text-xl">{description}</p>
    </div>
  );
};

export default Row;
