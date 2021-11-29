import React from 'react'
import PaywallFeatures from './PaywallFeatures'
import paywallImg from '../images/paywall_img.png'

function Paywall() {
    return (
        <div className="paywall-container">
            <h2 className="header2">Paywall optimization</h2>
            <img src={paywallImg} alt="Paywall optimisation features" />
        </div>
    )
}

export default Paywall


