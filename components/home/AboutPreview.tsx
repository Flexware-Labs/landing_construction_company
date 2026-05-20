"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Proyectos Completados", value: "150+" },
  { label: "Años de Experiencia", value: "10+" },
  { label: "Profesionales", value: "50+" },
  { label: "Clientes Satisfechos", value: "100+" },
];

const features = [
  "Ingeniería y soluciones estructurales",
  "Obras civiles de alta complejidad",
  "Importación de materiales y maquinaria",
  "Habilitación urbana y demoliciones"
];

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-125 rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
              alt="Nuestro equipo en obra"
              fill
              className="object-cover"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 bg-primary text-white p-6 rounded-xl shadow-lg border-l-4 border-accent">
              <p className="text-3xl font-bold text-accent mb-1">10+</p>
              <p className="text-sm font-medium">Años Construyendo<br/>el Futuro</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Expertos en Obras Civiles y <span className="text-accent">Habilitación Urbana</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              En H&M Project Solutions, nos dedicamos a brindar servicios integrales de ingeniería y construcción. Contamos con un equipo altamente calificado para desarrollar proyectos desde su concepción hasta la entrega final, garantizando seguridad, calidad y eficiencia.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
