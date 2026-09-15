import styled from "styled-components";

const styles = {

    ProjectsContainer: styled.section`
        min-height: 100vh;
        padding-bottom: 4rem;
    `,

    /* ── The road / track area ──────────────────────────────────── */
    PlayGround: styled.div`
        position: relative;
        padding: 4rem 3rem 2rem;
        user-select: none;
        overflow: hidden;

        /* "PROJECT 01 / 05" counter */
        .progress-readout {
            font-family: var(--font-mono);
            font-size: 0.78rem;
            letter-spacing: 0.22em;
            color: var(--primary);
            margin-bottom: 1.4rem;
            text-align: center;
            opacity: 0.85;
        }

        /* Dashed road line */
        .track {
            width: 100%;
            border-bottom: 2px dashed rgba(34, 211, 238, 0.25);
            margin-top: 2rem;
        }

        /* Car — motion drives its left property */
        .car {
            position: absolute;
            /* top aligns car's wheels roughly on the track line */
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

        /* Finish flag — pinned to the right */
        .flag {
            position: absolute;
            right: 3rem;
            top: 5.5rem;
        }

        /* Arrow navigation buttons */
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

    /* ── Project card ────────────────────────────────────────────── */
    ProjectCard: styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;
        color: var(--font-light);
        width: 72%;
        min-height: 60vh;
        margin: 0 auto;
        padding: 3rem;
        box-shadow: 0 0 50px var(--primary-transparent);
        border: 1px solid rgba(34, 211, 238, 0.08);
        background: var(--bg-dark-elevated, #131A22);
        border-radius: 6px;

        /* ── Left column ── */
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
            color: var(--font-light);
        }
        .img-card {
            width: 100%;
            border-radius: 4px;
            object-fit: cover;
            border: 1px solid rgba(34, 211, 238, 0.12);
        }
        .proj-links {
            text-align: end;
        }
        .proj-links .code,
        .proj-links .demo {
            color: var(--primary);
            padding: 0 0.5em;
            font-size: 1.05rem;
            text-decoration: none;
        }
        .proj-links .code:hover { text-decoration: underline; }
        .proj-links .disabled {
            color: var(--light-gray);
            font-size: 0.85rem;
            font-family: var(--font-mono);
            opacity: 0.6;
        }

        /* ── Right column ── */
        .project-details {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 1rem;
        }

        /* Badges row */
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
            color: #FFB020;
            border: 1px solid rgba(255, 176, 32, 0.35);
        }
        .badge.critical {
            background: rgba(255, 84, 112, 0.12);
            color: #FF5470;
            border: 1px solid rgba(255, 84, 112, 0.35);
        }

        .description {
            font-size: 1rem;
            letter-spacing: 0.04em;
            line-height: 1.7;
            text-align: justify;
            color: var(--font-light);
            opacity: 0.9;
        }

        /* Tech chips */
        .proj-techs {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
            margin-top: auto;
            padding-top: 1rem;
        }
        .proj-techs div {
            background: rgba(34, 211, 238, 0.10);
            border: 1px solid rgba(34, 211, 238, 0.28);
            color: var(--primary);
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

        /* ── Responsive ── */
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