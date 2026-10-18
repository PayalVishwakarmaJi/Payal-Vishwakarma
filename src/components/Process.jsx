import React, { useRef } from 'react';
import Heading from './Heading';
import { motion, useScroll, useSpring } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

const steps = [
  { no: '01', title: 'Consult', text: 'We listen first: how you live, work or host guests, and the story the space should tell. Budget and timeline are set here.' },
  { no: '02', title: 'Concept', text: 'A mood board, material palette and design theme, so the direction is clear before a single line is drawn.' },
  { no: '03', title: 'Draw', text: 'Dimensioned plans, furniture layouts, planting and circulation. Every seat, desk and walkway is resolved on paper.' },
  { no: '04', title: 'Realise', text: 'Sourcing, vendor coordination and on-site styling, so what was drawn is what you walk into.' },
];

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.6'] });
  const rail = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="process" className="section wrap dark">
      <div className="sheet-tag"><b>A-05</b> Process <i /> Four stages</div>

      <div className="proc-head">
        <Heading text="From first chat *to last chair.*" />
      </div>

      <div ref={ref} className="proc">
        <div className="proc-rail"><motion.i style={{ scaleX: rail }} /></div>
        {steps.map((s, i) => (
          <motion.div
            key={s.no}
            className="step"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
          >
            <span className="step-no">{s.no}</span>
            <h3 className="step-title">{s.title}</h3>
            <p className="step-text">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
