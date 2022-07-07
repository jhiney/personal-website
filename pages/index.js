import Head from "next/head";
import Card from "../components/card";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Jake Hiney</title>
				<meta name="description" content="Jake Hiney" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-1 flex-col justify-center items-center p-8 min-h-screen">
				<h1 className="font-bold text-7xl text-center">Jake Hiney</h1>
				<p className="text-center text-2xl p-8 leading-6 text-zinc-500 dark:text-zinc-300">
					Financial systems & database analyst, self-taught programmer.
				</p>
				<div className="grid lg:grid-cols-3 gap-6 pt-6 sm:grid-cols-1 md:grid-cols-2">
					<Card cardTitle="About Me" cardDescription="A little about myself." link="/about" />
					<Card
						cardTitle="Projects"
						cardDescription="Some things that I have worked on."
						link="/projects"
					/>
					<Card cardTitle="API" cardDescription="Because why not?" link="/reference" />
				</div>
			</div>
		</div>
	);
}
