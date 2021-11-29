import React from 'react'
import './style/PriceTable.css'

function PriceTable() {
    return (
        <div className="price-table">
            <div className="price-table-column column1">
                <div className="price-table-cell head-cell">Essentials</div>
                <div className="price-table-cell transaction-cell">
                    <span className="transaction-percent">10%</span>
                    <span>Transaction fee</span>
                </div>
                <div className="price-table-cell">Pay per content</div>
                <div className="price-table-cell">A unified sign-on solution</div>
                <div className="price-table-cell">Paywall customization</div>
                <div className="price-table-cell left-corner">Wallet & Single payments</div>
            </div>
            <div className="price-table-column column2">
                <div className="price-table-cell head-cell">Advanced</div>
                <div className="price-table-cell transaction-cell">
                    <span className="transaction-percent">12.5%</span>
                    <span>Transaction fee</span>
                </div>
                <div className="price-table-cell">Subscriptions</div>
                <div className="price-table-cell">Content optimization</div>
                <div className="price-table-cell">Paywall optimization A/B Splittesting</div>
                <div className="price-table-cell">Advanced pricing models</div>
            </div>
            <div className="price-table-column column3">
                <div className="price-table-cell head-cell">Automation</div>
                <div className="price-table-cell transaction-cell">
                    <span className="transaction-percent">15%</span>
                    <span>Transaction fee</span>
                </div>
                <div className="price-table-cell">Personalized subscriptions</div>
                <div className="price-table-cell">User Data Platform</div>
                <div className="price-table-cell">Automated paywall</div>
                <div className="price-table-cell last-cell">Automated pricing</div>
            </div>            
        </div>
    )
}

export default PriceTable

