import React from 'react'
import Paywall from './Paywall'
import AdvancePricing from './AdvancePricing'

function Tools() {
    return (
        <div className="tools-container">
            <h1 className="header1">Tools you need to get paid for what you create</h1>
            <Paywall />
            <AdvancePricing />
        </div>
    )
}

export default Tools

