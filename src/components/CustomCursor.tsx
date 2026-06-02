import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, animate } from 'motion/react';

export function CustomCursor() {
  // Touch device — inject a style tag and bail out
  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  // Raw mouse position (instant)
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Lagging outer circle position
  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  // Visibility & hover state via motion values (no re-renders)
  const opacity = useMotionValue(0);
  const ringSize = useMotionValue(44);
  const ringBorderColor = useMotionValue('rgba(160,160,160,0.45)');
  const dotBg = useMotionValue('#1a1a1a');

  useEffect(() => {
    if (isTouchDevice) return;

    // Hide system cursor globally
    const style = document.createElement('style');
    style.id = 'custom-cursor-hide';
    style.textContent = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    let visible = false;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) {
        visible = true;
        animate(opacity, 1, { duration: 0.2 });
      }
    };

    const onLeave = () => {
      visible = false;
      animate(opacity, 0, { duration: 0.15 });
    };

    const onEnter = () => {
      visible = true;
      animate(opacity, 1, { duration: 0.15 });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = !!target?.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer'
      );

      if (interactive) {
        animate(ringSize, 62, { type: 'spring', damping: 20, stiffness: 200 });
        animate(ringBorderColor, 'rgba(56,189,248,0.65)', { duration: 0.2 });
        animate(dotBg, '#38bdf8', { duration: 0.2 });
      } else {
        animate(ringSize, 44, { type: 'spring', damping: 20, stiffness: 200 });
        animate(ringBorderColor, 'rgba(160,160,160,0.45)', { duration: 0.2 });
        animate(dotBg, '#1a1a1a', { duration: 0.2 });
      }
    };

    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    window.addEventListener('mouseover', onOver);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mouseover', onOver);
      const el = document.getElementById('custom-cursor-hide');
      if (el) document.head.removeChild(el);
    };
  }, []); // ← empty deps: runs once, no stale closures

  if (isTouchDevice) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[99999]"
      aria-hidden="true"
    >
      {/* Outer ring — lags behind with spring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: ringSize,
          height: ringSize,
          borderColor: ringBorderColor,
          opacity,
          position: 'absolute',
          borderRadius: '9999px',
          borderWidth: '1.5px',
          borderStyle: 'solid',
        }}
      />

      {/* Inner dot — instant follow */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: dotBg,
          opacity,
          position: 'absolute',
          width: 10,
          height: 10,
          borderRadius: '9999px',
        }}
      />
    </div>
  );
}
