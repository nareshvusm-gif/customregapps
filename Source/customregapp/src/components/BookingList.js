import react from "react";

import React, { useState } from 'react';

function BookingList() {
  // 1. Set up state for your input and the response
  const [bookingDate, setBookingDate] = useState('');
  const [response, setResponse] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bookingDate: bookingDate })
    };

    try {
      // 2. Make the POST request
      const res = await fetch('http://localhost:8080/bookingAPI/currentBookingList', requestOptions);
      const data = await res.json();
      
      console.log('API Response:', data); // Log the response for debugging
      // 3. Save the response data to state
      setResponse(data);
        // If response is null, show a loading message
        
    } catch (error) {
      console.error('Error posting data:', error);
    }


  };

  return (
    <div style={{ padding: '20px' }}>
        
      <h2>Current BookingList</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={bookingDate} 
          onChange={(e) => setBookingDate(e.target.value)} 
          placeholder="Enter booking date" 
        />
        <button type="submit">Submit</button>
      </form>
      <h1>Booking List</h1>
      {response.map((item) => (
        <div key={item.id}>
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

export default BookingList;