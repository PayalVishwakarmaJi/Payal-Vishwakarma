import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoMark from './LogoMark';

const EASE = [0.22, 1, 0.36, 1];
const the = 'The'.split('');
const name = 'Ambience'.split('');

// Opening screen: the studio name writes itself in, then the curtain lifts.
export default function Preloader({ onDone }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => setShow(false), 2600);
    return () => { clearTimeout(t); document.body.style.overflow = ''; };
  }, []);

  const letter = (ch, i, base) => (
    <span className="pre-mask" key={`${base}-${i}`}>
      <motion.span
        style={{ display: 'inline-block' }}
        initial={{ y: '115%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay: base + i * 0.06, ease: EASE }}
      >
        {ch}
      </motion.span>
    </span>
  );

  return (
    <AnimatePresence onExitComplete={() => { document.body.style.overflow = ''; onDone(); }}>
      {show && (
        <motion.div
          className="pre"
          initial={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="pre-top">
            <span>Interior Design Studio</span>
            <span>Est. 2024</span>
          </div>

          <div className="pre-center" aria-label="The Ambience">
            <motion.div
              className="pre-mark"
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
            >
              <LogoMark height="clamp(96px, 20vh, 190px)" large />
            </motion.div>
            <div className="pre-the">{the.map((c, i) => letter(c, i, 0.2))}</div>
            <div className="pre-name">{name.map((c, i) => letter(c, i, 0.45))}</div>
            <motion.div
              className="pre-rule"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 1, ease: [0.76, 0, 0.24, 1] }}
            />
          </div>

          <div className="pre-bot">
            <span>Hotel lobbies · Restaurants · Cafés</span>
            <span>A-00</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
