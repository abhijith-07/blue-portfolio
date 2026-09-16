import { styled } from 'styled-components';

const styles = {

Container: styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: clamp(1rem, 3vw, 3rem);
    padding-top: clamp(5rem, 10vh, 8rem);
    padding-bottom: 2rem;
    padding-left: clamp(1.5rem, 5vw, 6rem);
    padding-right: clamp(1.5rem, 5vw, 6rem);
    min-height: 100vh;
    box-sizing: border-box;
    overflow: hidden;
    color: ${p => p.$darktheme ? 'var(--font-light)' : 'var(--font-dark)'};

    @media screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: clamp(4rem, 8vh, 5rem);
        padding-bottom: 2rem;
        min-height: unset;
        height: auto;
        gap: 0.75rem;
        text-align: center;
    }
`,

Profile: styled.div`
    flex-shrink: 0;
    width: clamp(220px, 35vw, 480px);
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 900px) {
        order: -1;
        width: clamp(130px, 38vw, 200px);
    }
`,

Details: styled.div`
    flex: 1;
    min-width: 0;

    @media screen and (max-width: 900px) {
        order: 1;
        width: 100%;
    }
`,

Hello: styled.h2`
    color: ${p => p.$darktheme ? 'var(--primary)' : 'var(--primary-dark)'};
    font-family: var(--font-secondary);
    font-size: clamp(1.4rem, 3.5vw, 3.5rem);

    @media screen and (max-width: 900px) {
        font-size: clamp(1.2rem, 5vw, 1.75rem);
    }
`,

Header: styled.h1`
    font-size: clamp(1.3rem, 3.5vw, 3.25rem);
    font-family: var(--font-display);
    letter-spacing: 0.02em;
    line-height: 1.3em;

    @media screen and (max-width: 900px) {
        font-size: clamp(1rem, 4.5vw, 1.5rem);
        line-height: 1.4em;
    }
`,

Description: styled.p`
    font-family: var(--font-mono);
    color: var(--light-gray);
    font-size: clamp(0.7rem, 1vw, 1rem);
    letter-spacing: 0.02em;
    margin-top: 0.4rem;
    line-height: 1.7;

    @media screen and (max-width: 900px) {
        font-size: clamp(0.6rem, 2.2vw, 0.8rem);
        line-height: 1.6;
    }
`,

Options: styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;

    a.resume {
        --angle: 0deg;
        position: relative;
        padding: 0.6em 1.2em;
        font-size: 1.1rem;
        font-family: var(--font-secondary);
        text-decoration: none;
        color: ${p => p.$darktheme ? 'var(--font-light)' : 'var(--primary-dark)'};
        background-color: ${p => p.$darktheme ? 'var(--bg-dark-elevated)' : '#e8f4f8'};
        border-radius: 1.5em;
        border: 2px solid ${p => p.$darktheme ? 'transparent' : 'var(--primary-dark)'};
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
        animation: resumeSpin 2.5s linear infinite;
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

    @keyframes resumeSpin {
        to { --angle: 360deg; }
    }

    @media screen and (max-width: 900px) {
        justify-content: center;
        gap: 1rem;
        margin-top: 0.75rem;

        a.resume {
            font-size: 0.9rem;
            padding: 0.45em 0.9em;
        }
    }
`,

}

export default styles