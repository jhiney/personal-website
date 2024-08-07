import Head from "next/head";
export default function About() {
	return (
		<div>
			<Head>
				<title>About Me</title>
				<meta name="description" content="About Me" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="min-h-screen flex flex-1 flex-col justify-center items-center p-8">
				<div className="max-w-7xl mx-auto py-24 px-8 grid items-center grid-cols-1">
					<div>
						<h2 className="text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl">
							Hi! My name is <a className="text-cyan-500">Jake.</a>
						</h2>
						<p className="mt-4 text-zinc-700 dark:dark:text-zinc-300">
							I am currently a data and software engineer supporting NASA at Johnson Space Center.
						</p>

						<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
							<div className="border-t-2 border-gray-200 pt-4 hover:border-cyan-500">
								<dt className="text-xl font-medium dark:text-cyan-500">Education</dt>
								<dd className="mt-2 text-lg text-zinc-700  dark:text-zinc-300">Bachelor of Science, Texas A&M</dd>
								<dd className="mt-2 text-lg text-zinc-700 dark:text-zinc-300">August 2014 - May 2018</dd>
							</div>

							<div className="border-t-2 border-gray-200 pt-4 hover:border-cyan-500">
								<dt className="text-xl font-medium dark:text-cyan-500">Interests</dt>
								<dd className="mt-2 text-lg text-zinc-700  dark:text-zinc-300">
									College Football &bull; Road Trips &bull; Mexican Food
								</dd>
							</div>

							<div className="border-t-2 border-gray-200 pt-4 hover:border-cyan-500">
								<dt className="text-xl font-medium dark:text-cyan-500">
									Languages, Frameworks, and Tools I've Used
								</dt>
								<dd className="mt-2 text-lg text-zinc-700  dark:text-zinc-300">
									C# &bull; Go &bull; JavaScript &bull; VBA &bull; C/AL &bull; SQL &bull; HTML &bull; CSS
								</dd>
								<dd className="mt-2 text-lg text-zinc-700  dark:text-zinc-300">
									React &bull; Sveltekit &bull; .NET &bull; Node.js &bull; Tailwind CSS &bull; Next.js
								</dd>
								<dd className="mt-2 text-lg text-zinc-700  dark:text-zinc-300">
									GIT &bull; GitHub &bull; Visual Studio &bull; Docker &bull; Postgres &bull; SQL Server &bull; Microsoft Office
									Suite
								</dd>
							</div>

							<div className="border-t-2 border-gray-200 pt-4 hover:border-cyan-500">
								<dt className="text-xl font-medium dark:text-cyan-500">Currently Learning</dt>
								<dd className="mt-2 text-lg text-zinc-700  dark:text-zinc-300">Rust &bull;</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}
