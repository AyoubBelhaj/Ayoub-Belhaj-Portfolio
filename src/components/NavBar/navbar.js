import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from '../../assets/logo2.png';
import { Link, useLocation } from 'react-router-dom';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const handleLinkClick = (path) => {
        setActiveLink(path);
        setShowMenu(false);
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="desktopMenu">
                <Link to='/' className={`desktopMenuListItem ${activeLink === '/' ? 'active' : ''}`} onClick={() => handleLinkClick('/')}>Home</Link>
                <Link to='/skills' className={`desktopMenuListItem ${activeLink === '/skills' ? 'active' : ''}`} onClick={() => handleLinkClick('/skills')}>About</Link>
                <Link to='/works' className={`desktopMenuListItem ${activeLink === '/works' ? 'active' : ''}`} onClick={() => handleLinkClick('/works')}>Projects</Link>
                <Link to='/contact' className={`desktopMenuListItem ${activeLink === '/contact' ? 'active' : ''}`} onClick={() => handleLinkClick('/contact')}>Contact</Link>
            </div>
            <Link to="/contact">
                <button className="desktopMenuBtn" >
                    <img src={contactImg} alt="me" className="desktopMenuImg" />Contact Me
                </button>
            </Link>
            <img src={menu} alt="menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link to='/' className={`ListItem ${activeLink === '/' ? 'active' : ''}`} onClick={() => handleLinkClick('/')}>Home</Link>
                <Link to='/skills' className={`ListItem ${activeLink === '/skills' ? 'active' : ''}`} onClick={() => handleLinkClick('/skills')}>About</Link>
                <Link to='/works' className={`ListItem ${activeLink === '/works' ? 'active' : ''}`} onClick={() => handleLinkClick('/works')}>Portfolio</Link>
                <Link to='/contact' className={`ListItem ${activeLink === '/contact' ? 'active' : ''}`} onClick={() => handleLinkClick('/contact')}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
