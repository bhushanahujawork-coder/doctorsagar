"use client";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, Star, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutDoctor() {
  return (
    <section id="about" className="about section-fade">
      <div className="container grid-2" style={{ alignItems: 'center' }}>
        <motion.div 
          className="doctor-img-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ position: 'relative' }}
        >
          {/* Soft Gold Glow Behind Image */}
          <div style={{ position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', background: 'rgba(212, 175, 55, 0.15)', filter: 'blur(80px)', zIndex: 0 }}></div>
          
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.3)', boxShadow: '0 0 40px rgba(212, 175, 55, 0.1)', zIndex: 1, background: 'transparent' }}>
            <Image 
              src="/assets/images/doctor.webp" 
              alt="Dr. Sagar Bumtaria" 
              width={600}
              height={700}
              style={{ objectFit: 'cover', width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
              quality={90}
            />
          </div>
          
          <div className="luxury-card gold-glow" style={{ position: 'relative', marginTop: '-3rem', marginLeft: 'auto', marginRight: 'auto', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center', width: '90%', maxWidth: '320px', zIndex: 5, borderRadius: '15px' }}>
            <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '0.8rem', borderRadius: '12px' }}>
              <Star className="text-gold" fill="#D4AF37" />
            </div>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>10+ Years</div>
              <div style={{ fontSize: '0.7rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Clinical Mastery</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="doctor-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <div style={{ width: '30px', height: '1px', background: 'var(--primary)' }}></div>
            <span className="text-gold" style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Expert Endodontist</span>
          </div>
          
          <h2 className="text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '2rem' }}>Dr. Sagar Bumtaria</h2>
          
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', marginBottom: '3rem', lineHeight: '1.8', fontWeight: 300 }}>
            Jamnagar’s premiere Endodontist, Dr. Sagar Bumtaria, combines profound medical expertise with an unwavering dedication to aesthetic perfection. With a legacy of over 30,000 procedures, he redefines the standard of dental excellence.
          </p>

          <div className="highlights-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '10px', borderRadius: '10px' }}><GraduationCap size={20} className="text-gold" /></div>
              <div>
                <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '0.3rem' }}>BDS, MDS</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Specialized Endodontist</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '10px', borderRadius: '10px' }}><CheckCircle2 size={20} className="text-gold" /></div>
              <div>
                <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '0.3rem' }}>Advanced RCT</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Precision Micro-Dentistry</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '10px', borderRadius: '10px' }}><Star size={20} className="text-gold" /></div>
              <div>
                <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '0.3rem' }}>Implantology</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Surgical Excellence</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '10px', borderRadius: '10px' }}><Star size={20} className="text-gold" /></div>
              <div>
                <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '0.3rem' }}>Cosmetic Art</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Smile Reconstruction</p>
              </div>
            </div>
          </div>

          <Link href="https://wa.me/919427776565" className="btn btn-primary" style={{ padding: '1.2rem 3.5rem' }}>Consult Now</Link>
        </motion.div>
      </div>
    </section>
  );
}
