import React from "react";
import { useNavigate, Link } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <p>This is a protected page that only logged-in users can see.</p>
      <br />
      <button onClick={() => navigate('/CurrentBookings')}>Today's Bookings</button>
      <br />
      <button onClick={() => navigate('/UpcomingBookings')}>Upcoming Bookings</button>
      <br />
      <button onClick={() => navigate('/login')}>Logout</button>
    
    </div>
  );
}

export default Dashboard;