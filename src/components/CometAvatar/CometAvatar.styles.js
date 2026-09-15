import { styled, keyframes, css } from 'styled-components';

// NOTE: uses the styled-components `keyframes` helper (not raw `@keyframes`
// blocks). This matters here specifically: Home.styles.js already defines
// a global `@keyframes spin` for the resume-button border animation
// (a completely different animation — it spins a CSS --angle custom
// property, not a transform). CSS keyframe names are global, so a second
// raw `@keyframes spin { ... rotate(360deg) }` block anywhere else in the
// app would silently overwrite/collide with that one. `keyframes()` avoids
// this by hashing to a unique name under the hood — always use it here.
const cometSpin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const cometSpinReverse = keyframes`
  from { transform: rotate(360deg); }
  to   { transform: rotate(0deg); }
`;

const cometBlinkFast = keyframes`
  0%, 100% { opacity: 0.15; }
  50%      { opacity: 1; }
`;

const cometBlinkSlow = keyframes`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 0.9; }
`;

const blinkAnimation = (blink, duration) => {
  if (blink === 'fast') return css`animation: ${cometBlinkFast} ${duration}s ease-in-out infinite;`;
  if (blink === 'slow') return css`animation: ${cometBlinkSlow} ${duration}s ease-in-out infinite;`;
  return '';
};

const styles = {
  // Reads --avatar-size from whichever ancestor defines it (see Home.styles.js
  // changes below). --comet-scale lets a media query shrink ring spacing
  // on small screens without touching the ring data itself.
  Wrapper: styled.div`
    position: relative;
    width: var(--avatar-size);
    height: var(--avatar-size);
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none; /* let clicks/hover pass through to the photo */

    .avatar-circle {
      width: var(--avatar-size);
      height: var(--avatar-size);
      border-radius: 50%;
      position: relative;
      z-index: 10;
      overflow: hidden;
      pointer-events: auto;
    }

    .avatar-circle img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    /* Trim the outer, sparser rings on tablet/mobile: fewer layers to
       paint, and a smaller footprint so the ring system doesn't overflow
       a narrow viewport. Rings are rendered in order 1 (innermost) to
       17 (outermost), so nth-child(n+N) hides ring N and everything
       past it. */
    @media screen and (max-width: 790px) {
      --comet-scale: 0.65;
      > div.comet-ring:nth-child(n + 11) { display: none; } /* keep rings 1–10 */
    }

    @media screen and (max-width: 480px) {
      --comet-scale: 0.5;
      > div.comet-ring:nth-child(n + 7) { display: none; } /* keep rings 1–6 */
    }
  `,

  Ring: styled.div`
    position: absolute;
    inset: 0;
    margin: auto;
    width: calc(var(--avatar-size) + ${(p) => p.$offset}px * var(--comet-scale, 1));
    height: calc(var(--avatar-size) + ${(p) => p.$offset}px * var(--comet-scale, 1));
    border-radius: 50%;
    z-index: 5;
    animation: ${(p) => (p.$direction === 'reverse' ? cometSpinReverse : cometSpin)}
      ${(p) => p.$duration}s linear infinite;

    .arc {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: conic-gradient(
        from 0deg,
        transparent 0%,
        transparent ${(p) => p.$transparentEnd}%,
        ${(p) => p.$colorFade} ${(p) => p.$colorFadeStart}%,
        ${(p) => p.$color} 100%
      );
      mask-image: radial-gradient(
        transparent calc(50% - ${(p) => p.$maskOuter}px),
        black calc(50% - ${(p) => p.$maskInner}px),
        black 50%,
        transparent 50%
      );
      -webkit-mask-image: radial-gradient(
        transparent calc(50% - ${(p) => p.$maskOuter}px),
        black calc(50% - ${(p) => p.$maskInner}px),
        black 50%,
        transparent 50%
      );
      ${(p) => blinkAnimation(p.$blink, p.$blinkDuration)}
    }
  `,
};

export default styles;