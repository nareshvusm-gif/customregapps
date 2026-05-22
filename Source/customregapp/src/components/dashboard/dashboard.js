import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import './customStyle/dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="current-booking-card">
      <div className="current-booking-card-header">
        <h2>Dashboard</h2>
      </div>
      <div className="current-booking-form">
        <button className="send-btn" onClick={() => navigate('/CurrentBookings')}>Today's Bookings</button>
        <br />
        <button className="send-btn" onClick={() => navigate('/UpcomingBookings')}>Upcoming Bookings</button>
        <br />
        <button className="send-btn" onClick={() => navigate('/UserBooking')}>User Booking</button>
        <br />
        <button className="send-btn" onClick={() => navigate('/login')}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;