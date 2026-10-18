import React, { useState } from 'react';
import Heading from './Heading';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

// Update these when the studio's real details are ready.
const EMAIL = 'payalvishwakarma.in@gmail.com';
const PHONE = '+91 92054 20573';
const LINKEDIN = { label: 'payal-vishwakarma', href: 'https://www.linkedin.com/in/payal-vishwakarma-a06716262' };

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' });
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  // No backend: compose an email in the visitor's mail app.
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${f.name || 'a visitor'}`);
    const body = encodeURIComponent(`${f.message}\n\n— ${f.name}\n${f.email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section wrap sand">
      <div className="sheet-tag"><b>A-07</b> Contact <i /> Let’s talk</div>

      <Heading as="h2" className="contact-big" text="Let’s draw *something* beautiful." />

      <div className="contact-grid">
        <ul className="reach">
          <li><span className="mono dim">Email</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          <li><span className="mono dim">Phone</span><a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a></li>
          <li><span className="mono dim">LinkedIn</span><a href={LINKEDIN.href} target="_blank" rel="noopener noreferrer">{LINKEDIN.label}</a></li>
        </ul>

        <form className="form" onSubmit={submit}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="c-name">Name</label>
              <input id="c-name" required value={f.name} onChange={set('name')} placeholder="Your name" autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" type="email" required value={f.email} onChange={set('email')} placeholder="you@email.com" autoComplete="email" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="c-msg">Your space</label>
            <textarea id="c-msg" rows={3} required value={f.message} onChange={set('message')} placeholder="Tell us about the space, the mood, the budget…" />
          </div>
          <div>
            <button type="submit" className="btn btn-solid" data-cursor="Send">Send enquiry →</button>
          </div>
          <p className="form-note">Opens your email app with the message ready to send.</p>
        </form>
      </div>
    </section>
  );
}
