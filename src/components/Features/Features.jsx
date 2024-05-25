import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <div className="features-bg">
        <div className="features-bg-overlay">
            <div className="features-container" id='features'>
                <h1 className="features-heading">FEATURES</h1>
                <div className="features-links">
                    <div className="features-box">
                        <h2><a href="#">LEARN.</a></h2>
                        <p className="features-desc">
                        Dive into our interactive courses designed for every level. Master coding from the ground up with ease.
                        </p>
                    </div>
                    <div className="features-box">
                        <h2><a href="#">CODE.</a></h2>
                        <p className="features-desc">
                        Build real projects that sharpen your skills and boost your portfolio. Hands-on practice is key.
                        </p>
                    </div>
                    <div className="features-box">
                        <h2><a href="#">CONNECT.</a></h2>
                        <p className="features-desc">
                        Join our buzzing community of coders. Share ideas, get feedback, and grow together.                </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
  )
}

export default Features