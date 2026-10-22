import React from 'react';
import './Footer.css'

const Footer = () =>{
    return(
       <footer className='footer'>
        <div className='footer-container'>
            <div className='footer-section'>
                <h2>Tastigo</h2>
                <p>Bringing your favorite  flavors straight to your doorstep, fast and fresh with Tastigo.</p>
            </div>
            <div className='footer-section'>
                <h3>Quick Links</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='footer-section'>
                <h3>Contact Info</h3>
                <p>Email: info@tastigo.com</p>
                <p>Phone: +91 7796477318</p>
            </div>
        </div>
        <div className='footer-bottom'>
            <p> &copy; 2026 Tastigo. All Rights Reserved.</p>
        </div>
       </footer>
    )
}

export default Footer