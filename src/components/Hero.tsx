"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero" style={{ padding: 0, height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Background with Gradient Overlay for text readability */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Image 
          src="/assets/images/hero_bg.webp" 
          alt="Luxury Dental Clinic" 
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.1) 100%)', zIndex: 1 }}></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 5, marginTop: '5rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ maxWidth: '850px', width: '100%' }}
        >
          <h1 className="font-serif" style={{ marginBottom: '1.5rem', textTransform: 'uppercase', lineHeight: 1.1, color: '#D4AF37' }}>
            <span style={{ color: '#fff' }}>Leave The Fear</span><br />
            At The Door.
          </h1>
          
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', marginBottom: '3rem', maxWidth: '550px', fontWeight: 300, lineHeight: 1.8 }}>
            We've created a judgment-free zone where your comfort is our top priority. Relax, we'll take it from here with world-class clinical precision.
          </p>
          
          <Link href="https://wa.me/919427776565" style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '1rem',
            background: 'var(--primary)', color: '#000', padding: '1rem 2.5rem', 
            borderRadius: '50px', fontWeight: 700, textTransform: 'uppercase', 
            letterSpacing: '0.05em', textDecoration: 'none', fontSize: '0.95rem',
            boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)', transition: 'all 0.3s ease'
          }}>
            Schedule Your First Visit <ArrowRight size={20} />
          </Link>

          {/* Hexagon Stats Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '2rem 1rem', marginTop: '4rem', maxWidth: '800px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div className="hexagon"><Activity size={24} /></div>
              <div style={{ textAlign: 'center' }}>
                <div className="text-gradient-gold" style={{ fontSize: '1.4rem', fontWeight: 800 }}>30K+</div>
                <div style={{ fontSize: '0.75rem', color: '#fff', fontWeight: 500 }}>Root Canal</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div className="hexagon"><ShieldCheck size={24} /></div>
              <div style={{ textAlign: 'center' }}>
                <div className="text-gradient-gold" style={{ fontSize: '1.4rem', fontWeight: 800 }}>4000+</div>
                <div style={{ fontSize: '0.75rem', color: '#fff', fontWeight: 500 }}>Crowns & Bridges</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div className="hexagon"><Stethoscope size={24} /></div>
              <div style={{ textAlign: 'center' }}>
                <div className="text-gradient-gold" style={{ fontSize: '1.4rem', fontWeight: 800 }}>2000+</div>
                <div style={{ fontSize: '0.75rem', color: '#fff', fontWeight: 500 }}>Dental Implants</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div className="hexagon"><Sparkles size={24} /></div>
              <div style={{ textAlign: 'center' }}>
                <div className="text-gradient-gold" style={{ fontSize: '1.4rem', fontWeight: 800 }}>500+</div>
                <div style={{ fontSize: '0.75rem', color: '#fff', fontWeight: 500 }}>Smile Design</div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Bottom Wave Divider matching background color */}
      <div style={{ position: 'absolute', bottom: -2, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0, zIndex: 10 }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '80px', transform: 'rotate(180deg)' }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C61.4,36.5,145.4,69.5,214.4,72,250.3,73.4,286.3,62.8,321.39,56.44Z" fill="var(--background)"></path>
        </svg>
      </div>
    </section>
  );
}
