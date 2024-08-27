import styles from "./About.styles";
import DownArrow from '../../components/DownArrow/DownArrow';

function About({aboutRef, projectsRef}) {
    return (
        <>
        <styles.Wrapper ref={aboutRef}>
            <styles.SkillContainer>
                <styles.Certificates>
                    <p className="certificate-heading">My certificates</p>
                    <div className="certificate-container">
                        <i className="left-arrow">&lt;</i>
                        <img src="images/certificates/git.jpg" alt="" className="certificate-image" />
                        <i className="right-arrow">&gt;</i>
                    </div>
                </styles.Certificates>
                <div className="skills">
                    <div className="btn-tech-skills"></div>
                    <div className="tech-skill skill-1"></div>
                    <div className="tech-skill skill-2"></div>
                    <div className="tech-skill skill-3"></div>
                    <div className="tech-skill skill-4"></div>
                </div>
            </styles.SkillContainer>
            <styles.ImageContainer>
                <img src="/images/abhijith_image.jpg" alt="" />
                <p className="me">Me</p>
            </styles.ImageContainer>
            <styles.QualificationContainer>
                <div className="qualifications">
                    <p className="qualification-heading">My qualifications</p>
                    <div className="qualification qualification-1">
                        <div className="qualification-name">M.Sc. Computer Science</div>
                        <div className="qualification-institution">DCS, Kariavattom Campus</div>
                        <div className="qualification-year">2021-2023</div>
                    </div>
                    <div className="qualification qualification-2">
                        <div className="qualification-name">B.Sc. Computer Science</div>
                        <div className="qualification-institution">EMSCAS, Iritty</div>
                        <div className="qualification-year">2018-2021</div>
                    </div>
                </div>
                <div className="interests">
                    <p className="interest-heading">My interests</p>
                    <div className="interest interest-1">Playing Chess</div>
                </div>
            </styles.QualificationContainer>
        </styles.Wrapper>
        <DownArrow refElement={projectsRef} />
        </>
    )
}

export default About;