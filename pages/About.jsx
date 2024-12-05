import React from 'react';
import './About.css'; // Link to the CSS file for styling

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-text">
                Viaje Car Rental was established in 2020 during Covid-19 when travel restrictions and lockdowns in most parts of the Philippines started. Public transport stopped, and people were limited from going out of their houses.
            </p>
            <p className="about-text">
                Viaje Car Rental started by transporting stranded people from Baguio City to nearby provinces by obtaining Travel Permits from the City Hall and Health Offices.
            </p>
            <p className="about-text">
                On September 2, 2020, we obtained our City Mayor's permit and other legal documents to operate.
            </p>
            <p className="about-text">
                In June 2021, we established our second branch at Rosales, Pangasinan catering self-drive to any point in Pangasinan, Nueva Ecija, and Tarlac.
            </p>
            <p className="about-text">
                By 2022, we expanded our services to La Union.
            </p>
            <p className="about-text">
                In 2023, we started serving Nueva Ecija and nearby areas.
            </p>
            <p className="about-text">
                We keep on improving our services every step of our way to provide transport services for everyone, anywhere, at their convenience.
            </p>
        </div>
    );
};

export default About;
