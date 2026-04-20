import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Box, Sofa, MessageCircle } from 'lucide-react';

const services = [
  { title: "Freelance ID", icon: PenTool, delay: 0 },
  { title: "Space Planning", icon: Box, delay: 0.2 },
  { title: "Home Styling", icon: Sofa, delay: 0.4 },
  { title: "Consultation", icon: MessageCircle, delay: 0.6 }
];

export default function Services() {
  return (
    <section className="section services-section">
      <div className="services-container">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="services-header"
        >
          <h2 className="services-title">Expertise & Services</h2>
          <p className="services-subtitle">Elevating spaces with meticulous attention to detail and personalized design solutions.</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: service.delay }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(181, 158, 125, 0.15)" }}
                className="service-card"
              >
                <div className="service-icon-wrapper">
                  <Icon size={32} color="var(--color-tobacco)" />
                </div>
                <h4 className="service-title">{service.title}</h4>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
