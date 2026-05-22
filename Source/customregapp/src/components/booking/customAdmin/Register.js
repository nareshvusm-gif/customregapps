import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './customAStyle/login.css';


function Register() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    // Logic to save user (e.g., to localStorage or API)
    console.log("Registered:", { email });
    navigate('/login'); // Redirect to login after registration

     try {
      const response = await axios.post('http://localhost:8080/user/register', {
        email: email,
        password: password,
        confirmPassword: confirmPassword
      });
      
      console.log('Registration Success:', response.data);
      // Save token to localStorage or handle successful redirect here
    } catch (error) {
      console.error('Registration Failed:', error.response?.data || error.message);
    }
  };
  
  return (
    <div className="login-card">
      <div className="login-card-header">
       <h2 className='text'>REGISTER</h2>
        <div className="underline"></div>
      </div>
      <form className="login-form" onSubmit={handleRegister}>
        <label>Email *</label>
        <input className="input-text" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required /> 
       <br></br>
                <label>Password *</label>
        <input className="input-text" type="password" placeholder="Create Password" onChange={(e) => setPassword(e.target.value)} required />
        <br></br>
        <label>Confirm Password *</label>
        <input className="input-text" type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
        <br></br>
        <button className="send-btn" type="submit">Sign Up</button>
      </form>
      <p className="register-link"><Link to="/login">LOGIN</Link></p>
    </div>
  );
}

export default Register;
