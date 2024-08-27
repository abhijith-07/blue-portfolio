function Projects({projectsRef, contactRef}) {
    return (
        <section ref={projectsRef}>
            <h1>My Projects</h1>
            <div>
                <div className="card-1">
                    <img src="" alt="" />
                    <div className="project-details">
                        <div>
                            <h2 className="project-name">Project 1</h2>
                            <p className="description">#react #django</p>
                        </div>
                        <div>
                            <button className="btn-code">Code icon</button>
                            <button className="btn-live">Eye button</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;