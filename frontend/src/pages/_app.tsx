// Import required modules and components
import "../../styles/globals.scss";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import PopulatedNavBar from "../components/PopulatedNavBar";
import CreateAccount from "./createAccount";
import Login from "./login";
import { useRouter } from 'next/router'; // Import the useRouter hook from Next.js

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const router = useRouter();
    const username = session?.user?.name;

    return (
        <SessionProvider session={session}>
            <PopulatedNavBar username={username} />
            {/* Use Next.js Link component for navigation */}
            {router.pathname === '/createAccount' && <CreateAccount />}
            {router.pathname === '/login' && <Login />}
            {router.pathname !== '/createAccount' && router.pathname !== '/login' && <Component {...pageProps} />}
        </SessionProvider>
    );
}

export default MyApp;
