import {styled} from 'styled-components';

function Navbar() {
    return(
        <NavBar>
            <Logo>Welcome!</Logo>
            <MenuBar>
                <div></div>
                <div></div>
                <div></div>
            </MenuBar>
            <Options>
                <li><i class="fa-solid fa-sun"></i></li>
                <li><i class="fa-solid fa-moon"></i></li>
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

    @media screen and (max-width: 480px) {   
        height: 3rem;
        padding: 0.5rem;
    }
`

const Logo = styled.div`
    color: var(--primary);
    font-size: 2rem;

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
    }
`

const MenuBar = styled.div`
    display: none;

    @media screen and (max-width: 480px) {
        display: block;
        div {
            width: 20px;
            height: 3px;
            margin: 5px;
            background-color: var(--font-white);
        }
    }
`

const Options = styled.ul`
    display: flex;
    list-style: none;
    color: var(--font-white);
    
    li {
        padding: 0.5em 1em;
        cursor: pointer;
    }

    @media screen and (max-width: 480px) {
        display: none;
    }
`

export default Navbar;