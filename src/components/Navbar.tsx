"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} style={{ 
      position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', 
      width: '90%', maxWidth: '1200px', height: '80px', borderRadius: '50px',
      background: isScrolled ? 'rgba(10,10,10,0.95)' : 'rgba(0,0,0,0.5)',
      backdropFilter: 'blur(20px)', border: '1px solid rgba(212,175,55,0.15)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
      transition: 'all 0.4s ease'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0 2.5rem' }}>
        <Link href="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
          <Image 
            src="/assets/logo/logo.webp" 
            alt="Nijanand Dental Logo" 
            width={60} 
            height={60} 
            style={{ filter: 'brightness(0) invert(1)', objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* Mobile Menu Open Button */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(true)} style={{ display: 'none', background: 'none', border: 'none', color: '#D4AF37' }}>
          <Menu size={30} />
        </button>

        <div className={`nav-links ${isOpen ? "active" : ""}`} style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {/* Mobile Menu Close Button (Only visible in active state on mobile) */}
          {isOpen && (
            <button className="mobile-close-btn" onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', border: 'none', color: '#D4AF37', cursor: 'pointer' }}>
              <X size={40} />
            </button>
          )}

          <Link href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#services" className="nav-link" onClick={() => setIsOpen(false)}>Treatments</Link>
          <Link href="#about" className="nav-link" onClick={() => setIsOpen(false)}>The Doctor</Link>
          <Link href="#gallery" className="nav-link" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link href="https://wa.me/919427776565" style={{ 
            background: 'var(--primary)', color: '#000', padding: '0.8rem 2rem', 
            borderRadius: '30px', fontWeight: 700, textTransform: 'uppercase', 
            letterSpacing: '0.05em', textDecoration: 'none', fontSize: '0.85rem'
          }}>Book Appointment</Link>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 992px) {
          .mobile-menu-btn { display: block !important; }
          .nav-links {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(5,5,5,0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: center;
            opacity: ${isOpen ? '1' : '0'};
            visibility: ${isOpen ? 'visible' : 'hidden'};
            transition: all 0.4s ease;
            z-index: 1001;
            gap: 3rem !important;
          }
          .nav-link {
            font-size: 1.5rem !important;
            letter-spacing: 0.1em;
          }
        }
      `}</style>
    </nav>
  );
}
