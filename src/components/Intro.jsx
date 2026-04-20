import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

// Small floating decorative petal/leaf
const FloatingLeaf = ({ style, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, delay }}
    style={{ position: 'absolute', pointerEvents: 'none', zIndex: 0, ...style }}
  >
    <svg width="60" height="80" viewBox="0 0 40 60" fill="none">
      <path d="M20,55 C20,55 5,40 5,20 C5,10 12,2 20,2 C28,2 35,10 35,20 C35,40 20,55 20,55Z" 
        fill="var(--color-tobacco)" fillOpacity="0.08" stroke="var(--color-tobacco)" strokeWidth="0.5" strokeOpacity="0.3"/>
      <path d="M20,55 L20,15" stroke="var(--color-tobacco)" strokeWidth="0.5" strokeOpacity="0.3"/>
      <path d="M20,40 C14,35 8,30 8,25" stroke="var(--color-tobacco)" strokeWidth="0.4" strokeOpacity="0.2"/>
      <path d="M20,40 C26,35 32,30 32,25" stroke="var(--color-tobacco)" strokeWidth="0.4" strokeOpacity="0.2"/>
    </svg>
  </motion.div>
);

export default function Intro() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const textY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const branchRotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const branchY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={containerRef} className="section intro-section" style={{ position: 'relative' }}>
      
      {/* Very subtle background radial wash */}
      <div style={{
        position: 'absolute', bottom: '10%', left: '-10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, var(--color-sand) 0%, transparent 60%)',
        filter: 'blur(80px)', opacity: 0.25, zIndex: 0, pointerEvents: 'none'
      }} />

      {/* Floating leaves scattered */}
      <FloatingLeaf delay={0.3} style={{ top: '8%', left: '3%', transform: 'rotate(-20deg)' }} />
      <FloatingLeaf delay={0.5} style={{ top: '20%', left: '6%', transform: 'rotate(10deg) scale(0.7)' }} />
      <FloatingLeaf delay={0.2} style={{ bottom: '15%', right: '4%', transform: 'rotate(35deg) scale(1.2)' }} />
      <FloatingLeaf delay={0.7} style={{ bottom: '30%', right: '8%', transform: 'rotate(-15deg) scale(0.8)' }} />

      {/* Decorative Tree Branch */}
      <motion.div 
        className="intro-branch"
        style={{ y: branchY, rotate: branchRotate, transformOrigin: 'top right' }}
      >
        <svg width="300" height="450" viewBox="0 0 200 300" fill="none">
          <path d="M10,300 C30,250 50,200 80,150 C110,100 150,50 190,10" stroke="var(--color-tobacco)" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M50,200 C70,190 90,200 100,210 C90,220 70,220 50,200" fill="var(--color-mountain)" fillOpacity="0.2" stroke="var(--color-tobacco)" strokeWidth="1"/>
          <path d="M80,150 C110,140 130,150 140,160 C130,170 100,170 80,150" fill="var(--color-mountain)" fillOpacity="0.2" stroke="var(--color-tobacco)" strokeWidth="1"/>
          <path d="M130,80 C160,70 180,80 190,90 C180,100 150,100 130,80" fill="var(--color-mountain)" fillOpacity="0.2" stroke="var(--color-tobacco)" strokeWidth="1"/>
          <path d="M50,200 C30,180 20,160 30,150 C40,150 55,170 50,200" fill="var(--color-vanilla)" fillOpacity="0.4" stroke="var(--color-tobacco)" strokeWidth="1"/>
          <path d="M80,150 C60,130 50,110 60,100 C70,100 85,120 80,150" fill="var(--color-vanilla)" fillOpacity="0.4" stroke="var(--color-tobacco)" strokeWidth="1"/>
          <path d="M120,95 C100,75 90,55 100,45 C110,45 125,65 120,95" fill="var(--color-vanilla)" fillOpacity="0.4" stroke="var(--color-tobacco)" strokeWidth="1"/>
        </svg>
      </motion.div>

      <div className="intro-container">
        
        {/* Portrait Side */}
        <motion.div 
          className="intro-image-wrapper"
          style={{ y: imgY }}
        >
          {/* Breathing emotional glow */}
          <div className="intro-glow"></div>

          {/* Decorative offset stroke frame */}
          <div className="intro-image-frame"></div>

          {/* Extra fine dashed frame */}
          <div style={{ 
            position: 'absolute', top: '-40px', left: '-40px', width: 'calc(100% + 20px)', height: 'calc(100% + 20px)',
            border: '1px dashed var(--color-tobacco)', borderRadius: '250px 250px 0 0',
            opacity: 0.15, zIndex: 0, pointerEvents: 'none'
          }} />

          <img 
            src="/images/payal.png" 
            alt="Payal Vishwakarma - Interior Designer" 
            className="intro-image"
          />

          {/* Year badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            style={{
              position: 'absolute', bottom: '-20px', left: '-20px', zIndex: 20,
              width: '80px', height: '80px',
              background: 'var(--color-mahogany)',
              borderRadius: '50%',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(88,71,56,0.3)'
            }}
          >
            <span style={{ color: 'var(--color-vanilla)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Since</span>
            <span style={{ color: 'var(--color-tobacco)', fontSize: '1.1rem', fontFamily: 'var(--font-serif)' }}>2022</span>
          </motion.div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          style={{ y: textY, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          className="intro-text-wrapper"
        >
          {/* Label row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-tobacco)' }}></div>
            <p className="intro-role">Freelance Interior Designer</p>
          </div>
          
          {/* Handwritten name / Signature */}
          <motion.p 
            className="intro-signature" 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Payal Vishwakarma
          </motion.p>

          {/* Handwritten emotional quote */}
          <p className="intro-quote">
            "I design spaces that feel like you."
          </p>



        </motion.div>

      </div>
    </section>
  );
}
