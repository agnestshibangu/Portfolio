import React from 'react'
import '../style/front.scss'
import '../style/sections.scss'
//import projects from '../Components/data';
import reserviaImg from './images/projectsscreen/capture-reservia.PNG'
import ohmyfoodImg from './images/projectsscreen/capture-ohmyfood.PNG'
import lachouetteagenceImg from './images/projectsscreen/capture-la-chouette-agence.PNG'

function Front() {
    return (
        <div className='section'>
            <h2 className='front-end-projects-title'>Front-end projects</h2>

            {/* DYNAMIC WAY
            
            <div className='project-display-container'>
                {projects.map((project) => {
                    const { title, description, img } = project;
                    return <div className='project-infos'>
                        <h3 className='project-title'>{title}</h3>
                        <p className='project-description'>{description}</p>
                        <div className='project-image' src={img} />
                    </div>
                })} */}



            <div className='project-display-container'>
                <div className='project-infos'>
                    <h3 className='project-title'>project 1 : reservia</h3>
                    <p className='project-description'>projet d'integration HTML et CSS à partir d'une maquette pour un site de reservation</p>
                    <img className='project-image' src={reserviaImg} alt="" />
                    <a href="https://reservia-project1-agnes-tshibangu.netlify.app/"><button >Full website here</button></a>
                    
                </div>
            </div>

            <div className='project-display-container'>
                <div className='project-infos'>
                    <h3 className='project-title'>project 2 : ohmyfood</h3>
                    <p className='project-description'>project d'integration à partir d'une maquette avec des animations CSS complexes et un site structuré en plusieurs pages</p>
                    <img className='project-image' src={ohmyfoodImg} alt="" />
                    <a href="https://ohmyfood-project2-agnes-tshibangu.netlify.app/"><button >Full website here</button></a>
                
                </div>
            </div>

            <div className='project-display-container'>
                <div className='project-infos'>
                    <h3 className='project-title'>project 3 : la chouette agence</h3>
                    <p className='project-description'>project d'integration HTML et CSS à partir d'une maquette pour un site de reservation</p>
                    <img className='project-image' src={lachouetteagenceImg} alt="" />
                    <a href="https://la-chouette-agence-seo-p4.netlify.app/"><button >Full website here</button></a>
                   
                </div>
            </div>



        </div>


    )
}

export default Front