import { VscGithub, VscMail } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { IconContext } from "react-icons";
import Link from "next/link";
export default function Footer() {
	return (
		<div className="flex flex-1 justify-center items-center p-4 text-xl font-semibold content-center fixed bottom-0">
			<div className="grid grid-cols-4 gap-4 ">
				<IconContext.Provider value={{ size: "1.5em" }}>
					<Link href="https://github.com/jhiney" passHref={true}><VscGithub /></Link>
					<VscMail />
					<Link href="https://www.linkedin.com/in/jhiney/" passHref={true}><AiOutlineLinkedin /></Link>
					<ImProfile />
				</IconContext.Provider>
			</div>
		</div>
	);
}
