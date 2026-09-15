import { useEffect } from "react";

export default function CometBackground() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.zIndex = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.mixBlendMode = "screen";
    document.body.appendChild(canvas);

    const state = {
      width: window.innerWidth,
      height: window.innerHeight,
      dpr: window.devicePixelRatio || 1,
      stars: []
    };

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function resize() {
      state.width = window.innerWidth;
      state.height = window.innerHeight;
      state.dpr = window.devicePixelRatio || 1;

      canvas.width = Math.max(1, Math.floor(state.width * state.dpr));
      canvas.height = Math.max(1, Math.floor(state.height * state.dpr));
      canvas.style.width = `${state.width}px`;
      canvas.style.height = `${state.height}px`;

      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    }

    const palette = [
      { h: 185, s: 90, l: 60 },
      { h: 195, s: 85, l: 60 },
      { h: 175, s: 75, l: 60 },
      { h: 210, s: 80, l: 65 },
      { h: 200, s: 70, l: 55 }
    ];

    function seedStars() {
      // slightly fewer stars, with shape variants
      state.stars = Array.from({ length: 48 }, () => {
        const pal = palette[Math.floor(Math.random() * palette.length)];
        const size = rand(0.35, 1.6);
        const r = Math.random();
        const shape = r < 0.62 ? 'circle' : (r < 0.82 ? 'diamond' : 'line'); // circle most likely
        return {
          x: Math.random() * state.width,
          y: Math.random() * state.height,
          r: size,
          shape,
          lineLength: rand(8, 28),
          angle: Math.random() * Math.PI * 2,
          baseAlpha: rand(0.12, 0.7),
          phase: Math.random() * Math.PI * 2,
          // slower, smoother speeds for bulb-like glow
          speed: rand(0.002, 0.006),
          hue: pal.h,
          sat: pal.s,
          light: pal.l,
          glow: rand(2.2, 4.2),
          flickerChance: rand(0.0005, 0.002), // very rare spikes
          lastFlicker: 0,
          flickerStrength: rand(0.3, 0.9)
        };
      });
    }

    function drawBackground() {
      const now = performance.now();
      ctx.clearRect(0, 0, state.width, state.height);
      ctx.fillStyle = "rgba(2, 6, 23, 0.92)";
      ctx.fillRect(0, 0, state.width, state.height);

      for (const star of state.stars) {
        const t = ((now * 0.001) * star.speed + star.phase) % 1;
        // smooth bulb-like pulse using cosine (smooth) and smoothstep easing
        const raw = 0.5 - 0.5 * Math.cos(2 * Math.PI * t); // 0..1 smooth
        const pulse = raw * raw * (3 - 2 * raw); // smoothstep easing

        // occasional rare flicker spikes
        if (Math.random() < star.flickerChance) {
          star.lastFlicker = now;
        }
        let spike = 0;
        if (now - star.lastFlicker < 600) {
          const decay = 1 - (now - star.lastFlicker) / 600;
          spike = star.flickerStrength * decay;
        }

        const visibleAlpha = Math.max(0.04, Math.min(1, star.baseAlpha * (0.4 + pulse * 0.9 + spike)));
        const outer = Math.max(1.6, star.r * star.glow);

        // compute rising amount for blur usage (only during fade-in)
        const rising = Math.max(0, Math.min(1, pulse));
        const blurAmount = rising > 0.18 ? Math.max(0, rising * 10) : 0;

        // prepare gradient for tinted glow/core
        const grad = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, outer);
        grad.addColorStop(0, `rgba(255,255,255,${Math.min(1, visibleAlpha * 1.2)})`);
        grad.addColorStop(0.3, `hsla(${star.hue}, ${star.sat}%, ${star.light}%, ${visibleAlpha * 0.72})`);
        grad.addColorStop(1, `hsla(${star.hue}, ${star.sat}%, ${star.light}%, ${visibleAlpha * 0.06})`);

        ctx.save();

        if (star.shape === "circle") {
          // Draw a soft outer halo using the radial gradient but without heavy blur
          ctx.beginPath();
          ctx.fillStyle = grad;
          ctx.shadowBlur = 0; // keep crisp outer halo drawn via alpha
          ctx.arc(star.x, star.y, outer, 0, Math.PI * 2);
          ctx.save();
          // outer halo uses low opacity but pulses smoothly
          ctx.globalAlpha = Math.max(0.04, visibleAlpha * 0.16);
          ctx.fill();
          ctx.restore();

          // Draw bright inner core — stronger and smooth like a bulb
          ctx.beginPath();
          const coreAlpha = Math.min(1, visibleAlpha * (0.9 + pulse * 0.6));
          ctx.fillStyle = `rgba(255,255,255,${coreAlpha})`;
          ctx.arc(star.x, star.y, Math.max(0.5, star.r), 0, Math.PI * 2);
          ctx.fill();
        } else if (star.shape === "diamond") {
          // draw a rotated square (diamond) with tinted fill
          const size = Math.max(1.2, star.r * 2.6);
          ctx.translate(star.x, star.y);
          ctx.rotate(Math.PI / 4 * (0.5 + Math.sin(now * 0.0005 + star.phase) * 0.2));
          ctx.beginPath();
          ctx.fillStyle = grad;
          ctx.shadowBlur = blurAmount;
          ctx.shadowColor = `hsla(${star.hue}, ${star.sat}%, ${star.light}%, ${Math.max(0.08, visibleAlpha)})`;
          ctx.rect(-size / 2, -size / 2, size, size);
          ctx.fill();

          ctx.beginPath();
          ctx.fillStyle = `rgba(255,255,255,${Math.min(1, visibleAlpha * 0.95)})`;
          ctx.arc(0, 0, Math.max(0.5, star.r * 0.9), 0, Math.PI * 2);
          ctx.fill();
        } else if (star.shape === "line") {
          // draw a small thin line (streak) oriented by star.angle
          const len = star.lineLength;
          const ax = Math.cos(star.angle) * len * 0.5;
          const ay = Math.sin(star.angle) * len * 0.5;

          // gradient along the line
          const lineGrad = ctx.createLinearGradient(star.x - ax, star.y - ay, star.x + ax, star.y + ay);
          lineGrad.addColorStop(0, `hsla(${star.hue}, ${star.sat}%, ${star.light}%, 0)`);
          lineGrad.addColorStop(0.45, `hsla(${star.hue}, ${star.sat}%, ${star.light}%, ${visibleAlpha * 0.6})`);
          lineGrad.addColorStop(0.55, `rgba(255,255,255,${visibleAlpha})`);
          lineGrad.addColorStop(1, `hsla(${star.hue}, ${star.sat}%, ${star.light}%, 0)`);

          ctx.beginPath();
          ctx.strokeStyle = lineGrad;
          ctx.lineWidth = Math.max(0.6, star.r * 0.9);
          ctx.lineCap = "round";
          ctx.shadowBlur = blurAmount;
          ctx.shadowColor = `hsla(${star.hue}, ${star.sat}%, ${star.light}%, ${Math.max(0.08, visibleAlpha)})`;
          ctx.moveTo(star.x - ax, star.y - ay);
          ctx.lineTo(star.x + ax, star.y + ay);
          ctx.stroke();

          // tiny core
          ctx.beginPath();
          ctx.fillStyle = `rgba(255,255,255,${Math.min(1, visibleAlpha * 0.9)})`;
          ctx.arc(star.x, star.y, Math.max(0.4, star.r * 0.6), 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    function tick() {
      drawBackground();
      requestAnimationFrame(tick);
    }

    resize();
    seedStars();
    window.addEventListener("resize", resize);
    window.addEventListener("resize", seedStars);
    requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", seedStars);
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, []);

  return null;
}
