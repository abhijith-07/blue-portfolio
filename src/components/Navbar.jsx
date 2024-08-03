import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/themeContext';
import styles from './navstyles';

function Navbar() {
    const [menuView, setMenuView] = useState(false);
    
    function toggleMenu() {
        setMenuView(!menuView);
    }

    // Theme switch
    const {darkTheme, setDarkTheme} = useContext(ThemeContext);

    function themeSwitch() {
        setDarkTheme(!darkTheme);
    }

    useEffect(
        ()=>{
            themeSwitch
            document.querySelector("body").style.backgroundColor = (darkTheme ? "var(--bg-dark)" : "var(--bg-white)")
        }, 
    [darkTheme])

    return(
        <styles.NavBar>
            <styles.Logo>Welcome!</styles.Logo>
            <styles.MenuBar onClick={toggleMenu} menuview={menuView} darktheme={darkTheme}>
                <div></div>
                <div></div>
                <div></div>
            </styles.MenuBar>
            <styles.Options menuview={menuView} darktheme={darkTheme} >
                <li className='theme' onClick={themeSwitch}>
                    <i className={`fa-solid fa-${darkTheme ? "moon" : "sun" }`}></i>
                </li>
                {menuView && 
                <li className='close-btn' onClick={toggleMenu}>
                    <button>X</button>
                </li>
                }
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contact Me</a>
                </li>
            </styles.Options>
        </styles.NavBar>
    )
}

export default Navbar;