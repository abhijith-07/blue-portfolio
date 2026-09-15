import styled from "styled-components"
import { cornerFrame } from "../../mixins/cornerFrame"

const styles = {
    ContactWrapper: styled.section`
        min-height: 100vh;
        padding: 5rem 0;
        display: flex;
        align-items: center;
    `,
    ContactContainer: styled.div`
        ${cornerFrame}
        width: 680px;
        max-width: 90vw;
        min-height: 420px;
        margin: 2rem auto;
        border-radius: 0 2em 0 2em;
        padding: 3em;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;
        align-items: center;
        background-color: var(--black-transparent);
        color: var(--font-light);
        box-shadow: 0 0 10px var(--primary-dark);

        .intro h1 {
            font-family: var(--font-display);
            font-size: 2.25rem;
            letter-spacing: 0.02em;
            margin-bottom: 1rem;
        }

        .intro p {
            color: var(--light-gray);
            line-height: 1.6em;
            margin-bottom: 1.5rem;
        }

        @media screen and (max-width: 790px) {
            grid-template-columns: 1fr;
            width: 90vw;
            height: auto;
            padding: 2.5em;
            gap: 2rem;
        }

        @media screen and (max-width: 480px) {
            padding: 1.75em;
            border-radius: 0 1.25em 0 1.25em;

            .intro h1 {
                font-size: 1.75rem;
            }
        }
    `,
    MessageForm: styled.div`
        form {
            display: flex;
            flex-direction: column;
            gap: 1.5em;
        }

        .form-field label {
            display: block;
            font-family: var(--font-mono);
            font-size: 0.85rem;
            letter-spacing: 0.05em;
            color: var(--light-gray);
            margin-bottom: 0.35em;
        }

        .form-field input,
        .form-field textarea {
            font-family: var(--font-primary);
            font-size: 1rem;
        }

        .form-field input {
            width: 100%;
            border: none;
            border-bottom: 2px solid var(--primary-transparent);
            background-color: transparent;
            color: var(--font-light);
            padding: 0.35em 0;
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .form-field input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 2px 8px -2px var(--primary-transparent);
        }

        .form-field textarea {
            width: 100%;
            background-color: var(--bg-dark-transparent);
            color: var(--font-light);
            border: 2px solid var(--primary-transparent);
            border-radius: 1em 0 0 0;
            padding: 0.6em;
            resize: vertical;
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .form-field textarea:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 10px var(--primary-transparent);
        }

        button[type="submit"] {
            align-self: flex-start;
            font-family: var(--font-secondary);
            font-size: 1rem;
            color: var(--font-dark);
            background-color: var(--primary);
            border: none;
            padding: 0.6em 1.5em;
            border-radius: 1.5em;
            cursor: pointer;
            transition: box-shadow 0.2s ease, opacity 0.2s ease;
        }

        button[type="submit"]:hover:not(:disabled) {
            box-shadow: 0 0 12px var(--primary-transparent);
        }

        button[type="submit"]:disabled {
            opacity: 0.6;
            cursor: default;
        }

        .form-status {
            font-family: var(--font-mono);
            font-size: 0.9rem;
        }

        .form-status.sent {
            color: var(--primary);
        }

        .form-status.error {
            color: var(--accent-critical);
        }

        @media screen and (max-width: 480px) {
            button[type="submit"] {
                align-self: stretch;
                text-align: center;
            }
        }
    `,
}

export default styles;
