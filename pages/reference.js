import Head from "next/head";

export default function Reference() {
	return (
		<div>
			<Head>
				<title>API Reference</title>
				<meta name="description" content="Projects" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="min-h-screen flex flex-1 flex-col justify-center items-center p-8"></div>
		</div>
	);
}