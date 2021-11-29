import React from 'react'

function NavLink({title, style}) {
    return (
        <>
            <a className={style ? "nav-bar-link " + style : "nav-bar-link" }>{title}</a>
        </>
    )
}

export default NavLink
