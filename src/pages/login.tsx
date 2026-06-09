import React, { useState } from 'react';
import "../../src/pages/login.css";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);

        if (!email.trim() || !password) {
            setError("Please enter email and password!");
            return;
        }
        setLoading(true);
        try {
            // navigate him to a new screen
        } catch (err) {
            setError("Login failed. Please try again.");
        }
        finally {
            setLoading(false);
        }
    }
    
    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit} aria-label="Login Form">
                <h1 className="login-title">Login</h1>

                <label htmlFor="email" className="login-label">Email:
                    <input
                        type="email"
                        id="email"
                        className="login-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>

                <label htmlFor="password" className="login-label">Password:
                    <input
                        type="password"
                        id="password"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>

                <div className="login-actions">
                    <button type="submit" className="login-button" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </div>

                <div className="login-footer">
                    <p className="login-error" role="alert">{error}</p>
                    <p>This is the footer content for the login form.</p>
                </div>

            </form>
        </div>
    )
}