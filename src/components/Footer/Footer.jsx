import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
        <h1 className="footer-header">
            PROGRAMMER <br />BUBBLE
        </h1>
        <p className="footer-copyright">
            2024 <br/> ©
        </p>
        <div className="footer-nav">
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">F.A.Q</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer