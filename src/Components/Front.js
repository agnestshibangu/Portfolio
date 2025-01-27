import React from 'react'
import '../style/front.scss'
import '../style/sections.scss'
//import projects from '../Components/data';
import apiImg from './images/projectsscreen/hot_takes_XL.webp'
import pythontourImg from './images/projectsscreen/screenshotpythontour.png'
import snentrepriseImg from './images/projectsscreen/capture-groupomania.PNG'
import algoImg from './images/projectsscreen/optialgo.png'

function Front() {
    return (
        <div className='section'>
            <h2 className='front-end-projects-title'>Open Classrooms projects</h2>

            <div className='project-display-container'>

                <div className='project-infos'>

                    <div className='projects-infos-left'>
                        <a href="https://github.com/agnestshibangu/OCR_WEB_P6_API"><button className='button'>View the code</button></a>

                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>API creation</h3>
                        <p className='project-description'>creating an API with MERN</p>
                        <img className='project-image' src={apiImg} alt="" />
                    </div>

                </div>

                <div className='project-infos project-infos-offset'>

                    <div className='projects-infos-left projects-infos-left-offset'>
                        <a href="https://github.com/agnestshibangu/OCR_WEB_P7_social_network"><button className='button'>View the code</button></a>

                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>entreprise social network</h3>
                        <p className='project-description'>a full-stack social network using MERN and REACT</p>
                        <img className='project-image' src={snentrepriseImg} alt="" />
                    </div>

                </div>

                <div className='project-infos'>

                    <div className='projects-infos-left'>
                        <a href="https://github.com/agnestshibangu/OCR_PY_P4_chess_tour_organizer"><button className='button'>View the code</button></a>

                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>Python chess organizer</h3>
                        <p className='project-description'>a chess organizer tournament using Python</p>
                        <img className='project-image' src={pythontourImg} alt="" />
                    </div>

                </div>

                <div className='project-infos project-infos-offset'>

                    <div className='projects-infos-left projects-infos-left-offset'>
                        <a href="https://github.com/agnestshibangu/OCR_PY_P7_algorithmes"><button className='button'>View the code</button></a>

                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>optimized algorythms</h3>
                        <p className='project-description'>exploring brute force and optimized solutions</p>
                        <img className='project-image' src={algoImg} alt="" />
                    </div>


                </div>

            </div>




        </div>


    )
}

export default Front