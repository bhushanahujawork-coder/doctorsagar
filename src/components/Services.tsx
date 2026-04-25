"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  { title: "Root Canal Treatment", desc: "Pain-free clinical precision.", img: "/assets/images/rct_service.webp" },
  { title: "Dental Implants", desc: "Permanent aesthetic restoration.", img: "/assets/images/implant_service.webp" },
  { title: "Smile Artistry", desc: "Bespoke cosmetic reconstruction.", img: "/assets/images/smile_service.webp" },
  { title: "Invisalign Elite", desc: "Invisible orthodontic excellence.", img: "/assets/images/braces_service.webp" },
  { title: "Full Rehabilitation", desc: "Total oral transformation.", img: "/assets/images/gallery_1.webp" },
  { title: "Surgical Mastery", desc: "Advanced dental architecture.", img: "/assets/images/gallery_2.webp" },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="text-gold" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Our Excellence</span>
          <h2 className="text-gradient-gold" style={{ marginTop: '1rem' }}>Clinical Specializations</h2>
        </div>

        <div className="grid-3">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="luxury-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              style={{ padding: '0', overflow: 'hidden' }}
            >
              <div style={{ position: 'relative', width: '100%', height: '280px', overflow: 'hidden' }}>
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  className="service-img"
                  loading="lazy"
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%', background: 'linear-gradient(to top, #121212, transparent)' }}></div>
              </div>
              <div style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{service.desc}</p>
                <div style={{ width: '40px', height: '2px', background: 'var(--primary)', marginTop: '1.5rem' }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .luxury-card:hover .service-img { transform: scale(1.1); }
      `}</style>
    </section>
  );
}
