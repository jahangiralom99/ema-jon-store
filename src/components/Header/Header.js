import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'; 
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className='ul-container'>
            <Link to="/">Shop</Link>
            <Link to="/order">Order</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;