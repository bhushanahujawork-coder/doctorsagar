"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Consultation", desc: "A private dialogue to map your clinical journey." },
  { num: "02", title: "Imaging", desc: "Advanced diagnostics to reveal hidden topographies." },
  { num: "03", title: "Artistry", desc: "Bespoke treatment design tailored to your biology." },
  { num: "04", title: "Procedure", desc: "Artisanal execution with surgical precision." },
  { num: "05", title: "Sanctuary", desc: "Post-operative care in a restorative environment." },
];

export default function Process() {
  return (
    <section className="process-section section-fade" style={{ background: '#080808' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <span className="text-gold" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>The Journey</span>
          <h2 className="text-gradient-gold" style={{ marginTop: '1rem' }}>Surgical Precision. Seamless Care.</h2>
        </div>

        <div className="grid-5" style={{ position: 'relative' }}>
          {/* Connector Line (Desktop) */}
          <div style={{ position: 'absolute', top: '40px', left: '10%', width: '80%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(212, 175, 55, 0.2), transparent)', zIndex: 0 }} className="process-line"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
            >
              <div 
                className="step-circle" 
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  background: '#121212', 
                  border: '1px solid rgba(212, 175, 55, 0.3)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 2rem',
                  color: 'var(--primary)',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.05)',
                  transition: '0.4s'
                }}
              >
                {step.num}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>{step.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '200px', margin: '0 auto' }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 992px) {
          .process-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
          .process-line { display: none; }
        }
        .step-circle:hover { border-color: var(--primary); transform: scale(1.1); box-shadow: 0 0 40px rgba(212, 175, 55, 0.2); }
      `}</style>
    </section>
  );
}
