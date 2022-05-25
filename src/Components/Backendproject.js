import React from 'react'
import '../style/sections.scss'
import orinocoImg from './images/projectsscreen/capture-orinoco.PNG'


function Backendproject() {
    return (

        <div className='section'>
            <h2 className='front-end-projects-title'> projects</h2>

            <div className='project-display-container'>
                <div className='project-infos'>
                    <h3 className='project-title'>orinoco</h3>
                    <p className='project-description'>site de commerce en JS</p>
                    <img className='project-image' src={orinocoImg} alt="" />
                    {/* <a href="https://reservia-project1-agnes-tshibangu.netlify.app/"><button >Full website here</button></a> */}
                </div>
            </div>








        </div>
    )
}

export default Backendproject