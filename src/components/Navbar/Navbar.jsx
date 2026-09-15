import { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, X } from 'lucide-react';
import { ThemeContext } from '../../contexts/themeContext';
import styles from './Navbar.styles';

function Navbar({ homeRef, aboutRef, projectsRef, contactRef }) {
    const [menuView, setMenuView] = useState(false);
    const [active, setActive] = useState('home');

    function toggleMenu() {
        setMenuView(!menuView);
    }

    // Theme switch
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    function themeSwitch() {
        setDarkTheme(!darkTheme);
    }

    // Bug #2 fix: --bg-white doesn't exist, only --bg-light does.
    useEffect(() => {
        document.querySelector("body").style.backgroundColor = darkTheme ? "var(--bg-dark)" : "var(--bg-light)";
    }, [darkTheme]);

    const sections = [
        { id: 'home', label: 'Home', ref: homeRef },
        { id: 'about', label: 'About', ref: aboutRef },
        { id: 'projects', label: 'Projects', ref: projectsRef },
        { id: 'contact', label: 'Contact Me', ref: contactRef },
    ];

    // Bug #3 fix: nav links pointed at routes that don't exist (there's no
    // router). Track the active section via IntersectionObserver and scroll
    // to refs instead, same pattern DownArrow already uses.
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.dataset.section);
                });
            },
            { threshold: 0.5 }
        );
        sections.forEach(({ id, ref }) => {
            if (ref?.current) {
                ref.current.dataset.section = id;
                observer.observe(ref.current);
            }
        });
        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function goTo(ref) {
        ref?.current?.scrollIntoView({ behavior: "smooth" });
        setMenuView(false);
    }

    return (
        <styles.NavBar
            darktheme={darkTheme}
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            <styles.Logo>Abhijith Subash</styles.Logo>
            <styles.MenuBar onClick={toggleMenu} menuview={menuView} darktheme={darkTheme} aria-label="Open menu">
                <div></div>
                <div></div>
                <div></div>
            </styles.MenuBar>
            <styles.Options menuview={menuView} darktheme={darkTheme}>
                <li className='theme' onClick={themeSwitch}>
                    <button aria-label={darkTheme ? "Switch to light theme" : "Switch to dark theme"} className="icon-btn">
                        {darkTheme ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </li>
                {menuView &&
                    <li className='close-btn' onClick={toggleMenu}>
                        <button aria-label="Close menu"><X size={22} /></button>
                    </li>
                }
                {sections.map(({ id, label, ref }) => (
                    <li key={id} onClick={() => goTo(ref)}>
                        <a onClick={(e) => e.preventDefault()} href={`#${id}`}>{label}</a>
                        {active === id && (
                            <motion.div
                                layoutId="nav-underline"
                                className="nav-underline"
                            />
                        )}
                    </li>
                ))}
            </styles.Options>
            <AnimatePresence>
                {menuView && (
                    <styles.Backdrop
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleMenu}
                    />
                )}
            </AnimatePresence>
        </styles.NavBar>
    )
}

export default Navbar;
