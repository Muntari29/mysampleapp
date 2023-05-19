import HText from "../HText/HText";

const ContentItem = () => {
  return (
    <>
      <HText type="h4" className="mt-10">
        데스크탑 어플리케이션 및 Admin 웹 개발
      </HText>
      <span>2022.06 - 2023.01</span>
      <HText type="h5">Description</HText>
      <p>내가 수행한 역할</p>
      <HText type="h5">Role</HText>
      <ul className="list-inside list-disc">
        <li>역할1</li>
        <li>역할2</li>
        <li>역할3</li>
        <li>역할4</li>
      </ul>
      <HText type="h5">Tech Stack</HText>
      <p>모바일 개발</p>
    </>
  );
};

export default ContentItem;
