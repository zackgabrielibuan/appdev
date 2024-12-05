// components/CarFilter.js

import React, { useState, useEffect } from 'react';

const CarFilter = ({ onFilterChange }) => {
    // State to manage the selected filter values
    const [filters, setFilters] = useState({
        brand: '',
        priceRange: [0, 10000],
        carType: '',
        rentalPeriod: 'day',
    });

    // Sample brands and car types for the dropdowns
    const brands = ['Toyota', 'BMW', 'Audi', 'Ford', 'Honda', 'Nissan', 'Mitsubishi', 'Chevrolet', 'Hyundai', 'Kia', 'Mazda', 'Mercedes-Benz', 'Volkswagen', 'Porsche'];
    const carTypes = ['SUV', 'Sedan', 'Truck', 'Hatchback'];

    // Handle changes in the filter
    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        if (name === 'priceRange') {
            // Handle price range change
            const range = value.split('-').map(Number); // e.g., "1000-5000" => [1000, 5000]
            setFilters((prevState) => ({
                ...prevState,
                priceRange: range,
            }));
        } else {
            setFilters((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    // Notify the parent component (Home) of the filter change
    useEffect(() => {
        onFilterChange(filters);
    }, [filters, onFilterChange]);

    return (
        <div className="car-filter">
            <h3>Filter Cars</h3>

            {/* Filter by Brand */}
            <div className="filter-group">
                <label htmlFor="brand">Brand:</label>
                <select
                    name="brand"
                    id="brand"
                    value={filters.brand}
                    onChange={handleFilterChange}
                >
                    <option value="">All Brands</option>
                    {brands.map((brand) => (
                        <option key={brand} value={brand}>
                            {brand}
                        </option>
                    ))}
                </select>
            </div>

            {/* Filter by Price Range */}
            <div className="filter-group">
                <label htmlFor="priceRange">Price Range (PHP):</label>
                <select
                    name="priceRange"
                    id="priceRange"
                    value={`${filters.priceRange[0]}-${filters.priceRange[1]}`}
                    onChange={handleFilterChange}
                >
                    <option value="0-5000">₱0 - ₱5,000</option>
                    <option value="5000-10000">₱5,000 - ₱10,000</option>
                    <option value="10000-20000">₱10,000 - ₱20,000</option>
                    <option value="30000-50000">₱30,000 - ₱50,000</option>
                </select>
            </div>

            {/* Filter by Car Type */}
            <div className="filter-group">
                <label htmlFor="carType">Car Type:</label>
                <select
                    name="carType"
                    id="carType"
                    value={filters.carType}
                    onChange={handleFilterChange}
                >
                    <option value="">All Types</option>
                    {carTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            {/* Rental Period */}
            <div className="filter-group">
                <label htmlFor="rentalPeriod">Rental Period:</label>
                <select
                    name="rentalPeriod"
                    id="rentalPeriod"
                    value={filters.rentalPeriod}
                    onChange={handleFilterChange}
                >
                    <option value="day">Per Day</option>
                    <option value="week">Per Week</option>
                    <option value="month">Per Month</option>
                </select>
            </div>
        </div>
    );
};

export default CarFilter;
