import styles from "./Projects.styles"

function Projects({ projectsRef, contactRef }) {
    return (
        <styles.ProjectsContainer ref={projectsRef}>
            <styles.PlayGround>
                <img src="images/playground/flag.svg" alt="" className="flag" />
                <img src="images/playground/car.svg" alt="" className="car" />
                <div className="line"></div>
            </styles.PlayGround>
            <styles.ProjectCard>
                <div className="section-main">
                    <h2 className="project-name">Project 1</h2>
                    <img src="images/projects/proj-1.png" alt="" className="img-card"/>
                    <div className="proj-links">
                        <a href="#" className="demo">Demo</a>
                        <a href="#" className="code">Code</a>
                    </div>
                </div>
                <div className="project-details">
                    <p className="description">
                    A static clone of the famous e-commerce brand. With good attention to detail I tried to include even the minute details in this project from the original website using simple HTML and CSS.
                    </p>
                    <p className="proj-techs">#react #django</p>
                </div>
            </styles.ProjectCard>
        </styles.ProjectsContainer>
    )
}

export default Projects;