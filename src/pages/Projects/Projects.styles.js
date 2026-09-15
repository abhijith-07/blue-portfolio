import styled from "styled-components";
import { cornerFrame } from "../../mixins/cornerFrame";

const styles = {

    ProjectsContainer: styled.section`
        min-height: 100vh;
        padding-top: 2rem;
        padding-bottom: 3rem;
    `,

    PlayGround: styled.div`
        position: relative;
        padding: 2rem 2rem 5rem;
        user-select: none;

        .progress-readout {
            font-family: var(--font-mono);
            font-size: 0.85rem;
            letter-spacing: 0.1em;
            color: var(--light-gray);
            margin-bottom: 1.5rem;
        }

        .flag {
            position: absolute;
            right: 2rem;
            top: 3.6rem;
        }

        .track {
            position: absolute;
            top: 4.75rem;
            left: 2rem;
            right: 2rem;
            border-bottom: 2px dashed var(--light-gray);
        }

        .car {
            position: absolute;
            top: 3.15rem;
            left: 0;
        }

        .arrow {
            position: absolute;
            top: 3rem;
            color: var(--font-light);
            background: var(--bg-dark-elevated);
            border: 1px solid var(--primary-transparent);
            border-radius: 50%;
            width: 2.25rem;
            height: 2.25rem;
            font-size: 1.25rem;
            line-height: 1;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: border-color 0.2s ease, opacity 0.2s ease;
        }

        .arrow:hover:not(:disabled) {
            border-color: var(--primary);
        }

        .arrow:disabled {
            opacity: 0.3;
            cursor: default;
        }

        .left-arrow {
            left: -0.25rem;
        }

        .right-arrow {
            right: -0.25rem;
        }

        @media screen and (max-width: 600px) {
            padding: 1.5rem 1rem 4rem;
            .flag { right: 1rem; }
            .track { left: 1rem; right: 1rem; }
        }
    `,

    ProjectCard: styled.div`
        ${cornerFrame}
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        color: var(--font-light);
        width: 70%;
        max-width: 900px;
        min-height: 60vh;
        margin: 3rem auto 0;
        padding: 3rem;
        background: var(--bg-dark-elevated);
        border-radius: 4px;

        .section-main{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .project-name {
            font-family: var(--font-display);
            letter-spacing: 0.01em;
            font-size: 1.6rem;
            line-height: 1.3em;
        }

        .section-main .img-card {
            width: 100%;
            border-radius: 4px;
            border: 1px solid var(--primary-transparent);
        }

        .proj-links {
            text-align: end;
        }

        .proj-links a.code,
        .proj-links span.code {
            font-family: var(--font-mono);
            font-size: 0.95rem;
        }

        .proj-links a.code {
            color: var(--primary);
        }

        .proj-links span.code.disabled {
            color: var(--light-gray);
            font-style: italic;
        }

        .project-details {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
        }

        .badges {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 0.3em;
            font-family: var(--font-mono);
            font-size: 0.7rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            padding: 0.3em 0.7em;
            border-radius: 3px;
        }

        .badge.amber {
            color: var(--accent-amber);
            border: 1px solid var(--accent-amber);
        }

        .badge.critical {
            color: var(--accent-critical);
            border: 1px solid var(--accent-critical);
        }

        .project-details .description {
            font-size: 1rem;
            line-height: 1.6em;
            color: var(--font-light);
        }

        .project-details .proj-techs {
            margin-top: 1.5rem;
            display: block;
            width: 100%;
            text-align: start;
        }

        .project-details .proj-techs div {
            display: inline-block;
            font-family: var(--font-mono);
            font-size: 0.8rem;
            border: 1px solid var(--primary-transparent);
            color: var(--primary);
            padding: 0.25em 0.9em;
            margin: 0.25em 0.25em 0.25em 0;
            border-radius: 1rem;
            cursor: default;
            transition: all 0.2s ease;
        }

        .project-details .proj-techs div:hover {
            border-color: var(--primary);
            box-shadow: 0 0 8px var(--primary-transparent);
        }

        @media screen and (max-width: 1000px) {
            width: 85%;
            padding: 2rem;
        }

        @media screen and (max-width: 790px) {
            grid-template-columns: 1fr;
            width: 90%;
            min-height: auto;
        }
    `

}

export default styles
