"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed"
      ></div>
      <div className="absolute inset-0 bg-primary/80 z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para desarrollar tu <span className="text-accent">próximo proyecto</span>?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a materializar tus ideas con los más altos estándares de calidad y seguridad.
          </p>
          
          <a
            href="https://wa.me/51932682104"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <MessageCircle size={24} />
            Hablar con un Asesor
          </a>
        </motion.div>
      </div>
    </section>
  );
}
