"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "Root Canal Treatments", value: "30,000+" },
  { label: "Dental Implants", value: "2,000+" },
  { label: "Years Experience", value: "10+" },
  { label: "Sterilization Protocol", value: "100%" },
];

export default function TrustStats() {
  return (
    <section className="stats-section" style={{ background: '#080808' }}>
      <div className="container">
        <div className="stats-grid" style={{ marginTop: '0' }}>
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card gold-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-gradient-gold">{stat.value}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
