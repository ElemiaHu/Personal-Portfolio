import React from 'react';
import "./projects.css"
import projects from "./projects.json";
import critterpedia from "../img/critterpedia.png";
import guess from "../img/guessGame.png";
import mario from "../img/mario.png";
import pixel from "../img/pixel.png";
import habits from "../img/habits.png";
import personal from "../img/personal.png";
projects[0].image = critterpedia;
projects[1].image = guess;
projects[2].image = mario;
projects[3].image = pixel;
projects[4].image = personal;
projects[5].image = habits;

const Projects = () => {
    return <>
        <div className='projects'>
            <div className="project-title">My Projects</div>
            <div className="projects-container">
                {
                projects.map((project, index) => (
                    <div className='item' key={index}>
                        <a href={project.url} target="_blank">
                            <div className="project" style={{
                                height: "200px",
                                width: "350px",
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}>
                                <div className='project-info'>
                                    {project.description} <br/>
                                    <span className='technology'>Technology: {project.technology}</span>
                                    <div className='words'></div>
                                    <div className='tech'></div>
                                </div>
                            </div>
                        </a>
                        <div className='name'>{project.projectName}</div>
                    </div>                        
                ))}
        </div>
        
            
            {/* <div className='fullstack-container'>
                <div className='title'>Fullstack Projects</div>
                <Carousel infiniteLoop={true}>
                    {
                    projects.map((project) => (
                        <div className='item'>
                            <a href={project.url} target="_blank">
                                <div className='name'>{project.projectName}</div>
                            </a>
                            <img src={project.image}/>
                            <div className='words'>{project.description}</div>
                            <div className='tech'>Technology: {project.technology}</div>
                            <div className='decoration'></div>
                        </div>                        
                    ))
                    }
                </Carousel>
            </div> */}
        </div>
    </>
}

export default Projects;