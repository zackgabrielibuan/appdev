import React, { useState, useEffect } from "react";
import "./RentalHistory.css";

const RentalHistory = () => {
  // Sample rental data (this would typically come from a database)
  const [rentalHistory, setRentalHistory] = useState([]);

  useEffect(() => {
    // Fetch rental history from local storage (or an API if using a back-end)
    const history = JSON.parse(localStorage.getItem("rentalHistory")) || [];
    setRentalHistory(history);
  }, []);

  return (
    <div className="rental-history-container">
      <h1>Rental History</h1>
      {rentalHistory.length > 0 ? (
        <table className="rental-history-table">
          <thead>
            <tr>
              <th>Rental ID</th>
              <th>Car Brand</th>
              <th>Car Type</th>
              <th>Price</th>
              <th>Rental Period</th>
              <th>Date of Rental</th>
            </tr>
          </thead>
          <tbody>
            {rentalHistory.map((rental, index) => (
              <tr key={index}>
                <td>{rental.id}</td>
                <td>{rental.brand}</td>
                <td>{rental.type}</td>
                <td>{new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(rental.price)}</td>
                <td>{rental.period}</td>
                <td>{rental.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No rental history available.</p>
      )}
    </div>
  );
};

export default RentalHistory;
