import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let {product}=props;
    const totalPrice =product.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
    const charge =product.length*25;
    const tex = parseInt((totalPrice + charge)/100*5);
    const grandTotal = totalPrice+charge+tex;

    return (
        <div>
            <p style={{fontSize:"25px", textAlign:"center",marginTop:"28px",fontWeight:"500",marginBottom:"50px"}}>Order Summary</p>
            <div style={{marginLeft:"23px",color:"#2A414F",marginRight:"23px"}}>
            <p>Selected Items: <strong>{product.length}</strong></p>
            <p>Total Price: <strong>${totalPrice}</strong></p>
            <p>Total Shipping Charge: <strong> ${charge}</strong></p>
            <p>Tax: <strong>${tex}</strong></p>
            <p style={{fontSize:"21px",color:"black",fontWeight:"500"}}>Grand Total: ${grandTotal}</p>
            
            <button className='clear-bottom'>Clear Cart <i className="fa-solid fa-trash-can"></i></button><br />
            
            <button className='review-bottom'>Review Order <i className="fa-solid fa-arrow-right-long"></i></button>
            </div>
        </div>
    );
};

export default Cart;