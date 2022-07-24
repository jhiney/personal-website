import Footer from "../components/footer";
import Layout from "../components/layout";

import { Auth } from "@supabase/ui";
import { supabase } from "../lib/initSupabase";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Auth.UserContextProvider supabaseClient={supabase}>
				<Component {...pageProps} />
			</Auth.UserContextProvider>
			<Footer />
		</Layout>
	);
}

export default MyApp;
