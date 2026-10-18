import React from 'react';
import { motion } from 'framer-motion';
import { links } from '../nav';
import { scrollToId } from '../lenis';
import LogoMark from './LogoMark';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-word-wrap">
        <motion.p
          className="foot-word"
          initial={{ y: '45%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          The <em>Ambience</em>
        </motion.p>
      </div>

      <div className="sheet-tag" style={{ marginBottom: '1.2rem' }}><b>A-08</b> Title block <i /> End of set</div>

      <div className="block">
        <div className="cell cell-wide">
          <span className="mono">Studio</span>
          <LogoMark height={72} className="lm-foot" large />
          <strong>The Ambience</strong>
          <span className="mono">Interior Design Studio</span>
        </div>
        <div className="cell"><span className="mono">Project</span><strong>Portfolio 2024</strong></div>
        <div className="cell"><span className="mono">Sheet</span><strong>A-08 / 08</strong></div>
        <div className="cell"><span className="mono">Scale</span><strong>NTS</strong></div>
        <div className="cell"><span className="mono">Status</span><strong>Issued</strong></div>
        <div className="cell"><span className="mono">Index</span>
          <nav className="cell-nav" aria-label="Footer">
            {links.map((l) => <button key={l.id} type="button" onClick={() => scrollToId(l.id)}>{l.label}</button>)}
          </nav>
        </div>
        <div className="cell"><span className="mono">Return</span>
          <button type="button" onClick={() => scrollToId('home')} style={{ textAlign: 'left' }}><strong>Back to top ↑</strong></button>
        </div>
      </div>

      <div className="foot-bar">
        <span>© 2024 The Ambience. Crafted with intention.</span>
        <span>Hotel lobbies · Restaurants · Cafés</span>
      </div>
    </footer>
  );
}
