import React from 'react'
import './Navbar.css'

const Navbar = ({ title }) => {
  return (
    <div className="navbar-container">
      <div className="navbar-links">
        <p className="navbar-text">
          {title}
        </p>
      </div>
    </div>
  )
}

export default Navbar;
