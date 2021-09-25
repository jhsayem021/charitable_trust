import React from 'react';
import './headers.css'
const Headers = () => {
    return (
        <div className="header">
            <h1> Make Govorning Body </h1>
            <nav>
                <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Manage Inventory</a>
                </div>
            </nav>
        </div>
    );
};

export default Headers;