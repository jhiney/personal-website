export default function Card(props) {
	return (
		<div className="max-w-sm rounded overflow-hidden border-2 border-black dark:border-zinc-200">
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2 dark:text-white">The Coldest Sunset</div>
				<p className="text-zinc-700 text-base dark:text-zinc-200">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
					Maiores et perferendis eaque, exercitationem praesentium nihil.
				</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				<span className="inline-block bg-zinc-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mr-2 mb-2 dark:bg-zinc-700 dark:text-zinc-200">
					{props.tool1}
				</span>
				<span className="inline-block bg-zinc-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mr-2 mb-2 dark:bg-zinc-700 dark:text-zinc-200">
					{props.tool2}
				</span>
				<span className="inline-block bg-zinc-200 rounded-full px-3 py-1 text-sm font-semibold text-zinc-700 mr-2 mb-2 dark:bg-zinc-700 dark:text-zinc-200">
					{props.tool3}
				</span>
			</div>
		</div>
	);
}
