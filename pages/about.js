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
						<h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
							Hi! My name is <a className="text-cyan-500">Jake.</a>
						</h2>
						<p className="mt-4 text-zinc-300">
							I am currently a financial systems & database analyst working in the non-profit
							sector. Self-taught programmer trying to learn something new every day.
						</p>

						<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
							<div className="border-t border-gray-200 pt-4 ">
								<dt className="text-xl font-medium text-cyan-500">Education</dt>
								<dd className="mt-2 text-lg text-zinc-300">Bachelor of Science, Texas A&M</dd>
								<dd className="mt-2 text-lg text-zinc-300">August 2014 - May 2018</dd>
							</div>

							<div className="border-t border-gray-200 pt-4 ">
								<dt className="text-xl font-medium text-cyan-500">Interests</dt>
								<dd className="mt-2 text-lg text-zinc-300">
									College Football &bull; Road Trips &bull; Mexican Food
								</dd>
							</div>

							<div className="border-t border-gray-200 pt-4">
								<dt className="text-xl font-medium text-cyan-500">
									Languages, Frameworks, and Tools
								</dt>
								<dd className="mt-2 text-lg text-zinc-300">
									C# &bull; JavaScript &bull; VBA &bull; C/AL &bull; SQL &bull; HTML &bull; CSS
								</dd>
								<dd className="mt-2 text-lg text-zinc-300">
									React &bull; .NET &bull; Node.js &bull; Tailwind CSS &bull; Next.js
								</dd>
								<dd className="mt-2 text-lg text-zinc-300">
									GIT &bull; GitHub &bull; Visual Studio &bull; SQL Server &bull; Microsoft Office
									Suite
								</dd>
							</div>

							<div className="border-t border-gray-200 pt-4 hover:border-cyan-500">
								<dt className="text-xl font-medium text-cyan-500">Currently Learning</dt>
								<dd className="mt-2 text-lg text-zinc-300">Go &bull; Rust &bull; Docker</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}
