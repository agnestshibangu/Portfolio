import React from 'react'
import '../style/sections.scss'
import minishellImg from './images/projectsscreen/screenshotminishell.png'
import philoImg from './images/projectsscreen/screenshotphilosophers.png'
import cub3dGif from './images/projectsscreen/cub3d.gif';


function Reactproject() {
    return (
        <div className='section'>

            <h2 className='front-end-projects-title'>42 School projects</h2>


            <div className='project-display-container'>

                <div className='project-infos'>

                    <div className='projects-infos-left'>
                        <a href="https://github.com/agnestshibangu/42_minishell"><button className='button'>See the code</button></a>
                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>42_minishell</h3>
                        <p className='project-description'>a program that recreates shell behaviors</p>
                        <img className='project-image' src={minishellImg} alt="" />
                    </div>
                </div> 

                <div className='project-infos project-infos-offset'>

                    <div className='projects-infos-left projects-infos-left-offset'>
                        <a href="https://github.com/agnestshibangu/42_philosophers"><button className='button'>See the code</button></a>
                </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>42_philosophers</h3>
                        <p className='project-description'>synchronization whith multiple processes</p>
                        <img className='project-image' src={philoImg} alt="" />
                    </div>


                </div>

                <div className='project-infos'>

                <div className='projects-infos-left'>
                    <a href="https://github.com/agnestshibangu/42_cub3d"><button className='button'>See the code</button></a>
                </div>

                <div className='projects-infos-right'>
                    <h3 className='project-title'>42_cub3D</h3>
                    <p className='project-description'>a 3D game using the raycasting technique</p>
                    <img className='project-image' src={cub3dGif} alt="" />
                </div>
                </div> 

            </div>

        </div>
    )
}

export default Reactproject