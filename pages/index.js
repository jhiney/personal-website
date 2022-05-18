import Head from "next/head";
import Card from "../components/card";
import Footer from "../components/footer";
import Link from "next/link";

export default function Home() {
	return (
		<div className="bg-white dark:bg-gradient-to-b from-slate-900 via-gray-900 to-zinc-900 text-black dark:text-white">
			<Head>
				<title>Jake Hiney</title>
				<meta name="description" content="Jake Hiney" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-1 flex-col justify-center items-center p-8 min-h-screen">
				<h1 className="font-bold text-7xl text-center">Jake Hiney</h1>
				<p className="text-center text-2xl p-8 leading-6">
					<Link href="/projects">
						Financial systems & database analyst, self-taught programmer.
					</Link>
				</p>
				<div className="grid lg:grid-cols-3 gap-6 pt-6 sm:grid-cols-1 md:grid-cols-2">
					<Card cardTitle="About Me" cardDescription="A little about myself" link="/about" />
					<Card
						cardTitle="Projects"
						cardDescription="Some things that I have worked on."
						link="/projects"
					/>
					<Card cardTitle="API" cardDescription="Because why not?" link="/reference" />
				</div>
				<Footer />
			</div>
		</div>
	);
}
