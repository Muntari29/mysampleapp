import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-dark-primary dark:text-white  m-auto w-80 ">
      <div className=" bg-dark-primary dark:bg-white rounded-2xl">
        <Image
          src={"/ryan.gif"}
          alt={"ryan gif..."}
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="text-center p-6">
        <p>CDN 정적 웹 배포하볼까나~</p>
      </div>
    </div>
  );
}
