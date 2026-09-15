import { styled } from 'styled-components';
import { motion } from 'motion/react';

const styles = {

    NavBar: styled(motion.div)`
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        z-index: 3;
        height: 4rem;
        width: 100vw;
        padding: 0 2em;
        background-color: var(--bg-dark);
        box-shadow: 0px 0px 10px ${props => props.darktheme ? "var(--primary-transparent)" : "var(--light-gray)"};
        font-family: var(--font-secondary);
        text-transform: uppercase;

        @media screen and (max-width: 600px) {
            height: 3rem;
            padding: 0.5rem;
        }
    `,

    Logo: styled.div`
        color: var(--primary);
        font-family: var(--font-display);
        letter-spacing: 0.05em;
        font-size: 1.5rem;

        @media screen and (max-width: 600px) {
            font-size: 1.15rem;
        }
    `,

    MenuBar: styled.button`
        display: none;
        background: transparent;
        border: none;
        padding: 0;

        @media screen and (max-width: 680px) {
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
            position: relative;
            padding: 0.5em 0.75em;
            font-size: 1.05rem;
            cursor: pointer;
        }

        li a {
            cursor: pointer;
            text-decoration: none;
            color:  ${props => props.darktheme ? "var(--font-light)" : "var(--font-dark)"};
        }

        .nav-underline {
            position: absolute;
            left: 0.75em;
            right: 0.75em;
            bottom: 0.15em;
            height: 2px;
            background: var(--primary);
            box-shadow: 0 0 6px var(--primary-transparent);
        }

        .icon-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            border: none;
            color: inherit;
            cursor: pointer;
            padding: 0.25rem;
        }

        li.close-btn {
            display: none;
        }

        @media screen and (max-width: 680px) {
            display: ${(props) => (props.menuview ? 'flex' : 'none')};
            flex-direction: column;
            position: fixed;
            right: 0;
            top: 0;
            width: 60%;
            max-width: 280px;
            height: 100vh;
            z-index: 4;
            background-color: ${props => props.darktheme ? "var(--bg-dark-elevated)" : "var(--bg-light)"};
            box-shadow: -4px 0 20px var(--black-transparent);

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
                padding: 0.75rem 1.25rem;
                cursor: pointer;
            }

            .nav-underline {
                display: none;
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
                width: 2rem;
                height: 2rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: auto;
            }
        }
    `,

    Backdrop: styled(motion.div)`
        display: none;
        @media screen and (max-width: 680px) {
            display: block;
            position: fixed;
            inset: 0;
            z-index: 3;
            background-color: var(--black-transparent);
        }
    `
}

export default styles;
