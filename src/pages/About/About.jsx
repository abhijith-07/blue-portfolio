import styles from "./About.styles";
import DownArrow from '../../components/DownArrow/DownArrow';

function About({aboutRef, projectsRef}) {
    // <div className="qualification qualification-1">
//     <div className="qualification-name"></div>
//     <div className="qualification-institution"></div>
//     <div className="qualification-year">2021-2023</div>
// </div>
    const skills = ['Python','JavaScript','C','Java']
    const qualifications = [
        {
            name: "M.Sc. Computer Science",
            institution: "DCS, Kariavattom Campus",
            startYear: 2021,
            endYear: 2023,
        },
        {
            name: "B.Sc. Computer Science",
            institution: "EMSCAS, Iritty",
            startYear: 2018,
            endYear: 2021,
        },
    ]
    return (
        <>
        <styles.Wrapper ref={aboutRef}>
            <styles.SkillContainer>
                <styles.Certificates>
                    <div className="span-heading certificate-heading">
                        <span>My certificates</span>
                        <img src="images/arrows/certificates.svg" alt="" />
                    </div>
                    <div className="certificate-container">
                        <i className="left-arrow">&lt;</i>
                        <img src="images/certificates/git.jpg" alt="" className="certificate-image" />
                        <i className="right-arrow">&gt;</i>
                    </div>
                </styles.Certificates>
                <styles.SkillLists>
                    <button>My TECH <span>Skills</span></button>
                    <div className="tech-skill">
                    {skills.map((skill, index) => (
                        <div key={index} className={`skill-${index}`}>{skill}</div>
                    ))}
                    </div>
                </styles.SkillLists>
            </styles.SkillContainer>
            <styles.ImageContainer>
                <img src="/images/abhijith_image.jpg" alt="" />
                <p className="me">Me</p>
            </styles.ImageContainer>
            <styles.QualificationContainer>
                <div className="span-heading qualification-heading">
                    <span>My qualifications</span>
                    <img src="images/arrows/qualifications.svg" alt="" />
                </div>
                <div className="qualifications">
                    {
                        qualifications.map((qualification, index) =>(
                            <div className={`qualification qualification-${index}`} key={index}>
                                <div className="qualification-name">{qualification.name}</div>
                                <div className="qualification-institution">{qualification.institution}</div>
                                <div className="qualification-year">{qualification.startYear}-{qualification.endYear}</div>
                            </div>
                        ))
                    }
                    
                </div>
                <div className="interests">
                    <p className="span-heading interest-heading">My interests</p>
                    <div className="interest interest-1">Playing Chess</div>
                </div>
            </styles.QualificationContainer>
        </styles.Wrapper>
        <DownArrow refElement={projectsRef} />
        </>
    )
}

export default About;