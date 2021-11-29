import React from 'react'
import NavLink from './NavLink'

function NavBar() {
    return (
        <div className="nav-bar">
            <NavLink style="bold" title="Overview" />
            <NavLink title="Why WordPay"/>
            <NavLink title="TechSpecs" />
            <NavLink style="call-to-action" title="Create Account"/>            
        </div>
    )
}

export default NavBar

