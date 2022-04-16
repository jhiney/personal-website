import { VscGithub, VscMail } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { IconContext } from "react-icons";
export default function Footer() {
  return (
    <div className="flex flex-1 justify-center items-center border-t border-gray-200 p-4 text-xl font-semibold">
				<div className="grid grid-cols-4 gap-4 ">
				<IconContext.Provider value={{  size: "1.5em" }}>
				<VscGithub />
				<VscMail />
				<AiOutlineLinkedin />
				<ImProfile />
				</IconContext.Provider>
				</div>
			</div>
  )
}
