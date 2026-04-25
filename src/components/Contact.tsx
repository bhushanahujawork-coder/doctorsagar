"use client";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="services-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="text-gradient-gold">Global Concierge</h2>
          <p style={{ color: 'var(--text-muted)' }}>We are at your service for any inquiries or clinical consultations.</p>
        </div>
        <div className="grid-2">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'left' }}
          >
            <div className="luxury-card" style={{ display: 'flex', gap: '1.5rem', padding: '2rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--primary)', flexShrink: 0 }}><MapPin size={24} /></div>
              <div>
                <h3 className="text-white" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Our Location</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>305-306-309, Oscar Complex, Opp. Rajlaxmi Bakery, Limda Lane, Jamnagar - 361001</p>
              </div>
            </div>
            
            <div className="luxury-card" style={{ display: 'flex', gap: '1.5rem', padding: '2rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--primary)', flexShrink: 0 }}><Phone size={24} /></div>
              <div>
                <h3 className="text-white" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Direct Line</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>+91 2882674545 | +91 9427776565</p>
              </div>
            </div>

            <div className="luxury-card" style={{ display: 'flex', gap: '1.5rem', padding: '2rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--primary)', flexShrink: 0 }}><Mail size={24} /></div>
              <div>
                <h3 className="text-white" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Digital Inquiries</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>nijdental@gmail.com</p>
              </div>
            </div>

            <div className="luxury-card" style={{ display: 'flex', gap: '1.5rem', padding: '2rem', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--primary)', flexShrink: 0 }}><Clock size={24} /></div>
              <div>
                <h3 className="text-white" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Practice Hours</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>Mon-Sat: 11 AM – 1 PM, 5 PM – 8 PM<br />Sunday: By Invitation</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ 
              borderRadius: '24px', 
              overflow: 'hidden', 
              height: '100%', 
              minHeight: '500px', 
              border: '1px solid rgba(212, 175, 55, 0.2)', 
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
              position: 'relative',
              background: '#111'
            }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.849495147363!2d70.06430867597143!3d22.472205179564887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39576abb6adb2b87%3A0x2f08a59a6302d54d!2sDr.%20Sagar's%20(MDS)%20Implant%20Studio%20%26%20Root%20Canal%20Hub%20(Endodontist)!5e0!3m2!1sen!2sin!4v1713950346000!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              style={{ border: 0, opacity: 0.9 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
