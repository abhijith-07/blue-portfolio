import { styled } from 'styled-components';

const styles = {

Container: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.darktheme ? "var(--font-light)" : "var(--font-dark)"};
    padding-top: 12rem;

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
        box-shadow: 0px 0px 20px ${props => props.darktheme ? "var(--font-light)" : "var(--font-dark)"};
    }

    img:hover {
        box-shadow: 0px 0px 20px var(--primary);
        background-color: #080c1349;
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
        background-color: red;
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
    font-size: 4rem;

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
    font-size: 4rem;
    line-height: 1.5em;

    @media screen and (max-width: 1100px) {
        font-size: 2.75rem;
    }

    @media screen and (max-width: 790px) {
        font-size: 2rem;
        line-height: 2em;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
        line-height: 3em;
    }
`,

Description: styled.p`
    color: var(--light-gray);
    font-size: 1.15rem;
    
    @media screen and (max-width: 1000px) {
        font-size: 1rem;
    }
`,

Options: styled.div`
    display: flex;
    align-items: center;
    gap: 5em;
    margin: 1em 0;
    margin-top: 5em;

    button.resume {
        padding: 0.5em;
        font-size: 1.25rem;
        color: ${props => props.darktheme ? "var(--font-light)" : "var(--primary)"};
        background-color: transparent;
        border-radius: 1.5em;
        border: none;
        box-shadow: 0px 0px 10px ${props => props.darktheme ? "var(--primary-transparent)" : "var(--font-dark)"};
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        border: 3px solid transparent;
    }

    button.resume:hover {
        animation-name: shadowAnimation;
        animation-duration: 2.5s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }

    @keyframes shadowAnimation {
        0% {
            border-top: 3px solid var(--primary);
        }
        25% {
            border-top: 3px solid var(--primary);
            border-right: 3px solid var(--primary);
        }
        50% {
            border-right: 3px solid var(--primary);
            border-bottom: 3px solid var(--primary);
        }
        75% {
            border-bottom: 3px solid var(--primary);
            border-left: 3px solid var(--primary);
        }
        100% {
            border-left: 3px solid var(--primary);
            border-top: 3px solid var(--primary);
        }
    }

    button.resume svg {
        width: 1.75rem;
    }

    @media screen and (max-width: 1000px) {
        gap: 3em;
    }
    
    @media screen and (max-width: 790px) {
        margin-top: 1em;
        justify-content: center;
        
        button.resume {
            font-size: 1rem;
        }
        
        button.resume svg {
            width: 1.5rem;
        }
    }

    @media screen and (max-width: 480px) {
        display: block;

        button.resume {
            margin: 0.5rem auto;
        }
    }
`,

SocialBtns: styled.div`
    button.social-icon {
        border: 0;
        outline: 0;
        background-color: transparent;
        cursor: pointer;
    }
    
    button.social-icon svg {
        height: 2.25rem;
        margin: 0.5em;
        fill: ${props => props.darktheme ? "var(--font-light)" : "var(--font-dark)"};
    }

    button.social-icon svg:hover {
        fill: var(--primary);
    }
    
    @media screen and (max-width: 790px) {
        display: none;
    }

    @media screen and (max-width: 480px) {
        display: block;
        top: 390px;
        button.social-icon {
            margin: 1em;
        }
        button.social-icon svg {
            height: 1.75rem;
        }
    }
`
}

export default styles