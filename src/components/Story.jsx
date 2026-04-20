import React, { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';

const Word = ({ children, progress, range }) => {
  // Use springs to make the text reveal feel cinematic and buttery smooth
  const smoothProgress = useSpring(progress, { damping: 30, stiffness: 200 });
  const opacity = useTransform(smoothProgress, range, [0.15, 1]);
  const blurVal = useTransform(smoothProgress, range, [8, 0]);
  const y = useTransform(smoothProgress, range, [20, 0]);
  
  const filter = useTransform(blurVal, (v) => `blur(${Math.max(0, v)}px)`);

  return (
    <motion.span 
      style={{ 
        opacity, 
        y, 
        filter,
        display: 'inline-block', 
        marginRight: '0.25em' 
      }}
    >
      {children}
    </motion.span>
  );
};

const StoryLine = ({ text, progress, index, total }) => {
  const start = index / total;
  // Compress the reveal range slightly so lines finish revealing before the very end
  const end = start + (1 / total) * 0.7;

  const words = text.split(" ");

  return (
    <p className="story-line">
      {words.map((word, i) => {
        const wordStart = start + ((i / words.length) * (end - start));
        const wordEnd = wordStart + ((1 / words.length) * (end - start));
        return (
          <Word key={i} progress={progress} range={[wordStart, wordEnd]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

export default function Story() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const lines = [
    "I’ve always wondered…",
    "how things are made, how spaces come alive.",
    "Not just built… but felt.",
    "For me, beauty isn’t extra.",
    "It’s essential.",
    "A home should reflect your personality."
  ];

  return (
    <section ref={containerRef} className="section story-section">
      <div className="story-container">
        
        {/* Giant Decorative Quotes */}
        <div className="story-quote-mark" style={{ top: '-40px', left: '-20px' }}>“</div>
        <div className="story-quote-mark" style={{ bottom: '-100px', right: '-20px', transform: 'rotate(180deg)' }}>“</div>

        <div className="story-content-wrapper">
          {lines.map((line, i) => (
            <div key={i} className={`story-line-wrapper align-${i % 2 === 0 ? 'left' : 'right'}`}>
              <StoryLine text={line} progress={scrollYProgress} index={i} total={lines.length} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
