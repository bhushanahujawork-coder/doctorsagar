"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

const images = [
  "/assets/images/gallery_1.webp",
  "/assets/images/gallery_2.webp",
  "/assets/images/hero_bg.webp",
  "/assets/images/rct_service.webp",
  "/assets/images/implant_service.webp",
  "/assets/images/smile_service.webp",
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery section-fade">
      <div className="container">
        <div className="services-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="text-gradient-gold">A Sanctuary of Precision</h2>
          <p style={{ color: 'var(--text-muted)' }}>Explore our world-class facilities and clinical environment.</p>
        </div>
        <div className="gallery-container">
          <div className="gallery-grid" style={{ 
            display: 'flex', 
            overflowX: 'auto', 
            gap: '1.5rem', 
            paddingBottom: '2rem',
            paddingRight: '1rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollSnapType: 'x mandatory'
          }}>
            {images.map((img, index) => (
              <motion.div 
                key={index}
                className="luxury-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                style={{ 
                  flex: '0 0 85%', 
                  scrollSnapAlign: 'start',
                  padding: '0', 
                  overflow: 'hidden', 
                  height: '450px', 
                  cursor: 'pointer', 
                  position: 'relative',
                  borderRadius: '18px'
                }}
              >
                <Image 
                  src={img} 
                  alt={`Sanctuary Gallery ${index + 1}`} 
                  fill 
                  style={{ objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.2, 1, 0.3, 1)' }}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', opacity: 0, transition: 'opacity 0.4s ease', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Maximize2 className="text-gold" size={32} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .gallery-grid::-webkit-scrollbar {
            display: none;
          }
          @media (min-width: 992px) {
            .gallery-grid {
              display: grid !important;
              grid-template-columns: repeat(3, 1fr) !important;
              overflow-x: visible !important;
              scroll-snap-type: none !important;
              padding-right: 0 !important;
            }
            .luxury-card {
              flex: none !important;
              height: 350px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
