import HText from '../HText/HText';

const Contents = () => {
	return (
		<div className="mt-8 grid grid-cols-1 md:grid-cols-2">
			<div className="flex flex-col gap-1 mb-4 md:mb-0">
				<HText type="h3">콜라비팀</HText>
				<span>Frontend Developer</span>
				<span>2022.06 - 2023.05</span>
			</div>
			<div className="flex flex-col gap-1">
				<HText type="h3">모바일 어플리케이션 개발</HText>
				<span>2023.01 - 2023.04</span>
				<span>2022.06 - 2023.05</span>
			</div>
		</div>
	);
};

export default Contents;
