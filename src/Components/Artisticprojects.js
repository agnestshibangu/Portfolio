import React from 'react'
import Blender from './images/projectsscreen/capture-blender.PNG'
import Vector from './images/projectsscreen/phone.png'
import '../style/sections.scss'
import '../style/hobbies.scss'


function Artisticprojects() {
  return (
    <div className='section'>
    <h2 className='front-end-projects-title'>hobbies</h2>


    <div className='section-hobbies'>


        <div className='blender-section'>
            <img className='image-hobby' src={Blender} alt=""/>
            <p className='description-hobby project-description'>3D, Blender</p>
        </div>

        
        <div className='vector-section'>
            <img className='image-hobby' src={Vector} alt=""/>
            <p className='description-hobby project-description'>dessin vectoriel, A. Illustrator</p>
        </div>


    </div>





    </div>
  )
}

export default Artisticprojects