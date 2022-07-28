import { supabase } from "../lib/initSupabase";
import { Auth } from "@supabase/ui";
import TodoList from "../components/TodoList";

export default function IndexPage() {
	const { user } = Auth.useUser();

	return (
		<div className="flex flex-1 flex-col justify-center items-center p-8 min-h-screen">
			<div
				className="w-full h-full flex flex-col justify-center items-center p-4"
				style={{ minWidth: 250, maxWidth: 600, margin: "auto" }}>
				<TodoList user={supabase.auth.user()} />
				<button
					className="btn-black w-full mt-12"
					onClick={async () => {
						const { error } = await supabase.auth.signOut();
						if (error) console.log("Error logging out:", error.message);
					}}>
					Logout
				</button>
			</div>
		</div>
	);
}
