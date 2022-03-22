import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Products from './Products/Products';
import './Shop.css'

const Shop = () => {

    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

        
        const [cart,setCart]=useState([]);

        const orderSummary=(product)=>{
            const newProduct = [...cart,product]
            setCart(newProduct);
        };
    return (
        <div className='shop-container'>
            <div className="product-container">
        {
            products.map(product=><Products orderSummary={orderSummary} products={product} key={product.id}></Products>)
        }
            </div>
            <div className="cart-container">
        <Cart product={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;