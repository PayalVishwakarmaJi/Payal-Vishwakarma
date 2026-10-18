import React from 'react';
import Heading from './Heading';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

const langs = [
  {
    no: '1', name: 'Buddhist', tag: 'Hotel Lobby', mood: 'Calm · Cosy · Warm nature',
    line: 'A lobby that feels like an exhale: a central sculpture ringed with greenery and soft, low seating.',
    bars: ['#7E9B62', '#C9B994', '#C9A39A', '#2B2B2B'],
  },
  {
    no: '2', name: 'Tropical Boho', tag: 'Restaurant', mood: 'Cosy · Comfort · Peace',
    line: 'Big windows, circular lounges and terracotta warmth, with planting woven through every corner.',
    bars: ['#C97A44', '#5F8A4B', '#BDB6A6', '#F3EBDD'],
  },
  {
    no: '3', name: 'Indoor–Outdoor', tag: 'Courtyard Café', mood: 'Open · Social · Sunlit',
    line: 'Trees, timber and checkered tile blur the line between the kitchen, the courtyard and the terrace.',
    bars: ['#E3B93C', '#B58A66', '#6F7F4A', '#3A3A3A'],
  },
];

export default function Approach() {
  return (
    <section id="approach" className="section wrap clay">
      <div className="sheet-tag"><b>A-04</b> Approach <i /> Design languages</div>

      <div className="lang-head">
        <Heading text="Every space gets *its own mood.*" />
      </div>

      <div className="lang">
        {langs.map((l, i) => (
          <motion.article
            key={l.name}
            className="lang-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
          >
            <span className="lang-tag">{l.tag}</span>
            <span className="lang-no">{l.no}</span>
            <h3 className="lang-name">{l.name}</h3>
            <p className="lang-mood">{l.mood}</p>
            <p className="lang-line">{l.line}</p>
            <div className="lang-bars" aria-label={`${l.name} palette`}>
              {l.bars.map((c, j) => (
                <motion.i
                  key={c}
                  style={{ background: c }}
                  title={c}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3 + j * 0.08, ease: EASE }}
                />
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
