import react from "react";

import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './CurrentBookings.css';

function CurrentBookings() {
  // 1. Set up state for your input and the response
  const [bookingDate, setBookingDate] = useState('');
  const [response, setResponse] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  

  const handleSubmit = async (e) => {
    e.preventDefault();
     
    // Format the date to match the expected format (e.g., "dd-MM-yyyy")
      
      const day = String(startDate.getDate()).padStart(2, '0');
      const month = String(startDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
      const year = startDate.getFullYear();
      const formattedDate = `${year}-${month}-${day}`;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bookingDate: formattedDate })
    };

    try {
      // 2. Make the POST request
      const res = await fetch('http://localhost:8080/bookingAPI/currentBookingList', requestOptions);
      const data = await res.json();
      
      console.log('API Response:', data); // Log the response for debugging
      console.log('Booking Date Sent:', formattedDate); // Log the booking date sent to the API

      // 3. Save the response data to state
      setResponse(data);
        // If response is null, show a loading message
        
    } catch (error) {
      console.error('Error posting data:', error);
    }


  };

  return (
    <div style={{ padding: '20px' }}>
        
      <h2 className="h2">Today's Bookings</h2>
      
      <form onSubmit={handleSubmit}>
         <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="Pp" // Displays both date and time
          />
        <button type="submit">Submit</button>
      </form>
      <br /><br />
      <hr />
      <h1 className="h3">Booking Details </h1>
      {response.map((item) => (
        <div className="booking-item" key={item.id}>
          <p>ID: {item.id}</p>
          <p>userName: {item.userName}</p>  
          <p>userPhNum: {item.userPhNum}</p>
          <p>bookingDate: {item.bookingDate}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default CurrentBookings;