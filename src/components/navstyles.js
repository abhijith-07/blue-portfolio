import { styled } from 'styled-components';

const styles = {

    NavBar: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4rem;
        padding: 0 2em;
        
        @media screen and (max-width: 600px) {   
            height: 3rem;
            padding: 0.5rem;
        }
    `,

    Logo: styled.div`
        color: var(--primary);
        font-size: 2rem;
    
        @media screen and (max-width: 600px) {
            font-size: 1.5rem;
        }
    `,

    MenuBar: styled.div`
        display: none;

        @media screen and (max-width: 600px) {
            display: ${(props) => (props.menuview ? 'none' : 'block')};
            cursor: pointer;
            div {
                width: 20px;
                height: 3px;
                margin: 5px;
                background-color: ${props => props.darktheme ? "var(--bg-light)" : "var(--bg-dark)"};
            }
        }
    `,

    Options: styled.ul`
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
            display: ${(props) => (props.menuview ? 'block' : 'none')};
            position: absolute;
            right: 0;
            top: 0;
            width: 40%;
            height: 100vh;
            z-index: 1;
            background-color: ${props => props.darktheme ? "var(--bg-light-transparent)" : "var(--bg-dark-transparent)"};

            li {
                width: 100%;
                padding: 0;
            }

            li.theme {
                display: none;
            }
            
            li a{
                color:  ${props => props.darktheme ? "var(--font-dark)" : "var(--font-light)"};
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
                color: ${props => props.darktheme ? "var(--font-dark)" : "var(--font-light)"};
                font-size: 1.5rem;
                width: 2rem;
                height: 2rem;
                cursor: pointer;
            }
        }
    `
}

export default styles;