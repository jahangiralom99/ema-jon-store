import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Order = () => {
  const product = useLoaderData();
  const [cart, setCart] = useState(product);

  const hendelRemovedFromCart = (id) => {
      const reamaining = cart.filter(pd => pd.id !== id);
      setCart(reamaining);
      removeFromDb(id)
    };
    
    const hendelRemovedAllCart = () => {
        setCart([])
        deleteShoppingCart()
    }

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
              <Cart cart={cart}
              hendelRemovedAllCart={hendelRemovedAllCart}
              >
                  <Link to="/checkout">
                  <button className="mt-5 text-white p-4 flex justify-between items-center h-[56px] w-full bg-[#FF9900] rounded-md"> <span>Proceed Checkout</span>
                         <FontAwesomeIcon icon={faCreditCard} />
                      </button>
                  </Link>
              </Cart>
      </div>
    </div>
  );
};

export default Order;
