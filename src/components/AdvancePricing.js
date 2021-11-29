import React from 'react'
import graph from '../images/graph2.png';

function AdvancePricing() {
    return (
        <div className="advance-pricing-container">
            <h2 className="header2">Advanced pricing</h2>
            <img src={graph} alt="Optimal conversion price per content category graph"/>
            <h3>Set the price site-wide or per category to detect what and when users are most likely to pay.</h3>   
        </div>
    )
}

export default AdvancePricing


