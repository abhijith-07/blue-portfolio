import { useContext, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { ThemeContext } from '../../contexts/themeContext';
import DownArrow from '../../components/DownArrow/DownArrow';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import styles from './Home.styles';

function Home({ homeRef, aboutRef }) {
    // Display as a typing effect
    const headers = ["Abhijith Subash", "Full-Stack Developer → Embedded Security"];
    const typingSpeed = 100, deletingSpeed = 50, delayBetweenTexts = 1500;

    // Keep track of the current header being typed
    const [currentHeaderIndex, setCurrentHeaderIndex] = useState(0);
    // Manage the display of the current header text (including the cursor '|')
    const [header, setHeader] = useState('|');
    // Determine whether we are in the deleting phase of the typing effect
    const [isDeleting, setIsDeleting] = useState(false);

    // Accessing the theme context to apply the dark or light theme
    const { darkTheme } = useContext(ThemeContext);

    // Manage the typing and deleting effect
    useEffect(() => {
        const currentHeader = headers[currentHeaderIndex];
        let timeout;

        if (isDeleting) {
            // Handle deleting characters
            if (header.length > 1) {
                timeout = setTimeout(() => {
                    setHeader(currentHeader.substring(0, header.length - 2) + '|'); // -2 to account for '|'
                }, deletingSpeed);
            } else {
                setIsDeleting(false);
                setCurrentHeaderIndex((prevIndex) => (prevIndex + 1) % headers.length);
            }
        } else {
            // Handle typing characters
            if (header.length < currentHeader.length + 1) { // +1 to include the '|'
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
            <styles.Container darktheme={darkTheme} ref={homeRef} className="hero-scanlines">
                <styles.Details>
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0 }}>
                        <styles.Hello>Hello, I'm</styles.Hello>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
                        <styles.Header darktheme={darkTheme}>{header}</styles.Header>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                        <styles.Description>Embedded Linux · SELinux Policy · Secure Boot · CAN Bus Security · AUTOSAR</styles.Description>
                    </motion.div>
                    <styles.Options darktheme={darkTheme}>
                        {/* TODO: drop the real PDF at public/resume-abhijith-subash.pdf — this link 404s until it's added */}
                        <a className='resume' href="/resume-abhijith-subash.pdf" download>
                            Resume
                            <Download size={20} strokeWidth={1.75} />
                        </a>
                        <SocialLinks size={24} />
                    </styles.Options>
                </styles.Details>
                <styles.Profile darktheme={darkTheme}>
                    <motion.img
                        src="images/avatar.jpg"
                        alt="Portrait of Abhijith Subash"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                </styles.Profile>
            </styles.Container>
            <DownArrow refElement={aboutRef} />
        </>
        )
}

export default Home;
