import {styled} from 'styled-components';

function Navbar() {
    return(
        <NavBar>
            <Logo>Welcome!</Logo>
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
`

const Logo = styled.div`
    color: var(--primary);
    font-size: 2rem;
`

const Options = styled.ul`
    display: flex;
    list-style: none;
    color: var(--font-white);
    
    li {
        padding: 0.5em 1em;
        cursor: pointer;
    }
`

export default Navbar;