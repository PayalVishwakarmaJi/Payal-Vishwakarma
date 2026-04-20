import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BotanicalDecoration({ 
  style = {}, 
  className = "", 
  flipHorizontal = false, 
  flipVertical = false,
  scale = 1,
  type = 1
}) {
  const { scrollYProgress } = useScroll();
  
  // Create a gentle sway effect mapped to the scroll
  const rotation = useTransform(
    scrollYProgress, 
    [0, 1], 
    [(flipHorizontal ? 10 : -10), (flipHorizontal ? -5 : 5)]
  );

  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 50]
  );

  const baseTransform = `scale(${scale}) scaleX(${flipHorizontal ? -1 : 1}) scaleY(${flipVertical ? -1 : 1})`;

  return (
    <motion.div 
      className={`botanical-decoration ${className}`}
      style={{
        position: 'absolute',
        zIndex: 0,
        opacity: 0.15,
        pointerEvents: 'none',
        y: translateY,
        rotate: rotation,
        transformOrigin: flipHorizontal ? 'top left' : 'top right',
        ...style
      }}
    >
      <div style={{ transform: baseTransform }}>
        {type === 1 ? (
            <svg width="300" height="450" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,300 C30,250 50,200 80,150 C110,100 150,50 190,10" stroke="var(--color-tobacco)" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M50,200 C70,190 90,200 100,210 C90,220 70,220 50,200" fill="var(--color-mountain)" fillOpacity="0.4" stroke="var(--color-tobacco)" strokeWidth="1"/>
              <path d="M80,150 C110,140 130,150 140,160 C130,170 100,170 80,150" fill="var(--color-mountain)" fillOpacity="0.4" stroke="var(--color-tobacco)" strokeWidth="1"/>
              <path d="M130,80 C160,70 180,80 190,90 C180,100 150,100 130,80" fill="var(--color-mountain)" fillOpacity="0.4" stroke="var(--color-tobacco)" strokeWidth="1"/>
              <path d="M50,200 C30,180 20,160 30,150 C40,150 55,170 50,200" fill="var(--color-vanilla)" fillOpacity="0.6" stroke="var(--color-tobacco)" strokeWidth="1"/>
              <path d="M80,150 C60,130 50,110 60,100 C70,100 85,120 80,150" fill="var(--color-vanilla)" fillOpacity="0.6" stroke="var(--color-tobacco)" strokeWidth="1"/>
              <path d="M120,95 C100,75 90,55 100,45 C110,45 125,65 120,95" fill="var(--color-vanilla)" fillOpacity="0.6" stroke="var(--color-tobacco)" strokeWidth="1"/>
            </svg>
        ) : (
            <svg width="250" height="300" viewBox="0 0 150 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,200 C40,150 70,100 140,10" stroke="var(--color-mahogany)" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M40,150 C20,130 10,110 30,100 C50,90 60,120 40,150" fill="var(--color-tobacco)" fillOpacity="0.3" stroke="var(--color-mahogany)" strokeWidth="1" />
              <path d="M90,80 C70,60 60,40 80,30 C100,20 110,50 90,80" fill="var(--color-tobacco)" fillOpacity="0.3" stroke="var(--color-mahogany)" strokeWidth="1" />
              <path d="M60,120 C90,110 110,130 100,150 C90,170 60,140 60,120" fill="var(--color-mountain)" fillOpacity="0.3" stroke="var(--color-mahogany)" strokeWidth="1" />
            </svg>
        )}
      </div>
    </motion.div>
  );
}
