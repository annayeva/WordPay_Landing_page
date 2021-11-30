import React from 'react'
import phoneImage from '../images/kid_image.png'
import Paywall from './Paywall'
import PaywallLine from './PaywallLine'

function PaywallFeatures() {
    return (
        <div className="paywall-features-container">
            <div className="paywall-features-column paywall-column1">
                <div className="paywall-feature-description">
                    <h5>Test the paywall</h5>
                    <p>Define rules for when the paywall is on/off and where it should start.</p>
                </div>
                <div className="paywall-feature-description">
                <h5>Test CTA’s</h5>
                    <p>Test CTA’s and choose what converts.</p>
                </div>
            </div>
            <div className="paywall-features-column paywall-column2">
                <img src={phoneImage} />
                <div className="paywall-line-container">
                    <PaywallLine />
                    <PaywallLine length="1" />
                    <PaywallLine />
                    <PaywallLine length="1" />
                    <hr className="diagonal-line diagonal-line1" />
                    <PaywallLine color="1"/>
                    <PaywallLine color="2" length="1"/>
                    <PaywallLine color="3" length="2"/>
                    <br />
                    
                    <PaywallLine color="4"/>
                    <PaywallLine color="4" length="2"/>
                    <hr className="diagonal-line diagonal-line2" />
                    <PaywallLine color="4" length="3"/>
                    <PaywallLine color="4" length="1"/>
                </div>
                <div className="paywall-btn-container">
                    <a className="paywall-btn">Buy article</a>
                    <hr className="diagonal-line diagonal-line3" />
                    <a className="paywall-btn">Subscribe</a>
                </div>              
            </div>
            <div className="paywall-features-column paywall-column3">
                <div className="paywall-feature-description">
                <h5>Test messages</h5>
                    <p>A/B Split testing of messages. Measure what matters to sell more content.</p>
                </div>
            </div>
        </div>
    )
}

export default PaywallFeatures

