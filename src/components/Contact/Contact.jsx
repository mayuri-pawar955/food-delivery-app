import React from 'react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting Tastigo! 🍔');
        e.target.reset();
    };

    return (
        <section className="contact">
            <div className="contact-container">

                <div className="contact-info">
                    <span className="contact-tag">
                        📩 GET IN TOUCH
                    </span>

                    <h1>
                        Let's Talk About
                        <span> Food!</span>
                    </h1>

                    <p className="contact-description">
                        Have a question, suggestion, or feedback?
                        We'd love to hear from you. Our team at
                        Tastigo is always ready to help!
                    </p>

                    <div className="contact-details">

                        <div className="contact-item">
                            <div className="contact-icon">📍</div>
                            <div>
                                <h3>Our Location</h3>
                                <p>Mumbai, Maharashtra, India</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">✉️</div>
                            <div>
                                <h3>Email Us</h3>
                                <p>hello@tastigo.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">⏰</div>
                            <div>
                                <h3>Working Hours</h3>
                                <p>Monday - Saturday</p>
                            </div>
                        </div>

                    </div>

                    <div className="contact-message">
                        🍕 Good food brings people together!
                    </div>
                </div>

                <div className="contact-form-box">
                    <h2>Send Us a Message</h2>
                    <p>Fill out the form below and say hello!</p>

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <label htmlFor="contact-name">
                                Your Name
                            </label>
                            <input
                                id="contact-name"
                                type="text"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-email">
                                Email Address
                            </label>
                            <input
                                id="contact-email"
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-subject">
                                Subject
                            </label>
                            <input
                                id="contact-subject"
                                type="text"
                                placeholder="What is this about?"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact-message">
                                Your Message
                            </label>
                            <textarea
                                id="contact-message"
                                placeholder="Write your message here..."
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        <button
                            className="contact-btn"
                            type="submit"
                        >
                            Send Message <span>→</span>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;