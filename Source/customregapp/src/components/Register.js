import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';


function Register() {
  const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    // Logic to save user (e.g., to localStorage or API)
    console.log("Registered:", { userName, password });
    navigate('/login'); // Redirect to login after registration

     try {
      const response = await axios.post('http://localhost:8080/user/register', {
        userName: userName,
        password: password
      });
      
      console.log('Registration Success:', response.data);
      // Save token to localStorage or handle successful redirect here
    } catch (error) {
      console.error('Registration Failed:', error.response?.data || error.message);
    }
  };
  
  return (
    <div className="div-container">
      <div className="div-container.header">
       <h2 className='text'>REGISTER</h2>
        <div className="underline"></div>
      </div>
      <form className="form-container" onSubmit={handleRegister}>
        <p className='p-username'>Username*</p>
        <input className="input-text" type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} required /> 
       <br></br>
                <p className='p-username'>password *</p>
        <input className="input-text" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <br></br>
        {/* <p className='p-username'>Confirm Password *</p>
        <input className="input-text" type="password" placeholder="Confirm Password" onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} required />
        <br></br> */}
        <button className="submit" type="submit">Sign Up</button>
      </form>
      <p className="r-submit"><Link to="/login">LOGIN</Link></p>
    </div>
  );
}

export default Register;
