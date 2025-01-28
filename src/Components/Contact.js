import React from 'react'
import '../style/contact.scss'

function Contact() {
  return (
    <div className='section'>
    <h2 className='section-contact-title'>Contact</h2>

      <div className='contact-boxes'> 

        <div className='contact-box'><p className="small-text-contact">feel free to reach out - I would love to welcome the opportunity to leverage my back-end expertise to contribute to your team !  🚀 </p></div>
        <div className='contact-box'>
          <p className="telephone">
            <a href="www.linkedin..com/in/agnes-tshibangu-grillon">My linkedin profile</a>
          </p>
        </div>
        <div className='contact-box'><p className="email">agtshiba@student.42perpignan.fr</p></div>
          
      </div>
    </div>
  )
}

export default Contact