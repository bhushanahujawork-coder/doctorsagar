"use client";
import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function FloatingActions() {
  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '20px', display: 'flex', flexDirection: 'column', gap: '15px', zIndex: 9999 }}>
      
      {/* WhatsApp Floating Button */}
      <Link 
        href="https://wa.me/919427776565" 
        target="_blank"
        style={{
          width: '48px', height: '48px', borderRadius: '50%', background: '#25D366',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)', transition: 'transform 0.3s ease'
        }}
        className="floating-btn"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
        </svg>
      </Link>

      {/* Call Floating Button */}
      <Link 
        href="tel:+919427776565" 
        style={{
          width: '48px', height: '48px', borderRadius: '50%', background: '#0066FF',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(0, 102, 255, 0.4)', transition: 'transform 0.3s ease'
        }}
        className="floating-btn"
      >
        <Phone size={24} color="white" fill="white" />
      </Link>

      <style jsx>{`
        .floating-btn:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
