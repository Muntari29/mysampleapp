import { useMemo } from "react";
import HText from "../HText/HText";
import { ContentItemProps } from "./types";

const ContentItem = ({
  title,
  period,
  desc,
  roles,
  stack,
}: ContentItemProps) => {
  const roleArray = useMemo(
    () =>
      roles
        .slice(1, -1)
        .split("/")
        .map((str) => str.trim()),
    [roles]
  );

  return (
    <>
      <HText type="h4" className="mt-10">
        {title}
      </HText>
      <span>{period}</span>
      <HText type="h5">Description</HText>
      <p>{desc}</p>
      <HText type="h5">Role</HText>
      <ul className="list-inside list-disc">
        {roleArray.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <HText type="h5">Tech Stack</HText>
      <p>{stack}</p>
    </>
  );
};

export default ContentItem;
