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
    description: "Construcción de edificaciones, infraestructura vial, puentes y estructuras de gran envergadura.",
    icon: <Building2 size={40} />,
  },
  {
    title: "Habilitación Urbana",
    description: "Desarrollo de terrenos, redes de agua, desagüe, electrificación y pavimentación.",
    icon: <Map size={40} />,
  },
  {
    title: "Construcción y Reconstrucción",
    description: "Proyectos residenciales, comerciales e industriales desde cero o remodelaciones completas.",
    icon: <Hammer size={40} />,
  },
  {
    title: "Demoliciones",
    description: "Demolición segura y controlada de estructuras, con manejo adecuado de escombros.",
    icon: <Trash2 size={40} />,
  },
  {
    title: "Ampliaciones y Refacciones",
    description: "Mejoras estructurales y estéticas para modernizar y optimizar tus espacios.",
    icon: <Wrench size={40} />,
  },
  {
    title: "Mantenimiento",
    description: "Servicios preventivos y correctivos para infraestructura civil y edificaciones.",
    icon: <Wrench size={40} />,
  },
  {
    title: "Diseño Arquitectónico",
    description: "Conceptualización y desarrollo de planos y diseños vanguardistas y funcionales.",
    icon: <PenTool size={40} />,
  },
  {
    title: "Importación y Exportación",
    description: "Provisión de materiales de construcción y maquinaria especializada de alta calidad.",
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
            const message = `Hola, quiero cotizar el servicio de ${service.title}`;
            const whatsappUrl = `https://wa.me/51932682104?text=${encodeURIComponent(message)}`;

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
                <p className="text-gray-600 mb-8 grow">{service.description}</p>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
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
