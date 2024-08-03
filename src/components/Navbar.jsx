import { useContext, useEffect, useState } from 'react';
import {styled} from 'styled-components';
import { ThemeContext } from '../contexts/themeContext';

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
            document.querySelector("body").style.backgroundColor = (darkTheme ? "var(--black)" : "var(--bg-white)")
        }, 
    [darkTheme])

    return(
        <NavBar>
            <Logo>Welcome!</Logo>
            <MenuBar onClick={toggleMenu} menuview={menuView} darktheme={darkTheme}>
                <div></div>
                <div></div>
                <div></div>
            </MenuBar>
            <Options menuview={menuView} darktheme={darkTheme} >
            {/* <Options darkTheme={darkTheme}> */}
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
            background-color: ${props => props.darktheme ? "var(--bg-light)" : "var(--black)"};
        }
    }
`

const Options = styled.ul`
    display: flex;
    list-style: none;
    color: ${props => props.darktheme ? "var(--font-light)" : "var(--font-dark)"};
    
    li {
        padding: 0.5em 1em;
        cursor: pointer;
        font-size: 1.15rem;
    }

    li a {
        text-decoration: none;
        color:  ${props => props.darktheme ? "var(--font-light)" : "var(--font-dark)"};
    }

    li.close-btn {
        display: none;
    }

    @media screen and (max-width: 600px) {
        display: ${ ({ menuview }) => (menuview ? 'block' : 'none' ) };
        position: absolute;
        right: 0;
        top: 0;
        width: 40%;
        height: 100vh;
        z-index: 1;
        background-color: ${props => props.darktheme ? "var(--font-light)" : "var(--font-dark)"};

        li {
            width: 100%;
            padding: 0;
        }

        li.theme {
            display: none;
        }
        
        li a{
            color:  ${props => props.darktheme ? "var(--font-light)" : "var(--font-dark)"};
            display: block;
            padding: 0.5rem 1rem;
            cursor: pointer;
        }

        li.close-btn {
            display: block;
            padding: 0.5rem;
            text-align: right;
        }

        li.close-btn button {
            background-color: transparent;
            border: none;
            color: ${props => props.darktheme ? "var(--font-light)" : "var(--font-dark)"};
            font-size: 1.5rem;
            width: 2rem;
            height: 2rem;
            cursor: pointer;
        }
    }
`

export default Navbar;