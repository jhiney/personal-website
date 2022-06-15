import Head from "next/head";
import ProjectCard from "../components/projectCard";

export default function Projects() {
	return (
		<div>
			<Head>
				<title>Projects</title>
				<meta name="description" content="Projects" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="min-h-screen flex flex-1 flex-col items-center pt-16">
				<h1 className="font-bold text-7xl text-center pb-8">Projects</h1>
				<div className="grid grid-cols-1 pt-8 gap-y-8">
					<ProjectCard
						projectTitle="Tickertron"
						link="https://jhiney.github.io/tickertron/"
						projectDescription="Simple browser-based stock watcher"
						projectTools="React &bull; Boostrap"
					/>
					<ProjectCard
						projectTitle="Nothing Beats the Bell"
						link="https://www.npmjs.com/package/nothing-beats-the-bell"
						projectDescription="NPM package replacing the depreciated Taco Bell API"
						projectTools="Javascript &bull; Node.js &bull; NPM"
					/>
				</div>
			</div>
		</div>
	);
}
