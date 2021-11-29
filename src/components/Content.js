import React from 'react'
import Hero from './Hero'
import Pricing from './Pricing'
import Tools from './Tools'
import './style/Content.css'

function Content() {
    return (
        <div className="content-container">
            <Hero />
            <Tools />
            <Pricing />
        </div>
    )
}

export default Content

