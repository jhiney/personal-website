import Link from "next/link";
export default function Card(props) {
	return (
		<Link href={props.link} passHref={true}>
			<div className="max-w-sm rounded overflow-hidden border-2 border-black dark:border-zinc-400 dark:hover:border-cyan-600">
				<div className="px-6 py-4">
					{!props.cardTitle ? (
						""
					) : (
						<div className="font-bold text-xl mb-2 dark:text-white text-left">
							{props.cardTitle}
						</div>
					)}
					<p className="text-zinc-700 text-base dark:text-zinc-400 text-left">
						{props.cardDescription}
					</p>
				</div>
			</div>
		</Link>
	);
}
