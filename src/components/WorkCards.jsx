import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const TiltCard = ({ project, index }) => {
  const cardRef = useRef(null);
  
  // Motion values for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Motion values for spotlight glare
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightOpacity = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Normalized coordinates for tilt (-0.5 to 0.5)
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(normalizedX);
    y.set(normalizedY);

    // Absolute pixel coordinates inside card for the spotlight glow
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    spotlightOpacity.set(0);
  };

  const handleMouseEnter = () => {
    spotlightOpacity.set(1);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`work-card work-card-${index}`}
    >
      <div 
        className="work-card-bg"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div className="work-card-overlay" />
      
      {/* Interactive Spotlight Filter */}
      <motion.div
        className="work-card-spotlight pointer-events-none inset-0 absolute z-0"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([mx, my]) => `radial-gradient(circle at ${mx}px ${my}px, rgba(255, 255, 255, 0.15) 0%, transparent 60%)`
          ),
          opacity: spotlightOpacity,
          transition: 'opacity 0.3s ease'
        }}
      />

      <div 
        className="work-card-content" 
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="work-card-tag glass-badge">{project.category}</div>
        <h3 className="work-card-title">{project.title}</h3>
      </div>
    </motion.div>
  );
};

export default function WorkCards() {
  const projects = [
    {
      title: "The Earth House",
      category: "Residential",
      image: "/images/project1.png"
    },
    {
      title: "Minimalist Studio",
      category: "Commercial",
      image: "/images/project2.png"
    },
    {
      title: "Boutique Cafe",
      category: "Hospitality",
      image: "/images/project3.png"
    }
  ];

  return (
    <section className="section work-section">
      <div className="work-container">
        
        <div className="work-header" style={{ marginBottom: '5rem', textAlign: 'center' }}>
            <h2 className="intro-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', color: 'var(--color-mahogany)', marginBottom: '1rem' }}>Selected Works</h2>
            <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-tobacco)', margin: '0 auto' }}></div>
        </div>

        <div className="work-grid">
          {projects.map((project, index) => (
            <TiltCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
