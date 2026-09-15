import { css } from 'styled-components';

// Shared "scanner / targeting reticle" corner-bracket frame.
// Originally a one-off on the Contact card; now reusable across any
// styled-component that should get the same security-HUD framing
// (active project card, certificate image wrapper, contact card).
export const cornerFrame = css`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    inset: -20px;
    background:
      linear-gradient(to right, var(--primary) 4px, transparent 4px) 0 0,
      linear-gradient(to left, var(--primary) 4px, transparent 4px) 100% 100%,
      linear-gradient(to bottom, var(--primary) 4px, transparent 4px) 0 0,
      linear-gradient(to top, var(--primary) 4px, transparent 4px) 100% 100%;
    background-repeat: no-repeat;
    background-size: 40px 40px;
    border-radius: 5px;
    filter: drop-shadow(-2px -2px 5px var(--primary-dark));
  }
`;
