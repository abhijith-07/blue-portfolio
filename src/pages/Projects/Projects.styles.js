import styled from "styled-components";

const styles = {

    ProjectsContainer: styled.section`
        height: calc(100vh);
        margin-top: -2rem;
    `,

    PlayGround: styled.div`
        position: relative;
        padding: 5rem 0;

        .flag {    
            margin-left: 2rem;
        }

        .line {
            width: 100%;
            border-bottom: 1px solid var(--font-light);
        }

        .car {
            position: absolute;
            right: 2rem;
        }
    `,

    ProjectCard: styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        color: var(--font-light);
        width: 70%;
        height: 70vh;
        margin: 0 auto;
        padding: 3rem;
        box-shadow: 0 0 50px var(--primary-transparent);

        .section-main{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .section-main .img-card {
            width: 100%;
        }
        
        .proj-links {
            text-align: end;
        }

        .proj-links a {
            color: var(--primary);
            padding: 0 0.5em;
            font-size: 1.125rem;
        }

        .project-details {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            text-align: justify;
        }

        .project-details .description {
            font-size: 1.1rem;
            letter-spacing: 0.2em;
            line-height: 1.5em;
        }

        .project-details .proj-techs {
            position: absolute;
            bottom: 0;
            display: block;
            width: 100%;
            text-align: end;
        }

        .project-details .proj-techs div {
            display: inline-block;
            background-color: var(--primary);
            padding: 0.25em 1em;
            margin: 0 0.25em;
            border-radius: 1rem;
            cursor: default;
            transition: all 0.3s ease;
        }

        .project-details .proj-techs div:hover {
            background-color: var(--primary);
            transform: scale(1.1);
        }
    `

}

export default styles