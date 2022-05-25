import React from 'react'
import '../style/sections.scss'
import ecommerceImg from './images/projectsscreen/capture-e-commerce.PNG'
import groupomaniaImg from './images/projectsscreen/capture-groupomania.PNG'
import primeurbioImg from './images/projectsscreen/capture-primeur-bio.PNG'


function Reactproject() {
    return (
        <div className='section'>
            <h2 className='front-end-projects-title'>react project</h2>


            <div className='project-display-container'>
                <div className='project-infos'>
                    <h3 className='project-title'>e-commerce</h3>
                    <p className='project-description'>un réseau social en REACT</p>
                    <img className='project-image' src={ecommerceImg} alt="" /> 
                    <a href="https://art-shop-agnes-tshibangu.netlify.app/"><button >Full website here</button></a>

                </div>
            </div>


            <div className='project-display-container'>
                <div className='project-infos'>
                    <h3 className='project-title'>groupomania</h3>
                    <p className='project-description'>un réseau social en REACT</p>
                    <img className='project-image' src={groupomaniaImg} alt="" /> 
                    <a href="https://groupomania-social-network-p7.netlify.app/login"><button >Full website here</button></a>

                </div>
            </div>


            <div className='project-display-container'>
                <div className='project-infos'>
                    <h3 className='project-title'>primeur bio</h3>
                    <p className='project-description'>un site vitrine pour une entreprise de livraison de fruits et légumes bio</p>
                    <img className='project-image' src={primeurbioImg} alt="" /> 
                    <a href="https://primeur-bio-agnes-tshibangu.netlify.app/"><button >Full website here</button></a>

                </div>
            </div>



        </div>
    )
}

export default Reactproject