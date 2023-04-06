import React from 'react';

const Cart = ({carts,handleRemove}) => {
    return (
        <div>
            <h2> Order Summary : {carts.length}</h2>
            {
                carts.map(cart=> <p key={cart._id}>{cart.name} <button onClick={()=>handleRemove(cart._id)}>x</button></p>)
            }
        </div>
    );
};

export default Cart;