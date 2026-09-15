import styled from "styled-components"

const styles = {
    Wrapper: styled.section`
        display: grid;
        grid-template-columns: 2fr 1fr 2fr;
        align-items: start;
        min-height: calc(100vh - 8rem);
        padding: 7rem 4rem 4rem;
        color: var(--font-light);
        width: 100%;
        box-sizing: border-box;
        overflow-x: hidden;

        @media screen and (max-width: 1250px) {
            grid-template-columns: 1fr 1fr;
            padding: 6rem 2rem 3rem;
            gap: 1rem;
        }

        /* Mobile: reduced top padding — no arrow above so no need for 5rem */
        @media screen and (max-width: 700px) {
            grid-template-columns: 1fr;
            padding: 2rem 1.25rem 3rem;
        }
    `,

    SkillContainer: styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        padding: 1rem 1.5rem 1rem 1rem;
        min-width: 0;

        @media screen and (max-width: 1250px) {
            padding: 1.5rem;
        }

        @media screen and (max-width: 700px) {
            padding: 1rem 0;
            align-items: center;
        }
    `,

    Certificates: styled.div`
        position: relative;
        width: 100%;

        @media screen and (max-width: 1250px) {
            padding-bottom: 2rem;
        }

        .certificate-heading {
            position: absolute;
            top: -2rem;
            left: -1rem;

            @media screen and (max-width: 1250px) {
                position: relative;
                top: 0;
                left: 0;
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
            left: 10.5rem;
            top: 0.25rem;
            opacity: 0.6;

            @media screen and (max-width: 1250px) {
                display: none;
            }
        }

        img.certificate-image {
            width: 15rem;
            height: 10rem;
            max-width: 100%;
            object-fit: contain;
            background: var(--bg-dark-elevated);
            border-radius: 6px;
            padding: 0.5rem;

            @media screen and (max-width: 500px) {
                width: 100%;
                height: auto;
                aspect-ratio: 3/2;
            }
        }

        .certificate-container {
            display: flex;
            align-items: center;
            font-size: 2rem;
            margin-top: 1rem;

            @media screen and (max-width: 1250px) {
                justify-content: center;
            }

            @media screen and (max-width: 500px) {
                font-size: 1.5rem;
            }
        }

        .certificate-container i {
            font-style: normal;
            width: 2.5rem;
            height: 2.5rem;
            line-height: 2.5rem;
            text-align: center;
            border-radius: 50%;
            margin: 0 0.5em;
            background-color: var(--black);
            box-shadow: 0 0 10px var(--primary);
            cursor: pointer;
            user-select: none;
            flex-shrink: 0;

            @media screen and (max-width: 500px) {
                width: 2rem;
                height: 2rem;
                line-height: 2rem;
            }
        }
    `,

    SkillLists: styled.div`
        position: relative;
        margin-top: 3rem;
        width: 100%;
        min-width: 0;

        @media screen and (max-width: 1250px) {
            margin-top: 0;
            padding: 1.5rem 0;
        }

        .skill-group {
            margin-bottom: 1.5rem;
        }

        .skill-group .span-heading {
            display: block;
            margin-bottom: 0.5rem;
        }

        .tech-skill {
            font-family: var(--font-secondary);
            text-align: left;

            @media screen and (max-width: 700px) {
                text-align: center;
            }
        }
    `,

    ImageContainer: styled.div`
        padding-top: 3rem;
        text-align: center;
        min-width: 0;

        @media screen and (max-width: 1250px) {
            display: none;
        }

        img.avatar {
            width: 18rem;
            height: 26rem;
            filter: blur(8px) grayscale(0.6);
            border-radius: 10rem;
            object-fit: cover;
            transition: border-radius 0.5s ease, filter 0.75s ease;
        }

        img.avatar:hover {
            border-radius: 0;
            filter: blur(0px) grayscale(0);
            box-shadow: 0 0 20px var(--primary);
        }

        .bio {
            max-width: 20rem;
            margin: 1.5rem auto 0;
            font-family: var(--font-primary);
            font-size: 0.9rem;
            line-height: 1.5em;
            color: var(--light-gray);
        }
    `,

    QualificationContainer: styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 1rem 1rem 1rem 1.5rem;
        min-width: 0;

        @media screen and (max-width: 1250px) {
            padding: 1.5rem;
        }

        @media screen and (max-width: 700px) {
            padding: 1rem 0;
            align-items: center;
        }

        .qualification-heading {
            display: flex;
            position: absolute;
            top: -3rem;
            left: 1.5rem;

            @media screen and (max-width: 1250px) {
                position: relative;
                top: 0;
                left: 0;
                margin-bottom: 1rem;
            }
        }

        .qualification-arrow {
            display: inline;

            @media screen and (max-width: 1250px) {
                display: none;
            }
        }

        .qualifications {
            width: 100%;
            text-align: left;
            font-family: var(--font-secondary);
            position: relative;
            padding-left: 1.5rem;
            border-left: 2px solid var(--primary-transparent);

            @media screen and (max-width: 700px) {
                text-align: left;
            }
        }

        .qualification {
            position: relative;
            padding: 0.5rem 0 1.5rem 1rem;
        }

        .timeline-dot {
            position: absolute;
            left: -1.6rem;
            top: 0.65rem;
            width: 0.65rem;
            height: 0.65rem;
            border-radius: 50%;
            background: var(--bg-dark);
            border: 2px solid var(--primary);
            box-shadow: 0 0 8px var(--primary-transparent);
        }

        .qualification-name {
            font-size: clamp(1rem, 2vw, 1.5rem);
            text-transform: uppercase;
            color: var(--font-light);
        }

        .qualification-institution {
            font-size: 1rem;
            color: var(--light-gray);
        }

        .qualification-year {
            font-family: var(--font-mono);
            font-size: 0.9rem;
            color: var(--primary);
        }

        .interests {
            width: 100%;
            margin-top: 2rem;
        }

        .interest-heading {
            margin-bottom: 1rem;
        }

        .interests-lists {
            margin-top: 1rem;
            font-family: var(--font-secondary);
            text-align: left;

            @media screen and (max-width: 700px) {
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