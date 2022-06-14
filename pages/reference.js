import Head from "next/head";
import Card from "../components/card";
import Link from "next/link";
import { useState } from "react";

export default function Reference() {
	const [currentAPI, setCurrentAPI] = useState("");

	const onMouseEnterPersonal = () => {
		setCurrentAPI("personal");
	};
	const onMouseEnterEducation = () => {
		setCurrentAPI("education");
	};
	const onMouseEnterExperience = () => {
		setCurrentAPI("experience");
	};

	const onMouseLeave = () => {
		setCurrentAPI("");
	};

	return (
		<div>
			<Head>
				<title>API Reference</title>
				<meta name="description" content="Projects" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-1 flex-col justify-center items-center p-8 min-h-screen">
				<h1 className="font-bold text-7xl text-center">jhiney.dev/api/{currentAPI}</h1>
				<p className="text-center text-2xl p-8 leading-6">
					<b>GET</b> information about me!
				</p>
				<div className="grid lg:grid-cols-1 gap-6 pt-6 sm:grid-cols-1 md:grid-cols-1">
					<div onMouseEnter={onMouseEnterPersonal} onMouseLeave={onMouseLeave}><Card cardDescription="A little bit of personal information" link="" /></div>
					<div onMouseEnter={onMouseEnterExperience} onMouseLeave={onMouseLeave}><Card cardDescription="A little about my work life" link="" /></div>
					<div onMouseEnter={onMouseEnterEducation} onMouseLeave={onMouseLeave}><Card cardDescription="A little about my education" link="" /></div>
				</div>
			</div>
		</div>
	);
}
