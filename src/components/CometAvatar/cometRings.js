// Ported directly from comet_avatar_effect_referral.html (.orbit-1 … .orbit-17).
// offset          -> px added to --avatar-size for this ring's diameter
// duration        -> rotation speed (s)
// direction       -> 'normal' (spin) | 'reverse' (spin-reverse)
// transparentEnd  -> % where the conic-gradient's transparent segment ends
// colorFadeStart  -> % where the faint mid-tone color stop sits
// color / colorFade -> the bright tip color / the dimmer trailing color
// maskOuter/maskInner -> radial-gradient mask thickness (px) that turns the
//                        disc into a thin ring
// blink           -> null | 'fast' | 'slow' (extra opacity pulse on the arc)
// blinkDuration   -> seconds for the blink cycle
export const RING_CONFIG = [
  { offset: 8,   duration: 1.4, direction: 'normal',  transparentEnd: 90, colorFadeStart: 95, colorFade: 'rgba(56, 189, 248, 0.4)',  color: 'rgba(56, 189, 248, 1)',   maskOuter: 1.5, maskInner: 0.75, blink: 'fast', blinkDuration: 1.1 },
  { offset: 22,  duration: 2.8, direction: 'reverse', transparentEnd: 75, colorFadeStart: 88, colorFade: 'rgba(168, 85, 247, 0.15)', color: 'rgba(216, 180, 254, 1)',  maskOuter: 2,   maskInner: 1,    blink: null,   blinkDuration: 0 },
  { offset: 38,  duration: 3.5, direction: 'normal',  transparentEnd: 82, colorFadeStart: 92, colorFade: 'rgba(52, 211, 153, 0.2)',  color: 'rgba(110, 231, 183, 1)',  maskOuter: 1.5, maskInner: 0.75, blink: 'slow', blinkDuration: 2.4 },
  { offset: 55,  duration: 4.2, direction: 'reverse', transparentEnd: 40, colorFadeStart: 75, colorFade: 'rgba(2, 132, 199, 0.1)',   color: 'rgba(56, 189, 248, 0.85)',maskOuter: 2.5, maskInner: 1.25, blink: null,   blinkDuration: 0 },
  { offset: 72,  duration: 2.1, direction: 'normal',  transparentEnd: 92, colorFadeStart: 96, colorFade: 'rgba(186, 230, 253, 0.3)', color: 'rgba(224, 242, 254, 1)',  maskOuter: 2,   maskInner: 1,    blink: 'fast', blinkDuration: 1.6 },
  { offset: 90,  duration: 5.0, direction: 'reverse', transparentEnd: 65, colorFadeStart: 85, colorFade: 'rgba(99, 102, 241, 0.15)', color: 'rgba(129, 140, 248, 0.9)',maskOuter: 2,   maskInner: 1,    blink: 'slow', blinkDuration: 3.1 },
  { offset: 110, duration: 1.9, direction: 'normal',  transparentEnd: 88, colorFadeStart: 94, colorFade: 'rgba(224, 242, 254, 0.25)',color: 'rgba(255, 255, 255, 1)',  maskOuter: 1.5, maskInner: 0.75, blink: 'fast', blinkDuration: 1.3 },
  { offset: 130, duration: 3.8, direction: 'reverse', transparentEnd: 55, colorFadeStart: 80, colorFade: 'rgba(236, 72, 153, 0.2)',  color: 'rgba(244, 114, 182, 0.95)',maskOuter: 2,  maskInner: 1,    blink: null,   blinkDuration: 0 },
  { offset: 152, duration: 6.5, direction: 'normal',  transparentEnd: 30, colorFadeStart: 68, colorFade: 'rgba(37, 99, 235, 0.1)',   color: 'rgba(96, 165, 250, 0.8)', maskOuter: 2.5, maskInner: 1.25, blink: 'slow', blinkDuration: 4.2 },
  { offset: 174, duration: 2.6, direction: 'reverse', transparentEnd: 90, colorFadeStart: 95, colorFade: 'rgba(20, 184, 166, 0.3)',  color: 'rgba(45, 212, 191, 1)',   maskOuter: 1.5, maskInner: 0.75, blink: 'fast', blinkDuration: 1.9 },
  { offset: 196, duration: 4.7, direction: 'normal',  transparentEnd: 85, colorFadeStart: 93, colorFade: 'rgba(79, 70, 229, 0.2)',   color: 'rgba(129, 140, 248, 1)',  maskOuter: 2,   maskInner: 1,    blink: null,   blinkDuration: 0 },
  { offset: 220, duration: 7.2, direction: 'reverse', transparentEnd: 45, colorFadeStart: 70, colorFade: 'rgba(192, 132, 252, 0.1)', color: 'rgba(56, 189, 248, 0.9)', maskOuter: 2.5, maskInner: 1.25, blink: 'slow', blinkDuration: 3.6 },
  { offset: 242, duration: 2.3, direction: 'normal',  transparentEnd: 88, colorFadeStart: 94, colorFade: 'rgba(59, 130, 246, 0.3)',  color: 'rgba(147, 197, 253, 1)',  maskOuter: 2,   maskInner: 1,    blink: 'fast', blinkDuration: 1.2 },
  { offset: 266, duration: 5.5, direction: 'reverse', transparentEnd: 50, colorFadeStart: 80, colorFade: 'rgba(139, 92, 246, 0.15)', color: 'rgba(196, 181, 253, 0.9)',maskOuter: 2.5, maskInner: 1.25, blink: null,   blinkDuration: 0 },
  { offset: 290, duration: 6.2, direction: 'normal',  transparentEnd: 60, colorFadeStart: 82, colorFade: 'rgba(14, 165, 233, 0.2)',  color: 'rgba(56, 189, 248, 0.95)',maskOuter: 2,   maskInner: 1,    blink: 'slow', blinkDuration: 4.0 },
  { offset: 314, duration: 3.1, direction: 'reverse', transparentEnd: 92, colorFadeStart: 96, colorFade: 'rgba(255, 255, 255, 0.35)',color: 'rgba(255, 255, 255, 1)',  maskOuter: 1.5, maskInner: 0.75, blink: 'fast', blinkDuration: 1.5 },
  { offset: 340, duration: 8.0, direction: 'normal',  transparentEnd: 35, colorFadeStart: 70, colorFade: 'rgba(30, 58, 138, 0.2)',   color: 'rgba(96, 165, 250, 0.85)',maskOuter: 3,   maskInner: 1.5,  blink: 'slow', blinkDuration: 5.0 },
];