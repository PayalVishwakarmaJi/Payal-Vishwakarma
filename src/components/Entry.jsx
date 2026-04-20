import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Entry() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="section entry-section">
      <motion.div 
        style={{ opacity, y }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        className="entry-container"
      >
        <h1 className="entry-title">
          <span style={{ display: 'block', marginBottom: '1rem' }}>Design is not what you see…</span>
          <span style={{ display: 'block', color: 'var(--color-tobacco)', fontStyle: 'italic' }}>It’s what you feel.</span>
        </h1>
      </motion.div>
    </section>
  );
}
