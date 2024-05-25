import React, {useState} from 'react'
import './Newsletter.css'

const Newsletter = () => {



  return (
    <div className="newsletter-bg">
      <div className="newsletter-bg-overlay">
          <div className="newsletter-container" id='newsletter'>
                <h1 className="newsletter-title">
                    SIGN UP FOR OUR NEWSLETTER!
                </h1>
                <p className="newsletter-subtitle">
                    Stay Updated. Join our Newsletter!
                </p>
                <div className="newsletter-input">
                    <input type="text" name="newsletter-email" id="newsletter-email" placeholder='JohnDoe123@email.com'/>
                    <button className='newsletter-button'>SIGN UP</button>
                </div>
             </div>
          </div>
      </div>
  )
}

export default Newsletter