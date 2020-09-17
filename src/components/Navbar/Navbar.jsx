import React from 'react';
import './Navbar.css';
import logo from '../../assets/Homeward.svg';


const Navbar = (props) => {

    return(
        <div>
            <nav>
                <img id="logo" src={logo} alt="logo"></img>
            </nav>
        </div>
    )
}

export default Navbar;