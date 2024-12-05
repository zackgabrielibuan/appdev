import React from 'react';

const Hero = () => {
    return (
        <div className="hero-section text-center py-5" style={{ backgroundImage: "url('/path/to/banner.jpg')", backgroundSize: 'cover', color: 'white' }}>
            <h1>VIAJE CAR RENTAL</h1>
            <p>Travel anywhere in Luzon, Philippines with our unique services.</p>
            <button className="btn btn-primary mt-3">Vehicle Showroom</button>
        </div>
    );
};

export default Hero;
