"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-150 flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Image_principal.jpeg"
          alt="Construcción y desarrollo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Construimos proyectos que <span className="text-accent">transforman el futuro</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Soluciones integrales en ingeniería, obras civiles y arquitectura. Infraestructura moderna, eficiente y segura para tus necesidades.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/servicios"
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Solicitar Cotización <ArrowRight size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/51932682104"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Contactar por WhatsApp <MessageCircle size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
