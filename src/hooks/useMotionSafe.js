import { useReducedMotion } from 'motion/react';

// One place to control reduced-motion behavior for the whole site.
// Spread into any motion.div: <motion.div {...useMotionSafe()}>
export function useMotionSafe() {
  const reduce = useReducedMotion();
  return {
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0 : 0.5, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
  };
}
