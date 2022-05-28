import React from 'react'
import '../style/contact.scss'

function Contact() {
  return (
    <div className='section'>
    <h2 className='section-contact-title'>Contact</h2>

    {/* <div className='contact-info'>
        N'hesitez pas à me contacter, je serait ravie de mettre ma passion du front-end au service de votre entreprise ! 

      <p className='telephone'>tel : 06.45.59.89.36</p>

      <p className='email'>e-mail : agnes.tshibangugrillon@gmail.com</p> */}
      

      <div className='contact-boxes'> 

        <div className='contact-box'><p className="small-text-contact">N'hesitez pas à me contacter, je serait ravie de mettre ma passion du front-end au service de votre entreprise</p></div>
        <div className='contact-box'><p className="telephone">06.45.59.89.36</p></div>
        <div className='contact-box'><p className="email">agnes.tshibangugrillon@gmail.com</p></div>
          
      </div>



    </div>

  )
}

export default Contact