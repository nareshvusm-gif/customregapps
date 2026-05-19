import React, { useState, useEffect } from 'react';
import './CurrentBookings.css'; // Assuming you have some basic styles for the booking list

const UpcomingBookings = () => {
  const [users, setUsers] = useState([]);      // Stores the API data
  const [loading, setLoading] = useState(true); // Tracks loading status
  const [error, setError] = useState(null);    // Tracks any errors

  
  useEffect(() => {
    // 1. Define the function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/bookingAPI/upBookingList');
        
        // 2. Check if the response is okay
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // 3. Parse JSON and update state
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty array means this runs once when the component mounts

  // 4. Conditional Rendering
  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Upcoming Bookings</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.id} - {user.userName} - {user.userPhNum} - {user.bookingDate}</li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingBookings;
