import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/bookings", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBookings(response.data.bookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        alert("Failed to fetch bookings.");
      }
    };

    fetchBookings();
  }, [token]);

  return (
    <div>
      <h2>Your Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Car Model</th>
            <th>Rental Period</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.carModel}</td>
                <td>{booking.rentalPeriod}</td>
                <td>{booking.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No bookings found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
