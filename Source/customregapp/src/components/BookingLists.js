import React, { useEffect, useState } from "react";

 //function BookingLists() {

function BookingLists() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/bookingAPI/currentBookingList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookingDate: "2026-05-11T13:45:30.500",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("API Response:", response);

        // read response data
        setData(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h1>Booking Lists</h1>

      {data.map((item) => (
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

export default BookingLists;