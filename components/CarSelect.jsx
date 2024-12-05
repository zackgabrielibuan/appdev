import React from 'react';
import './CarSelect.css'; // Optional: Add your own styles

const CarSelect = ({ cars, onCarSelect }) => {
    return (
        <div className="car-select-container">
            <h2>Select a Car</h2>
            <div className="car-grid">
                {cars.map((car, index) => (
                    <div key={index} className="car-card" onClick={() => onCarSelect(car)}>
                        <img src={car.image} alt={car.name} />
                        <h4>{car.name}</h4>
                        <p>{car.model}</p>
                        <p>{car.price} / day</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarSelect;
