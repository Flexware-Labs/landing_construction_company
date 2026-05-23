"use client";

import { motion } from "framer-motion";
import { Shield, Award, Clock, Lightbulb, HardHat, TrendingUp } from "lucide-react";

const reasons = [
  {
    title: "Respaldo Técnico Profesional",
    description: "Contamos con un staff de ingenieros civiles, arquitectos y técnicos altamente capacitados y comprometidos con la excelencia estructural.",
    icon: <HardHat size={32} />
  },
  {
    title: "Garantía de Calidad",
    description: "Aplicamos rigurosos controles de calidad en cada etapa, utilizando únicamente materiales certificados y procesos constructivos garantizados.",
    icon: <Award size={32} />
  },
  {
    title: "Seguridad Integral (Cero Accidentes)",
    description: "Implementamos estrictos protocolos de seguridad y salud en el trabajo (SST) para proteger la vida de nuestro personal y la integridad de la obra.",
    icon: <Shield size={32} />
  },
  {
    title: "Cumplimiento y Puntualidad",
    description: "Respetamos estrictamente los cronogramas de obra establecidos. Entregamos proyectos a tiempo y dentro del presupuesto pactado.",
    icon: <Clock size={32} />
  },
  {
    title: "Tecnología e Innovación",
    description: "Utilizamos herramientas avanzadas de modelado 3D, metodologías BIM y metodologías modernas para optimizar recursos y tiempos.",
    icon: <Lightbulb size={32} />
  },
  {
    title: "Solidez y Experiencia",
    description: "Años de trayectoria exitosa en Moyobamba y a nivel nacional, resolviendo con solidez técnica los desafíos de ingeniería más complejos.",
    icon: <TrendingUp size={32} />
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary opacity-20 transform skew-x-12 translate-x-32 hidden lg:block pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Por qué elegir <span className="text-accent">H&M Project Solutions</span>?
          </h2>
          <p className="text-gray-300 text-lg">
            Nos distinguimos por nuestro compromiso inquebrantable con cada proyecto, garantizando resultados superiores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl hover:bg-secondary transition-colors group"
            >
              <div className="text-accent mb-6 bg-primary/50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
