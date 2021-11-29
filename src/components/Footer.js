import React from 'react'
import FootNavBar from './FootNavBar'
import TermsBar from './TermsBar'
import './style/Footer.css';

function Footer() {
    return (
        <footer>
            <FootNavBar />
            <p>© WordPay 2021</p>
            <p>Holmbladsgade 133 - 2300 København</p>
            <hr className="horizontal-line"/>
            <TermsBar />
        </footer>
    )
}

export default Footer
