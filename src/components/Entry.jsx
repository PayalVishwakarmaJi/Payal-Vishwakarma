import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["feel.", "breathe.", "belong.", "tell your story."];

export default function Entry() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section entry-section" style={{ position: 'relative', overflowX: 'hidden' }}>
      
      {/* Radial warm glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '800px',
        background: 'radial-gradient(circle, var(--color-tobacco) 0%, transparent 65%)',
        filter: 'blur(120px)', opacity: 0.12, zIndex: 0, pointerEvents: 'none'
      }}/>

      {/* Thin decorative horizontal rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 1.5 }}
        style={{
          position: 'absolute', top: '50%', left: '8%',
          width: '84%', height: '1px',
          background: 'linear-gradient(to right, transparent, var(--color-tobacco), transparent)',
          opacity: 0.15, zIndex: 0, transformOrigin: 'center'
        }}
      />

      {/* Small corner labels */}
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        style={{ position: 'absolute', top: '2rem', left: '2.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'var(--color-mountain)', letterSpacing: '0.2em', textTransform: 'uppercase', zIndex: 10 }}
      >
        Portfolio 2024
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        style={{ position: 'absolute', top: '2rem', right: '2.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'var(--color-mountain)', letterSpacing: '0.2em', textTransform: 'uppercase', zIndex: 10 }}
      >
        Interior Designer
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        style={{ position: 'absolute', bottom: '2rem', left: '2.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'var(--color-mountain)', letterSpacing: '0.2em', textTransform: 'uppercase', zIndex: 10 }}
      >
        Scroll to explore ↓
      </motion.p>

      {/* Main centered content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 2rem', maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-tobacco)', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '2rem' }}
        >
          — Payal Vishwakarma —
        </motion.p>

        {/* Hero text */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 6vw, 6rem)',
            fontWeight: 400,
            lineHeight: 1.15,
            color: 'var(--color-mahogany)',
            letterSpacing: '-0.02em',
            margin: '0 0 0.5rem'
          }}
        >
          Spaces that make you
        </motion.h1>

        {/* Animated cycling word */}
        <div style={{ height: 'clamp(4rem, 8vw, 8rem)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: '3rem' }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: 'clamp(3.5rem, 9vw, 9rem)',
                color: 'var(--color-tobacco)',
                display: 'block',
                lineHeight: 1
              }}
            >
              {words[currentWord]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--color-mountain)', letterSpacing: '0.05em', maxWidth: '500px', margin: '0 auto' }}
        >
          Interior design rooted in emotion, craft, and quiet luxury.
        </motion.p>

      </div>
    </section>
  );
}
