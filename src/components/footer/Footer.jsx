import React from 'react';
import { Link } from 'react-router-dom';
import { MdMarkEmailUnread } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-heading">About Us</h4>
          <p className="footer-text">
            We are committed to providing innovative solutions to address Vitamin A deficiency globally.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/product" className="footer-link">Product</Link></li>
            <li><Link to="/market-opportunity" className="footer-link">Market Opportunity</Link></li>
            <li><Link to="/investors" className="footer-link">Investors</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contact Us</h4>
          <div className='icon-container'>
            <MdMarkEmailUnread />
            <p className="footer-text">Email: hemaforhealth@gmail.com</p>
          </div>
          <div className='icon-container'>
            <FaPhoneAlt />
            <p className="footer-text">Phone: (+91) 9825455607</p>
          </div>
          <div className='icon-container'>
          <FaLocationDot />
            <p className="footer-text">Address: E-01, FF Sahjanand Complex, Dehgam Modasa Road, Dehgam, Gandhi Nagar, Gujarat, India, 382305</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-text">© 2024 Prakhar Inovation All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://facebook.com" className="footer-icon">Facebook</a>
          <a href="https://twitter.com" className="footer-icon">Twitter</a>
          <a href="https://www.instagram.com/prakhar_innovations/" className="footer-icon">instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
