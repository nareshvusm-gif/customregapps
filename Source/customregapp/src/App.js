import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/booking/customAdmin/Login';
import Register from './components/booking/customAdmin/Register';
import Dashboard from './components/dashboard/dashboard';
import CurrentBookings from './components/booking/customAdmin/CurrentBookings';
import UpcomingBookings from './components/booking/customAdmin/UpcomingBookings';
import UserBooking from './components/booking/customClient/UserBooking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/CurrentBookings" element={<CurrentBookings />} />
        <Route path="/UpcomingBookings" element={<UpcomingBookings />} />
        <Route path="/UserBooking" element={<UserBooking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} /> {/* Default route */}
       
      </Routes>
    </Router>
  );
}

export default App;
