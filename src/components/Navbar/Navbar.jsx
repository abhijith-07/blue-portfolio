import { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, X } from 'lucide-react';
import { ThemeContext } from '../../contexts/themeContext';
import styles from './Navbar.styles';

function Navbar({ homeRef, aboutRef, projectsRef, contactRef }) {
    const [menuView, setMenuView] = useState(false);
    const [active, setActive] = useState('home');

    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    function themeSwitch() {
        setDarkTheme(prev => !prev);
    }

    function toggleMenu() {
        setMenuView(prev => !prev);
    }

    // Apply theme to body — sets both bg-color AND data-theme attribute.
    // data-theme triggers the CSS token overrides in index.css so --light-gray,
    // --font-dark etc. all switch automatically across every component.
    useEffect(() => {
        if (darkTheme) {
            document.body.style.backgroundColor = 'var(--bg-dark)';
            document.body.removeAttribute('data-theme');
        } else {
            document.body.style.backgroundColor = 'var(--bg-light)';
            document.body.setAttribute('data-theme', 'light');
        }
    }, [darkTheme]);

    const sections = [
        { id: 'home',     label: 'Home',       ref: homeRef },
        { id: 'about',    label: 'About',       ref: aboutRef },
        { id: 'projects', label: 'Projects',    ref: projectsRef },
        { id: 'contact',  label: 'Contact Me',  ref: contactRef },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
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
        ref?.current?.scrollIntoView({ behavior: 'smooth' });
        setMenuView(false);
    }

    return (
        <styles.NavBar
            $darktheme={darkTheme}
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            <styles.Logo $darktheme={darkTheme}>Abhijith Subash</styles.Logo>

            <styles.MenuBar
                onClick={toggleMenu}
                $menuview={menuView}
                $darktheme={darkTheme}
                aria-label="Open menu"
            >
                <div /><div /><div />
            </styles.MenuBar>

            <styles.Options $menuview={menuView} $darktheme={darkTheme}>
                {/* Theme toggle */}
                <li className="theme" onClick={themeSwitch}>
                    <button
                        className="icon-btn"
                        aria-label={darkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
                    >
                        {darkTheme ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </li>

                {/* Mobile close button */}
                {menuView && (
                    <li className="close-btn" onClick={toggleMenu}>
                        <button aria-label="Close menu"><X size={22} /></button>
                    </li>
                )}

                {sections.map(({ id, label, ref }) => (
                    <li key={id} onClick={() => goTo(ref)}>
                        <a onClick={e => e.preventDefault()} href={`#${id}`}>{label}</a>
                        {active === id && (
                            <motion.div layoutId="nav-underline" className="nav-underline" />
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
    );
}

export default Navbar;