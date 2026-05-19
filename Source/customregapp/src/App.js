import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/dashboard';
import CurrentBookings from './components/booking/CurrentBookings';
import UpcomingBookings from './components/booking/UpcomingBookings';
import BookingLists from './components/BookingLists';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/CurrentBookings" element={<CurrentBookings />} />
        <Route path="/UpcomingBookings" element={<UpcomingBookings />} />
        <Route path="/BookingLists" element={<BookingLists />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} /> {/* Default route */}
       
      </Routes>
    </Router>
  );
}

export default App;









// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
