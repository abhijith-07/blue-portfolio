import { styled } from 'styled-components';

const styles = {

Container: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.darktheme ? "var(--font-light)" : "var(--font-dark)"};
    padding-top: 14rem;


    @media screen and (max-width: 790px){
        display: block;
        text-align: center;
        position: relative;
        margin-top: 0;
        top: 300px;
        height: 100vh;
    }

    @media screen and (max-width: 480px){
        top: 140px;
    }
`,

Profile: styled.div`
    img {
        width: 350px;
        height: 350px;
        margin-top: -5rem;
        border-radius: 50%;
        box-shadow: 0px 0px 20px ${props => props.darktheme ? "var(--primary-transparent)" : "var(--font-dark)"};
    }

    img:hover {
        box-shadow: 0px 0px 25px var(--primary);
    }

    @media screen and (max-width: 1000px) {
        img{
            width: 300px;
            height: 300px;
        }
    }
    @media screen and (max-width: 790px) {
        display: flex;
        justify-content: center;
        width: 100vw;
        img {
            width: 250px;
            height: 250px;
            position: absolute;
            top: -80px;
        }
    }

    @media screen and (max-width: 480px) {
        img {
            width: 180px;
            height: 180px;
            top: 50px;
        }
    }
`,

Details: styled.div`
    width: 60vw;

    @media screen and (max-width: 790px) {
        width: 100vw;
        line-height: 2em;
    }

    @media screen and (max-width: 480px) {
        padding: 0 1.5rem;
    }
`,

Hello: styled.h2`
    color: ${ props => props.darktheme ? "var(--primary)" : "var(--primary-dark)"};
    font-family: var(--font-secondary);
    font-size: 3.5rem;

    @media screen and (max-width: 1100px) {
        font-size: 2.75rem;
    }

    @media screen and (max-width: 790px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
        margin-top: 2rem;
    }
`,

Header: styled.h1`
    font-size: 3.25rem;
    font-family: var(--font-display);
    letter-spacing: 0.02em;
    line-height: 1.4em;

    @media screen and (max-width: 1100px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 790px) {
        font-size: 1.75rem;
        line-height: 1.8em;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.35rem;
        line-height: 2.4em;
    }
`,

Description: styled.p`
    font-family: var(--font-mono);
    color: var(--light-gray);
    font-size: 1rem;
    letter-spacing: 0.02em;

    @media screen and (max-width: 1000px) {
        font-size: 0.9rem;
    }
`,

Options: styled.div`
    display: flex;
    align-items: center;
    gap: 3em;
    margin: 1em 0;
    margin-top: 3em;

    a.resume {
        --angle: 0deg;
        position: relative;
        padding: 0.6em 1.2em;
        font-size: 1.15rem;
        font-family: var(--font-secondary);
        text-decoration: none;
        color: ${props => props.darktheme ? "var(--font-light)" : "var(--primary-dark)"};
        background-color: var(--bg-dark-elevated);
        border-radius: 1.5em;
        border: 2px solid transparent;
        background-clip: padding-box;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    a.resume::before {
        content: "";
        position: absolute;
        inset: -2px;
        border-radius: inherit;
        padding: 2px;
        background: conic-gradient(from var(--angle), var(--primary), transparent 40%, var(--primary));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        animation: spin 2.5s linear infinite;
        animation-play-state: paused;
    }

    a.resume:hover::before {
        animation-play-state: running;
    }

    @property --angle {
        syntax: '<angle>';
        initial-value: 0deg;
        inherits: false;
    }

    @keyframes spin {
        to { --angle: 360deg; }
    }

    @media screen and (max-width: 1000px) {
        gap: 2em;
    }

    @media screen and (max-width: 790px) {
        margin-top: 1em;
        justify-content: center;

        a.resume {
            font-size: 1rem;
        }
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
        gap: 1.25em;

        a.resume {
            margin: 0.5rem auto;
        }
    }
`,
}

export default styles
