





// TodaysBookings.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is installed: npm install axios

const BookingLists = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodaysBookings = async () => {
            try {
                // Fetching from the Spring Boot API endpoint
                const response = await axios.get('http://localhost:8080/bookingAPI/todayBookingList');
                setBookings(response.data);
            } catch (err) {
                setError('Failed to fetch bookings.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTodaysBookings();
    }, []);

    if (loading) return <div>Loading today's bookings...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Today's Bookings</h2>
            {bookings.length === 0 ? (
                <p>No bookings for today.</p>
            ) : (
                <ul>
                    {bookings.map((booking) => (
                        <li key={booking.id}>
                            <strong>{booking.guestName}</strong> at {new Date(booking.startTime).toLocaleTimeString()}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BookingLists;

















// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const BookingLists = () => {
//   const [startDate, setStartDate] = useState(new Date());

//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={(date) => setStartDate(date)}
//       showTimeSelect
//       dateFormat="Pp" // Displays both date and time
//     />
//   );
// };

// export default BookingLists;












































// import React, { useEffect, useState } from "react";

//  //function BookingLists() {

// function BookingLists() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/bookingAPI/currentBookingList", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         bookingDate: "2026-05-11T13:45:30.500",
//       }),
//     })
//       .then((res) => res.json())
//       .then((response) => {
//         console.log("API Response:", response);

//         // read response data
//         setData(response);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Booking Lists</h1>

//       {data.map((item) => (
//         <div key={item.id}>
//           <p>ID: {item.id}</p>
//           <p>userName: {item.userName}</p>
//           <p>userPhNum: {item.userPhNum}</p>
//           <p>bookingDate: {item.bookingDate}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default BookingLists;