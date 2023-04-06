import React from 'react';
import './TShart.css'

const TShart = ({tshirt,handleCartButton}) => {
    const {picture,name,price}=tshirt
    return (
        <div className='t-Shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price:${price}</p>
            <button onClick={()=>handleCartButton(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShart;