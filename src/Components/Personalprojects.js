import React from 'react'
import '../style/front.scss'
import '../style/sections.scss'
import aifraudGIF from './images/projectsscreen/aifraud.gif'
import cryptoImg from './images/projectsscreen/screenshotcrypto.png'

function Personalprojects() {
    return (
        <div className='section'>
            <h2 className='front-end-projects-title'>Personal projects</h2>

            <div className='about-section-box'>
                <p className='about-section'>
                I am passionate about learning new skills and staying updated with the latest technologies.
                I take pride in my personal projects, which showcase my commitment to growth and innovation. 
                Currently, I'm working on an AI-powered transaction fraud detection application, exploring advanced machine learning techniques. Additionally, I continuously challenge myself on platforms like TryHackMe to improve my cybersecurity skills, 
                ensuring I remain adaptable in a fast-evolving tech landscape.
                </p>
            </div>
            
            
            <div className='project-display-container'>

                <div className='project-infos'>

                    <div className='projects-infos-left'>
                        <a href="https://github.com/agnestshibangu/personal_project_my_own_crypto"><button className='button'>View the code</button></a>

                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>Crypto currency in Python</h3>
                        <p className='project-description'>Reproducing basic mechanism of a crypto</p>
                        <img className='project-image' src={cryptoImg} alt="" />
                    </div>


                </div>

                <div className='project-infos project-infos-offset'>

                    <div className='projects-infos-left projects-infos-left-offset'>
                        <a href="https://github.com/agnestshibangu/personal_project_AI_fraud_detection"><button className='button'>View the code</button></a>

                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>Fraud detection</h3>
                        <p className='project-description'>Transaction fraud detection using AI</p>
                        <img className='project-image' src={aifraudGIF} alt="" />
                    </div>

                </div>
            </div> 
        </div>
    )
}

export default Personalprojects