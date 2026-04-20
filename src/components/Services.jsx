import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Palette, Lightbulb, Ruler } from 'lucide-react';

export default function Services() {
  const services = [
    { 
      id: "01",
      icon: Compass, 
      title: "Space Planning",
      desc: "Optimizing flow and spatial layouts to maximize both function and feeling in every room."
    },
    { 
      id: "02",
      icon: Palette, 
      title: "Material Selection",
      desc: "Curating bespoke textures, stones, organic woods, and fabrics that align with your lifestyle."
    },
    { 
      id: "03",
      icon: Lightbulb, 
      title: "Lighting Design",
      desc: "Layering ambient, task, and architectural lighting to sculpt depth and mood into the space."
    },
    { 
      id: "04",
      icon: Ruler, 
      title: "Custom Furniture",
      desc: "Designing and sourcing unique, perfectly scaled pieces that tie the entire aesthetic together."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="section services-section" style={{ position: 'relative', overflowX: 'hidden' }}>
      
      {/* Decorative Background Blob */}
      <div 
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, var(--color-vanilla) 0%, transparent 60%)',
          filter: 'blur(80px)',
          opacity: 0.3,
          zIndex: 0
        }}
      />

      <div className="services-container" style={{ position: 'relative', zIndex: 5 }}>
        
        <div className="services-header" style={{ marginBottom: '6rem', maxWidth: '40rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-tobacco)' }}></div>
            <p style={{ fontSize: '1rem', color: 'var(--color-mountain)', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>
              What I Do
            </p>
          </div>
          <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-mahogany)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            The Architecture <br /> <span style={{ fontFamily: 'var(--font-script)', fontSize: '5rem', color: 'var(--color-tobacco)', transform: 'rotate(-4deg)', display: 'inline-block', lineHeight: 0.6 }}>of Comfort</span>
          </h2>
        </div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              whileHover={{ 
                y: -15, 
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                boxShadow: '0 30px 60px rgba(181, 158, 125, 0.15)',
                borderColor: 'var(--color-tobacco)'
              }}
              className="glass"
              style={{
                position: 'relative',
                padding: '4rem 3rem',
                borderRadius: '2rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
            >
              {/* Massive background number */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  fontSize: '12rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  color: 'var(--color-vanilla)',
                  opacity: 0.5,
                  zIndex: 0,
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}
              >
                {service.id}
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div 
                  style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '2rem',
                    boxShadow: '0 10px 30px rgba(181, 158, 125, 0.1)'
                  }}
                >
                  <service.icon size={24} color="var(--color-tobacco)" />
                </div>

                <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', color: 'var(--color-mahogany)', marginBottom: '1rem', lineHeight: 1.2 }}>
                  {service.title}
                </h3>

                <p style={{ fontSize: '1rem', color: 'var(--color-mountain)', lineHeight: 1.6, margin: 0 }}>
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
