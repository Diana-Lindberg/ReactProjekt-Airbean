import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './HamburgerMenu.css'
import nav from '/assets/navicon.svg'
import close from '/assets/close.svg'

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <button className="hamburger-button" onClick={toggleMenu}> 
            <img src={nav} style={{width: '26px'}}/> 
            </button>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
            <button className="close-button" onClick={closeMenu}>
                <img src={close} style={{width: '19px'}} />
                </button>
                <div className="menu-content">
                <ul className="menu-list" >
                <li><Link to='/menu'>Meny</Link></li>
                <li><Link to='/about'>Om oss</Link></li>
                <li><Link to='/OrderStatus'>Orderstatus</Link></li>
                </ul>
                </div>
            </nav>
           
        </div>
    )
}

export default HamburgerMenu;