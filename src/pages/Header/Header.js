import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar className="conteiner" style={{ background: "#242768" }}>

            <div className="navIcon">
                <h4>Cycle House</h4>
            </div>
            <div className="navMenu">
                <Link to="/">HOME</Link>
                <a href="/home#pricing">PRICING</a>
                <a href="/home#inventory">INVENTORY</a>
                <Link to="/blogs">BLOGS</Link>
                <Link to="/manageitems">MANAGE ITEM</Link>
                <Link to="/addedItem">ADD ITEM</Link>
                <Link to="/myitems">MY ITEM</Link>
                <Link to="/signup">SIGNUP</Link>
                <Link to="/signin">SIGNIN</Link>
            </div>

        </Navbar>
    );
};

export default Header;