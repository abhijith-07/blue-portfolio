import { styled } from 'styled-components';
import { motion } from 'motion/react';

const styles = {

    NavBar: styled(motion.div)`
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        z-index: 100;
        height: 4rem;
        width: 100vw;
        padding: 0 2em;
        background-color: ${p => p.$darktheme ? 'var(--bg-dark)' : 'var(--bg-light)'};
        box-shadow: 0 1px 12px ${p => p.$darktheme ? 'var(--primary-transparent)' : 'rgba(0,0,0,0.10)'};
        font-family: var(--font-secondary);
        text-transform: uppercase;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;

        @media screen and (max-width: 600px) {
            height: 3rem;
            padding: 0.5rem;
        }
    `,

    Logo: styled.div`
        color: ${p => p.$darktheme ? 'var(--primary)' : 'var(--primary-dark)'};
        font-family: var(--font-display);
        font-size: 1.5rem;
        letter-spacing: 0.05em;

        @media screen and (max-width: 600px) {
            font-size: 1.15rem;
        }
    `,

    MenuBar: styled.button`
        display: none;
        background: transparent;
        border: none;
        padding: 0;
        cursor: pointer;

        @media screen and (max-width: 680px) {
            display: ${p => p.$menuview ? 'none' : 'block'};
            div {
                width: 20px;
                height: 3px;
                margin: 5px;
                background-color: ${p => p.$darktheme ? 'var(--font-light)' : 'var(--font-dark)'};
                border-radius: 2px;
            }
        }
    `,

    Options: styled.ul`
        display: flex;
        list-style: none;
        color: ${p => p.$darktheme ? 'var(--font-light)' : 'var(--font-dark)'};
        align-items: center;

        li {
            position: relative;
            padding: 0.5em 0.75em;
            font-size: 1.05rem;
            cursor: pointer;
        }

        li a {
            cursor: pointer;
            text-decoration: none;
            color: ${p => p.$darktheme ? 'var(--font-light)' : 'var(--font-dark)'};
            transition: color 0.2s ease;
        }

        li a:hover {
            color: var(--primary);
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
            color: ${p => p.$darktheme ? 'var(--font-light)' : 'var(--font-dark)'};
            cursor: pointer;
            padding: 0.25rem;
        }

        li.close-btn { display: none; }

        @media screen and (max-width: 680px) {
            display: ${p => p.$menuview ? 'flex' : 'none'};
            flex-direction: column;
            position: fixed;
            right: 0;
            top: 0;
            width: 60%;
            max-width: 280px;
            height: 100vh;
            z-index: 4;
            background-color: ${p => p.$darktheme ? 'var(--bg-dark-elevated)' : 'var(--bg-light)'};
            box-shadow: -4px 0 20px rgba(0,0,0,0.15);

            li { width: 100%; padding: 0; }
            li.theme { display: none; }

            li a {
                color: ${p => p.$darktheme ? 'var(--font-light)' : 'var(--font-dark)'};
                display: block;
                padding: 0.75rem 1.25rem;
            }

            .nav-underline { display: none; }

            li.close-btn {
                display: block;
                padding: 0.5rem;
                text-align: right;
            }

            li.close-btn button {
                background: transparent;
                border: none;
                color: ${p => p.$darktheme ? 'var(--font-light)' : 'var(--font-dark)'};
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