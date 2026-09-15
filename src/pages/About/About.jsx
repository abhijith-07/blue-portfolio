import styles from "./About.styles";
import DownArrow from '../../components/DownArrow/DownArrow';
import SkillChip from '../../components/SkillChip/SkillChip';
import { motion, AnimatePresence } from "motion/react";
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

    // Regrouped by category so Embedded/Security-relevant skills surface
    // first instead of being buried in one flat pipe-separated line.
    const skillGroups = [
        {
            category: "Embedded & OS",
            skills: ["Embedded Linux", "Android Automotive OS (AAOS)", "ARM Architecture", "SELinux / SEAndroid"]
        },
        {
            category: "Security",
            skills: ["Secure Boot", "TrustZone / OP-TEE", "Cryptography Fundamentals", "CAN Bus Security", "AUTOSAR SecOC"]
        },
        {
            category: "Standards",
            skills: ["ISO/SAE 21434", "UN R155 / R156", "MISRA C"]
        },
        {
            category: "Languages & Tools",
            skills: ["Python", "C", "JavaScript", "Git", "Docker", "SQL"]
        },
        {
            category: "Web (background)",
            skills: ["React", "Django", "MongoDB"]
        }
    ]

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
                        <img src="images/arrows/certificates.svg" alt="" aria-hidden="true" />
                    </div>
                    <div className="certificate-container">
                        <i className="left-arrow" role="button" tabIndex={0} aria-label="Previous certificate" onClick={decreaseCertificate}>&lt;</i>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={certificates[currentCertificate]}
                                src={`images/certificates/${certificates[currentCertificate]}`}
                                alt={`${certificates[currentCertificate].split('.')[0]} certification badge`}
                                className="certificate-image"
                                initial={{ x: 40, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -40, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </AnimatePresence>
                        <i className="right-arrow" role="button" tabIndex={0} aria-label="Next certificate" onClick={increaseCertificate}>&gt;</i>
                    </div>
                </styles.Certificates>
                <styles.SkillLists>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
                    >
                        {skillGroups.map(group => (
                            <div key={group.category} className="skill-group">
                                <span className="span-heading">{group.category}</span>
                                <div className="tech-skill">
                                    {group.skills.map(skill => (
                                        <motion.span
                                            key={skill}
                                            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                                        >
                                            <SkillChip>{skill}</SkillChip>
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </styles.SkillLists>
            </styles.SkillContainer>
            <styles.ImageContainer>
                <img src="/images/abhijith_image.png" alt="Abhijith Subash" className="avatar" />
                <div className="me">
                    <span className="span-heading ">Me</span>
                    <img src="images/arrows/me.svg" alt="" aria-hidden="true" />
                </div>
                <p className="bio">Started in full-stack web development, now working on Android Automotive OS and Embedded Linux security — building deliberately toward Tier-1 automotive security roles.</p>
            </styles.ImageContainer>
            <styles.QualificationContainer>
                <div className="span-heading qualification-heading">
                    <span>My qualifications</span>
                    <div className="qualification-arrow"><img src="images/arrows/qualifications.svg" alt="" aria-hidden="true" /></div>
                </div>
                <div className="qualifications">
                    {
                        qualifications.map((qualification, index) =>(
                            <motion.div
                                className={`qualification qualification-${index}`}
                                key={index}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <span className="timeline-dot" />
                                <div className="qualification-name">{qualification.name}</div>
                                <div className="qualification-institution">{qualification.institution}</div>
                                <div className="qualification-year">{qualification.startYear}-{qualification.endYear}</div>
                            </motion.div>
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
