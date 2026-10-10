import { Metadata } from "next";
import { ReactNode } from "react";
import { Briefcase, ChevronRight } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { EMPRESA } from "@/lib/empresa";

export const metadata: Metadata = {
  title: "Trabaja con Nosotros | Empleo en Ingeniería y Construcción",
  description: "Forma parte del equipo de H&M Project Solutions. Buscamos ingenieros civiles, arquitectos, técnicos y operarios en Moyobamba y San Martín. Postula hoy.",
  keywords: [
    "empleo construccion Moyobamba",
    "trabajo ingenieros civiles Peru",
    "vacantes arquitecto Moyobamba",
    "bolsa de trabajo construccion San Martin"
  ],
  alternates: {
    canonical: "/trabaja-con-nosotros"
  }
};

const jobs = [
  {
    title: "Operarios y Obreros de Construcción",
    description: "Personal operario y oficial para obras civiles, albañilería, acabados de primera y vaciado de estructuras de concreto.",
    requirements: ["Experiencia previa demostrable en obras de edificaciones", "Responsabilidad, puntualidad y trabajo en equipo", "Disponibilidad inmediata en Moyobamba"],
  },
  {
    title: "Arquitectos de Diseño y Obra",
    description: "Profesionales colegiados para el diseño de planos, modelado 3D (BIM), supervisión técnica de acabados y trámites municipales.",
    requirements: ["Título profesional y colegiatura (CAP) deseable", "Manejo avanzado de AutoCAD, Revit y programas de renderizado", "Portafolio de proyectos residenciales o comerciales"],
  },
  {
    title: "Ingenieros Civiles Residente / Supervisor",
    description: "Especialistas estructurales encargados de la supervisión técnica, valorizaciones de obra, planeamiento y seguridad estructural.",
    requirements: ["Colegiatura vigente (CIP)", "Experiencia comprobada en residencia de obras civiles o habilitación urbana", "Liderazgo y manejo de presupuestos (S10)"],
  },
  {
    title: "Diseñadores de Interiores y CAD",
    description: "Diseñadores para proyectos comerciales e inmobiliarios, distribución espacial e interiorismo vanguardista.",
    requirements: ["Portafolio de diseño interior actualizado", "Dominio experto de SketchUp, V-Ray, 3ds Max o similares", "Atención al detalle y comprensión de materiales premium"],
  },
  {
    title: "Operadores de Maquinaria Pesada",
    description: "Conductores y operadores calificados para excavadoras, retroexcavadoras, rodillos y volquetes para habilitación urbana.",
    requirements: ["Licencia de conducir especializada vigente (A3)", "Certificaciones de operación segura de equipo pesado", "Conocimientos básicos de mantenimiento de maquinaria"],
  },
  {
    title: "Técnicos Electricistas y Sanitarios",
    description: "Técnicos expertos en instalaciones eléctricas residenciales/industriales e instalación de redes sanitarias de agua y desagüe.",
    requirements: ["Estudios técnicos concluidos en Senati o similares", "Experiencia comprobada en tendido de instalaciones internas y urbanas", "Compromiso absoluto con las normas de seguridad eléctrica"]
  }
];

// Cambiar a `true` cuando existan vacantes reales y se quiera reactivar la postulación.
const HIRING_OPEN = false;

const WHATSAPP_NUMBER = EMPRESA.whatsapp;

function buildWhatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Centraliza el on/off de postulaciones: cuando HIRING_OPEN es false, solo hay que
// actualizar el contenido "deshabilitado" en un lugar en vez de en cada botón.
function ApplyAction({
  message,
  className,
  disabledContent,
  children,
}: {
  message: string;
  className: string;
  disabledContent: ReactNode;
  children: ReactNode;
}) {
  if (!HIRING_OPEN) {
    return <>{disabledContent}</>;
  }

  return (
    <a
      href={buildWhatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

const benefits = [
  "Seguro de salud",
  "Asignación familiar",
  "Vacaciones remuneradas",
  "Gratificaciones de ley",
  "Uniformes de trabajo",
  "Capacitación técnica constante",
  "Línea de carrera y crecimiento profesional",
  "Buen clima laboral",
  "Pertenecer a una empresa de prestigio regional",
];

export default function TrabajaConNosotrosPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/equipo_trabajando.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Únete a un Equipo de Excelencia
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Construye tu futuro con nosotros. En H&M Project Solutions buscamos talento regional y nacional apasionado por la ingeniería, la seguridad y la innovación.
          </p>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" className="w-full">
              <h2 className="text-3xl font-bold text-primary mb-6">¡Únete al equipo!</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                En <strong>H&M Project Solutions</strong>, nuestros colaboradores son los protagonistas, porque para lograr un trabajo de calidad y confiable necesitamos gente con actitud y vocación de servicio.
              </p>
              <h4 className="font-semibold text-primary mb-4">Beneficios:</h4>
              <ul className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="right" className="w-full">
              {/* TODO: reemplazar por la nueva imagen que el cliente proveerá */}
              <div className="relative h-100 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/equipo_trabajando.jpeg"
                  alt="Equipo técnico en obra H&M Project Solutions"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-primary mb-6">¿Quieres ser parte de nuestro equipo?</h3>
            <ApplyAction
              message="Hola, quiero postular y ser parte del equipo de H&M Project Solutions."
              className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-sm"
              disabledContent={
                <p className="text-gray-500">Por el momento no tenemos convocatorias activas. ¡Vuelve pronto!</p>
              }
            >
              Postula Aquí
              <ChevronRight size={18} />
            </ApplyAction>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Convocatorias y Oportunidades Laborales</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {HIRING_OPEN
                ? "Descubre las vacantes vigentes y postula directamente enviando tu información técnica de perfil."
                : "Por el momento no contamos con convocatorias activas. Estas son las áreas en las que solemos incorporar talento cuando abrimos procesos de selección."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => {
              return (
                <ScrollReveal
                  key={index}
                  direction="up"
                  delay={index * 0.1}
                  className="w-full"
                >
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col h-full group">
                    <div className="bg-primary/5 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                      <Briefcase size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{job.title}</h3>
                    <p className="text-gray-600 text-sm mb-6 grow leading-relaxed">{job.description}</p>

                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-primary mb-2">Requisitos Clave:</h4>
                      <ul className="text-sm text-gray-500 space-y-1">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-accent shrink-0"></span>
                            <span className="truncate-2-lines">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <ApplyAction
                      message={`Hola, me interesa postular al puesto de ${job.title} en H&M Project Solutions.`}
                      className="w-full bg-primary hover:bg-accent text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
                      disabledContent={
                        <span className="w-full bg-gray-100 text-gray-400 py-3 rounded-xl font-medium flex items-center justify-center gap-2 cursor-not-allowed select-none">
                          Sin vacantes disponibles
                        </span>
                      }
                    >
                      Postular por WhatsApp
                      <ChevronRight size={18} />
                    </ApplyAction>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
