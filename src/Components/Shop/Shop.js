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
    },[])

    return (
        <div className='shop-container'>
            <div className="product-container">
        {
            products.map(product=><Products products={product} key={product.id}></Products>)
        }
            </div>
            <div className="cart-container">
        <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;