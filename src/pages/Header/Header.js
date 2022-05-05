import React from 'react';
import {  Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar style={{background:" #08093ed9"}}>
          <div className="conteiner">
              <div className="navIcon">
                  <h4>Cycle House</h4>
              </div>
              <div className="navMenu">
                  <Link to="/">HOME</Link>
                  <Link to="/services">SERVICES</Link>
                  <Link to="/blogs">BLOGS</Link>
                  <Link to="/invertory">INVERTORY</Link>
                  <Link to="/signup">SIGNUP</Link>
                  <Link to="/signin">SIGNIN</Link>
              </div>
          </div>
        </Navbar>
    );
};

export default Header;