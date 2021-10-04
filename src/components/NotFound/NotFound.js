import React from 'react';
import error from '../images/error.png';
const NotFound = () => {
    return (
        <div>
            <h3>Page not found</h3>
            <img src={error} alt="" />
        </div>
    );
};

export default NotFound;