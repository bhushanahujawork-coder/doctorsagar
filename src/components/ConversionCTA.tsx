"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ConversionCTA() {
  return (
    <section className="cta-section section-fade">
      <div className="container">
        <motion.div 
          className="luxury-card"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ 
            textAlign: 'center', 
            padding: '6rem 2rem', 
            background: 'linear-gradient(135deg, #121212 0%, #0B0B0B 100%)',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }}
        >
          <div className="spotlight-glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.1 }}></div>
          
          <h2 className="text-gradient-gold" style={{ marginBottom: '1.5rem', fontWeight: 800 }}>Start Your Transformation</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Exceptional care. Exceptional results. Join 30,000+ satisfied patients and experience the peak of dental excellence.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="https://wa.me/919427776565" className="btn btn-primary">Book Appointment</Link>
            <Link href="https://wa.me/919427776565" className="btn btn-outline">Consultation</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
