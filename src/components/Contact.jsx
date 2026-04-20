import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Link2, ArrowRight, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "payalvishwakarma.in@gmail.com",
      href: "mailto:payalvishwakarma.in@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 92054 20573",
      href: "tel:+919205420573"
    },
    {
      icon: Link2,
      label: "LinkedIn",
      value: "payal-vishwakarma",
      href: "https://www.linkedin.com/in/payal-vishwakarma-a06716262"
    }
  ];

  return (
    <section className="section contact-section" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Radial mood glow */}
      <div className="contact-mood-bg"></div>
      {/* Secondary glow */}
      <div style={{
        position: 'absolute', top: '20%', right: '-200px',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, var(--color-sand) 0%, transparent 60%)',
        filter: 'blur(80px)', opacity: 0.3, zIndex: 0, pointerEvents: 'none'
      }}/>

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 5, padding: '0 2rem' }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{ marginBottom: '5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-tobacco)' }}></div>
            <p style={{ fontSize: '1rem', color: 'var(--color-mountain)', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>
              Get In Touch
            </p>
          </div>
          <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-mahogany)', lineHeight: 1.1, margin: 0 }}>
            Let's design something <br/>
            <span style={{ fontFamily: 'var(--font-script)', fontSize: '6rem', color: 'var(--color-tobacco)', transform: 'rotate(-3deg)', display: 'inline-block', lineHeight: 0.6 }}>
              beautiful
            </span> together.
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
          <div className="contact-inner-grid">

            {/* Left: Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              {contactLinks.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  whileHover={{ x: 6 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1.25rem',
                    padding: '1.25rem 1.5rem',
                    borderRadius: '1.25rem',
                    background: 'rgba(255,255,255,0.25)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px rgba(88,71,56,0.05)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    width: '2.75rem', height: '2.75rem', borderRadius: '50%',
                    background: 'rgba(181, 158, 125, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <item.icon size={18} color="var(--color-tobacco)" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-mountain)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 0.25rem' }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-mahogany)', margin: 0, fontWeight: 500, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                      {item.value}
                    </p>
                  </div>
                  <ArrowRight size={16} color="var(--color-tobacco)" style={{ marginLeft: 'auto', opacity: 0.5, flexShrink: 0 }} />
                </motion.a>
              ))}
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass"
              style={{ padding: 'clamp(1.5rem, 4vw, 3rem)', borderRadius: '2rem' }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '4rem 2rem' }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✉️</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-mahogany)', marginBottom: '1rem' }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: 'var(--color-mountain)' }}>
                    Thank you for reaching out. Payal will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--color-mahogany)', marginBottom: '2rem' }}>
                    Send a Message
                  </h3>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="contact-name-email-grid">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.8rem', color: 'var(--color-mountain)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Name</label>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={formState.name}
                          onChange={e => setFormState(p => ({ ...p, name: e.target.value }))}
                          className="contact-input"
                          required
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.8rem', color: 'var(--color-mountain)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Email</label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={formState.email}
                          onChange={e => setFormState(p => ({ ...p, email: e.target.value }))}
                          className="contact-input"
                          required
                        />
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label style={{ fontSize: '0.8rem', color: 'var(--color-mountain)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Your Vision</label>
                      <textarea
                        placeholder="Tell me about your space, your dream, your budget..."
                        rows="5"
                        value={formState.message}
                        onChange={e => setFormState(p => ({ ...p, message: e.target.value }))}
                        className="contact-input contact-textarea"
                        required
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(88,71,56,0.2)' }}
                      whileTap={{ scale: 0.97 }}
                      className="btn-primary"
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '1.25rem 2.5rem', alignSelf: 'flex-end', width: '100%' }}
                    >
                      Send Message <Send size={18} />
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          style={{ marginTop: '6rem', paddingTop: '3rem', borderTop: '1px solid rgba(88,71,56,0.1)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}
        >
          <p style={{ color: 'var(--color-mountain)', fontSize: '0.9rem', margin: 0 }}>
            © 2024 Payal Vishwakarma. Crafted with intention.
          </p>
          <p style={{ color: 'var(--color-mountain)', fontSize: '0.9rem', margin: 0, fontFamily: 'var(--font-script)', fontSize: '1.2rem' }}>
            Payal Vishwakarma
          </p>
        </motion.div>

      </div>
    </section>
  );
}
