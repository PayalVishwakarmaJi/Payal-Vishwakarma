import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { lenisRef, scrollToId } from '../lenis';
import { links } from '../nav';


export default function Header() {
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const { scrollYProgress } = useScroll();
  const prog = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const l = lenisRef.current;
    if (open) l?.stop(); else l?.start();
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; l?.start(); };
  }, [open]);

  // switch the bar to its dark variant while it sits over a .dark section
  useEffect(() => {
    const els = document.querySelectorAll('.dark');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.target.isConnected) setOnDark(e.isIntersecting); }),
      { rootMargin: '0px 0px -94% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const go = (id) => {
    setOpen(false);
    // let the menu close and scrolling resume before jumping
    setTimeout(() => scrollToId(id), 60);
  };

  return (
    <>
      <motion.div className="hdr-progress" style={{ scaleX: prog }} />
      <header className={`hdr${onDark ? ' hdr-dark' : ''}${open ? ' hdr-open' : ''}`}>
        <button type="button" className="hdr-logo" onClick={() => go('home')} aria-label="The Ambience, back to top">
          The Ambience<sup>®</sup>
        </button>
        <span className="hdr-mid">Interior Design Studio — Est. 2024</span>
        <button type="button" className={`hdr-btn${open ? ' open' : ''}`} onClick={() => setOpen((o) => !o)} aria-expanded={open}>
          {open ? 'Close' : 'Index'} <span className="plus" />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="menu"
            data-lenis-prevent
            aria-label="Index"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul>
              {links.map((l, i) => (
                <li key={l.id}>
                  <motion.button
                    type="button"
                    className="menu-link"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.25 + i * 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => go(l.id)}
                  >
                    <span>A-0{i + 2}</span>{l.label}
                  </motion.button>
                </li>
              ))}
            </ul>
            <div className="menu-foot">
              <span>The Ambience</span>
              <span>Hotel lobbies · Restaurants · Cafés</span>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
