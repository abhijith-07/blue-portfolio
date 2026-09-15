import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldAlert } from "lucide-react";
import DownArrow from "../../components/DownArrow/DownArrow";
import styles from "./Projects.styles"

function Projects({ projectsRef, contactRef }) {
    // Content bank (Part 10 of the guide) — real bootcamp/lab work in
    // progress on the embedded/automotive security track. codeLink is left
    // `null` until each repo is actually public: a recruiter who clicks
    // "Code" and hits a dead "#" loses trust in the whole page, so an
    // unfinished project shows a disabled "repo pending" state instead of a
    // live link, and an "IN PROGRESS" badge instead of pretending it's done.
    const projects = [
        {
            title: "IPC on Embedded Linux — Pipes, Message Queues & Unix Domain Sockets",
            image: "ipc-project.svg",
            codeLink: null,
            description: "Compiled and ran two-pipe and message-queue IPC implementations on a Raspberry Pi 4, verifying inter-process communication behavior with strace. The trade-off that mattered most: message queues give structured, prioritized delivery at the cost of a fixed max message size, while pipes are simpler but strictly FIFO and byte-oriented.",
            techs: ["c", "linux", "ipc", "raspberry-pi"],
            inProgress: false,
            securityRelevant: false,
        },
        {
            title: "ARM Privilege Levels & Syscall Mechanics (EL0/EL1)",
            image: "arm-privilege.svg",
            codeLink: null,
            description: "Hands-on exploration of ARM exception levels and syscall entry/exit on a Raspberry Pi 4 (aarch64, kernel 6.12) — tracing how a userspace write() call crosses from EL0 into EL1 through the svc instruction and back.",
            techs: ["arm", "linux-kernel", "raspberry-pi"],
            inProgress: false,
            securityRelevant: false,
        },
        {
            title: "SELinux Policy From Scratch",
            image: "selinux-policy.svg",
            codeLink: null,
            description: "In progress: writing SELinux policy from scratch instead of copying an existing allow rule — debugging a denial down to a missing type-transition rule, then writing the type-enforcement policy to fix it properly.",
            techs: ["selinux", "linux-security", "mandatory-access-control"],
            inProgress: true,
            securityRelevant: false,
        },
        {
            title: "CAN Bus Intrusion Detection",
            image: "can-bus-ids.svg",
            codeLink: null,
            description: "In progress (bootcamp weeks 8–10): a CAN bus intrusion detection system alongside an AUTOSAR SecOC simulation — covering CAN frame structure and timing/frequency-based anomaly detection.",
            techs: ["can-bus", "automotive-security", "ids"],
            inProgress: true,
            securityRelevant: true,
        },
        {
            title: "Secure Boot & TrustZone/OP-TEE",
            image: "secure-boot.svg",
            codeLink: null,
            description: "In progress: mapping the secure boot chain of trust from ROM through OP-TEE into a TrustZone-isolated execution environment — one of the primary interview-target topics on the roadmap.",
            techs: ["secure-boot", "trustzone", "op-tee"],
            inProgress: true,
            securityRelevant: true,
        },
    ]

    const [activeProject, setActiveProject] = useState(0)
    const progress = activeProject / (projects.length - 1)

    function nextProject() {
        if (activeProject < projects.length - 1) {
            setActiveProject((currentProject) => currentProject + 1)
        }
    }

    // Bug #4 fix: left arrow called nextProject and right arrow called
    // prevProject — backwards from what every user expects.
    function prevProject() {
        if (activeProject > 0) {
            setActiveProject((currentProject) => currentProject - 1)
        }
    }

    const active = projects[activeProject]

    return (
        <>
            <styles.ProjectsContainer ref={projectsRef}>
                <styles.PlayGround>
                    <div className="progress-readout">
                        PROJECT {String(activeProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                    </div>
                    <div className="track" />
                    <motion.div
                        className="car"
                        animate={{ left: `calc(${progress * 100}% - 1.5rem)` }}
                        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                    >
                        <img src="images/playground/car.svg" alt="" aria-hidden="true" />
                    </motion.div>
                    <img src="images/playground/flag.svg" alt="" aria-hidden="true" className="flag" />
                    <button className="arrow left-arrow" onClick={prevProject} aria-label="Previous project" disabled={activeProject === 0}>&larr;</button>
                    <button className="arrow right-arrow" onClick={nextProject} aria-label="Next project" disabled={activeProject === projects.length - 1}>&rarr;</button>
                </styles.PlayGround>

                <AnimatePresence mode="wait">
                    <styles.ProjectCard
                        as={motion.div}
                        key={activeProject}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -60 }}
                        transition={{ duration: 0.35 }}
                    >
                        <div className="section-main">
                            <h2 className="project-name">{active.title}</h2>
                            <img src={`images/projects/${active.image}`} alt={`${active.title} — diagram`} className="img-card" loading="lazy" />
                            <div className="proj-links">
                                {active.codeLink ? (
                                    <a href={active.codeLink} className="code" target="_blank" rel="noreferrer">Code</a>
                                ) : (
                                    <span className="code disabled" title="Repository not public yet">Repo pending</span>
                                )}
                            </div>
                        </div>
                        <div className="project-details">
                            <div className="badges">
                                {active.inProgress && <span className="badge amber">In progress</span>}
                                {active.securityRelevant && (
                                    <span className="badge critical">
                                        <ShieldAlert size={13} strokeWidth={2} /> Security-relevant
                                    </span>
                                )}
                            </div>
                            <p className="description">
                                {active.description}
                            </p>
                            <div className="proj-techs">
                                {active.techs.map((tech, index) => (
                                    <div className={`tech-${index + 1}`} key={index}>#{tech}</div>
                                ))}
                            </div>
                        </div>
                    </styles.ProjectCard>
                </AnimatePresence>
            </styles.ProjectsContainer>
            <DownArrow refElement={contactRef} />
        </>
    )
}

export default Projects;
