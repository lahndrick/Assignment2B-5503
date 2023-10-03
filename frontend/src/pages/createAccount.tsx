import React from 'react';
import formStyles from "../../styles/Form.module.scss";

export default function CreateAccount() {
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
                <h2>Create Account</h2>
                <div style={formGroupStyle}>
                    <label htmlFor="username" style={labelStyle}>Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div style={formGroupStyle}>
                    <label htmlFor="email" style={labelStyle}>Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div style={formGroupStyle}>
                    <label htmlFor="password" style={labelStyle}>Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <button type="submit">Create Account</button>
                </div>
            </form>
        </div>
    );
}