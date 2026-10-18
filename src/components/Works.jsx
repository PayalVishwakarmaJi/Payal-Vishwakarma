import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Heading from './Heading';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

const projects = [
  {
    no: '01', title: 'Courtyard Café', type: 'Hospitality', theme: 'Indoor–Outdoor',
    note: 'A café plan that flows from an open kitchen and tree-lit courtyard to a long terrace seating deck.',
    thumb: '/images/cafe-plan-sm.webp', full: '/images/cafe-plan.webp',
  },
  {
    no: '02', title: 'Hotel Lobby', type: 'Hospitality', theme: 'Buddhist',
    note: 'A calm arrival around a central sculpture, wrapped in greenery, with curved reception and managing desks.',
    thumb: '/images/hotel-lobby-sm.webp', full: '/images/hotel-lobby.webp',
  },
  {
    no: '03', title: 'Restaurant', type: 'Hospitality', theme: 'Tropical Boho',
    note: 'Big windows for quiet solo dining, cosy circular lounges and a warm bar, planted for comfort and peace.',
    thumb: '/images/restaurant-sm.webp', full: '/images/restaurant.webp',
  },
];

function Plate({ p, onOpen }) {
  return (
    <article className="plate">
      <motion.div
        className="plate-info"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <span className="plate-no">{p.no}</span>
        <h3 className="plate-title">{p.title}</h3>
        <p className="mono plate-meta">{p.type} — {p.theme}</p>
        <p className="plate-note">{p.note}</p>
        <button type="button" className="plate-link mono" onClick={() => onOpen(p)}>Open full plan →</button>
      </motion.div>

      <button type="button" className="plate-img" data-cursor="View" onClick={() => onOpen(p)} aria-label={`Open ${p.title} plan full size`}>
        <img src={p.thumb} alt={`${p.title} layout plan`} loading="lazy" decoding="async" />
        <motion.span
          className="plate-curtain"
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        />
      </button>
    </article>
  );
}

export default function Works() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <section id="work" className="section wrap">
      <div className="sheet-tag"><b>A-03</b> Selected works <i /> {projects.length} drawings</div>

      <div className="works-head">
        <Heading text="Selected *works*" />
        <p className="mono dim">Click a drawing<br />to open the full plan</p>
      </div>

      <div className="plates">
        {projects.map((p) => <Plate key={p.no} p={p} onOpen={setActive} />)}
      </div>

      {createPortal(
        <AnimatePresence>
          {active && (
            <motion.div
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setActive(null)}
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
            >
              <span className="lightbox-cap">{active.no} — {active.title}</span>
              <button type="button" className="lightbox-x" onClick={() => setActive(null)}>Close ×</button>
              <motion.img
                src={active.full}
                alt={`${active.title} layout plan`}
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
