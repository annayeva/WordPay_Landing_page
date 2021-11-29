import React from 'react'
import phoneImg from '../images/phone.png'

function Hero() {
    return (
        <div className="hero">
            <div className="hero-image">
                <img src={phoneImg} alt="Iphone image"/>
            </div>
            <div className="hero-text">
                <h1>A new way to charge for content</h1>
                <p>Monetize and convert a larger share of your reader base by accepting payments for selective pieces of content. </p>
            </div>           
        </div>
    )
}

export default Hero

