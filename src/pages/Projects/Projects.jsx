import { useState } from "react";
import styles from "./Projects.styles"

function Projects({ projectsRef, contactRef }) {
    const projects = [
        {
            title: "Project 1",
            image: "proj-1.png",
            demoLink: "#",
            codeLink: "#",
            descritpion: "A static clone of the famous e-commerce brand. With good attention to detail I tried to include even the minute details in this project from the original website using simple HTML and CSS.",
            techs: ["react", "django"]
        }
    ]
    return (
        <styles.ProjectsContainer ref={projectsRef}>
            <styles.PlayGround>
                <img src="images/playground/flag.svg" alt="" className="flag" />
                <img src="images/playground/car.svg" alt="" className="car" />
                <div className="line"></div>
            </styles.PlayGround>
            {
            projects.map((project, index) =>(
                <styles.ProjectCard>
                    <div className="section-main">
                        <h2 className="project-name">{project.title}</h2>
                        <img src={`images/projects/${project.image}`} alt="" className="img-card"/>
                        <div className="proj-links">
                            <a href={project.demoLink} className="demo">Demo</a>
                            <a href={project.codeLink} className="code">Code</a>
                        </div>
                    </div>
                    <div className="project-details">
                        <p className="description">
                        {project.descritpion}
                        </p>
                        <div className="proj-techs">
                            {project.techs.map((tech, index) => (
                                <div className={`tech-${index+1}`} key={index}>#{tech}</div>
                            ))}
                        </div>
                    </div>
                </styles.ProjectCard>
            ))
            }
        </styles.ProjectsContainer>
    )
}

export default Projects;