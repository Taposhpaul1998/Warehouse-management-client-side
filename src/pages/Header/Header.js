import { signOut } from 'firebase/auth';
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebaseinit';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handelsignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar className="conteiner" style={{ background: "#242768" }}>

            <div className="navIcon">
                <h4>Cycle House</h4>
            </div>
            <div className="navMenu">
                <Link to="/">HOME</Link>
                <a href="/home#pricing">PRICING</a>
                <a href="/home#inventory">INVENTORY</a>
                <Link to="/blog">BLOGS</Link>
                {
                    user && <>
                        <Link to="/manageitems">MANAGE ITEM</Link>
                        <Link to="/addedItem">ADD ITEM</Link>
                        <Link to="/myitems">MY ITEM</Link>
                    </>
                }
                <Link to="/signup">SIGNUP</Link>
                {
                    user ?
                        <Link to="/#" onClick={handelsignOut}>SIGN OUT</Link> :
                        <Link to="/signin">SIGNIN</Link>
                }
            </div>

        </Navbar>
    );
};

export default Header;