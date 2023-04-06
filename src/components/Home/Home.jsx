import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShart from "../Tshart/TShart";
import Cart from "../Cart/Cart";
import "./Home.css";
import toast from 'react-hot-toast';

const Home = () => {
  const tShirt = useLoaderData();
  const [carts, setCarts] = useState([]);
  console.log(carts);
  const handleCartButton = (id) => {
    const exists= carts.find(c=>c._id ===id._id)
    if(exists){
        toast('Already Added.');
    }
    else{const newCart = [...carts, id];
    setCarts(newCart);}
  };
  const handleRemove=id=>{
    const remainingCart=carts.filter(ts=>ts._id!==id)
    setCarts(remainingCart);
  }
  return (
    <div className="home-container">
      <div className="tshirts-conatiner">
        {tShirt.map((tshirt) => (
          <TShart
            key={tshirt._id}
            tshirt={tshirt}
            handleCartButton={handleCartButton}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart handleRemove={handleRemove} carts={carts} />
      </div>
    </div>
  );
};

export default Home;
