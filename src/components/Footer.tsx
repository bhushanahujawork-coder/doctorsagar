"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" style={{ 
      padding: '6rem 0 4rem', 
      background: 'radial-gradient(ellipse at top, rgba(212,175,55,0.1) 0%, #050505 70%)',
      position: 'relative',
      borderTop: '1px solid rgba(212,175,55,0.2)'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* Logo Block */}
        <div style={{ marginBottom: '2rem' }}>
          <Image 
            src="/assets/logo/logo.webp" 
            alt="Nijanand Logo" 
            width={120} 
            height={120} 
            style={{ filter: 'brightness(0) invert(1)', objectFit: 'contain', margin: '0 auto' }}
          />
        </div>

        {/* Doctor / Brand Name */}
        <h2 className="font-serif text-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', letterSpacing: '0.02em' }}>
          Dr. Sagar's Nijanand Dental
        </h2>

        {/* Bio / Description */}
        <p style={{ 
          color: 'var(--foreground)', 
          fontSize: '1.1rem', 
          lineHeight: 1.8, 
          maxWidth: '700px', 
          marginBottom: '4rem',
          fontWeight: 300,
          opacity: 0.9
        }}>
          Jamnagar's premier dental clinic specializing in advanced implantology, full mouth rehabilitation, and comprehensive oral care with 10+ years of clinical excellence.
        </p>

        {/* Follow Us Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem', width: '100%', maxWidth: '400px' }}>
          <div style={{ height: '1px', flex: 1, background: 'rgba(212,175,55,0.3)' }}></div>
          <h4 style={{ color: '#fff', margin: 0, fontSize: '1.1rem', letterSpacing: '0.05em' }}>Follow Us</h4>
          <div style={{ height: '1px', flex: 1, background: 'rgba(212,175,55,0.3)' }}></div>
        </div>

        {/* Social Icons Row */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="https://www.facebook.com/bestdentistinjamnagar/" target="_blank" style={socialIconStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </Link>
          <Link href="https://www.instagram.com/dr.sagarbumtaria" target="_blank" style={socialIconStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </Link>
        </div>
      </div>

      {/* Scroll to Top Button - Fixed Position */}
      <button 
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'var(--primary)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000',
          boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
          transition: 'all 0.4s ease',
          zIndex: 1000,
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? 'visible' : 'hidden',
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
        className="scroll-top-btn"
      >
        <ArrowUp size={24} />
      </button>

      {/* Bottom Legal / Border */}
      <div style={{ 
        marginTop: '4rem', 
        paddingTop: '2rem', 
        borderTop: '1px solid rgba(212,175,55,0.2)', 
        textAlign: 'center',
        width: '100%',
        maxWidth: '1200px',
        marginInline: 'auto'
      }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} Nijanand Dental Care & Implant Centre. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const socialIconStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '12px',
  border: '1px solid rgba(212, 175, 55, 0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--foreground)',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  backgroundColor: 'rgba(255,255,255,0.02)'
};
