import React from 'react';
import './Header.css'
import Mlogo from '../images/Mlogo.png'
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


const Header = () => {
    return (
                    //    This is nav-bar
                    
        <Nav className="header">
            <img className="mlogo" src={Mlogo} alt="" /> 
            <div>
            <h1 className="header-text">MIU Education Centure</h1>
            <div className="header-link">
                <NavLink className="home-link" to="/home">Home</NavLink>
                <NavLink className="home-link" to="/services">Services</NavLink>
                <NavLink className="home-link" to="/departments">Departments</NavLink>
                <NavLink className="home-link" to="/about">About</NavLink>
            </div>
            </div>
            
        </Nav>
    );
};

export default Header;