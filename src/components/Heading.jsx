import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const word = { hidden: { y: '115%' }, show: { y: 0, transition: { duration: 1.05, ease: EASE } } };

// Headline that slides in word by word. Wrap words in *asterisks* for the italic clay accent.
export default function Heading({ text, className = 'h2', as = 'h2' }) {
  const Tag = as;
  const words = [];
  text.split('*').forEach((seg, i) => {
    seg.split(' ').filter(Boolean).forEach((w) => words.push({ w, em: i % 2 === 1 }));
  });

  return (
    <Tag className={className} aria-label={text.replace(/\*/g, '')}>
      <motion.span
        aria-hidden="true"
        style={{ display: 'block' }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {words.map(({ w, em }, i) => (
          <span key={i} className={em ? 'rw em' : 'rw'}>
            <motion.span variants={word} style={{ display: 'inline-block' }}>{w}</motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
