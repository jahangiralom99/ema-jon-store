import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";

const Order = () => {
  const product = useLoaderData();
  const [cart, setCart] = useState(product);

  const hendelRemovedFromCart = (id) => {
      const reamaining = cart.filter(pd => pd.id !== id);
      setCart(reamaining);
      removeFromDb(id)
  };

  return (
    <div className="shop-container bg-white">
      <div className="product-container h-[107px] mx-auto">
        {cart.map((cart) => (
          <ReviewItem
            key={cart.id}
            cart={cart}
            hendelRemovedFromCart={hendelRemovedFromCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
