import React from 'react';
import './CarDetails.css'; // Optional: Add your own styles

const CarDetails = ({ car, onRent }) => {
    if (!car) {
        return <p>No car selected!</p>;
    }

    return (
        <div className="car-details-container">
            <h2>{car.name} - {car.model}</h2>
            <img src={car.image} alt={car.name} className="car-image" />
            <p><strong>Price per day:</strong> {car.price} / day</p>
            <p><strong>Description:</strong> {car.description}</p>
            <button className="rent-button" onClick={() => onRent(car)}>Rent This Car</button>
        </div>
    );
};

export default CarDetails;
