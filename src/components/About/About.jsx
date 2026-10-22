import React from 'react';
import './About.css';
import paniPuri from '../../assets/paniPuri.png';

const About = () => {
    return (
        <section className="about">
            <div className="about-container">

                <div className="about-text">
                    <span className="about-tag">
                        🍽️ ABOUT TASTIGO
                    </span>

                    <h1>
                        Good Food.
                        <br />
                        <span>Good Mood.</span>
                    </h1>

                    <p className="about-description">
                        Welcome to Tastigo, your ultimate destination
                        for fast, fresh, and effortless food delivery.
                        We bring together the city's finest restaurants
                        and local kitchens, delivering your favorite
                        flavors right to your doorstep.
                    </p>

                    <div className="about-promise">
                        <h3>❤️ Our Promise</h3>
                        <p>
                            Fresh food, fast delivery, and happiness
                            in every bite. At Tastigo, we make every
                            meal special with quality, convenience,
                            and flavors you'll love.
                        </p>
                    </div>

                    <button
                        className="about-btn"
                        onClick={() => window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        })}
                    >
                        Explore Tastigo <span>→</span>
                    </button>

                    <div className="about-features">
                        <div>
                            <strong>⚡ Fast</strong>
                            <small>Quick delivery</small>
                        </div>

                        <div>
                            <strong>🥗 Fresh</strong>
                            <small>Quality food</small>
                        </div>

                        <div>
                            <strong>😋 Tasty</strong>
                            <small>Every bite</small>
                        </div>
                    </div>
                </div>

                <div className="about-image">
                    <div className="image-circle"></div>

                    <img
                        src={paniPuri}
                        alt="Delicious food from Tastigo"
                    />

                    <div className="food-badge">
                        <span>😋</span>
                        <div>
                            <strong>Made with Love</strong>
                            <small>Served with happiness</small>
                        </div>
                    </div>

                    <div className="floating-dot dot-one"></div>
                    <div className="floating-dot dot-two"></div>
                </div>

            </div>
        </section>
    );
};

export default About;