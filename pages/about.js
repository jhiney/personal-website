import Head from "next/head";
export default function About() {
	return (
		<div>
			<Head>
				<title>About Me</title>
				<meta name="description" content="About Me" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="min-h-screen flex flex-1 flex-col justify-center items-center p-8"></div>
		</div>
	);
}