import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate, Link } from 'react-router-dom';

import './customAStyle/login.css'; // Assuming you have some basic styles for auth forms

function Login() {
   const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Logged in with:", userName);
   navigate('/dashboard');

    try {
      const response = await axios.post('http://localhost:8080/user/login', {
        userName: userName,
        password: password
      });
      
      console.log('Login Success:', response.data);
      // Save token to localStorage or handle successful redirect here
    } catch (error) {
      console.error('Login Failed:', error.response?.data || error.message);
    }
  };

  return (
    <div className="login-card">
      <div className="login-card-header">
        <h2 className='text'>Login</h2>
        <div className="underline"></div>
      </div>
      <br />
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username/Email address *</label>
        <input className="input-text" type="email" value={userName} placeholder="Username or Email" onChange={(e) => setUserName(e.target.value)} required />
        <br />
        <label>Password *</label>
        <input className="input-text" type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <br />
        <button className="send-btn" type="submit">Login</button>
      </form>
      <p className="register-link"><Link to="/register">REGISTER</Link></p>
    </div>
  );
}

export default Login;
