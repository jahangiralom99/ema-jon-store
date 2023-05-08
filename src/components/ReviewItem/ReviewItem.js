import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ cart }) => {
  const { img, name, price, shipping } = cart;
  return (
    <div className="flex items-center mt-6 border-2 p-2 rounded-md">
      <img className="w-[91px] rounded-lg" src={img} alt="" />
        <div className="ml-4 grow">
          <h2 className="font-bold">{name}</h2>
         <p>
          Price: <span className="text-[#FF9900]">${price}</span>
             </p>
         <p>
         Shipping Charge: <span className="text-[#FF9900]">${shipping}</span>
         </p>
      </div>
      <button className="h-[55px] w-[55px] rounded-[50%] bg-[#EB57574D]"><span className="text-[#EB5757] "><FontAwesomeIcon icon={faTrashCan} /></span></button>
    </div>
  );
};

export default ReviewItem;
