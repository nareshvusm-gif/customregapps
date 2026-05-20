import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import '././CurrentBookings.css';
import { useNavigate, Link } from 'react-router-dom';


function UserBooking () {
     const [userName, setUserName] = useState('');
     const [userPhNum, setUserPhNum] = useState('');
     const [bookingDate, setBookingDate] = useState('');
     const [startDate, setStartDate] = useState(new Date());
     const [response, setResponse] = useState([]);
    const navigate = useNavigate();


     const handleSubmit = async (e) => {
      setBookingDate(startDate); // Update bookingDate state with the selected date
     e.preventDefault(); // Prevents page reload
     console.log("Booking in name with:", userName);
    navigate('/dashboard');
 
     try {
       const response = await axios.post('http://localhost:8080/bookingAPI/bookingUser', {
         userName: userName,
         userPhNum: userPhNum,
          bookingDate: bookingDate // Assuming the API expects a field named 'bookingDate'
       });
       
       console.log('Booking Success:', response.data);
       // Save token to localStorage or handle successful redirect here
     } catch (error) {
       console.error('Booking Failed:', error.response?.data || error.message);
     }
   };
 
  return (
    <div style={{ padding: '20px' }}>
        
      <h2 className="h2">Book Appointment</h2>
      
      <form onSubmit={handleSubmit}>
         <DatePicker
            selected={startDate}
            onChange={(date) => setBookingDate(date)}
            showTimeSelect
            dateFormat="Pp" // Displays both date and time
          />
            <br />
          <input type="text" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <br />
          <input type="text" name="userPhNum" value={userPhNum} onChange={(e) => setUserPhNum(e.target.value)} />
           <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserBooking;