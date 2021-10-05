import React from 'react';
import './Header.css'
import Mlogo from '../images/Mlogo.png'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <img className="mlogo" src={Mlogo} alt="" /> 
            <div>
            <h1 className="header-text">MIU Education Centure</h1>
            <div className="header-link">
                <Link className="home-link" to="/home">Home</Link>
                <Link className="home-link" to="/services">Services</Link>
                <Link className="home-link" to="/departments">Departments</Link>
                <Link className="home-link" to="/about">About</Link>
            </div>
            </div>
            
        </div>
    );
};

export default Header;