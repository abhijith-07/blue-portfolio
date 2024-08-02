import { useContext, useEffect, useState } from 'react';
import {styled} from 'styled-components';
import { ThemeContext } from '../contexts/themeContext';

function Navbar() {
    // const [menuView, setMenuView] = useState(false);
    // function toggleMenu() {
    //     setMenuView(!menuView);
    // }

    // Theme switch
    const {darkTheme, setDarkTheme} = useContext(ThemeContext);

    function themeSwitch() {
        setDarkTheme(!darkTheme);
        document.querySelector("body").style.backgroundColor = (darkTheme ? "var(--black)" : "var(--bg-white)")
    }

    useEffect(
        ()=>{
            themeSwitch
            console.log("Value: ",darkTheme)
        }, 
    [darkTheme])

    return(
        <NavBar>
            <Logo>Welcome!</Logo>
            {/* <MenuBar onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </MenuBar> */}
            {/* <Options menuview={menuView} > */}
            <Options darkTheme={darkTheme}>
                <li className='theme' onClick={themeSwitch}>
                    <i className={`fa-solid fa-${darkTheme ? "sun" : "moon"}`}></i>
                </li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact Me</li>
            </Options>
        </NavBar>
    )
}


const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    padding: 0 2em;

    @media screen and (max-width: 600px) {   
        height: 3rem;
        padding: 0.5rem;
    }
`

const Logo = styled.div`
    color: var(--primary);
    font-size: 2rem;

    @media screen and (max-width: 600px) {
        font-size: 1.5rem;
    }
`

const MenuBar = styled.div`
    display: none;

    @media screen and (max-width: 600px) {
        display: block;
        cursor: pointer;
        div {
            width: 20px;
            height: 3px;
            margin: 5px;
            background-color: var(--font-light);
        }
    }
`

const Options = styled.ul`
    display: flex;
    list-style: none;
    color: ${props => props.darkTheme ? "var(--font-dark)" : "var(--font-light)"};
    
    li {
        padding: 0.5em 1em;
        cursor: pointer;
        font-size: 1.15rem;
    }

    @media screen and (max-width: 600px) {
        display: ${ ({ menuview }) => (menuview ? 'block' : 'none' ) };
        position: absolute;
        right: 0;
        top: 0;
        width: 50%;
        height: 100vh;
        z-index: 1;

        li.theme {
            display: none;
        }
    }
`

export default Navbar;