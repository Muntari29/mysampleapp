import Image from 'next/image';
import { Inter } from 'next/font/google';
import HText from '@/components/HText/HText';
import content from '@/config/content';
import Section from '@/components/Section/Section';
import Contents from '@/components/Contents/Contents';
import Row from '@/components/Row/Row';
import ButtonTable from '@/components/ButtonTable/ButtonTable';
import { AiOutlineArrowUp } from 'react-icons/ai';
import IconButton from '@/components/IconButton/IconButton';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const handleClickTopButton = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<>
			<main className="grid grid-cols-1 md:grid-cols-[120px_minmax(0,_1fr)] ">
				<div>
					<Image
						src={'/ryan.gif'}
						alt={'ryan gif...'}
						width={120}
						height={120}
						loading="lazy"
					/>
				</div>
				<div>
					<HText>{content.title}</HText>
					<p className="pt-6 md:pt-4 text-lg">{content.subTitle}</p>
				</div>
			</main>
			<Section className="border-b-[1px]">
				<HText type="h2">Work Experience</HText>
				<Contents />
			</Section>
			<Section>
				<HText type="h2">Education</HText>
				<Row />
				<Row />
				<Row />
			</Section>
			<Section>
				<HText type="h2">Contact</HText>
				<ButtonTable />
			</Section>
			<IconButton
				className="fixed bottom-4 right-4"
				onClick={handleClickTopButton}>
				<AiOutlineArrowUp size={24} />
			</IconButton>
		</>
	);
}
