// ReservationRequirements.jsx
import React from 'react';

const ReservationRequirements = () => {
  return (
    <div className="reservation-requirements">
      <h2>Reservation Requirements</h2>
      <p>To reserve a car, please ensure the following:</p>
      <ul>
        <li>Valid driver's license</li>
        <li>Credit card for payment</li>
        <li>At least 21 years of age</li>
        <li>Valid address and phone number</li>
      </ul>
      <button className="continue-reservation">
        Continue to Car Selection
      </button>
    </div>
  );
};

export default ReservationRequirements;
