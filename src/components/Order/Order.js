import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {

    const product = useLoaderData();
    console.log(product);

    return (
        <div className='shop-container bg-white'>
        <div className='product-container h-[107px] mx-auto'>
                {
                    product.map(cart => <ReviewItem
                        key={cart.id}
                        cart ={cart}
                    ></ReviewItem>)
                }
                {
                    product.map(cart => console.log(cart))
                }
        </div>
        <div className='cart-container'>
           <Cart cart={product}></Cart>
        </div>
    </div>
    );
};

export default Order;