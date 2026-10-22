import React, { useState } from "react";
import "./Home.css";
import Card from "../Card/Card.jsx";

import momos from "../../assets/momos.jpeg";
import paniPuri from "../../assets/paniPuri.png";
import pavbhaji from "../../assets/pavBhaji.jpg";
import sandwich from "../../assets/sandwich.jpg";
import vadaPav from "../../assets/vadaPav.jpg";
import pizza from "../../assets/pizza.png";
import burger from "../../assets/burger.jpg";
import frenchFries from "../../assets/frenchFries.jpeg";
import dosa from "../../assets/dosa.jpg";
import idli from "../../assets/idli.jpg";
import samosa from "../../assets/samosa.jpeg";
import kachori from "../../assets/kachori.jpeg";
import noodles from "../../assets/noodles.jpg";
import manchurian from "../../assets/manchurian.jpeg";
import springRoll from "../../assets/springRoll.jpeg";
import pasta from "../../assets/pasta.jpg";
import garlicBread from "../../assets/garlicBread.jpeg";
import frankie from "../../assets/frankie.jpg";
import choleBhature from "../../assets/choleBhature.jpg";
import misalPav from "../../assets/misalPav.jpeg";
import dabeli from "../../assets/dabeli.jpg";
import dhokla from "../../assets/dokla.jpg";
import jalebi from "../../assets/jalebi.jpeg";
import gulabJamun from "../../assets/gulabJamun.jpeg";
import iceCream from "../../assets/iceCream.jpeg";
import brownie from "../../assets/brownie.jpeg";
import cake from "../../assets/cake.jpeg";
import coldCoffee from "../../assets/coldCoffee.jpeg";
import milkshake from "../../assets/milkshake.jpg";
import lemonade from "../../assets/lemonade.jpeg";
import kheer from "../../assets/kheer.jpeg";
import { IoSearch } from "react-icons/io5";

const Home = ({ cart, setCart }) => {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const cardItems = [
        { id: 1, name: "Momos", img: momos, price: 40, category: "Fast Food" },
        { id: 2, name: "Pani Puri", img: paniPuri, price: 30, category: "Street Food" },
        { id: 3, name: "Pav Bhaji", img: pavbhaji, price: 60, category: "Fast Food" },
        { id: 4, name: "Sandwich", img: sandwich, price: 120, category: "Fast Food" },
        { id: 5, name: "Vada Pav", img: vadaPav, price: 20, category: "Street Food" },
        { id: 6, name: "Pizza", img: pizza, price: 150, category: "Fast Food" },
        { id: 7, name: "Burger", img: burger, price: 80, category: "Fast Food" },
        { id: 8, name: "French Fries", img: frenchFries, price: 70, category: "Fast Food" },
        { id: 9, name: "Dosa", img: dosa, price: 60, category: "South Indian" },
        { id: 10, name: "Idli", img: idli, price: 40, category: "South Indian" },
        { id: 11, name: "Samosa", img: samosa, price: 20, category: "Street Food" },
        { id: 12, name: "Kachori", img: kachori, price: 25, category: "Street Food" },
        { id: 13, name: "Noodles", img: noodles, price: 100, category: "Chinese" },
        { id: 14, name: "Manchurian", img: manchurian, price: 120, category: "Chinese" },
        { id: 15, name: "Spring Roll", img: springRoll, price: 90, category: "Chinese" },
        { id: 16, name: "Pasta", img: pasta, price: 110, category: "Fast Food" },
        { id: 17, name: "Garlic Bread", img: garlicBread, price: 80, category: "Fast Food" },
        { id: 18, name: "Frankie", img: frankie, price: 50, category: "Fast Food" },
        { id: 19, name: "Chole Bhature", img: choleBhature, price: 100, category: "North Indian" },
        { id: 20, name: "Misal Pav", img: misalPav, price: 60, category: "Street Food" },
        { id: 21, name: "Dabeli", img: dabeli, price: 25, category: "Street Food" },
        { id: 22, name: "Dhokla", img: dhokla, price: 40, category: "Gujarati" },
        { id: 23, name: "Jalebi", img: jalebi, price: 50, category: "Desserts" },
        { id: 24, name: "Gulab Jamun", img: gulabJamun, price: 40, category: "Desserts" },
        { id: 25, name: "Ice Cream", img: iceCream, price: 60, category: "Desserts" },
        { id: 26, name: "Brownie", img: brownie, price: 90, category: "Desserts" },
        { id: 27, name: "Cake", img: cake, price: 1000, category: "Desserts" },
        { id: 28, name: "Cold Coffee", img: coldCoffee, price: 80, category: "Beverages" },
        { id: 29, name: "Milkshake", img: milkshake, price: 90, category: "Beverages" },
        { id: 30, name: "Lemonade", img: lemonade, price: 40, category: "Beverages" },
        { id: 31, name: "Kheer", img: kheer, price: 70, category: "Desserts" }
    ];

    const categories = ["All", "Fast Food", "Street Food", "South Indian", "Chinese", "Desserts", "Beverages"];

    const filterData = cardItems.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Delicious Food, Delivered <span className="highlight">Fast & Fresh</span></h1>
                    <p>Explore your favorite local flavors and satisfy your cravings right now.</p>
                </div>
            </div>

            {/* Search Bar Section */}
            <div className="search">
                <div className="searchbar">
                    <IoSearch />
                    <input
                        type="text"
                        placeholder="Search for your favorite food item..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Category Filter Pills */}
            <div className="categories-container">
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        className={`category-pill ${selectedCategory === cat ? "active" : ""}`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Menu Section Header */}
            <div className="menu-header">
                <h2>{selectedCategory === "All" ? "Explore Menu" : selectedCategory}</h2>
                <span>Showing {filterData.length} items</span>
            </div>

            {/* Food Cards Grid */}
            <Card cardData={filterData} cart={cart} setCart={setCart} />
        </div>
    );
};

export default Home;