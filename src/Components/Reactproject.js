import React from 'react'
import '../style/sections.scss'
import ecommerceImg from './images/projectsscreen/capture-e-commerce.PNG'
import groupomaniaImg from './images/projectsscreen/capture-groupomania.PNG'
import primeurbioImg from './images/projectsscreen/capture-primeur-bio.PNG'


function Reactproject() {
    return (
        <div className='section'>

            <h2 className='front-end-projects-title'>projets react</h2>


            <div className='project-display-container'>

                <div className='project-infos'>

                    <div className='projects-infos-left'>
                        <a href="https://art-shop-agnes-tshibangu.netlify.app/"><button >Full website here</button></a>
                        <a href="https://art-shop-agnes-tshibangu.netlify.app/"><button >Full website here</button></a>

                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>e-commerce</h3>
                        <p className='project-description'>un site de e-commerce en REACT</p>
                        <img className='project-image' src={ecommerceImg} alt="" />
                    </div>


                </div>


                <div className='project-infos'>

                    <div className='projects-infos-left'>
                        <a href="https://groupomania-social-network-p7.netlify.app/login"><button >Full website here</button></a>
                        <a href="https://groupomania-social-network-p7.netlify.app/login"><button >Full website here</button></a>

                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>groupomania</h3>
                        <p className='project-description'>un réseau social en REACT</p>
                        <img className='project-image' src={groupomaniaImg} alt="" />
                    </div>


                </div>

                <div className='project-infos'>

                    <div className='projects-infos-left'>
                        <a href="https://primeur-bio-agnes-tshibangu.netlify.app/"><button >Full website here</button></a>
                        <a href="https://primeur-bio-agnes-tshibangu.netlify.app/"><button >Full website here</button></a>

                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>primeur bie</h3>
                        <p className='project-description'>site vitrine pour un primeur bio</p>
                        <img className='project-image' src={primeurbioImg} alt="" />
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Reactproject