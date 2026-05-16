import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';


function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Logic to save user (e.g., to localStorage or API)
    console.log("Registered:", formData);
    navigate('/login'); // Redirect to login after registration
  };

  return (
    <div className="div-container">
      <div className="div-container.header">
       <h2 className='text'>REGISTER</h2>
        <div className="underline"></div>
      </div>
      <form className="form-container" onSubmit={handleRegister}>
        <p className='p-username'>Full Name*</p>
        <input className="input-text" type="text" placeholder="Full Name" onChange={(e) => setFormData({...formData, name: e.target.value})} required /> 
       <br></br>
               <p className='p-username'>email address *</p>
        <input className="input-text" type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
        <br></br>
                <p className='p-username'>password *</p>
        <input className="input-text" type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} required />
        <br></br>
        <p className='p-username'>Confirm Password *</p>
        <input className="input-text" type="password" placeholder="Confirm Password" onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} required />
        <br></br>
        <button className="submit" type="submit">Sign Up</button>
      </form>
      <p className="r-submit"><Link to="/login">LOGIN</Link></p>
    </div>
  );
}

export default Register;
