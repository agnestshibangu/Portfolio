import React from 'react'
import '../style/sections.scss'
import minishellImg from './images/projectsscreen/screenshotminishell.png'
import philoImg from './images/projectsscreen/screenshotphilosophers.png'
import cub3dGif from './images/projectsscreen/cub3d.gif';
import solongGif from './images/projectsscreen/solong.gif';

function Reactproject() {
    return (
        <div className='section'>

            <h2 className='front-end-projects-title ft-title'>42 School projects</h2>
            <h3 className='duration'>(November 2023 - until now) </h3>

            <div className='about-section-box'>
                <p className='about-section'>
                    School 42 is a highly respected tuition-free, peer-to-peer coding school with a project-based curriculum. 
                    Students learn C, C++, Python, JavaScript, and Shell scripting, gaining problem-solving, 
                    algorithm design, and software development skills. The program fosters autonomy, teamwork, and adaptability, 
                    preparing graduates for careers in software engineering, AI, cybersecurity, and full-stack development.
                </p>
            </div>


            <div className='project-display-container'>

                <div className='project-infos'>

                    <div className='projects-infos-left'>
                        <a href="https://github.com/agnestshibangu/42_minishell"><button className='button'>View the code</button></a>
                    </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>42_minishell</h3>
                        <p className='project-description'>a program that recreates shell behaviors</p>
                        <img className='project-image' src={minishellImg} alt="" />
                    </div>
                </div> 

                <div className='project-infos project-infos-offset'>

                    <div className='projects-infos-left projects-infos-left-offset'>
                        <a href="https://github.com/agnestshibangu/so_long_new"><button className='button'>View the code</button></a>
                </div>

                    <div className='projects-infos-right'>
                        <h3 className='project-title'>42_so_long</h3>
                        <p className='project-description'>a 2D game using minilibx</p>
                        <img className='project-image' src={solongGif} alt="" />
                    </div>


                </div>

            
                <div className='project-infos'>

                <div className='projects-infos-left'>
                    <a href="https://github.com/agnestshibangu/42_cub3d"><button className='button'>View the code</button></a>
                </div>

                <div className='projects-infos-right'>
                    <h3 className='project-title'>42_cub3D</h3>
                    <p className='project-description'>a 3D game using the raycasting technique</p>
                    <img className='project-image' src={cub3dGif} alt="" />
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



            </div>

        </div>
    )
}

export default Reactproject