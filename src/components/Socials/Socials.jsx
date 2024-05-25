import React from 'react'
import youtubeIcon from '../../assets/yt.png'
import instaIcon from '../../assets/instagram.png'
import './Socials.css'

const Socials = () => {
  return (
    <div className="socials-bg">
      <div className="socials-bg-overlay">
        <div className="socials-container" id='socials'>
            <h1 className="socials-title">
                OUR SOCIALS
            </h1>
            <div className="socials-icons">
                <img src={instaIcon} alt="instagram icon" className='socials-icons-insta'/>
                <img src={youtubeIcon} alt="youtube icon" className='socials-icons-yt'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Socials