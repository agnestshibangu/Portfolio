import React from 'react'
import '../style/front.scss'
import '../style/sections.scss'
import aifraudImg from './images/projectsscreen/screenaidetection.png'
import cryptoImg from './images/projectsscreen/screenshotcrypto.png'

function Personalprojects() {
    return (
        <div className='section'>
            <h2 className='front-end-projects-title'>Personal projects</h2>

            <div className='project-display-container'>

                <div className='project-infos'>

                    <div className='projects-infos-left'>
                        <a href="https://reservia-project1-agnes-tshibangu.netlify.app/"><button className='button button-website'>Voir le site web</button></a>
                        <a href="https://github.com/agnestshibangu/Reservia-integration-P2"><button className='button'>Voir le code</button></a>

                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>Crypto currency in Python</h3>
                        <p className='project-description'>Reproducing basic mechanism of a crypto</p>
                        <img className='project-image' src={cryptoImg} alt="" />
                    </div>


                </div>

                <div className='project-infos project-infos-offset'>

                    <div className='projects-infos-left projects-infos-left-offset'>
                        <a href="https://ohmyfood-project2-agnes-tshibangu.netlify.app/"><button className='button button-website'>Voir le site web</button></a>
                        <a href="https://github.com/agnestshibangu/Animations-app-restauration-P3"><button className='button'>Voir le code</button></a>

                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>Fraud detection</h3>
                        <p className='project-description'>Transaction fraud detection using AI</p>
                        <img className='project-image' src={aifraudImg} alt="" />
                    </div>

                </div>
            </div> 
        </div>
    )
}

export default Personalprojects