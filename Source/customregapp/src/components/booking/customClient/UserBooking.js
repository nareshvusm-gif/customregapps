import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './clientStyle/UserBookingStyle.css';

import { useNavigate, Link } from 'react-router-dom';


function UserBooking () {
     const [userName, setUserName] = useState('');
     const [userPhNum, setUserPhNum] = useState('');
     const [startDate, setStartDate] = useState(new Date());
     const [response, setResponse] = useState([]);
    const navigate = useNavigate();


     const handleSubmit = async (e) => {
     e.preventDefault(); // Prevents page reload
     console.log("Booking in name with:", userName);
    navigate('/dashboard');
 
     try {
       const response = await axios.post('http://localhost:8080/bookingAPI/bookingUser', {
         userName: userName,
         userPhNum: userPhNum,
          bookingDate: startDate // Assuming the API expects a field named 'bookingDate'
       });
       
       console.log('Booking Success:', response.data);
       // Save token to localStorage or handle successful redirect here
     } catch (error) {
       console.error('Booking Failed:', error.response?.data || error.message);
     }
   };
 
  return (
    <div className="booking-card">
        
      <h2 className="booking-card-header">Book Appointment</h2>
      
      <form className='booking-form' onSubmit={handleSubmit}>
            <label>Select Booking Date *</label>
         <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="Pp" // Displays both date and time
          />
            <br />
            <label>Full Name *</label>
          <input type="text" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <br />
           <label>Mobile Number *</label>
          <input type="text" name="userPhNum" value={userPhNum} placeholder="10-digit mobile number" onChange={(e) => setUserPhNum(e.target.value)} />
           <br />
        <button className="send-btn" type="submit">✈️Submit</button>
      </form>
    </div>
  );
}

export default UserBooking;