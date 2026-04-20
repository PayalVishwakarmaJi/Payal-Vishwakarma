import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="section contact-section">
      
      {/* Background mood lighting */}
      <div className="contact-mood-bg"></div>

      <div className="contact-container glass">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-title"
        >
          Let’s design something <br/> beautiful together.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="contact-links"
        >
          <a href="mailto:payalvishwakarma.in@gmail.com">payalvishwakarma.in@gmail.com</a>
          <span className="contact-dot">•</span>
          <a href="https://www.linkedin.com/in/payal-vishwakarma-a06716262" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="contact-dot">•</span>
          <a href="#">+91 98765 43210</a>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="contact-form"
        >
          <div className="contact-input-row">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="contact-input"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="contact-input"
            />
          </div>
          <textarea 
            placeholder="Tell me about your space..." 
            rows="4"
            className="contact-input contact-textarea"
          ></textarea>
          
          <button type="submit" className="btn-primary contact-submit">
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
}
