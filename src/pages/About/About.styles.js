import styled, { keyframes } from "styled-components"

const filterAnimation = keyframes`
    0% {
        filter: blur(6px);
    }
    33% {
        filter: blur(4px);
    }

    66% {
        filter: blur(2px);
    }

    100% {
        filter: blur(0);
    }
`

const styles = {
    Wrapper: styled.section`
        display: flex;
        justify-content: space-around;
        padding-top: 6rem;
        color: var(--font-light);
    `,
    SkillContainer: styled.div`
    `,
    Certificates: styled.div`
        img {
            width: 16rem;
            height: 10rem;
        }
        .certificate-container {
            display: flex;
            align-items: center;
            font-size: 2rem;
        }

        .certificate-container i {
            font-style: normal;
            width: 2.5rem;
            height: 2.5rem;
            text-align: center;
            border-radius: 50%;
            margin: 0.2em;
            background-color: var(--black);
            box-shadow: 0 0 10px var(--primary);
        }
    `,
    ImageContainer: styled.div`
        img {
            width: 19rem;
            height: 28rem;
            filter: blur(8px);
            border-radius: 10rem;
            object-fit: cover;
        }

        img:hover {
            animation: ${filterAnimation} 1s forwards ;
        }
    `,
    QualificationContainer: styled.div``
}


export default styles;