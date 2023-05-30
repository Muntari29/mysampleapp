import HText from "../HText/HText";
import { ContentItemProps } from "./types";

const ContentItem = ({
  title,
  period,
  desc,
  roles,
  stack,
}: ContentItemProps) => {
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
        <li>역할1</li>
        <li>역할2</li>
        <li>역할3</li>
        <li>역할4</li>
      </ul>
      <HText type="h5">Tech Stack</HText>
      <p>{stack}</p>
    </>
  );
};

export default ContentItem;
