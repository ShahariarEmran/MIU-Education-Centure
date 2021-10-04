import React from 'react';
import './Footer.css'
import Mlogo from '../images/Mlogo.png'
const Footer = () => {
    return (
        <div className="footer">
            <img src={Mlogo} alt="" />
            <h4>Copyright © 2021 MIU Education Centure</h4>
        </div>
    );
};

export default Footer;