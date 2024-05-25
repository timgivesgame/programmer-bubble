import React from 'react'
import './Testimonials.css'
import person from '../../assets/person1.png'
import person2 from '../../assets/person2.png'
import person3 from '../../assets/person3.png'

const Testimonials = () => {
  return (
    <div className="testimonials-bg">
        <div className="testimonials-bg-overlay">
            <div className="testimonials-container" id='testimonials'>
                <h1 className="features-heading">TESTIMONIALS</h1>
                <div className="features-links">
                    <div className="features-box">
                        <img src={person} alt="" className="testimonials-pic" />
                        <h2><a href="#">Alex M.</a></h2>
                        <p className="testimonials-desc">
                        "Programmer Bubble is a game-changer! The courses are super engaging, and I’ve learned more here in a few months than in years of trying to figure it msyelf."
                        </p>
                    </div>
                    <div className="features-box">
                        <img src={person2} alt="" className="testimonials-pic" />
                        <h2><a href="#">Jordan L.</a></h2>
                        <p className="testimonials-desc">
                        "The community aspect is fantastic. Whenever I'm stuck, there's always someone ready to help. It's like having a coding family."
                        </p>
                    </div>
                    <div className="features-box">
                        <img src={person3} alt="" className="testimonials-pic" />
                        <h2><a href="#">Casey T.</a></h2>
                        <p className="testimonials-desc">
                        "I landed my first developer job thanks to Programmer Bubble. The projects and real-world practice made all the difference. Highly recommend!"                </p>
                    </div>
                </div>
         </div>
     </div>
</div>
        
  )
}

export default Testimonials