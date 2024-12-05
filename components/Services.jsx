import React from 'react';
import { FaCar, FaPlane, FaCalendarAlt, FaRoad, FaClock } from 'react-icons/fa';

const Services = () => {
    const services = [
        { 
            title: "Self Drive", 
            description: "Reliable self-driven cars for hire locally and outstation.", 
            icon: <FaCar /> 
        },
        { 
            title: "Airport Transfer", 
            description: "Pickup/drop-off at NAIA and Clark Airport anytime hassle-free.", 
            icon: <FaPlane /> 
        },
        { 
            title: "Periodic Basis", 
            description: "Travel without stress on set dates.", 
            icon: <FaCalendarAlt /> 
        },
        { 
            title: "LTO Practical Exam", 
            description: "Practice driving with our test cars.", 
            icon: <FaRoad /> 
        },
        { 
            title: "Long Term", 
            description: "Weekly and monthly car rental solutions.", 
            icon: <FaClock /> 
        },
    ];

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Our Services</h2>
            <div className="row">
                {services.map((service, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card service-card">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="service-icon">
                                        {service.icon}
                                    </div>
                                    <h5 className="service-title">{service.title}</h5>
                                </div>
                                <p className="service-description">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
