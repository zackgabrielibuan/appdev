import React from 'react';
import './Footer.css'; // Ensure this is linked to your styles

const Footer = () => {
    return (
        <footer className="animated-footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>OUR SERVICES</h4>
                    <ul>
                        <li>Self Drive</li>
                        <li>NAIA/Clark Airport Pickup or Dropoff</li>
                        <li>City Tour</li>
                        <li>LTO Practical Exam</li>
                        <li>Long Term Rental</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>OPERATION HOURS</h4>
                    <p>Inquiries:<br />Mon - Fri: 5 AM - 10 PM<br />Sat - Sun: 5 AM - 10 PM</p>
                    <p>Delivery of Units:<br />7 AM - 7 PM Only</p>
                    <p>Pickup of Units at Garage:<br />Upon availability</p>
                </div>

                <div className="footer-column">
                    <h4>GET IN TOUCH</h4>
                    <p>Marcos Highway, Baguio City<br />Carmay East, Rosales, Pangasinan<br />Angeles City and Clark City, Pampanga</p>
                    <p>WhatsApp Tel: +639499912091<br />Email: rent@viajecarrental.com</p>
                </div>
            </div>

            <div className="footer-logo">
                <img src="src/assets/Screenshot (5).png" alt="Logo" />
            </div>

            <div className="footer-container">
                <div className="footer-column">
                    <h4>Payment Methods</h4>
                    <div className="payment-methods">
                        <img src="src/assets/6.png" alt="Visa" />
                        <img src="src/assets/7.png" alt="MasterCard" />
                        <img src="src/assets/3.png" alt="PayPal" />
                        <img src="src/assets/4.png" alt="BDO" />
                    </div>
                </div>

                <div className="footer-column social-icons">
                    <h4>Follow Us</h4>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                </div>
            </div>

            <div className="copyright">
                © 2024 by Viaje Car Rental | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
