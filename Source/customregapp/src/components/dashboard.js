import React from "react";
import { useNavigate, Link } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <p>This is a protected page that only logged-in users can see.</p>
      <br />
      <button onClick={() => navigate('/bookingList')}>Go to Booking List</button>
      <br />
      <button onClick={() => navigate('/bookingLists')}>Booking Lists</button>
      <br />
      <button onClick={() => navigate('/login')}>Logout</button>
    
    </div>
  );
}

export default Dashboard;