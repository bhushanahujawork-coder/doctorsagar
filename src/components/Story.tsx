"use client";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="story">
      <div className="container">
        <motion.div 
          className="story-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-gradient">Redefining Dental Care in Jamnagar</h2>
          <p>
            We started with a vision to bring advanced and ethical dentistry to Jamnagar. Today, we provide complete dental solutions under one roof with a focus on comfort, precision, and long-term results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
