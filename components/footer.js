import { VscGithub, VscMail } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { IconContext } from "react-icons";
import Link from "next/link";
export default function Footer() {
	return (
		<div className="flex flex-1 p-4 text-xl font-semibold fixed bottom-0 right-0">
			<div className="grid grid-cols-4 gap-4 text-gray-500 ">
				<IconContext.Provider value={{ size: "1.5em" }}>
					<div className="hover:text-cyan-600"><Link  href="https://github.com/jhiney" passHref={true}><VscGithub /></Link></div>
					<div className="hover:text-cyan-600"><VscMail /></div>
					<div className="hover:text-cyan-600"><Link href="https://www.linkedin.com/in/jhiney/" passHref={true}><AiOutlineLinkedin /></Link></div>
					<div className="hover:text-cyan-600"><ImProfile /></div>
				</IconContext.Provider>
			</div>
		</div>
	);
}
