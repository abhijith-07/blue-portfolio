import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldAlert } from "lucide-react";
import DownArrow from "../../components/DownArrow/DownArrow";
import styles from "./Projects.styles";

/* ─── Audio — deep bass boom, no oscillator buzz ──────────────
 *
 *  Strategy: real low-end comes from three layers:
 *  1. Sub sine  — very low freq (40–80 Hz), gives the physical thud
 *  2. Noise body — filtered white noise through a low-pass, gives the
 *     "whomp" texture without any pitched buzziness
 *  3. Mid punch  — short sine click at ~120 Hz for attack transient
 *
 *  No sawtooth, no square, no distortion — those are what cause buzz.
 * ─────────────────────────────────────────────────────────── */
function getCtx(ref) {
    if (!ref.current || ref.current.state === "closed") {
        ref.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (ref.current.state === "suspended") ref.current.resume();
    return ref.current;
}

/** White noise source — 1 second buffer of random samples */
function makeNoise(ctx) {
    const bufLen = ctx.sampleRate;
    const buf    = ctx.createBuffer(1, bufLen, ctx.sampleRate);
    const data   = buf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.loop   = true;
    return src;
}

/**
 * Intro: deep rumbling launch — sub bass rises, noise whomp, fades out.
 * Sounds like an F1 car launching from standstill and accelerating past.
 * Duration ~2.4 s to cover the animation.
 */
function playEngineStart(ctx) {
    const now = ctx.currentTime;

    /* ── Layer 1: Sub sine — the physical thud ── */
    const sub     = ctx.createOscillator();
    const subGain = ctx.createGain();
    sub.type = "sine";
    sub.frequency.setValueAtTime(38, now);
    sub.frequency.exponentialRampToValueAtTime(95,  now + 1.4); // rising rev
    sub.frequency.exponentialRampToValueAtTime(70,  now + 2.2); // lift off
    subGain.gain.setValueAtTime(0,    now);
    subGain.gain.linearRampToValueAtTime(0.55, now + 0.12);
    subGain.gain.linearRampToValueAtTime(0.60, now + 1.4);
    subGain.gain.linearRampToValueAtTime(0.20, now + 2.2);
    subGain.gain.linearRampToValueAtTime(0,    now + 2.5);
    sub.connect(subGain);
    subGain.connect(ctx.destination);
    sub.start(now); sub.stop(now + 2.6);

    /* ── Layer 2: Noise whomp through a low-pass ── */
    const noise   = makeNoise(ctx);
    const lpf     = ctx.createBiquadFilter();
    const nGain   = ctx.createGain();
    lpf.type = "lowpass";
    lpf.frequency.setValueAtTime(120, now);          // start tight/dark
    lpf.frequency.exponentialRampToValueAtTime(420,  now + 1.4); // open up
    lpf.frequency.exponentialRampToValueAtTime(180,  now + 2.2); // close off
    lpf.Q.value = 2.5;
    nGain.gain.setValueAtTime(0,    now);
    nGain.gain.linearRampToValueAtTime(0.28, now + 0.10);
    nGain.gain.linearRampToValueAtTime(0.32, now + 1.4);
    nGain.gain.linearRampToValueAtTime(0.08, now + 2.2);
    nGain.gain.linearRampToValueAtTime(0,    now + 2.5);
    noise.connect(lpf); lpf.connect(nGain); nGain.connect(ctx.destination);
    noise.start(now); noise.stop(now + 2.6);

    /* ── Layer 3: Mid punch transient at launch ── */
    const punch     = ctx.createOscillator();
    const punchGain = ctx.createGain();
    punch.type = "sine";
    punch.frequency.setValueAtTime(110, now);
    punch.frequency.exponentialRampToValueAtTime(55, now + 0.18);
    punchGain.gain.setValueAtTime(0,    now);
    punchGain.gain.linearRampToValueAtTime(0.4,  now + 0.02);
    punchGain.gain.linearRampToValueAtTime(0,    now + 0.22);
    punch.connect(punchGain); punchGain.connect(ctx.destination);
    punch.start(now); punch.stop(now + 0.25);
}

/**
 * Navigation click boom.
 * forward=true  → acceleration: sub rises, filter opens (punchy boom up)
 * forward=false → braking:      sub drops, filter closes (whomp down)
 */
function playVroom(ctx, forward) {
    const now = ctx.currentTime;
    const dur = 0.5;

    /* Sub sine */
    const sub     = ctx.createOscillator();
    const subGain = ctx.createGain();
    sub.type = "sine";
    const f0 = forward ? 45 : 90;
    const f1 = forward ? 90 : 42;
    sub.frequency.setValueAtTime(f0, now);
    sub.frequency.exponentialRampToValueAtTime(f1, now + dur);
    subGain.gain.setValueAtTime(0,    now);
    subGain.gain.linearRampToValueAtTime(0.50, now + 0.04);
    subGain.gain.linearRampToValueAtTime(0,    now + dur + 0.05);
    sub.connect(subGain); subGain.connect(ctx.destination);
    sub.start(now); sub.stop(now + dur + 0.1);

    /* Noise whomp */
    const noise  = makeNoise(ctx);
    const lpf    = ctx.createBiquadFilter();
    const nGain  = ctx.createGain();
    lpf.type = "lowpass";
    lpf.Q.value = 3;
    lpf.frequency.setValueAtTime(forward ? 100 : 360, now);
    lpf.frequency.exponentialRampToValueAtTime(forward ? 380 : 90, now + dur);
    nGain.gain.setValueAtTime(0,    now);
    nGain.gain.linearRampToValueAtTime(0.25, now + 0.04);
    nGain.gain.linearRampToValueAtTime(0,    now + dur + 0.05);
    noise.connect(lpf); lpf.connect(nGain); nGain.connect(ctx.destination);
    noise.start(now); noise.stop(now + dur + 0.1);

    /* Kick transient punch */
    const kick     = ctx.createOscillator();
    const kickGain = ctx.createGain();
    kick.type = "sine";
    kick.frequency.setValueAtTime(forward ? 100 : 80, now);
    kick.frequency.exponentialRampToValueAtTime(forward ? 50 : 38, now + 0.12);
    kickGain.gain.setValueAtTime(0,    now);
    kickGain.gain.linearRampToValueAtTime(0.45, now + 0.01);
    kickGain.gain.linearRampToValueAtTime(0,    now + 0.15);
    kick.connect(kickGain); kickGain.connect(ctx.destination);
    kick.start(now); kick.stop(now + 0.18);
}
/* ────────────────────────────────────────────────────────────── */

const projects = [
    {
        title: "IPC on Embedded Linux — Pipes, Message Queues & Unix Domain Sockets",
        image: "proj-1.png",
        codeLink: null,
        description:
            "Compiled and ran two-pipe and message-queue IPC implementations on a Raspberry Pi 4, verifying inter-process communication behavior with strace. Key trade-off: message queues give structured, prioritised delivery at the cost of a fixed max message size; pipes are simpler but strictly FIFO and byte-oriented.",
        techs: ["c", "linux", "ipc", "raspberry-pi"],
        inProgress: false,
        securityRelevant: false,
    },
    {
        title: "ARM Privilege Levels & Syscall Mechanics (EL0 / EL1)",
        image: "proj-1.png",
        codeLink: null,
        description:
            "Hands-on exploration of ARM exception levels and syscall entry/exit on a Raspberry Pi 4 (aarch64, kernel 6.12) — tracing how a userspace write() call crosses from EL0 into EL1 through the svc instruction and back.",
        techs: ["arm", "linux-kernel", "raspberry-pi"],
        inProgress: false,
        securityRelevant: false,
    },
    {
        title: "SELinux Policy From Scratch",
        image: "proj-1.png",
        codeLink: null,
        description:
            "In progress: writing SELinux policy from scratch — debugging a denial down to a missing type-transition rule, then writing the type-enforcement policy to resolve it, instead of copying an AI-generated allow rule.",
        techs: ["selinux", "linux-security", "mac"],
        inProgress: true,
        securityRelevant: false,
    },
    {
        title: "CAN Bus Intrusion Detection",
        image: "proj-1.png",
        codeLink: null,
        description:
            "In progress (bootcamp weeks 8–10): a CAN bus intrusion detection system alongside an AUTOSAR SecOC simulation — CAN frame structure, timing/frequency-based anomaly detection.",
        techs: ["can-bus", "automotive-security", "ids"],
        inProgress: true,
        securityRelevant: true,
    },
    {
        title: "Secure Boot & TrustZone / OP-TEE",
        image: "proj-1.png",
        codeLink: null,
        description:
            "In progress: mapping the secure boot chain of trust from ROM through OP-TEE into a TrustZone-isolated execution environment — one of the primary interview-target topics on the current roadmap.",
        techs: ["secure-boot", "trustzone", "op-tee"],
        inProgress: true,
        securityRelevant: true,
    },
];

const N = projects.length;

/* Smoke particle — a small blurred circle that drifts and fades */
function SmokePuff({ x }) {
    return (
        <motion.div
            style={{
                position: "absolute",
                top: "3.8rem",
                left: x,
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(34,211,238,0.5) 0%, transparent 70%)",
                filter: "blur(4px)",
                pointerEvents: "none",
            }}
            initial={{ opacity: 0.85, scale: 0.5, y: 0 }}
            animate={{ opacity: 0, scale: 2.8, y: -22 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
        />
    );
}

export default function Projects({ projectsRef, contactRef }) {
    /*
     * DIRECTION TRUTH TABLE
     * ─────────────────────────────────────────────────────────────
     * Intro   : car appears on RIGHT (index N-1), drives LEFT to index 0
     *           car sprite faces LEFT  → scaleX: -1
     *
     * ← arrow : FORWARD  — car moves LEFT  (index -1), sprite faces LEFT  → scaleX: -1
     * → arrow : REVERSE  — car moves RIGHT (index +1), sprite faces RIGHT → scaleX: +1
     *
     * "movingRight" state = true when car is physically moving rightward on screen
     * ─────────────────────────────────────────────────────────────
     */
    const [activeProject, setActiveProject] = useState(N - 1); // start at right end
    const [movingRight, setMovingRight]     = useState(false);  // intro: moving LEFT
    const [isIntro, setIsIntro]             = useState(true);
    const [puffs, setPuffs]                 = useState([]);
    const audioCtxRef = useRef(null);
    const puffId      = useRef(0);

    /* progress 0 = leftmost slot, 1 = rightmost slot */
    const progress = activeProject / (N - 1);

    function addPuff(xPct) {
        const id = puffId.current++;
        setPuffs(ps => [...ps, { id, xPct }]);
        setTimeout(() => setPuffs(ps => ps.filter(p => p.id !== id)), 950);
    }

    /* ── Intro: enter from RIGHT, drive LEFT to index 0 ────── */
    useEffect(() => {
        const t1 = setTimeout(() => {
            /* Car faces LEFT (movingRight=false). Exhaust trails RIGHT of car */
            setMovingRight(false);
            addPuff(96); addPuff(94);
            /* No AudioContext here — browsers block it before a user gesture.
               Sound fires on the first arrow click instead (zero console warnings). */

            const t2 = setTimeout(() => {
                setActiveProject(0); // animate to left end

                /* Smoke puffs trail to the RIGHT as car drives left */
                let count = 0;
                const smoke = setInterval(() => {
                    const prog = 1 - count * 0.15;
                    addPuff(Math.max(2, prog * 94));
                    if (++count > 6) clearInterval(smoke);
                }, 200);

                /* Parked — intro done */
                const t3 = setTimeout(() => {
                    setIsIntro(false);
                }, 1450);

                return () => { clearTimeout(t3); clearInterval(smoke); };
            }, 450);
            return () => clearTimeout(t2);
        }, 400);
        return () => clearTimeout(t1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /* ── Navigation ─────────────────────────────────────────── */
    function navigate(dir) {
        if (isIntro) return;

        if (dir === "left") {
            /* ← FORWARD: car moves LEFT (lower index), sprite faces LEFT */
            if (activeProject <= 0) return;
            setMovingRight(false);
            addPuff(((activeProject / (N - 1)) * 94) + 4); // exhaust trails RIGHT
            setActiveProject(p => p - 1);
            try { playVroom(getCtx(audioCtxRef), true); } catch (_) {}
        }

        if (dir === "right") {
            /* → REVERSE: car moves RIGHT (higher index), sprite faces RIGHT */
            if (activeProject >= N - 1) return;
            setMovingRight(true);
            addPuff((activeProject / (N - 1)) * 94); // exhaust trails LEFT
            setActiveProject(p => p + 1);
            try { playVroom(getCtx(audioCtxRef), false); } catch (_) {}
        }
    }

    const active = projects[activeProject];

    return (
        <>
            <styles.ProjectsContainer ref={projectsRef}>
                <styles.PlayGround>
                    <div className="progress-readout">
                        PROJECT {String(activeProject + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
                    </div>

                    <div className="track" />

                    {puffs.map(p => (
                        <SmokePuff key={p.id} x={`${p.xPct}%`} />
                    ))}

                    {/* Car: scaleX(-1) = faces left (forward), scaleX(1) = faces right (reverse) */}
                    <motion.div
                        className="car"
                        animate={{ left: `calc(${progress * 100}% - 1.8rem)` }}
                        transition={
                            isIntro
                                ? { type: "tween", duration: 1.35, ease: [0.18, 0.82, 0.4, 1] }
                                : { type: "spring", stiffness: 110, damping: 16 }
                        }
                    >
                        <motion.img
                            src="images/playground/car.svg"
                            alt=""
                            aria-hidden="true"
                            animate={{ scaleX: movingRight ? 1 : -1 }}
                            transition={{ duration: 0.22, ease: "easeInOut" }}
                        />
                    </motion.div>

                    <img src="images/playground/flag.svg" alt="" aria-hidden="true" className="flag" />

                    {/* ← left arrow = FORWARD (car moves left, lower index) */}
                    <button
                        className="arrow left-arrow"
                        onClick={() => navigate("left")}
                        aria-label="Previous project"
                        disabled={activeProject === 0 || isIntro}
                    >
                        &#8592;
                    </button>

                    {/* → right arrow = REVERSE (car moves right, higher index) */}
                    <button
                        className="arrow right-arrow"
                        onClick={() => navigate("right")}
                        aria-label="Next project"
                        disabled={activeProject === N - 1 || isIntro}
                    >
                        &#8594;
                    </button>
                </styles.PlayGround>

                <AnimatePresence mode="wait">
                    <styles.ProjectCard
                        as={motion.div}
                        key={activeProject}
                        initial={{ opacity: 0, x: movingRight ? 60 : -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: movingRight ? -60 : 60 }}
                        transition={{ duration: 0.32, ease: "easeInOut" }}
                    >
                        <div className="section-main">
                            <h2 className="project-name">{active.title}</h2>
                            <img
                                src={`images/projects/${active.image}`}
                                alt={`${active.title} – screenshot`}
                                className="img-card"
                                loading="lazy"
                            />
                            <div className="proj-links">
                                {active.codeLink ? (
                                    <a href={active.codeLink} className="code" target="_blank" rel="noreferrer">
                                        Code
                                    </a>
                                ) : (
                                    <span className="code disabled">Repo pending</span>
                                )}
                            </div>
                        </div>

                        <div className="project-details">
                            <div className="badges">
                                {active.inProgress && (
                                    <span className="badge amber">In progress</span>
                                )}
                                {active.securityRelevant && (
                                    <span className="badge critical">
                                        <ShieldAlert size={13} strokeWidth={2} /> Security-relevant
                                    </span>
                                )}
                            </div>
                            <p className="description">{active.description}</p>
                            <div className="proj-techs">
                                {active.techs.map((tech, i) => (
                                    <div className={`tech-${i + 1}`} key={tech}>
                                        #{tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </styles.ProjectCard>
                </AnimatePresence>
            </styles.ProjectsContainer>

            <DownArrow refElement={contactRef} />
        </>
    );
}