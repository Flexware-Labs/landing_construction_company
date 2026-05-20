"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronRight, GraduationCap, Users } from "lucide-react";
import Image from "next/image";

const jobs = [
  {
    title: "Obreros",
    description: "Personal operario para obras civiles, construcción y acabados.",
    requirements: ["Experiencia previa en obras", "Responsabilidad", "Disponibilidad inmediata"],
  },
  {
    title: "Arquitectos",
    description: "Profesionales para diseño, planificación y supervisión de proyectos arquitectónicos.",
    requirements: ["Título profesional", "Manejo de AutoCAD/Revit", "Creatividad y liderazgo"],
  },
  {
    title: "Ingenieros Civiles",
    description: "Especialistas en estructuras, costos, presupuestos y residencia de obras.",
    requirements: ["Colegiatura vigente", "Experiencia en gestión", "Capacidad analítica"],
  },
  {
    title: "Diseñadores",
    description: "Diseñadores de interiores y exteriores para proyectos residenciales y corporativos.",
    requirements: ["Portafolio actualizado", "Dominio de 3D Max/SketchUp", "Atención al detalle"],
  },
  {
    title: "Operadores de maquinaria",
    description: "Conductores y operadores calificados para maquinaria pesada de construcción.",
    requirements: ["Licencia especializada", "Certificaciones vigentes", "Conocimiento en mantenimiento"],
  },
  {
    title: "Técnicos de construcción",
    description: "Técnicos electricistas, gasfiteros, topógrafos y especialistas en acabados.",
    requirements: ["Estudios técnicos concluidos", "Experiencia comprobada", "Trabajo en equipo"],
  }
];

export default function TrabajaConNosotrosPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/equipo_trabajando.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Únete a nuestro equipo
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Construye tu futuro con nosotros. Buscamos talento apasionado por la excelencia y la innovación.
          </motion.p>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Nuestra Cultura</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                En H&M Project Solutions, valoramos el esfuerzo, la dedicación y el talento de nuestra gente. Fomentamos un ambiente de trabajo colaborativo, seguro e inclusivo donde cada miembro del equipo tiene la oportunidad de crecer profesional y personalmente.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg text-accent mt-1">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Desarrollo Profesional</h4>
                    <p className="text-gray-500 text-sm">Capacitaciones constantes y línea de carrera.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg text-accent mt-1">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Excelente Clima Laboral</h4>
                    <p className="text-gray-500 text-sm">Trabajo en equipo y respeto mutuo.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-100 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/equipo_trabajando.jpeg"
                alt="Equipo trabajando"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Oportunidades Laborales</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre las vacantes disponibles y postula al puesto que mejor se adapte a tu perfil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => {
              const whatsappUrl = `https://wa.me/51932682104?text=${encodeURIComponent(`Hola, quiero postular al puesto de ${job.title}`)}`;
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col h-full group"
                >
                  <div className="bg-primary/5 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{job.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 grow">{job.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-primary mb-2">Requisitos:</h4>
                    <ul className="text-sm text-gray-500 space-y-1">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-accent"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary hover:bg-accent text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    Aplicar Ahora
                    <ChevronRight size={18} />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
