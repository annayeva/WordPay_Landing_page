import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import './style/Header.css';

function Header(props) {
    return (
        <header>
            <Logo />
            <NavBar />
        </header>
    )
}


export default Header


