import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({favoriteNumber}) => {

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
                    <i className="fas fa-heart">
                        {favoriteNumber > 0 ? <span className="fav_num">{favoriteNumber}</span> : ""}
                    </i>
                </Link>
                <Link to="/newpost" className="link">
                    <i className="fas fa-plus-circle"></i>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
