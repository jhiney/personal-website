import Link from "next/link";
export default function ProjectCard(props) {
	return (
		<Link href={props.link} passHref={true}>
			<div className="p-4 shadow-lg max-w-sm rounded overflow-hidden border-4 border-black dark:border-zinc-400 hover:shadow-cyan-400/75 transition-shadow duration-500 ">
				<dt className="text-xl font-medium text-cyan-500">{props.projectTitle}</dt>
				<dd className="mt-2 text-lg text-zinc-600 dark:text-zinc-300">{props.projectDescription}</dd>
				<dd className="mt-2 text-lg text-zinc-700 dark:text-zinc-500">{props.projectTools}</dd>
			</div>
		</Link>
	);
}
