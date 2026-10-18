import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { scrollToId } from '../lenis';

const EASE = [0.22, 1, 0.36, 1];
const lines = [['We draw rooms'], ["you'll want to"], ['live ', 'in.']];

const draw = (go, delay, dur = 1.6) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: go ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 },
  transition: { pathLength: { duration: dur, delay, ease: 'easeInOut' }, opacity: { duration: 0.1, delay } },
});

function Plan({ go }) {
  return (
    <svg viewBox="0 0 800 540" fill="none" aria-hidden="true" stroke="currentColor" strokeLinecap="square">
      {/* floor boards */}
      <motion.g strokeWidth="0.6" initial={{ opacity: 0 }} animate={{ opacity: go ? 0.16 : 0 }} transition={{ duration: 1.6, delay: 1.6 }}>
        {Array.from({ length: 15 }).map((_, i) => <path key={i} d={`M${70 + (i + 1) * 41} 94 V466`} />)}
      </motion.g>
      {/* walls */}
      <motion.path d="M70 90 H730 V470 H70 Z" strokeWidth="4" {...draw(go, 0.1, 2.2)} />
      {/* windows (double line) */}
      <motion.path d="M190 90 H330 M470 90 H620" strokeWidth="9" stroke="var(--clay)" {...draw(go, 1.2, 1)} />
      {/* door swing */}
      <motion.path d="M330 470 V402 M330 402 A68 68 0 0 1 398 470" strokeWidth="1.2" {...draw(go, 1.4, 1.2)} />
      {/* rug */}
      <motion.rect x="118" y="212" width="214" height="108" strokeWidth="0.8" strokeDasharray="5 5" {...draw(go, 2.0, 1.4)} />
      {/* sofa */}
      <motion.rect x="105" y="125" width="220" height="74" strokeWidth="1.4" fill="rgba(228,100,63,0.22)" {...draw(go, 1.6)} />
      <motion.path d="M178 129 V195 M252 129 V195" strokeWidth="0.8" {...draw(go, 2, 0.8)} />
      <motion.rect x="150" y="232" width="130" height="54" strokeWidth="1.4" {...draw(go, 2.1)} />
      {/* round table + chairs */}
      <motion.circle cx="565" cy="290" r="62" strokeWidth="1.4" fill="rgba(241,237,229,0.07)" {...draw(go, 1.9, 1.8)} />
      <motion.circle cx="565" cy="290" r="44" strokeWidth="0.8" {...draw(go, 2.4, 1.2)} />
      {[[565, 188], [565, 392], [463, 290], [667, 290]].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="17" strokeWidth="1.1" {...draw(go, 2.6 + i * 0.1, 0.9)} />
      ))}
      {/* plant */}
      <motion.circle cx="690" cy="135" r="30" strokeWidth="1.1" {...draw(go, 2.8, 1.1)} />
      <motion.path d="M690 135 V107 M690 135 L714 121 M690 135 L714 149 M690 135 V163 M690 135 L666 149 M690 135 L666 121" strokeWidth="0.8" {...draw(go, 3, 0.9)} />
      {/* dimension line */}
      <motion.path d="M70 52 H730 M70 40 V64 M730 40 V64" strokeWidth="1" {...draw(go, 0.5, 1.8)} />
      <motion.path d="M770 90 V470 M758 90 H782 M758 470 H782" strokeWidth="1" {...draw(go, 0.7, 1.8)} />
      {/* north arrow */}
      <motion.path d="M70 520 V498 M70 498 L62 510 M70 498 L78 510" strokeWidth="1.2" {...draw(go, 3.1, 0.8)} />
      {/* scale bar */}
      <motion.path d="M610 515 H730 M610 508 V522 M670 508 V522 M730 508 V522" strokeWidth="1" {...draw(go, 3.1, 0.8)} />
    </svg>
  );
}

export default function Hero({ go }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section id="home" ref={ref} className="hero wrap dark">
      <div className="sheet-tag"><b>A-01</b> Index <i /> Interior Design Studio</div>

      <div className="hero-grid">
        <div>
          <h1 className="hero-title" aria-label="We draw rooms you'll want to live in.">
            {lines.map((parts, i) => (
              <span className="ln" key={i}>
                <motion.span
                  style={{ display: 'block' }}
                  initial={{ y: '105%' }}
                  animate={go ? { y: 0 } : { y: '105%' }}
                  transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease: EASE }}
                >
                  {parts.map((p, j) => (j === 1 ? <em key={j}>{p}</em> : p))}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p className="hero-sub" initial={{ opacity: 0, y: 16 }} animate={go ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.8, ease: EASE }}>
            The Ambience designs hotel lobbies, restaurants and cafés with emotion, craft and quiet luxury, from first plan to last chair.
          </motion.p>

          <motion.div className="hero-cta" initial={{ opacity: 0, y: 16 }} animate={go ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 1, ease: EASE }}>
            <button type="button" className="btn btn-solid" onClick={() => scrollToId('work')}>
              View the works <ArrowDownRight size={16} />
            </button>
            <button type="button" className="btn btn-line" onClick={() => scrollToId('contact')}>
              Start a project
            </button>
          </motion.div>
        </div>

        <motion.div className="hero-draw" style={{ y }}>
          <svg className="badge" viewBox="0 0 120 120" aria-hidden="true">
            <defs><path id="badgePath" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" /></defs>
            <text fontSize="9.4" letterSpacing="3.1" fill="currentColor">
              <textPath href="#badgePath">INTERIOR DESIGN STUDIO · EST. 2024 · THE AMBIENCE ·</textPath>
            </text>
            <circle cx="60" cy="60" r="5" fill="var(--clay-bright)" />
          </svg>
          <Plan go={go} />
          <motion.span className="note" style={{ left: '8%', top: '4%' }} initial={{ opacity: 0 }} animate={{ opacity: go ? 1 : 0 }} transition={{ delay: 2.4 }}>58′-1″</motion.span>
          <motion.span className="note" style={{ right: '0', top: '44%' }} initial={{ opacity: 0 }} animate={{ opacity: go ? 1 : 0 }} transition={{ delay: 2.6 }}>31′-2″</motion.span>
          <motion.span className="note" style={{ left: '7%', bottom: '0' }} initial={{ opacity: 0 }} animate={{ opacity: go ? 1 : 0 }} transition={{ delay: 3.2 }}>N</motion.span>
          <motion.span className="note" style={{ right: '6%', bottom: '0' }} initial={{ opacity: 0 }} animate={{ opacity: go ? 1 : 0 }} transition={{ delay: 3.2 }}>Scale 1:50</motion.span>
        </motion.div>
      </div>

      <div className="hero-foot mono">
        <ul>
          <li>Hotel lobbies</li>
          <li>Restaurants</li>
          <li>Cafés</li>
        </ul>
        <span className="dim">Scroll ↓</span>
      </div>
    </section>
  );
}
