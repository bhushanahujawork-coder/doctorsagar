"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const questions = [
  { q: "How many times should you brush daily?", options: ["Once", "Twice a day", "Occasionally", "After snacks"], correct: 1, explanation: "Twice a day removes plaque and prevents cavities effectively." },
  { q: "What causes cavities?", options: ["Cold water", "Bacteria", "Drinking milk", "Brushing teeth"], correct: 1, explanation: "Bacteria in the mouth feed on sugar to create acids that damage teeth." },
  { q: "How often should you visit a dentist?", options: ["Every 6 months", "Once a year", "Only when in pain", "Never"], correct: 0, explanation: "Regular checkups help detect problems early before they become painful." },
  { q: "Best way to clean between teeth?", options: ["Toothpick", "Flossing", "Mouthwash", "Rinsing with water"], correct: 1, explanation: "Floss reaches areas between teeth that a toothbrush cannot." },
  { q: "What is a root canal?", options: ["Tooth removal", "Treat infected tooth pulp", "Teeth whitening", "Gum surgery"], correct: 1, explanation: "A root canal treatment saves a severely infected tooth by removing the pulp." },
  { q: "What damages teeth most?", options: ["Vegetables", "Sugar", "Plain water", "Fiber"], correct: 1, explanation: "Sugar is the primary fuel for acid-producing bacteria in the mouth." },
  { q: "What helps keep teeth strong?", options: ["Soda", "Calcium", "Candy", "Coffee"], correct: 1, explanation: "Calcium is a vital mineral for strengthening tooth enamel and bones." }
];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    if (index === questions[currentStep].correct) setScore(score + 1);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <section className="quiz-section" style={{ background: 'linear-gradient(to bottom, #0B0B0B, #121212)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="text-gold" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Interactive Experience</span>
          <h2 className="text-gradient-gold" style={{ marginTop: '1rem' }}>Test Your Dental IQ</h2>
        </div>

        <div className="quiz-wrapper" style={{ maxWidth: '750px', margin: '0 auto', perspective: '1000px' }}>
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div 
                key={currentStep}
                initial={{ rotateY: 180, opacity: 0, y: 30 }}
                animate={{ rotateY: 0, opacity: 1, y: 0 }}
                exit={{ rotateY: -180, opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="luxury-card quiz-card"
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2.5rem', alignItems: 'center' }}>
                    <span className="text-gold" style={{ fontSize: '0.9rem', fontWeight: 600 }}>Question {currentStep + 1} / {questions.length}</span>
                    <div style={{ width: '100px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ width: `${((currentStep + 1) / questions.length) * 100}%`, height: '100%', background: 'var(--primary)', transition: 'width 0.4s ease' }}></div>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', marginBottom: '2.5rem' }}>{questions[currentStep].q}</h3>

                  <div className="options-grid" style={{ display: 'grid', gap: '1rem', pointerEvents: selectedOption !== null ? 'none' : 'auto' }}>
                    {questions[currentStep].options.map((option, idx) => {
                      let statusClass = "";
                      if (selectedOption !== null) {
                        if (idx === questions[currentStep].correct) statusClass = "correct";
                        else if (idx === selectedOption) statusClass = "wrong";
                      }
                      return (
                        <div 
                          key={idx} 
                          className={`quiz-option ${statusClass}`}
                          onClick={() => handleOptionClick(idx)}
                        >
                          <span style={{ fontWeight: 500 }}>{option}</span>
                          {selectedOption !== null && idx === questions[currentStep].correct && <CheckCircle2 size={20} color="#2ecc71" />}
                          {selectedOption !== null && idx === selectedOption && idx !== questions[currentStep].correct && <XCircle size={20} color="#e74c3c" />}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                  {selectedOption !== null && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.05)', borderRadius: '10px', borderLeft: '4px solid var(--primary)', marginBottom: '1.5rem' }}
                    >
                      <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)' }}>
                        <strong style={{ color: 'var(--primary)' }}>Explanation:</strong> {questions[currentStep].explanation}
                      </p>
                    </motion.div>
                  )}

                  <div style={{ textAlign: 'right' }}>
                    <button 
                      className="btn btn-primary" 
                      disabled={selectedOption === null}
                      onClick={handleNext}
                      style={{ opacity: selectedOption === null ? 0.3 : 1, padding: '0.8rem 2.5rem' }}
                    >
                      {currentStep === questions.length - 1 ? "Finish Quiz" : "Next Question"} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="result"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="luxury-card"
                style={{ textAlign: 'center', padding: '4rem 2rem' }}
              >
                <div className="text-gradient-gold" style={{ fontSize: '5rem', fontWeight: 800, marginBottom: '1rem' }}>{score}/{questions.length}</div>
                <h2 className="text-white">Exceptional Awareness!</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>Your dental health knowledge is impressive. Maintain these high standards with a professional consultation.</p>
                
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="https://wa.me/919427776565" className="btn btn-primary">Consult Now</Link>
                  <Link href="https://wa.me/919427776565" className="btn btn-outline">Book Appointment</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
