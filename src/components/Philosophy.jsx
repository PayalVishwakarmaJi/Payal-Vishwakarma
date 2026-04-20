import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Philosophy() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0.4, 0.8], [50, -50]);

  return (
    <section className="section philosophy-section" style={{ position: 'relative' }}>
      
      {/* Massive Editorial Watermark */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '40vw',
          fontFamily: 'var(--font-serif)',
          color: 'var(--color-tobacco)',
          opacity: 0.03,
          zIndex: 0,
          pointerEvents: 'none',
          lineHeight: 0.8
        }}
      >
        &
      </div>

      <div className="philosophy-container">
        
        {/* Abstract Sketch / Graphic Side */}
        <motion.div 
          style={{ y: yParallax }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="philosophy-sketch-wrapper"
        >
          <div className="philosophy-glow" style={{ opacity: 0.6, background: 'radial-gradient(circle, var(--color-tobacco) 0%, transparent 60%)' }}></div>
          
          {/* Complex Architectural SVG drawing effect */}
          <motion.svg 
            width="500" 
            height="500" 
            viewBox="0 0 200 200" 
            className="philosophy-svg"
            style={{ overflow: 'visible' }}
          >
            {/* Base Grid */}
            <motion.path 
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} viewport={{ once: true }}
              d="M10,100 L190,100 M100,10 L100,190" fill="none" stroke="var(--color-mountain)" strokeWidth="0.5" strokeDasharray="4 4"
            />
            {/* Archway representation */}
            <motion.path 
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }} viewport={{ once: true }}
              d="M50,190 L50,100 C50,60 150,60 150,100 L150,190" fill="none" stroke="var(--color-tobacco)" strokeWidth="1.5" 
            />
            {/* Inner Arch Perspective */}
            <motion.path 
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeOut", delay: 1 }} viewport={{ once: true }}
              d="M70,190 L70,120 C70,90 130,90 130,120 L130,190" fill="none" stroke="rgba(88, 71, 56, 0.4)" strokeWidth="1" 
            />
            {/* Floor perspective lines */}
            <motion.path 
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }} viewport={{ once: true }}
              d="M0,200 L70,190 M200,200 L130,190" fill="none" stroke="rgba(88, 71, 56, 0.6)" strokeWidth="1.5" 
            />
            {/* Abstract Circle (Sun/Light fixture) */}
            <motion.circle 
              initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, delay: 2 }} viewport={{ once: true }}
              cx="100" cy="50" r="15" fill="none" stroke="var(--color-mahogany)" strokeWidth="0.8"
            />
          </motion.svg>
        </motion.div>

        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="philosophy-text-wrapper"
          style={{ position: 'relative', zIndex: 10 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--color-tobacco)' }}></div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-mountain)', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>
              The Philosophy
            </p>
          </div>

          <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: 'var(--color-mahogany)', margin: '0 0 -1rem 0', lineHeight: 1.1 }}>
            Form Follows
          </h2>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            style={{ fontSize: '6rem', fontFamily: 'var(--font-script)', color: 'var(--color-tobacco)', margin: '0 0 2rem 0', transform: 'rotate(-4deg)', transformOrigin: 'left center' }}
          >
            Empathy
          </motion.h2>

          <p className="philosophy-desc" style={{ lineHeight: '1.8' }}>
            Space doesn’t just hold objects; it holds moments. My approach blends 
            functional minimalism with deep emotional resonance, ensuring every texture 
            and shadow serves a purpose in your daily life. It is about creating a sanctuary.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: 'var(--color-tobacco)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            style={{ marginTop: '3rem' }}
          >
            Discuss Your Vision
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
