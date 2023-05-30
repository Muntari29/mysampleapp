import HText from "../HText/HText";
import { ContentsProps } from "./types";

const Contents = ({ title, period, children }: ContentsProps) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col gap-1 mb-4 md:mb-0">
        <HText type="h3">{title}</HText>
        <span>Frontend Developer</span>
        <span>{period}</span>
      </div>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
};

export default Contents;
