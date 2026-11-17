import React from 'react'
import '../css/OrderSuccess.css'
import { CheckCircle } from 'lucide-react'

function OrderSuccess() {
  return (
    <div className="success-wrapper">
      <div className="success-card">
        <CheckCircle className="success-icon" />
        <h1 className="success-title">Order Placed Successfully 🎉</h1>
        <p className="success-message">
          Thank you for your purchase! Your order has been placed and is being processed.  
          You’ll receive a confirmation email shortly.
        </p>
        <button 
          className="success-btn"
          onClick={() => window.location.href = "/"}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  )
}

export default OrderSuccess

