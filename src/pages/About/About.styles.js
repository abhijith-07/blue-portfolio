import styled, {css} from "styled-components"

const spanHeading = css`
    .span-heading {
        font-family: var(--font-decorative);
        font-size: 1.25rem;
        letter-spacing: 0.1em;
        text-transform: capitalize;
    }
`

const styles = {
    Wrapper: styled.section`
        display: grid;
        grid-template-columns: 2fr 1fr 2fr;
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
            cursor: pointer;
            user-select: none;
        }
    `,

    SkillLists : styled.div`
        position: relative;
        margin-top: 8rem;
        width: 80%;

        .tech-skills-heading {
            text-decoration: underline;
        }

        .tech-skill {
            margin-top: 1rem;
            font-family: var(--font-secondary);
            line-height: 2rem;
            text-align: justify;
        }

        .tech-skill *[class^="skill-"] {
            display: inline-block;
            word-spacing: 0.5rem;
            letter-spacing: 0.15em;
            transition: all 0.3s ease;
            cursor: default;
        }

        .tech-skill *[class^="skill-"]::after {
            content: " | ";
        }

        .tech-skill *[class^="skill-"]:last-child:after {
            content: "";
        }

        .tech-skill *[class^="skill-"]:hover {
            scale: 1.2;
        }
    `,

    ImageContainer: styled.div`
    padding-top: 3rem;
        img.avatar {
            width: 18rem;
            height: 26rem;
            filter: blur(8px);
            border-radius: 10rem;
            object-fit: cover;
            transition: border-radius 0.5s ease, filter 0.75s ease;
        }

        img.avatar:hover {
            border-radius: 0rem;
            filter: blur(0px);
            box-shadow: 0 0 20px var(--primary);
        }
    `,
    QualificationContainer: styled.div`
        height: 80%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .qualification-heading {
            display: flex;
            position: absolute;
            top: -3rem;
            left: -5rem;
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

        .interests .interest-heading {
            text-decoration: underline;
        }

        .interests-lists {
            margin-top: 1rem;
            font-family: var(--font-secondary);
        }

        .interests *[class^="interest-"] {
            font-family: var(--font-secondary);
            display: inline-block;
            word-spacing: 0.5rem;
            letter-spacing: 0.2em;
            transition: all 0.3s ease;
            cursor: default;
        }

        .interests *[class^="interest-"]:hover {
            scale: 1.2;
        }

        .interests *[class^="interest-"]:after {
            content: " | ";
        }

        .interests *[class^="interest-"]:last-child:after {
            content: "";
        }
    `,

}


export default styles;