import React, { useState } from 'react';
import Link from 'next/link';
import formStyles from '../../styles/login.module.scss';
import axios from 'axios';

export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const formGroupStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    };

    const labelStyle = {
        width: '120px',
        marginRight: '10px',
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
             const response = await fetch('https://speedbackend.vercel.app', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                // Login successful, handle the response or navigate to the next page.
                console.log('Login successful');
            } else {
                // Handle login error, e.g., display an error message to the user.
                console.error('Login failed:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
        }
    };

    return (
        <div className={formStyles.container}>
            <form className={formStyles.form} onSubmit={handleSubmit}>
                <h2>Welcome back!</h2>
                <div style={formGroupStyle}>
                    <label htmlFor="username" style={labelStyle}>
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div style={formGroupStyle}>
                    <label htmlFor="password" style={labelStyle}>
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Log in</button>
                </div>
                <div>
                    <Link href="/createAccount">Create new Account</Link>
                </div>
            </form>
        </div>
    );
}
