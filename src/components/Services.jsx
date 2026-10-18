import React from 'react';
import Heading from './Heading';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

const services = [
  { t: 'Space Planning', d: 'Flow and layouts that make every room work as well as it feels, from reception counters to dining floors.' },
  { t: 'Material Selection', d: 'Textures, stones, organic woods and fabrics curated to suit your lifestyle and stand up to daily use.' },
  { t: 'Lighting Design', d: 'Ambient, task and accent lighting layered to sculpt depth and mood into the space.' },
  { t: 'Custom Furniture', d: 'Perfectly scaled pieces, designed or sourced, that tie the whole aesthetic together.' },
  { t: 'Biophilic Styling', d: 'Planting and natural elements woven through the layout for calm, cosy and restorative interiors.' },
];

export default function Services() {
  return (
    <section id="services" className="section wrap">
      <div className="sheet-tag"><b>A-06</b> Services <i /> What we do</div>

      <div className="svc-grid">
        <div className="svc-sticky">
          <Heading text="The architecture *of comfort.*" />
          <p className="mono dim" style={{ marginTop: '1.5rem' }}>Five disciplines,<br />one coherent space.</p>
        </div>

        <ul className="svc-list">
          {services.map((s, i) => (
            <motion.li
              key={s.t}
              className="svc"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: EASE }}
            >
              <span className="svc-n">0{i + 1}</span>
              <span className="svc-t">{s.t}</span>
              <span className="svc-arrow" aria-hidden="true">→</span>
              <span className="svc-d">{s.d}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
