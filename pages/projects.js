import Head from "next/head";
import Footer from "../components/footer";

export default function Projects() {
	return (
		<div className="bg-white dark:bg-gradient-to-b from-slate-900 via-gray-900 to-zinc-900 text-black dark:text-white">
			<Head>
				<title>Projects</title>
				<meta name="description" content="Projects" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="min-h-screen flex flex-1 flex-col justify-center items-center p-8"></div>
			<Footer />
		</div>
	);
}
