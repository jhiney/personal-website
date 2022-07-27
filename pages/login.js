import { useRouter } from "next/router";
import { supabase } from "../lib/initSupabase";
import { useState } from "react";

export default function Login() {
	const router = useRouter();
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const handleLogin = async () => {
		try {
			const { error } = await supabase.auth.signIn({
				email: userEmail,
				password: userPassword
			});
			if (error) throw error;
            
            //if the login was sucessful - move to the todo page
			router.push("/authpage");
		} catch (error) {
			alert(error.error_description || error.message);
		}
	};

	return (
		<div className="flex flex-1 flex-col justify-center items-center p-8 min-h-screen font-mono">
			<div className="">
				<label htmlFor="username" className="block text-sm font-medium text-white">
					Email
				</label>
				<input
					type="text"
					name="first-name"
					id="first-name"
					value={userEmail}
					onInput={(e) => setUserEmail(e.target.value)}
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
				/>
			</div>

			<div className="py-4">
				<label htmlFor="password" className="block text-sm font-medium text-white">
					Password
				</label>
				<input
					type="text"
					name="last-name"
					id="last-name"
					value={userPassword}
					onInput={(e) => setUserPassword(e.target.value)}
					className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
				/>
			</div>

			<button
				className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
				onClick={handleLogin}>
				login
			</button>
		</div>
	);
}
