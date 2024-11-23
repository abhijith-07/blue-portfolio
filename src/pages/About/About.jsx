import styles from "./About.styles";
import DownArrow from '../../components/DownArrow/DownArrow';
import { useState } from "react";

function About({aboutRef, projectsRef}) {
    const certificates = ['git.jpg','python.png']
    const [currentCertificate, setCurrentCertificate] = useState(0)
    function decreaseCertificate() {
        if (currentCertificate > 0){
            setCurrentCertificate(currentCertificate-1)
        }
        else {
            setCurrentCertificate(certificates.length-1)
        }
    }
    function increaseCertificate() {
        if (currentCertificate < certificates.length-1){
            setCurrentCertificate(currentCertificate+1)
        }
        else {
            setCurrentCertificate(0)
        }
    }
    const skills = ['Django', 'ReactJS', 'Python','JavaScript','C','Java', 'HTML', 'CSS', 'JQuery', 'SQL', 'MongoDB', 'Git', 'Docker']
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
    const interests = ['Playing Chess', 'Drawing']
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
                        <i className="left-arrow" onClick={decreaseCertificate}>&lt;</i>
                        <img src={`images/certificates/${certificates[currentCertificate]}`} alt="" className="certificate-image" />
                        <i className="right-arrow" onClick={increaseCertificate}>&gt;</i>
                    </div>
                </styles.Certificates>
                <styles.SkillLists>
                    <span className="span-heading tech-skills-heading">My tech skills</span>
                    <div className="tech-skill">
                    {skills.map((skill, index) => (
                        <div key={index} className={`skill-${index}`}>&nbsp;{skill}</div>
                    ))}
                    </div>
                </styles.SkillLists>
            </styles.SkillContainer>
            <styles.ImageContainer>
                <img src="/images/abhijith_image.jpg" alt="" className="avatar" />
                <div className="me">
                    <span className="span-heading ">Me</span>
                    <img src="images/arrows/me.svg" alt="" />
                </div>
            </styles.ImageContainer>
            <styles.QualificationContainer>
                <div className="span-heading qualification-heading">
                    <span>My qualifications</span>
                    <div className="qualification-arrow"><img src="images/arrows/qualifications.svg" alt="" /></div>
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
                    <div className="interests-lists">
                        {interests.map((interest, index) => (
                            <div key={index} className={`interest-${index+1}`}>{interest}
                            </div>
                        ))}
                    </div>
                </div>
            </styles.QualificationContainer>
        </styles.Wrapper>
        <DownArrow refElement={projectsRef} />
        </>
    )
}

export default About;