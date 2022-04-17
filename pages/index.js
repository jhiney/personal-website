import Head from "next/head";
import Image from "next/image";
import Card from "../components/card";
import Footer from "../components/footer";

export default function Home() {
	return (
		<div className="bg-white dark:bg-zinc-800 text-black dark:text-white">
			<Head>
				<title>Jake Hiney</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="min-h-screen flex flex-1 flex-col justify-center items-center p-8">
				<h1 className="font-bold text-7xl text-center">Jake Hiney</h1>
				<p className="text-center text-2xl p-8 leading-6">
					Financial systems & database analyst, self-taught programmer.
				</p>
				<div className="grid grid-cols-2 gap-6 pt-6">
					<Card />
					<Card />
					<Card />
					<Card tool1="hello" tool2="my" tool3="world" />
				</div>
			</div>
			<Footer />
		</div>
	);
}
