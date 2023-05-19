import HText from "../HText/HText";

const Row = () => {
  return (
    <div className="pt-8 pb-8 border-b-[1px]">
      <HText type="h3">
        프로그래머스 빅데이터 플랫폼 프론트엔드 엔지니어링
      </HText>
      <span>21.07 - 21.12</span>
      <p className="mt-8 text-lg md:text-xl">
        JavaScript, Vanilla, Vue, React, 데이터 시각화, 개인 및 팀 프로젝트
        커리큘럼 진행
      </p>
    </div>
  );
};

export default Row;
