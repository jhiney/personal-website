export default function Layout({children}) {
	return (
		<div className="bg-white dark:bg-gradient-to-b from-slate-900 via-gray-900 to-zinc-900 text-black dark:text-white font-mono">
		{children}	
		</div>
	);
}