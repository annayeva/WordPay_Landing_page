import React from 'react'
import Paywall from './Paywall'

function PaywallLine({length, color}) {
    return (
        <>
            <hr className={`paywall-line line-length-${length} line-color-${color}`}/>
        </>
    )
}

PaywallLine.defaultProps = {
    length: "default",
    color: "default"
}

export default PaywallLine
