import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaBlogger, FaGithubSquare } from "react-icons/fa";
import Link from "next/link";
import contact from "@/config/contact";

const ButtonTable = () => {
  return (
    <div className="flex grid-cols-2 place-items-center gap-2 w-full md:w-32 mt-8 md:grid">
      <button className="hover:bg-[#9da6ae] p-2 rounded-lg w-fit" type="button">
        <Link href={contact.github} target="_blank">
          <FaGithubSquare size={32} color="#1B1F23" />
        </Link>
      </button>
      <button className="hover:bg-[#fa8f94] p-2 rounded-lg w-fit">
        <Link href={contact.email} target="_blank">
          <SiGmail size={32} color="#D42E35" />
        </Link>
      </button>
      <button className="hover:bg-[#fdb98f] p-2 rounded-lg w-fit">
        <Link href={contact.blog} target="_blank">
          <FaBlogger size={32} color="#FF6503" />
        </Link>
      </button>
      <button className="hover:bg-[#93d6f9] p-2 rounded-lg w-fit">
        <Link href={contact.linkedIn} target="_blank">
          <BsLinkedin size={32} color="#0172B1" />
        </Link>
      </button>
    </div>
  );
};

export default ButtonTable;
