"use client";
import { ShieldCheck, Cpu, FlaskConical, HeartPulse, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Advanced Tech",
    desc: "Surgical precision powered by world-class imaging.",
    icon: <Cpu size={32} />
  },
  {
    title: "Global Standards",
    desc: "Strict clinical protocols exceeding international benchmarks.",
    icon: <ShieldCheck size={32} />
  },
  {
    title: "Sterilization",
    desc: "100% automated hospital-grade sterilization cycles.",
    icon: <FlaskConical size={32} />
  },
  {
    title: "Artisanal Care",
    desc: "Bespoke treatment journeys tailored to your unique biology.",
    icon: <HeartPulse size={32} />
  },
  {
    title: "Time Concierge",
    desc: "Seamless appointments with zero waiting period.",
    icon: <Clock size={32} />
  },
  {
    title: "Elite Facility",
    desc: "Experience dentistry in a sanctuary of luxury.",
    icon: <Sparkles size={32} />
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-us">
      <div className="container">
        <div className="services-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="text-gradient-gold">Why Discerning Patients Choose Us</h2>
          <p style={{ color: 'var(--text-muted)' }}>The intersection of medical mastery and boutique hospitality.</p>
        </div>
        <div className="grid-3">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="luxury-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>{feature.icon}</div>
              <h3 className="text-white" style={{ marginBottom: '1rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
