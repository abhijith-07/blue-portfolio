import { useContext, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { ThemeContext } from '../../contexts/themeContext';
import DownArrow from '../../components/DownArrow/DownArrow';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import CometAvatar from '../../components/CometAvatar/CometAvatar';
import styles from './Home.styles';

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
                setCurrentHeaderIndex(prev => (prev + 1) % headers.length);
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

                {/* Left / bottom: text content */}
                <styles.Details>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0 }}
                    >
                        <styles.Hello $darktheme={darkTheme}>Hello, I'm</styles.Hello>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <styles.Header>{header}</styles.Header>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <styles.Description>
                            Embedded Linux · SELinux Policy · Secure Boot · CAN Bus Security · AUTOSAR
                        </styles.Description>
                    </motion.div>

                    <styles.Options $darktheme={darkTheme}>
                        {/* Resume download button */}
                        <a className="resume" href="/resume-abhijith-subash.pdf" download>
                            Resume
                            <Download size={20} strokeWidth={1.75} />
                        </a>

                        {/* GitHub · LinkedIn · Email icons */}
                        <SocialLinks size={24} />
                    </styles.Options>
                </styles.Details>

                {/* Right / top: animated comet avatar */}
                <styles.Profile>
                    <CometAvatar imageSrc="/images/avatar-photo.png"/>
                </styles.Profile>

            </styles.Container>
            <DownArrow refElement={aboutRef} />
        </>
    );
}

export default Home;