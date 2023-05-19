import Image from "next/image";
import { Inter } from "next/font/google";
import HText from "@/components/HText/HText";
import content from "@/config/content";
import Section from "@/components/Section/Section";
import Contents from "@/components/Contents/Contents";
import Row from "@/components/Row/Row";

const inter = Inter({ subsets: ["latin"] });

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
    <>
      <main className="grid grid-cols-1 md:grid-cols-[120px_minmax(0,_1fr)] ">
        <div>
          <Image
            src={"/ryan.gif"}
            alt={"ryan gif..."}
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
    </>
  );
}
