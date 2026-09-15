import { styled } from 'styled-components';

const styles = {

    Container: styled.section`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: clamp(1rem, 3vw, 3rem);
        padding-top: clamp(5rem, 10vh, 8rem);
        padding-bottom: 2rem;
        padding-left: clamp(1.5rem, 5vw, 6rem);
        padding-right: clamp(1.5rem, 5vw, 6rem);
        min-height: 100vh;
        box-sizing: border-box;
        overflow: hidden;
        color: ${props => props.$darktheme ? "var(--font-light)" : "var(--font-dark)"};

        @media screen and (max-width: 900px) {
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-top: 5rem;
            padding-bottom: 2rem;
            padding-left: 1.25rem;
            padding-right: 1.25rem;
            gap: 0.75rem;
            text-align: center;
            min-height: unset;
        }
    `,

    Profile: styled.div`
        flex-shrink: 0;
        width: clamp(220px, 35vw, 480px);
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 900px) {
            order: -1;
            width: 160px;   /* bigger avatar */
        }
    `,

    Details: styled.div`
        flex: 1;
        min-width: 0;

        @media screen and (max-width: 900px) {
            order: 1;
            width: 100%;
        }
    `,

    Hello: styled.h2`
        color: ${props => props.$darktheme ? "var(--primary)" : "var(--primary-dark)"};
        font-family: var(--font-secondary);
        font-size: clamp(1.4rem, 3.5vw, 3.5rem);

        @media screen and (max-width: 900px) {
            font-size: 1.5rem;
        }
    `,

    Header: styled.h1`
        font-size: clamp(1.3rem, 3.5vw, 3.25rem);
        font-family: var(--font-display);
        letter-spacing: 0.02em;
        line-height: 1.3em;

        @media screen and (max-width: 900px) {
            font-size: 1.3rem;
            line-height: 1.35em;
        }
    `,

    Description: styled.p`
        font-family: var(--font-mono);
        color: var(--light-gray);
        font-size: clamp(0.7rem, 1vw, 1rem);
        letter-spacing: 0.02em;
        margin-top: 0.4rem;
        line-height: 1.7;

        @media screen and (max-width: 900px) {
            font-size: 0.75rem;
            line-height: 1.6;
        }
    `,

    Options: styled.div`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
        margin-top: 2rem;

        a.resume {
            --angle: 0deg;
            position: relative;
            padding: 0.6em 1.2em;
            font-size: 1.1rem;
            font-family: var(--font-secondary);
            text-decoration: none;
            color: ${props => props.$darktheme ? "var(--font-light)" : "var(--primary-dark)"};
            background-color: var(--bg-dark-elevated);
            border-radius: 1.5em;
            border: 2px solid transparent;
            background-clip: padding-box;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        a.resume::before {
            content: "";
            position: absolute;
            inset: -2px;
            border-radius: inherit;
            padding: 2px;
            background: conic-gradient(from var(--angle), var(--primary), transparent 40%, var(--primary));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            animation: spin 2.5s linear infinite;
            animation-play-state: paused;
        }

        a.resume:hover::before {
            animation-play-state: running;
        }

        @property --angle {
            syntax: '<angle>';
            initial-value: 0deg;
            inherits: false;
        }

        @keyframes spin {
            to { --angle: 360deg; }
        }

        @media screen and (max-width: 900px) {
            justify-content: center;
            gap: 1.25rem;
            margin-top: 1rem;

            a.resume {
                font-size: 1rem;
                padding: 0.5em 1.1em;
            }
        }
    `,

    /* Mobile-only stats row */
    StatsRow: styled.div`
        display: none;

        @media screen and (max-width: 900px) {
            display: flex;
            justify-content: center;
            gap: 0;
            margin-top: 1.25rem;
            width: 100%;
            border: 1px solid var(--primary-transparent);
            border-radius: 8px;
            overflow: hidden;
            background: var(--bg-dark-elevated);
        }

        .stat {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0.85rem 0.5rem;
            gap: 0.2rem;

            &:not(:last-child) {
                border-right: 1px solid var(--primary-transparent);
            }
        }

        .stat-value {
            font-family: var(--font-display);
            font-size: 1.6rem;
            color: var(--primary);
            line-height: 1;
        }

        .stat-label {
            font-family: var(--font-mono);
            font-size: 0.6rem;
            color: var(--light-gray);
            letter-spacing: 0.06em;
            text-transform: uppercase;
            text-align: center;
        }
    `,

    /* Mobile-only tech chip strip */
    TechStrip: styled.div`
        display: none;

        @media screen and (max-width: 900px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.45rem;
            margin-top: 1rem;
            width: 100%;
        }

        .chip {
            font-family: var(--font-mono);
            font-size: 0.7rem;
            letter-spacing: 0.04em;
            color: var(--primary);
            border: 1px solid var(--primary-transparent);
            border-radius: 999px;
            padding: 0.35em 0.9em;
            background: transparent;
            white-space: nowrap;
        }

        .chip-muted {
            color: var(--light-gray);
            border-color: rgba(139, 153, 168, 0.25);
        }
    `,

    /* Mobile-only status badge */
    StatusBadge: styled.div`
        display: none;

        @media screen and (max-width: 900px) {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            margin-top: 1rem;
            font-family: var(--font-mono);
            font-size: 0.7rem;
            letter-spacing: 0.05em;
            color: var(--light-gray);
            text-transform: uppercase;
            padding: 0.4em 1em;
            border: 1px solid rgba(139, 153, 168, 0.2);
            border-radius: 999px;
            background: var(--bg-dark-elevated);
        }

        .dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #22c55e;
            box-shadow: 0 0 6px #22c55e;
            animation: pulse-dot 2s ease-in-out infinite;
            flex-shrink: 0;
        }

        @keyframes pulse-dot {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
        }
    `,
}

export default styles;