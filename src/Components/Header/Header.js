import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <img src={logo} alt="" />
                <div>
                    <a href="/Home">Home</a>
                    <a href="/Shop">Shop</a>
                    <a href="/Link">Link</a>
                    <a href="/Cart">Cart</a>
                    <a href="/Order">Order</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;