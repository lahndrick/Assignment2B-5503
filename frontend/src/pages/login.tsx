import Link from 'next/link';
import formStyles from '../../styles/Form.module.scss';

export default function Login() {
    const formGroupStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    };

    const labelStyle = {
        width: '120px',
        marginRight: '10px',
    };

    return (
        <div className={formStyles.container}>
            <form className={formStyles.form}>
                <h2>Welcome back!</h2>
                <div style={formGroupStyle}>
                    <label htmlFor="username" style={labelStyle}>
                        Username:
                    </label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div style={formGroupStyle}>
                    <label htmlFor="password" style={labelStyle}>
                        Password:
                    </label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <button type="submit">Log in</button>
                </div>
                <div>
                    <Link href="/createAccount">
                        <a>Create new Account</a>
                    </Link>
                </div>
            </form>
        </div>
    );
}