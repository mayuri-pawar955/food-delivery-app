import React from 'react';
import './Card.css';

const Card = ({ cardData,cart,setCart }) => {

    const addToCart = (product) =>{
        let newCart = [...cart];

        const item = newCart.find((i)=> i.id === product.id)

        if(item){
            item.qty++;
        }else{
            newCart.push({...product,qty:1})
        }

        setCart(newCart)
    }



    return (
        <div className='card-container'>
            {
               cardData.length === 0 ? (<h1> No Item Found</h1>) :(
                 cardData.map((item) => {
                    return (
                        <div className='card' key={item.id}>
                            <h1>{item.name}</h1>
                            <img src={item.img} alt={item.name} />
                            <p>Tasty</p>
                            <p className='price'>Price: &#8377;{item.price}</p>
                            <button onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>
                    );
                })
               )
            }
        
        </div>
    );
};

export default Card;