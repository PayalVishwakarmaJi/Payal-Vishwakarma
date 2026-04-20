import React from 'react';
import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section className="section philosophy-section">
      <div className="philosophy-container">
        
        {/* Left: Motion sketches / Blueprint abstraction */}
        <div className="philosophy-sketch-wrapper">
          <motion.svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 500 500" 
            className="philosophy-svg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 }}
            viewport={{ once: true }}
          >
            <motion.path
              d="M 100,250 C 150,150 350,150 400,250 C 450,350 250,450 100,250"
              fill="transparent"
              stroke="var(--color-mahogany)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <motion.rect
              x="150" y="150" width="200" height="200"
              fill="transparent"
              stroke="var(--color-tobacco)"
              strokeWidth="1"
              initial={{ pathLength: 0, rotate: -10 }}
              whileInView={{ pathLength: 1, rotate: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.svg>
          <div className="philosophy-glow"></div>
        </div>

        {/* Right: Text */}
        <div className="philosophy-text-wrapper">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="philosophy-title"
          >
            Every corner has a purpose. <br/>
            <span style={{ color: 'var(--color-tobacco)', fontStyle: 'italic' }}>Every texture tells a story.</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="philosophy-desc"
          >
            My philosophy is grounded in creating spaces that resonate on a personal level. It's about finding harmony between the architectural bones of a home and the life lived within it.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
