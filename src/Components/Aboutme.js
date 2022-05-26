import React from 'react'
import Photolinkedin from '../Components/images/projectsscreen/photolinkedin.jpg'
import '../style/sections.scss'
import '../style/aboutme.scss'

function Aboutme() {
  return (
    <div className='section section-about-me'>
    <h2 className='front-end-projects-title'>About me</h2>

    <div className='about-me-content'>
      <img className='about-me-photo' src={Photolinkedin}></img>
       <p className='about-me-info project-description'>Passionnée par tout qui touche au web, à l'informatique et au design, je conçois avec soin le design de mes sites afin d'offrir à l'utilisateur une experience unique</p>
    </div>

   


    </div>
  )
}

export default Aboutme