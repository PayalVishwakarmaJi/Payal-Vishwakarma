import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Intro() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  
  // Subtle branch parallax swaying based on scroll
  const branchRotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const branchY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={containerRef} className="section intro-section" style={{ position: 'relative' }}>
      
      {/* Decorative Tree Branch */}
      <motion.div 
        className="intro-branch"
        style={{ y: branchY, rotate: branchRotate, transformOrigin: 'top right' }}
      >
        <svg width="300" height="450" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stem */}
          <path d="M10,300 C30,250 50,200 80,150 C110,100 150,50 190,10" stroke="var(--color-tobacco)" strokeWidth="1.5" strokeLinecap="round"/>
          
          {/* Right Leaves */}
          <path d="M50,200 C70,190 90,200 100,210 C90,220 70,220 50,200" fill="var(--color-mountain)" fillOpacity="0.2" stroke="var(--color-tobacco)" strokeWidth="1"/>
          <path d="M80,150 C110,140 130,150 140,160 C130,170 100,170 80,150" fill="var(--color-mountain)" fillOpacity="0.2" stroke="var(--color-tobacco)" strokeWidth="1"/>
          <path d="M130,80 C160,70 180,80 190,90 C180,100 150,100 130,80" fill="var(--color-mountain)" fillOpacity="0.2" stroke="var(--color-tobacco)" strokeWidth="1"/>
          
          {/* Left Leaves */}
          <path d="M50,200 C30,180 20,160 30,150 C40,150 55,170 50,200" fill="var(--color-vanilla)" fillOpacity="0.4" stroke="var(--color-tobacco)" strokeWidth="1"/>
          <path d="M80,150 C60,130 50,110 60,100 C70,100 85,120 80,150" fill="var(--color-vanilla)" fillOpacity="0.4" stroke="var(--color-tobacco)" strokeWidth="1"/>
          <path d="M120,95 C100,75 90,55 100,45 C110,45 125,65 120,95" fill="var(--color-vanilla)" fillOpacity="0.4" stroke="var(--color-tobacco)" strokeWidth="1"/>
        </svg>
      </motion.div>

      <div className="intro-container">
        
        {/* Parallax Image Side (Arch Window Shape) */}
        <motion.div 
          className="intro-image-wrapper"
          style={{ y: imgY }}
        >
          {/* Breathing emotional glow */}
          <div className="intro-glow"></div>
          {/* Decorative frame shadow */}
          <div className="intro-image-frame"></div>
          <img 
            src="/images/payal.png" 
            alt="Payal Vishwakarma - Interior Designer" 
            className="intro-image"
          />
        </motion.div>

        {/* Text Side */}
        <motion.div 
          style={{ y: textY, display: 'flex', flexDirection: 'column', gap: '1rem' }}
          className="intro-text-wrapper"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-tobacco)' }}></div>
            <p className="intro-role">
              Interior Designer
            </p>
          </div>
          
          <motion.p 
            className="intro-signature" 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
             Payal Vishwakarma
          </motion.p>

          <p className="intro-quote">
            “I design spaces that feel like you.”
          </p>

        </motion.div>

      </div>
    </section>
  );
}
