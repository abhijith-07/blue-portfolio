import styled, {css} from "styled-components"

const spanHeading = css`
    .span-heading {
        font-family: var(--font-decorative);
        font-size: 1.25rem;
        letter-spacing: 0.1em;
    }
`

const styles = {
    Wrapper: styled.section`
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: calc(100vh - 8rem);
        padding-top: 7rem;
        color: var(--font-light);
        ${spanHeading}
    `,
    SkillContainer: styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    `,
    Certificates: styled.div`
        position: relative;
        .certificate-heading {
            position: absolute;
            top: -2rem;
            left: -3rem;
            transform: rotate(-25deg);
        }
        .certificate-heading span {
            display: block;
        }
        .certificate-heading img {
            position: absolute;
            transform: rotate(25deg);
            width: 3rem;
            height: 3rem;
            left: 8.5rem;
            top: 1rem;
        }
        img {
            width: 15rem;
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
            margin: 0 0.5em;
            background-color: var(--black);
            box-shadow: 0 0 10px var(--primary);
        }
    `,

    SkillLists : styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: red;
        margin-top: 8rem;
        button {
            height: 7rem;
            width: 7rem;
            border-radius: 50%;
            color: var(--font-light);
            background-color: var(--black);
            font-family: var(--font-secondary);
            text-transform: uppercase;
            border: none;
            box-shadow: 0 0 25px var(--primary);
        }
        button span {
            font-size: 1.75rem;
        }

        button:hover {
            transform: scale(0.6);
        }

        .tech-skill {
            position: absolute;
            width: 20rem;
            height: 20rem;
            top: -7rem;
            text-align: center;
            opacity: 1;
            background-color: #80808060;
        }

        .tech-skill *[class^="skill-"] {
            background-color: red;
            padding: 1rem;
            position: absolute;
            left: 0;
            transform-origin: 100px;
        }

        button:hover ~ .tech-skill {
            opacity: 1;
        }
    `,

    ImageContainer: styled.div`
        img {
            width: 18rem;
            height: 26rem;
            filter: blur(8px);
            border-radius: 10rem;
            object-fit: cover;
            transition: border-radius 0.5s ease, filter 0.75s ease;
        }

        img:hover {
            border-radius: 0rem;
            filter: blur(0px);
            box-shadow: 0 0 20px var(--primary);
        }
    `,
    QualificationContainer: styled.div`
        height: 80%;
        position: relative;
        .qualification-heading {
            display: flex;
            position: absolute;
            top: -3rem;
            left: -10rem;
        }
        .qualification-arrow {
            display: inline;
        }
        .arrow {
            stroke: var(--font-light);
            fill: none;
            marker-end: url(#arrowhead);
        }
        .qualifications {
            text-align: center;
            font-family: var(--font-secondary);
        }
        .qualification-name {
            font-size: 1.75rem;
            text-transform: uppercase;
            text-decoration: underline;
        }
        .qualification-institution {
            font-size: 1.25rem;
        }
        .qualification-year {
            font-size: 1rem;
        }
    `,

    ArrowContainer: styled.div`
        background-color: red;
    `
}


export default styles;