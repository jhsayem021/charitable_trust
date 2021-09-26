import React from 'react';
import './headers.css'
import img from '../../image/favicon.jpg'
const Headers = () => {
    return (
        <div className="header">
            <div className="heading">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h1> SA Charitable Trust </h1>
            <h3>Make an management team for yearly donation</h3>
            <h2>Total Budget : $10 million</h2>
            </div>
            </div>
            <nav>
                <div>
                <a href="/home">Home</a>
                <a href="/management">Management</a>
                <a href="/about">About us</a>
                </div>
            </nav>
        </div>
    );
};

export default Headers;