import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Small clay dot that follows the pointer and swells into a labelled bubble over [data-cursor] elements.
export default function Cursor() {
  const x = useSpring(useMotionValue(-100), { stiffness: 500, damping: 40, mass: 0.3 });
  const y = useSpring(useMotionValue(-100), { stiffness: 500, damping: 40, mass: 0.3 });
  const [label, setLabel] = useState('');

  useEffect(() => {
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e) => {
      const el = e.target.closest?.('[data-cursor]');
      setLabel(el ? el.getAttribute('data-cursor') : '');
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); };
  }, [x, y]);

  return (
    <motion.div className={`cur${label ? ' big' : ''}`} style={{ x, y }} aria-hidden="true">
      <span>{label}</span>
    </motion.div>
  );
}
