import React from 'react'
import Blender1 from '../Components/images/projectsscreen/capture-blender.PNG'
import Blender2 from '../Components/images/projectsscreen/capture-blender2.PNG'
import Blender3 from '../Components/images/projectsscreen/capture-blender3.PNG'
import Vector1 from '../Components/images/projectsscreen/phone.png'
import Vector2 from '../Components/images/projectsscreen/capture-shutterstock1.PNG'
import Illustration1 from '../Components/images/projectsscreen/illustration1.png'
import Illustration2 from '../Components/images/projectsscreen/illustration2.png'

function Artisticproject() {
    return (
        <div className='section'>
            <h2 className='front-end-projects-title'>Autre projets artistiques</h2>

            <div className='project-display-container'>
                <div className='project-infos'>
                    <h3 className='project-title'>projets blender</h3>
                    <p className='project-description'>projet blender que je travaille durant mon temps libre</p>
                    <img className='project-image' src={Blender1} alt="" />
                    <img className='project-image' src={Blender2} alt="" />
                    <img className='project-image' src={Blender3} alt="" />
                    {/* <a href="https://reservia-project1-agnes-tshibangu.netlify.app/"><button >Full website here</button></a> */}
                </div>
            </div>

            <div className='project-display-container'>
                <div className='project-infos'>
                    <h3 className='project-title'>vecteur images</h3>
                    <p className='project-description'>projet vestoriel que je travaille durant mon temps libre</p>
                    <img className='project-image' src={Vector1} alt="" />
                    <img className='project-image' src={Vector2} alt="" />
                    {/* <a href="https://reservia-project1-agnes-tshibangu.netlify.app/"><button >Full website here</button></a> */}
                </div>
            </div>


            <div className='project-display-container'>
                <div className='project-infos'>
                    <h3 className='project-title'>illustrations à la main</h3>
                    <p className='project-description'>projet artistique que je travaille durant mon temps libre</p>
                    <img className='project-image' src={Illustration1} alt="" />
                    <img className='project-image' src={Illustration2} alt="" />
                    {/* <a href="https://reservia-project1-agnes-tshibangu.netlify.app/"><button >Full website here</button></a> */}
                </div>
            </div>

       

        </div>
    )
}

export default Artisticproject