import React, { useState } from "react";
import "../../src/pages/login.css";
import image from "../../public/image1.png";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      // Simulate a login API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate('/dashboard');
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-overlay">
        <div className="login-left">
          <h1>Money Management</h1>
          <p>
            Track your expenses, manage your budget, and take control of your
            financial goals.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <img className="login-logo" src={image} alt="Logo" />

          <h2>Welcome Back</h2>
          <p className="login-subtitle">Please login to continue</p>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="login-error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="login-footer">
            <p>
              Don&apos;t have an account? <a href="/signup">Sign up</a>
            </p>
            <a href="/forgot-password">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}
