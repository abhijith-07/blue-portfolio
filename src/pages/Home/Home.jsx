import { useContext, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { ThemeContext } from '../../contexts/themeContext';
import DownArrow from '../../components/DownArrow/DownArrow';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import CometAvatar from '../../components/CometAvatar/CometAvatar';
import styles from './Home.styles';

const TECH_CHIPS = [
    { label: 'Embedded Linux', muted: false },
    { label: 'SELinux', muted: false },
    { label: 'Secure Boot', muted: false },
    { label: 'AUTOSAR', muted: false },
    { label: 'CAN Bus', muted: false },
    { label: 'Yocto', muted: true },
    { label: 'C / C++', muted: true },
    { label: 'React', muted: true },
];

const STATS = [
    { value: '3+', label: 'Years exp.' },
    { value: '10+', label: 'Projects' },
    { value: 'EL0–EL3', label: 'ARM levels' },
];

function Home({ homeRef, aboutRef }) {
    const headers = ["Abhijith Subash", "Full-Stack Developer → Embedded Security"];
    const typingSpeed = 100, deletingSpeed = 50, delayBetweenTexts = 1500;
    const [currentHeaderIndex, setCurrentHeaderIndex] = useState(0);
    const [header, setHeader] = useState('|');
    const [isDeleting, setIsDeleting] = useState(false);
    const { darkTheme } = useContext(ThemeContext);

    useEffect(() => {
        const currentHeader = headers[currentHeaderIndex];
        let timeout;
        if (isDeleting) {
            if (header.length > 1) {
                timeout = setTimeout(() => {
                    setHeader(currentHeader.substring(0, header.length - 2) + '|');
                }, deletingSpeed);
            } else {
                setIsDeleting(false);
                setCurrentHeaderIndex((prevIndex) => (prevIndex + 1) % headers.length);
            }
        } else {
            if (header.length < currentHeader.length + 1) {
                timeout = setTimeout(() => {
                    setHeader(currentHeader.substring(0, header.length) + '|');
                }, typingSpeed);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), delayBetweenTexts);
            }
        }
        return () => clearTimeout(timeout);
    }, [header, isDeleting, headers, currentHeaderIndex]);

    return (
        <>
            <styles.Container $darktheme={darkTheme} ref={homeRef} className="hero-scanlines">

                {/* On desktop: right column (avatar). On mobile: shown first via order:-1 */}
                <styles.Profile>
                    <CometAvatar imageSrc="/images/avatar-photo.png" />
                </styles.Profile>

                {/* On desktop: left column (text). On mobile: shown second */}
                <styles.Details>
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0 }}>
                        <styles.Hello $darktheme={darkTheme}>Hello, I'm</styles.Hello>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
                        <styles.Header>{header}</styles.Header>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                        <styles.Description>
                            Embedded Linux · SELinux Policy · Secure Boot · CAN Bus Security · AUTOSAR
                        </styles.Description>
                    </motion.div>

                    <styles.Options $darktheme={darkTheme}>
                        <a className='resume' href="/resume-abhijith-subash.pdf" download>
                            Resume
                            <Download size={20} strokeWidth={1.75} />
                        </a>
                        <SocialLinks size={24} />
                    </styles.Options>

                    {/* ── Mobile-only extras ─────────────────────────────── */}

                    {/* Stats row: at-a-glance numbers */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.5 }}
                        style={{ width: '100%' }}
                    >
                        <styles.StatsRow>
                            {STATS.map(({ value, label }) => (
                                <div className="stat" key={label}>
                                    <span className="stat-value">{value}</span>
                                    <span className="stat-label">{label}</span>
                                </div>
                            ))}
                        </styles.StatsRow>
                    </motion.div>

                    {/* Tech chip strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.65 }}
                        style={{ width: '100%' }}
                    >
                        <styles.TechStrip>
                            {TECH_CHIPS.map(({ label, muted }) => (
                                <span className={`chip${muted ? ' chip-muted' : ''}`} key={label}>
                                    {label}
                                </span>
                            ))}
                        </styles.TechStrip>
                    </motion.div>

                    {/* Open-to-work status badge */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                        style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
                    >
                        <styles.StatusBadge>
                            <span className="dot" />
                            Open to opportunities
                        </styles.StatusBadge>
                    </motion.div>

                </styles.Details>
            </styles.Container>

            <DownArrow refElement={aboutRef} />
        </>
    );
}

export default Home;