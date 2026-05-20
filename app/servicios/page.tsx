"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: "obras-civiles",
    title: "Obras Civiles",
    description: "Desarrollamos proyectos de infraestructura vial, puentes, edificaciones comerciales e industriales. Nuestro equipo garantiza la seguridad estructural y el cumplimiento de las normativas vigentes.",
    benefits: ["Diseño estructural optimizado", "Materiales de alta resistencia", "Supervisión constante", "Entrega puntual"],
    image: "/obras_civiles.jpeg"
  },
  {
    id: "habilitacion-urbana",
    title: "Habilitación Urbana",
    description: "Transformamos terrenos rústicos en espacios urbanos listos para su uso. Implementamos redes de agua, desagüe, electrificación, pavimentación y áreas verdes.",
    benefits: ["Estudios topográficos", "Saneamiento físico legal", "Redes de servicios básicos", "Impacto ambiental controlado"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "construccion-reconstruccion",
    title: "Construcción y Reconstrucción",
    description: "Ejecutamos obras nuevas desde los cimientos hasta los acabados, y restauramos edificaciones existentes mejorando su funcionalidad y estética.",
    benefits: ["Planificación detallada", "Acabados de primera", "Restauración patrimonial", "Garantía de obra"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: "demoliciones",
    title: "Demoliciones",
    description: "Realizamos demoliciones totales o parciales de forma segura, controlada y eficiente, mitigando riesgos y manejando adecuadamente los escombros.",
    benefits: ["Evaluación de riesgos", "Maquinaria especializada", "Gestión de residuos", "Permisos y licencias"],
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "ampliaciones-refacciones",
    title: "Ampliaciones y Refacciones",
    description: "Optimizamos tus espacios actuales mediante ampliaciones estructurales y refacciones modernas que incrementan el valor de tu propiedad.",
    benefits: ["Optimización de espacios", "Diseño moderno", "Refuerzos estructurales", "Mínima interrupción"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento de Infraestructura",
    description: "Ofrecemos programas de mantenimiento preventivo y correctivo para prolongar la vida útil de edificaciones e instalaciones industriales.",
    benefits: ["Inspecciones técnicas", "Reparaciones urgentes", "Mantenimiento de fachadas", "Impermeabilización"],
    image: "/mantenimiento_infraestructura.jpeg"
  },
  {
    id: "diseno-arquitectonico",
    title: "Diseño Arquitectónico",
    description: "Conceptualizamos ideas innovadoras, desarrollando planos arquitectónicos funcionales, estéticos y sostenibles adaptados a tus necesidades.",
    benefits: ["Modelado 3D", "Distribución eficiente", "Sostenibilidad", "Aprobación municipal"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: "importacion-exportacion",
    title: "Importación y Exportación",
    description: "Proveemos materiales de construcción, acabados exclusivos y maquinaria pesada de alta calidad, gestionando toda la logística internacional.",
    benefits: ["Precios competitivos", "Logística integral", "Maquinaria pesada", "Materiales exclusivos"],
    image: "/importacion-exportacion.jpeg"
  }
];

export default function ServiciosPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-primary py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/servicios.jpeg')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-gray-300">
            Brindamos soluciones integrales con los más altos estándares de calidad, seguridad y eficiencia para cada etapa de tu proyecto.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const whatsappUrl = `https://wa.me/51932682104?text=${encodeURIComponent(`Hola, quiero cotizar el servicio de ${service.title}`)}`;

            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-100 rounded-2xl overflow-hidden shadow-xl group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-10">
                    <h3 className="text-lg font-semibold text-primary mb-4">Beneficios Clave:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white px-8 py-3 rounded-full font-medium transition-colors group"
                  >
                    Cotizar por WhatsApp
                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
