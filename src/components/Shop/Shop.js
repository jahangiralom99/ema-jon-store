import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'; 
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json',)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = []
        // stap 1
        for (const id in storedCart) {
            // stap number 2 
            const addedProduct = products.find(product => product.id === id);
            // stap number 3
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // stap number 4 
                savedCart.push(addedProduct);
            }
            setCart(savedCart)

        }
    }, [products])
    
    const handleAddToCart = (product ) => {
        const newCart = [...cart, product];
        setCart(newCart);

        addToDb(product.id)
    }


    return (
        <div className='shop-container bg-white'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key ={product.id}
                        product={product}
                        handleAddToCart ={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                cart ={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;