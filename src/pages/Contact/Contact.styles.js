import styled from "styled-components";

const styles = {
    ContactWrapper: styled.section`
        min-height: 100vh;
        padding: 5rem 0;
        display: flex;
        align-items: center;
        color: var(--on-surface);
        transition: color 0.3s ease;
    `,

    ContactContainer: styled.div`
        width: 680px;
        max-width: 92vw;
        margin: 2rem auto;
        border-radius: 0 2em 0 2em;
        padding: 3em;
        display: grid;
        grid-template-columns: 4fr 4fr 1fr;
        gap: 2rem;
        align-items: center;
        position: relative;

        /* Theme-aware card surface */
        background-color: var(--surface);
        color: var(--on-surface);
        border: 1px solid var(--primary-transparent);
        box-shadow: 0 0 24px var(--primary-transparent);
        transition: background-color 0.3s ease;

        /* Heading */
        h1 {
            font-family: var(--font-display);
            font-size: clamp(1.5rem, 3vw, 2.25rem);
            color: var(--on-surface);
            margin-bottom: 0.75rem;
        }

        p {
            font-size: 0.95rem;
            line-height: 1.65;
            color: var(--on-surface-secondary);
        }

        /* Corner brackets */
        &::before {
            content: "";
            position: absolute;
            z-index: -2;
            top: -20px;
            left: -20px;
            width: calc(100% + 40px);
            height: calc(100% + 40px);
            background:
                linear-gradient(to right,  var(--primary) 4px, transparent 4px) 0 0,
                linear-gradient(to left,   var(--primary) 4px, transparent 4px) 100% 100%,
                linear-gradient(to bottom, var(--primary) 4px, transparent 4px) 0 0,
                linear-gradient(to top,    var(--primary) 4px, transparent 4px) 100% 100%;
            background-repeat: no-repeat;
            background-size: 50px 50px;
            border-radius: 5px;
            filter: drop-shadow(-2px -2px 5px var(--primary-transparent));
        }

        @media screen and (max-width: 790px) {
            grid-template-columns: 1fr;
            height: auto;
        }

        @media screen and (max-width: 480px) {
            padding: 2em 1.5em;
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
            color: var(--on-surface-secondary);
            margin-bottom: 0.35em;
        }

        .form-field input {
            width: 100%;
            border: none;
            border-bottom: 2px solid var(--primary-transparent);
            background-color: transparent;
            color: var(--on-surface);
            padding: 0.35em 0;
            font-size: 1rem;
            font-family: var(--font-primary);
        }

        .form-field input:focus {
            outline: none;
            border-bottom-color: var(--primary);
            box-shadow: 0 2px 0 var(--primary-transparent);
        }

        .form-field textarea {
            width: 100%;
            background-color: var(--primary-transparent);
            color: var(--on-surface);
            border: 1.5px solid var(--primary-transparent);
            border-radius: 0.75em 0 0 0;
            padding: 0.6em;
            resize: vertical;
            font-size: 0.95rem;
            font-family: var(--font-primary);
        }

        .form-field textarea:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 6px var(--primary-transparent);
        }

        /* Send button — solid primary */
        button[type="submit"] {
            align-self: flex-start;
            font-family: var(--font-secondary);
            font-size: 1rem;
            font-weight: 600;
            padding: 0.6em 1.6em;
            border-radius: 1.5em;
            border: none;
            cursor: pointer;
            /* Always readable: dark text on cyan */
            background: var(--primary);
            color: #0B0F14;
            transition: box-shadow 0.2s ease, transform 0.15s ease;
        }

        button[type="submit"]:hover:not(:disabled) {
            box-shadow: 0 0 14px var(--primary-transparent);
            transform: translateY(-1px);
        }

        button[type="submit"]:disabled {
            opacity: 0.55;
            cursor: default;
        }

        .form-status {
            font-family: var(--font-mono);
            font-size: 0.9rem;
            margin-top: 0.5rem;
        }

        .form-status.sent  { color: var(--primary); }
        .form-status.error { color: var(--accent-critical); }
    `,

    SocialIcons: styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.2em;

        a {
            display: flex;
            align-items: center;
            gap: 0.5em;
            text-decoration: none;
            /* Uses the theme-aware icon token */
            color: var(--icon-color);
            font-family: var(--font-mono);
            font-size: 0.82rem;
            transition: color 0.2s ease;
        }

        a:hover {
            color: var(--primary);
        }

        a svg {
            /* Inherit from the <a> so hover works automatically */
            stroke: currentColor;
        }
    `,
};

export default styles;