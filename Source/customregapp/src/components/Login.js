import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './login.css'; // Assuming you have some basic styles for auth forms

function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic to verify credentials would go here
    console.log("Logged in with:", email);
    navigate('/dashboard'); // Redirect to a protected page
  };

  return (
    <div className="auth-container">
      <div className="auth-container.header">
        <h2 className='text'>Login</h2>
        <div className="underline"></div>
      </div>
      <br />
      <form className="auth-container.form" onSubmit={handleLogin}>
        <input className="input" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <input className="input" type="password" placeholder="Password" required />
        <br />
        <button className="submit" type="submit">Login</button>
      </form>
      <p className="p">New User? <Link to="/register">Register instead</Link></p>
    </div>
  );
}

export default Login;
