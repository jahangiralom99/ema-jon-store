import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart ,hendelRemovedAllCart, children}) => {

  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    if (product.quantity === 0) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }

  const tax = (total * 7) / 100;

  const grentTotal = total + totalShipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>selects Items :{quantity}</p>
      <p>Total Price :{total}</p>
      <p>Total Shipping :{totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grentTotal}</h6>

      <button onClick={hendelRemovedAllCart} className="mt-5 text-white p-4 flex justify-between items-center h-[56px] w-full bg-[#FF3030;] rounded-md"> <span>Clear Cart</span>
      <FontAwesomeIcon icon={faTrashCan} />
      </button>
    {children}
    </div>
  );
};

export default Cart;
