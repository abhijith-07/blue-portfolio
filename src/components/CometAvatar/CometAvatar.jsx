import React, { useEffect, useRef } from 'react';

const orbits = [
  { size: 8,   duration: 1.4, reverse: false, blink: true,  blinkDuration: 1.1, color: 'rgba(56, 189, 248, 0.4)',   colorBright: 'rgba(56, 189, 248, 1)'   },
  { size: 22,  duration: 2.8, reverse: true,  blink: false, blinkDuration: 0,   color: 'rgba(168, 85, 247, 0.15)',  colorBright: 'rgba(216, 180, 254, 1)'  },
  { size: 38,  duration: 3.5, reverse: false, blink: true,  blinkDuration: 2.4, color: 'rgba(52, 211, 153, 0.2)',   colorBright: 'rgba(110, 231, 183, 1)'  },
  { size: 55,  duration: 4.2, reverse: true,  blink: false, blinkDuration: 0,   color: 'rgba(2, 132, 199, 0.1)',    colorBright: 'rgba(56, 189, 248, 0.85)'},
  { size: 72,  duration: 2.1, reverse: false, blink: true,  blinkDuration: 1.6, color: 'rgba(186, 230, 253, 0.3)',  colorBright: 'rgba(224, 242, 254, 1)'  },
  { size: 90,  duration: 5.0, reverse: true,  blink: true,  blinkDuration: 3.1, color: 'rgba(99, 102, 241, 0.15)',  colorBright: 'rgba(129, 140, 248, 0.9)'},
  { size: 110, duration: 1.9, reverse: false, blink: true,  blinkDuration: 1.3, color: 'rgba(224, 242, 254, 0.25)', colorBright: 'rgba(255, 255, 255, 1)'  },
  { size: 130, duration: 3.8, reverse: true,  blink: false, blinkDuration: 0,   color: 'rgba(236, 72, 153, 0.2)',   colorBright: 'rgba(244, 114, 182, 0.95)'},
];

// The avatar takes up this fraction of the wrapper
const AVATAR_RATIO = 0.57; // avatar = 57% of container width

export default function CometAvatar({ imageSrc }) {
  const containerRef = useRef(null);
  const orbitRefs    = useRef([]);
  const avatarRef    = useRef(null);
  const rafRef       = useRef(null);
  const startTime    = useRef(Date.now());

  useEffect(() => {
    const animate = () => {
      const container = containerRef.current;
      if (!container) { rafRef.current = requestAnimationFrame(animate); return; }

      // Live container size — works at every viewport width
      const size    = container.offsetWidth;
      const avatarPx = size * AVATAR_RATIO;

      // Resize avatar circle
      if (avatarRef.current) {
        avatarRef.current.style.width  = `${avatarPx}px`;
        avatarRef.current.style.height = `${avatarPx}px`;
      }

      const elapsed = (Date.now() - startTime.current) / 1000;

      orbits.forEach((orbit, idx) => {
        const el = orbitRefs.current[idx];
        if (!el) return;

        // Scale ring offset proportionally with container
        const scale      = size / 610;           // 610 = design baseline
        const ringSize   = avatarPx + 2 * orbit.size * scale;
        el.style.width   = `${ringSize}px`;
        el.style.height  = `${ringSize}px`;

        // Rotation
        let deg = ((elapsed / orbit.duration) % 1) * 360;
        if (orbit.reverse) deg = 360 - deg;
        el.style.transform = `translate(-50%, -50%) rotate(${deg}deg)`;

        // Blink / opacity
        if (orbit.blink && orbit.blinkDuration > 0) {
          const t = (elapsed / orbit.blinkDuration) % 1;
          el.style.opacity = t < 0.5
            ? 0.15 + t * 2 * 0.85
            : 1 - (t - 0.5) * 2 * 0.85;
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    // Outer wrapper — width controlled by Home.styles.js Profile/Container
    <div
      ref={containerRef}
      style={{
        position:       'relative',
        width:          '100%',
        aspectRatio:    '1 / 1',   // always a square, height = width
        display:        'flex',
        justifyContent: 'center',
        alignItems:     'center',
      }}
    >
      {/* Comet rings — sized dynamically in rAF */}
      {orbits.map((orbit, idx) => (
        <div
          key={idx}
          ref={el => (orbitRefs.current[idx] = el)}
          style={{
            position:     'absolute',
            borderRadius: '50%',
            zIndex:       5,
            pointerEvents:'none',
            top:          '50%',
            left:         '50%',
            // initial size — rAF will correct immediately on first frame
            width:        '10px',
            height:       '10px',
            background: `conic-gradient(
              from 0deg,
              transparent 0%,
              transparent 80%,
              ${orbit.color} 92%,
              ${orbit.colorBright} 100%
            )`,
            WebkitMaskImage: `radial-gradient(
              transparent calc(50% - 2px),
              black       calc(50% - 1px),
              black       50%,
              transparent 50%
            )`,
            maskImage: `radial-gradient(
              transparent calc(50% - 2px),
              black       calc(50% - 1px),
              black       50%,
              transparent 50%
            )`,
            opacity: orbit.blink ? 0.5 : 1,
          }}
        />
      ))}

      {/* Avatar circle — sized dynamically in rAF */}
      <div
        ref={avatarRef}
        style={{
          borderRadius: '50%',
          position:     'relative',
          zIndex:       10,
          overflow:     'hidden',
          boxShadow:    '0 0 30px rgba(34, 211, 238, 0.4)',
          border:       '3px solid #22D3EE',
          flexShrink:   0,
          // initial size — rAF corrects on first frame
          width:        '200px',
          height:       '200px',
        }}
      >
        <img
          src={imageSrc}
          alt="Abhijith Subash"
          loading="lazy"
          style={{
            width:          '100%',
            height:         '100%',
            objectFit:      'cover',
            objectPosition: 'center 20%',
          }}
        />
      </div>
    </div>
  );
}
