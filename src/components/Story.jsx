import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';

// Words to render in script font with golden color for emotional punch
const highlightWords = ["wondered…", "alive.", "felt.", "extra.", "essential.", "personality."];

/* ── Single animated word ── */
const Word = ({ children, progress, range }) => {
  const smoothProgress = useSpring(progress, { damping: 40, stiffness: 100 });
  const opacity   = useTransform(smoothProgress, range, [0, 1]);
  const blurVal   = useTransform(smoothProgress, range, [14, 0]);
  const y         = useTransform(smoothProgress, range, [36, 0]);
  const rotateX   = useTransform(smoothProgress, range, [60, 0]);
  const scale     = useTransform(smoothProgress, range, [0.82, 1]);
  const filter    = useTransform(blurVal, (v) => `blur(${Math.max(0, v)}px)`);

  const isHighlight = highlightWords.includes(children.trim());

  return (
    <motion.span
      style={{
        opacity, y, scale, rotateX, filter,
        display: 'inline-block',
        marginRight: '0.22em',
        color:      isHighlight ? 'var(--color-tobacco)' : 'inherit',
        fontFamily: isHighlight ? 'var(--font-script)'  : 'inherit',
        fontSize:   isHighlight ? '1.25em' : 'inherit',
        lineHeight: isHighlight ? '0.85'   : 'inherit',
        transformOrigin: 'bottom center',
        textShadow: isHighlight ? '0 4px 20px rgba(181,158,125,0.45)' : 'none',
      }}
    >
      {children}
    </motion.span>
  );
};

/* ── Full animated line ── */
const StoryLine = ({ text, progress, index, total }) => {
  const start = index / total;
  const end   = start + (1 / total) * 0.75;
  const words = text.split(' ');

  return (
    <p className="story-line">
      {words.map((word, i) => {
        const ws = start + (i / words.length) * (end - start);
        const we = ws    + (1 / words.length) * (end - start);
        return (
          <Word key={i} progress={progress} range={[ws, we]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

/* ── Floating dust particles ── */
const FloatingDust = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = useMemo(
    () => Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      x:        Math.random() * 100,
      y:        Math.random() * 100,
      size:     Math.random() * 3 + 1.5,
      duration: Math.random() * 14 + 14,
      delay:    Math.random() * -18,
    })),
    []
  );

  if (!mounted) return null;

  return (
    <div className="story-dust-container">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="story-particle"
          style={{ width: p.size, height: p.size }}
          initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0 }}
          animate={{
            y:       [`${p.y}vh`, `${p.y - 14}vh`],
            opacity: [0, 0.55, 0],
            scale:   [0, 1, 0],
          }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' }}
        />
      ))}
    </div>
  );
};

/* ── Main Story section ── */
export default function Story() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end center'],
  });

  /* Glow orb — hooks at top level */
  const orbY       = useTransform(scrollYProgress, [0, 1],       ['0%', '90%']);
  const orbScale   = useTransform(scrollYProgress, [0, 0.5, 1],  [0.4, 1.8, 0.4]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.5, 1],  [0, 0.22, 0]);

  /* Quote marks pulse */
  const quoteTopScale    = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.15]);
  const quoteBottomScale = useTransform(scrollYProgress, [0.5, 1], [1.15, 0.8]);

  /* Section label fade-in */
  const labelOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);
  const labelY       = useTransform(scrollYProgress, [0, 0.08], [16, 0]);

  const lines = [
    "I've always wondered…",
    "how things are made, how spaces come alive.",
    "Not just built… but felt.",
    "For me, beauty isn't extra.",
    "It's essential.",
    "A home should reflect your personality.",
  ];

  return (
    <section ref={containerRef} className="section story-section">
      <FloatingDust />

      <div className="story-container">
        {/* Scrolling warm glow orb */}
        <motion.div
          className="story-glow-orb"
          style={{ top: orbY, scale: orbScale, opacity: orbOpacity }}
        />

        {/* Vertical progress timeline */}
        <div className="story-timeline-line">
          <motion.div
            className="story-timeline-fill"
            style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
          />
        </div>

        {/* Section label */}
        <motion.div
          className="story-label"
          style={{ opacity: labelOpacity, y: labelY }}
        >
          <span className="story-label-line" />
          <span className="story-label-text">Her Story</span>
          <span className="story-label-line" />
        </motion.div>

        {/* Giant decorative quote marks */}
        <motion.div className="story-quote-mark top" style={{ scale: quoteTopScale }}>
          "
        </motion.div>
        <motion.div className="story-quote-mark bottom" style={{ scale: quoteBottomScale }}>
          "
        </motion.div>

        {/* Story lines */}
        <div className="story-content-wrapper">
          {lines.map((line, i) => (
            <div key={i} className={`story-line-wrapper align-${i % 2 === 0 ? 'left' : 'right'}`}>
              <StoryLine
                text={line}
                progress={scrollYProgress}
                index={i}
                total={lines.length}
              />
            </div>
          ))}
        </div>

        {/* Closing signature accent */}
        <motion.div
          className="story-close-accent"
          style={{
            opacity: useTransform(scrollYProgress, [0.85, 1], [0, 1]),
            y:       useTransform(scrollYProgress, [0.85, 1], [20, 0]),
          }}
        >
          <div className="story-close-line" />
          <span className="story-close-text">— Payal Vishwakarma</span>
          <div className="story-close-line" />
        </motion.div>

      </div>
    </section>
  );
}
