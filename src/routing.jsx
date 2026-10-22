import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'

const Routing = () =>{


    let [cart ,setCart] = useState([])

    return(
        <BrowserRouter>
            <Navbar cart={cart} setCart={setCart}/>
            <Routes>
                <Route path='/' element={<Home cart={cart} setCart={setCart}/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing