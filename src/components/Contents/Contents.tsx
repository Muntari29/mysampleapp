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
				<HText type="h4">모바일 어플리케이션 개발</HText>
				<span>2023.01 - 2023.04</span>
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
				{/*  */}
				<HText
					type="h4"
					className="mt-10">
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
			</div>
		</div>
	);
};

export default Contents;
