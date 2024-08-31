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

        .project-details {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
    `

}

export default styles