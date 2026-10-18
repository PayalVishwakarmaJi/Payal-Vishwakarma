import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

const words = [
  { w: 'We' }, { w: 'design' }, { w: 'spaces' }, { w: 'that' }, { w: 'feel' }, { w: 'like', em: true }, { w: 'you:', em: true },
  { w: 'calm' }, { w: 'lobbies,', em: true }, { w: 'warm' }, { w: 'restaurants', em: true }, { w: 'and' }, { w: 'sunlit' }, { w: 'cafés,', em: true },
  { w: 'planned' }, { w: 'down' }, { w: 'to' }, { w: 'the' }, { w: 'last' }, { w: 'chair.' },
];

const manifesto = [
  'I’ve always wondered how things are made, how spaces come alive.',
  'Not just built… but felt.',
  'For me, beauty isn’t extra. It’s essential.',
  'A home should reflect your personality.',
];

const Word = ({ w, em, i, n, progress }) => {
  const s = (i / n) * 0.82;
  const opacity = useTransform(progress, [s, s + 0.16], [0.12, 1]);
  return (
    <motion.span className={em ? 'w em' : 'w'} style={{ opacity }}>{w}</motion.span>
  );
};

export default function Studio() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.5'] });

  return (
    <section id="studio" className="section wrap">
      <div className="sheet-tag"><b>A-02</b> Studio <i /> Who we are</div>

      <div className="studio-grid">
        <p className="mono dim">(The studio)</p>
        <p ref={ref} className="stmt" aria-label={words.map((x) => x.w).join(' ')}>
          {words.map((t, i) => <Word key={i} {...t} i={i} n={words.length} progress={scrollYProgress} />)}
        </p>
      </div>

      <ul className="manifesto">
        {manifesto.map((m, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, delay: i * 0.05, ease: EASE }}
          >
            <span>0{i + 1}</span>{m}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
