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
        color: ${props => props.$darktheme ? 'var(--font-light)' : 'var(--font-dark)'};
        ${spanHeading}
        width: 100%;
        transition: color 0.3s ease;
        
        @media screen and (max-width: 1250px) {
            grid-template-columns: 1fr 1fr;
            align-items: start;
        }
    `,
    SkillContainer: styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        @media screen and (max-width: 1250px) {
            display: block;
            padding: 2rem;
        }
    `,
    Certificates: styled.div`
        position: relative;
        @media screen and (max-width: 1250px) {
            padding-bottom: 2rem;
        }
        .certificate-heading {
            position: absolute;
            top: -2rem;
            left: -3rem;
            transform: rotate(-25deg);
            @media screen and (max-width: 1250px) {
                position: relative;
                top: 0;
                left: 0;
                transform: rotate(0deg);
                text-decoration: underline;
            }
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
            @media screen and (max-width: 1250px) {
                display: none;
            }
        }
        img {
            width: 15rem;
            height: 10rem;
            @media screen and (max-width:850px) {
                width: 13rem;
                height: 8.7rem;
            }
        }

        .certificate-container {
            display: flex;
            align-items: center;
            font-size: 2rem;
            @media screen and (max-width: 1250px) {
                justify-content: center;
            }
            @media screen and (max-width:850px) {
                font-size: 1.75rem;
            }
        }

        .certificate-container i {
            font-style: normal;
            width: 2.5rem;
            height: 2.5rem;
            text-align: center;
            border-radius: 50%;
            margin: 0 0.5em;
            background-color: ${props => props.$darktheme ? 'var(--black)' : 'var(--bg-light)'};
            box-shadow: 0 0 10px var(--primary);
            color: ${props => props.$darktheme ? 'var(--font-light)' : 'var(--font-dark)'};
            cursor: pointer;
            user-select: none;
            @media screen and (max-width:850px) {
                width: 2.25rem;
                height: 2.25rem;
            }
        }
    `,

    SkillLists : styled.div`
        position: relative;
        margin-top: 8rem;
        width: 80%;
        
        @media screen and (max-width: 1250px) {
            margin-top: 0;
            width: 100%;
            padding: 2rem 0;
        }

        .tech-skills-heading {
            text-decoration: underline;
        }

        .tech-skill {
            margin-top: 1rem;
            font-family: var(--font-secondary);
            line-height: 2rem;
            text-align: justify;
            
            @media screen and (max-width: 1250px) {
                text-align: center;
            }
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
        @media screen and (max-width: 1250px) {
            display: none;
        }

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
        @media screen and (max-width: 1250px) {
            display: block;
            height: auto;
            padding: 2rem;
        }

        .qualification-heading {
            display: flex;
            position: absolute;
            top: -3rem;
            left: -5rem;
            @media screen and (max-width: 1250px) {
                position: relative;
                top: 0;
                left: 0;
                text-decoration: underline;
            }
        }
        .qualification-arrow {
            display: inline;
            @media screen and (max-width: 1250px) {
                display: none;
            }
        }
        .arrow {
            stroke: ${props => props.$darktheme ? 'var(--font-light)' : 'var(--font-dark)'};
            fill: none;
            marker-end: url(#arrowhead);
        }
        .qualifications {
            text-align: center;
            font-family: var(--font-secondary);    
            @media screen and (max-width: 1250px) {
                padding-bottom: 2rem;
            }
        }
        .qualification-name {
            font-size: 1.75rem;
            text-transform: uppercase;
            text-decoration: underline;
            @media screen and (max-width: 1250px) {
                font-size: 1.5rem;
            }
            @media screen and (max-width:850px) {
                font-size: 1.15rem;
            }
        }
        .qualification-institution {
            font-size: 1.25rem;
        }
        .qualification-year {
            font-size: 1rem;
        }

        .interests {
            @media screen and (max-width: 1250px) {
                padding: 2rem 0;
            }
        }

        .interests .interest-heading {
            text-decoration: underline;
        }

        .interests-lists {
            margin-top: 1rem;
            font-family: var(--font-secondary);
            
            @media screen and (max-width: 1250px) {
                text-align: center;
            }
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