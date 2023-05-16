import Image from 'next/image';
import { Inter } from 'next/font/google';
import HText from '@/components/HText/HText';
import content from '@/config/content';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		// <div className="text-dark-primary dark:text-white  m-auto w-80 ">
		//   <div className=" bg-dark-primary dark:bg-white rounded-2xl">
		// <Image
		//   src={"/ryan.gif"}
		//   alt={"ryan gif..."}
		//   width={500}
		//   height={500}
		//   priority
		// />
		//   </div>
		//   <div className="text-center p-6">
		//     <p>CDN 정적 웹 배포하볼까나~</p>
		//   </div>
		// </div>
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
				<HText className="h-[120px] flex justify-center items-center">
					{content.title}
				</HText>
				<p className="pt-1 text-lg">{content.subTitle}</p>
			</div>
		</main>
	);
}
