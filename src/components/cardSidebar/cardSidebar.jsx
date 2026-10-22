import React, { useState } from 'react';
import './cardSidebar.css';
import { QRCodeCanvas } from 'qrcode.react';

const CardSidebar = ({ cart, setCart, show, setShow }) => {
    let [showQr, setShowQr] = useState(false);

    let removeItems = (index) => {
        const updatedCart = [...cart];
        if (updatedCart[index].qty > 1) {
            updatedCart[index].qty -= 1;
        } else {
            updatedCart.splice(index, 1);
        }
        setCart(updatedCart);
    };

    let total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <h2>Your Cart</h2>
                <button className='closebtn' onClick={() => setShow(!show)}>❌</button>
            </div>

            <div className='cart-content'>
                <div className='cart-items-container'>
                    {cart.map((item, index) => {
                        return (
                            <div className='cartItem' key={index}>
                                <img src={item.img} alt={item.name} />
                                <div className='cartDetails'>
                                    <p>{item.name}</p>
                                    <p>&#8377;{item.price}</p>
                                </div>

                                <div className='qtyControls'>
                                    <button onClick={() => removeItems(index)}>-</button>
                                    <span>{item.qty}</span>
                                    <button onClick={() => {
                                        const updatedCart = [...cart];
                                        updatedCart[index].qty += 1;
                                        setCart(updatedCart);
                                    }}>+</button>
                                </div>
                                <button className='removebtn' onClick={() => removeItems(index)}>Remove</button>
                            </div>
                        );
                    })}
                </div>

                <div className='sidebar-footer'>
                    <h3 className='total'>Total: &#8377;{total}</h3>
                    
                    {!showQr ? (
                        <button className='orderBtn' onClick={() => setShowQr(true)}>Place Order</button>
                    ) : (
                        <div className='qrBox'>
                            <h2>Scan and Pay</h2>
                            <QRCodeCanvas 
                                value={`Order total: ₹${total}`}
                                size={110}
                            />
                            <h3>Total Amount: &#8377;{total}</h3>
                            <button className='closePaymentBtn' onClick={() => setShowQr(false)}>
                                Close Payment
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardSidebar;