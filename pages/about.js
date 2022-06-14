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
							Hi! My name is Jake.
						</h2>
						<p className="mt-4 text-zinc-400">
							The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards.
							The powder coated steel divider separates active cards from new ones, or can be used
							to archive important task lists.
						</p>

						<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
							<div className="border-t border-gray-200 pt-4">
								<dt className="font-medium text-white">Origin</dt>
								<dd className="mt-2 text-sm text-zinc-400">Designed by Good Goods, Inc.</dd>
							</div>

							<div className="border-t border-gray-200 pt-4">
								<dt className="font-medium text-white">Material</dt>
								<dd className="mt-2 text-sm text-zinc-400">
									Solid walnut base with rare earth magnets and powder coated steel card cover
								</dd>
							</div>

							<div className="border-t border-gray-200 pt-4">
								<dt className="font-medium text-white">Dimensions</dt>
								<dd className="mt-2 text-sm text-zinc-400">6.25&quot; x 3.55&quot; x 1.15&quot;</dd>
							</div>

							<div className="border-t border-gray-200 pt-4">
								<dt className="font-medium text-white">Finish</dt>
								<dd className="mt-2 text-sm text-zinc-400">
									Hand sanded and finished with natural oil
								</dd>
							</div>

							<div className="border-t border-gray-200 pt-4">
								<dt className="font-medium text-white">Includes</dt>
								<dd className="mt-2 text-sm text-zinc-400">Wood card tray and 3 refill packs</dd>
							</div>

							<div className="border-t border-gray-200 pt-4">
								<dt className="font-medium text-white">Considerations</dt>
								<dd className="mt-2 text-sm text-zinc-400">
									Made from natural materials. Grain and color vary with each item.
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}