import React, { useState } from "react";
import './Navbar.css'
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';

import CardSidebar from "../cardSidebar/cardSidebar";

const Navbar = ({cart,setCart}) =>{

    let [show,setShow] = useState(false)
    return(
        <div className='mainContainer'>
            <nav>
                <div className='logo'>
                    <div className='foodlogo'>🍔</div> 
                    <div>Tastigo</div>
                </div>

                <ul className='listItems'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/'} onClick={()=> setShow(!show)}><CiShoppingCart />
                    <span>{cart.length}</span>
                    </Link></li>
                </ul>
            </nav>
            {
             show && <CardSidebar cart={cart} setCart={setCart} show={show} setShow={setShow}/>
            }
        </div>
    )
}

export default Navbar