"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Map, 
  Hammer, 
  Trash2, 
  Wrench, 
  PenTool, 
  Truck, 
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Obras Civiles",
    description: "Construcción e ingeniería de puentes, carreteras, pavimentaciones, naves industriales y estructuras de alta resistencia.",
    icon: <Building2 size={40} />,
  },
  {
    title: "Habilitación Urbana",
    description: "Saneamiento físico-legal de terrenos, tendido de redes de agua y desagüe, electrificación y pavimentación integral.",
    icon: <Map size={40} />,
  },
  {
    title: "Construcción y Reconstrucción",
    description: "Edificación residencial y comercial desde los cimientos hasta los acabados, y restauración estructural de inmuebles.",
    icon: <Hammer size={40} />,
  },
  {
    title: "Demoliciones",
    description: "Demolición segura de concreto armado y estructuras complejas, mitigación de riesgos y manejo responsable de escombros.",
    icon: <Trash2 size={40} />,
  },
  {
    title: "Ampliaciones y Refacciones",
    description: "Optimización, refuerzo y ampliación de espacios residenciales e industriales incorporando acabados modernos y seguros.",
    icon: <Wrench size={40} />,
  },
  {
    title: "Mantenimiento de Infraestructura",
    description: "Planes correctivos y preventivos para prolongar la vida útil de plantas industriales, fachadas y edificaciones comerciales.",
    icon: <Wrench size={40} />,
  },
  {
    title: "Diseño Arquitectónico",
    description: "Diseño de planos de arquitectura, modelado 3D, distribución eficiente de espacios y gestión de licencias municipales.",
    icon: <PenTool size={40} />,
  },
  {
    title: "Importación y Exportación",
    description: "Suministro e importación directa de maquinaria pesada, equipos de construcción y acabados exclusivos para proyectos.",
    icon: <Truck size={40} />,
  }
];

export default function ServicesPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestros <span className="text-accent">Servicios</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Soluciones integrales para cada etapa de tu proyecto. Ofrecemos calidad y profesionalismo en cada una de nuestras especialidades.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const serviceSlug = encodeURIComponent(service.title.toLowerCase().replace(/\s+/g, '-'));
            const contactUrl = `/contacto?servicio=${serviceSlug}`;

            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
              >
                <div className="text-primary group-hover:text-accent transition-colors mb-6 bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-8 grow text-sm leading-relaxed">{service.description}</p>
                <a 
                  href={contactUrl}
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors mt-auto group/btn"
                >
                  Cotizar Servicio 
                  <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
