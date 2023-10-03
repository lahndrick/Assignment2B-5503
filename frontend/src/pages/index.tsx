// NOTE: this is the code to work on local host
//
//
// export default function Home() {
//     return (
//         <div className="container">
//             <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
//             <h2><a href="/login">Log in</a></h2>
//             <h2><a href="/createAccount">Create account</a></h2>
//         </div>
//     );
// }

import Link from 'next/link';

export default function Home() {
    return (
        <div className="container">
            <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
            <h2><Link href="/login"><a>Log in</a></Link></h2>
            <h2><Link href="/createAccount"><a>Create account</a></Link></h2>
        </div>
    );
}