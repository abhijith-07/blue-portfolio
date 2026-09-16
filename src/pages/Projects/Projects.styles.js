import styled from "styled-components";

const styles = {

    ProjectsContainer: styled.section`
        min-height: 100vh;
        padding-bottom: 4rem;
    `,

    PlayGround: styled.div`
        position: relative;
        padding: 4rem 3rem 2rem;
        user-select: none;
        overflow: hidden;

        .progress-readout {
            font-family: var(--font-mono);
            font-size: 0.78rem;
            letter-spacing: 0.22em;
            color: var(--primary);
            margin-bottom: 1.4rem;
            text-align: center;
            opacity: 0.85;
        }

        .track {
            width: 100%;
            border-bottom: 2px dashed rgba(34, 211, 238, 0.25);
            margin-top: 2rem;
        }

        .car {
            position: absolute;
            top: 5.6rem;
            left: 0;
            width: 72px;
            pointer-events: none;
        }

        .car img {
            width: 72px;
            filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.5));
            display: block;
        }

        .flag {
            position: absolute;
            right: 3rem;
            top: 5.5rem;
        }

        .arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: 1px solid rgba(34, 211, 238, 0.3);
            color: var(--primary);
            font-size: 1.4rem;
            width: 2.2rem;
            height: 2.2rem;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: border-color 0.2s, box-shadow 0.2s, opacity 0.2s;
            z-index: 2;
        }

        .arrow:hover:not(:disabled) {
            border-color: var(--primary);
            box-shadow: 0 0 8px rgba(34, 211, 238, 0.4);
        }

        .arrow:disabled {
            opacity: 0.25;
            cursor: not-allowed;
        }

        .left-arrow  { left:  0.5rem; }
        .right-arrow { right: 0.5rem; }
    `,

    ProjectCard: styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;

        /* ── Theme-aware colours ──────────────────────────
           --surface    : card background (dark = #131A22, light = #FFFFFF)
           --on-surface : primary text   (dark = off-white, light = near-black)
           ─────────────────────────────────────────────── */
        color: var(--on-surface);
        background: var(--surface);

        width: 72%;
        min-height: 60vh;
        margin: 0 auto;
        padding: 3rem;
        border-radius: 6px;
        border: 1px solid var(--primary-transparent);
        box-shadow: 0 0 40px var(--primary-transparent);

        .section-main {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 1.2rem;
        }

        .project-name {
            font-family: var(--font-secondary);
            font-size: 1.15rem;
            line-height: 1.4;
            color: var(--on-surface);
        }

        .img-card {
            width: 100%;
            border-radius: 4px;
            object-fit: cover;
            border: 1px solid var(--primary-transparent);
        }

        .proj-links { text-align: end; }

        .proj-links .code,
        .proj-links .demo {
            color: var(--primary-dark, var(--primary));
            padding: 0 0.5em;
            font-size: 1.05rem;
            text-decoration: none;
        }

        .proj-links .code:hover { text-decoration: underline; }

        .proj-links .disabled {
            color: var(--light-gray);
            font-size: 0.85rem;
            font-family: var(--font-mono);
            opacity: 0.7;
        }

        .project-details {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 1rem;
        }

        .badges {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            min-height: 1.6rem;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 0.3em;
            font-family: var(--font-mono);
            font-size: 0.72rem;
            letter-spacing: 0.08em;
            padding: 0.25em 0.75em;
            border-radius: 3px;
            text-transform: uppercase;
        }

        .badge.amber {
            background: rgba(255, 176, 32, 0.12);
            color: #D48A00;      /* darkened for light-bg contrast */
            border: 1px solid rgba(255, 176, 32, 0.4);
        }

        /* On dark the amber is bright; on light use a darker shade */
        body:not([data-theme="light"]) .badge.amber {
            color: #FFB020;
        }

        .badge.critical {
            background: rgba(255, 84, 112, 0.12);
            color: #CC2244;
            border: 1px solid rgba(255, 84, 112, 0.4);
        }

        body:not([data-theme="light"]) .badge.critical {
            color: #FF5470;
        }

        .description {
            font-size: 1rem;
            letter-spacing: 0.02em;
            line-height: 1.7;
            text-align: justify;
            color: var(--on-surface-secondary);
        }

        .proj-techs {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
            margin-top: auto;
            padding-top: 1rem;
        }

        .proj-techs div {
            background: var(--primary-transparent);
            border: 1px solid rgba(34, 211, 238, 0.3);
            color: var(--primary-dark, var(--primary));
            padding: 0.25em 0.9em;
            border-radius: 3px;
            font-family: var(--font-mono);
            font-size: 0.78rem;
            letter-spacing: 0.06em;
            transition: background 0.2s, box-shadow 0.2s;
            cursor: default;
        }

        .proj-techs div:hover {
            background: rgba(34, 211, 238, 0.18);
            box-shadow: 0 0 6px rgba(34, 211, 238, 0.3);
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
            width: 88%;
        }

        @media (max-width: 520px) {
            width: 95%;
            padding: 1.5rem;
        }
    `,
};

export default styles;