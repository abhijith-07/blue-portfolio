import styled from "styled-components"

const styles = {
    ContactWrapper: styled.section`
        height: 100vh;
        padding: 5rem 0;
    `,
    ContactContainer: styled.div`
        width: 680px;
        height: 420px;
        margin: 2rem auto;
        border-radius: 0 2em 0 2em;
        padding: 3em;
        display: grid;
        grid-template-columns: 4fr 4fr 1fr;
        gap: 2rem;
        align-items: center;
        position: relative;
        background-color: var(--black-transparent);
        color: var(--font-light);
        box-shadow: 0 0 10px var(--primary-dark);
        
        &::before {
            content: "";
            position: absolute;
            z-index: -2;
            top: -20px;
            left: -20px;
            width: 720px;
            height: 460px;
            background:
                    linear-gradient(to right, var(--primary) 4px, transparent 4px) 0 0,
                    linear-gradient(to left, var(--primary)  4px, transparent 4px) 100% 100%,
                    linear-gradient(to bottom, var(--primary)  4px, transparent 4px) 0 0,
                    linear-gradient(to top, var(--primary)  4px, transparent 4px) 100% 100%;

            background-repeat: no-repeat;
            background-size: 50px 50px;
            border-radius: 5px;
            filter: drop-shadow(-2px -2px 5px var(--primary-dark));
        }
    `,
    MessageForm: styled.div`
        form {
            display: flex;
            flex-direction: column;
            gap: 2em;
        }
        
        .form-field label {
            display: block;
        }

        .form-field input {
            width: 100%;
            border: none;
            border-bottom: 2px solid var(--primary);
            background-color: transparent;
            color: var(--font-light);
        }

        .form-field input:focus {
            outline: none;
        }

        .form-field textarea {
            width: 100%;
            background-color: var(--bg-dark-transparent);
            color: var(--font-light);
            border: 2px solid var(--primary);
            border-radius: 1em 0 0 0;
        }

        .form-field textarea:focus {
            outline: none;
        }
    `,
    SocialIcons: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;

        .logo {
        }
    `,
}

export default styles;