import React from 'react'
import linkedin from '../images/linkedin.png'

function TermsBar() {
    return (
        <div className="terms-bar flex-row-direction">
            <span className="flex-row-direction">
                <a>Terms</a>
                <a>Privacy</a>
            </span>
            <span><a><img src={linkedin} alt="Linkedin icon"/></a></span>
        </div>
    )
}

export default TermsBar
