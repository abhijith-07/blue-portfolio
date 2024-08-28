import styled, {css} from "styled-components"

const spanHeading = css`
    .span-heading {
        font-family: var(--font-decorative);
        font-size: 1.5rem;
        letter-spacing: 0.1em;
    }
`

const styles = {
    Wrapper: styled.section`
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: calc(100vh - 8rem);
        padding-top: 6rem;
        color: var(--font-light);
        ${spanHeading}
    `,
    SkillContainer: styled.div`
        height: 80%;
    `,
    Certificates: styled.div`
        position: relative;
        .certificate-heading {
            display: flex;
            position: absolute;
            top: -3rem;
            left: -1rem;
        }
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