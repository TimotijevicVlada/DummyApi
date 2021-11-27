import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <h2>DummyApi</h2>
            </div>
            <div className="navbar_pages">
                <Link to="/" className="link">
                    <i className="fas fa-home"></i>
                </Link>
                <Link to="/favorite" className="link">
                    <i className="fas fa-heart"></i>
                </Link>
                
            </div>
        </div>
    )
}

export default Navbar;