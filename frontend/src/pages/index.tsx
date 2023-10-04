import Link from 'next/link';

export default function Home() {
    return (
        <div className="container">
            <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
            <h2><Link href="/login">Log in</Link></h2>
            <h2><Link href="/createAccount">Create account</Link></h2>
        </div>
    );
}