import React from 'react'
import '../style/front.scss'
import '../style/sections.scss'
//import projects from '../Components/data';
import reserviaImg from './images/projectsscreen/capture-reservia-opt.webp'
import ohmyfoodImg from './images/projectsscreen/capture-ohmyfood-opt.webp'
import lachouetteagenceImg from './images/projectsscreen/capture-la-chouette-agence-opt.webp'
import orinocoImg from './images/projectsscreen/capture-orinoco-opt.webp'

function Front() {
    return (
        <div className='section'>
            <h2 className='front-end-projects-title'>Projets HTML, CSS et JS</h2>

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

                    <div className='projects-infos-left'>
                        <a href="https://reservia-project1-agnes-tshibangu.netlify.app/"><button className='button button-website'>Voir le site web</button></a>
                        <a href="https://github.com/agnestshibangu/Reservia-integration-P2"><button className='button'>Voir le code</button></a>

                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>reservia</h3>
                        <p className='project-description'>projet d'integration HTML et CSS</p>
                        <img className='project-image' src={reserviaImg} alt="" />
                    </div>


                </div>

                <div className='project-infos project-infos-offset'>

                    <div className='projects-infos-left projects-infos-left-offset'>
                        <a href="https://ohmyfood-project2-agnes-tshibangu.netlify.app/"><button className='button button-website'>Voir le site web</button></a>
                        <a href="https://github.com/agnestshibangu/Animations-app-restauration-P3"><button className='button'>Voir le code</button></a>

                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>ohmyfood</h3>
                        <p className='project-description'>projet d'integration HTML, SCSS et animations</p>
                        <img className='project-image' src={ohmyfoodImg} alt="" />
                    </div>


                </div>




                <div className='project-infos'>

                    <div className='projects-infos-left'>
                        <a href="https://la-chouette-agence-seo-p4.netlify.app"><button className='button button-website'>Voir le site web</button></a>
                        <a href="https://github.com/agnestshibangu/La-chouette-agence-SEO-P4"><button className='button'>View code</button></a>

                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>la chouette agence</h3>
                        <p className='project-description'>optimiser le référencement SEO d'un site existant</p>
                        <img className='project-image' src={lachouetteagenceImg} alt="" />
                    </div>


                </div>

                <div className='project-infos project-infos-offset'>

                    <div className='projects-infos-left projects-infos-left-offset'>
                        <a href="https://github.com/agnestshibangu/Orinoco-camera-shop-P5"><button className='button'>Voir le code</button></a>

                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>orinoco</h3>
                        <p className='project-description'>site de e-commerce en JS</p>
                        <img className='project-image' src={orinocoImg} alt="" />
                    </div>


                </div>

            </div>




        </div>


    )
}

export default Front