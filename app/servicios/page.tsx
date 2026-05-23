import { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Servicios de Ingeniería Civil y Obras Civiles en Moyobamba y todo el Perú",
  description: "Portafolio de servicios de H&M Project Solutions: Obras civiles, habilitación urbana, demoliciones, ampliaciones y diseño arquitectónico moderno en Moyobamba.",
  keywords: [
    "obras civiles en Moyobamba",
    "habilitación urbana Perú",
    "servicios de ingeniería civil",
    "demolición de estructuras",
    "diseño arquitectónico moderno",
    "constructores en San Martín"
  ],
  alternates: {
    canonical: "/servicios"
  }
};

const services = [
  {
    id: "obras-civiles",
    title: "Obras Civiles",
    description: "Desarrollamos proyectos de infraestructura vial, puentes estructurales, edificaciones comerciales, industriales y residenciales de gran escala. Lideramos con ingeniería de valor, garantizando la estabilidad sísmica, seguridad estructural y el cumplimiento estricto del Reglamento Nacional de Edificaciones (RNE) del Perú.",
    benefits: [
      "Cálculo y diseño estructural optimizado",
      "Concreto y materiales certificados de alta resistencia",
      "Supervisión constante por ingenieros colegiados",
      "Entrega puntual bajo presupuestos transparentes"
    ],
    image: "/obras_civiles.jpeg"
  },
  {
    id: "habilitacion-urbana",
    title: "Habilitación Urbana",
    description: "Transformamos terrenos rústicos o agrícolas en espacios urbanos listos para habitar o comercializar. Ejecutamos el saneamiento físico-legal completo, diseño de redes de agua potable, alcantarillado, redes eléctricas de media y baja tensión, pavimentación de pistas, veredas y áreas recreativas.",
    benefits: [
      "Estudios topográficos y mecánicas de suelo",
      "Saneamiento físico-legal integral y habilitación municipal",
      "Redes completas de servicios básicos eficientes",
      "Mitigación de impacto ambiental certificada"
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "construccion-reconstruccion",
    title: "Construcción y Reconstrucción",
    description: "Ejecutamos proyectos de edificación nueva desde los cimientos hasta los acabados más finos. Asimismo, realizamos reconstrucciones y reforzamientos estructurales en edificaciones existentes, devolviendo la habitabilidad y mejorando la estética con materiales de vanguardia.",
    benefits: [
      "Planificación ágil y gestión de presupuestos",
      "Acabados modernos de primera calidad",
      "Reforzamientos antisísmicos certificados",
      "Garantía de obra extendida posventa"
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: "demoliciones",
    title: "Demoliciones Profesionales",
    description: "Realizamos demoliciones totales o parciales de estructuras civiles mediante técnicas mecánicas y manuales controladas. Nos enfocamos en la seguridad absoluta del entorno, mitigación de ruidos y polvo, y gestionamos de forma ambientalmente responsable todo el transporte y disposición final de los escombros.",
    benefits: [
      "Evaluación técnica y análisis estructural previo",
      "Maquinaria pesada propia y operarios certificados",
      "Gestión de residuos según normativas del MINAM",
      "Tramitación de permisos y licencias municipales"
    ],
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "ampliaciones-refacciones",
    title: "Ampliaciones y Refacciones",
    description: "Maximizamos y revalorizamos tus propiedades actuales. Llevamos a cabo ampliaciones verticales o extensiones horizontales de forma segura, adaptando tu hogar u oficina a las tendencias actuales de diseño y confort sin comprometer la estructura base de la edificación.",
    benefits: [
      "Optimización e integración inteligente de espacios",
      "Diseño de acabados modernos y duraderos",
      "Evaluación y refuerzos estructurales de soporte",
      "Interrupción mínima en las actividades cotidianas"
    ],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento de Infraestructura",
    description: "Brindamos programas completos de mantenimiento preventivo y correctivo para prolongar la vida útil de locales comerciales, plantas industriales e infraestructura pública. Resolvemos problemas de impermeabilización, fisuras en concreto, pintura industrial, gasfitería y electricidad.",
    benefits: [
      "Inspecciones técnicas y termografías periódicas",
      "Reparaciones de emergencia inmediatas",
      "Pintura y mantenimiento de fachadas de altura",
      "Soluciones definitivas de impermeabilización"
    ],
    image: "/mantenimiento_infraestructura.jpeg"
  },
  {
    id: "diseno-arquitectonico",
    title: "Diseño Arquitectónico Moderno",
    description: "Conceptualizamos proyectos residenciales y comerciales que combinan estética, funcionalidad y bioclimatización natural (ideal para Moyobamba y climas cálidos). Entregamos planos de distribución, cortes, fachadas, renders 3D realistas y proyectos completos listos para la aprobación municipal.",
    benefits: [
      "Modelado 3D interactivo y renders fotorrealistas",
      "Distribución inteligente y optimización de iluminación",
      "Diseño bioclimático integrado al entorno regional",
      "Asesoramiento completo en declaratorias de fábrica"
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: "importacion-exportacion",
    title: "Importación y Exportación",
    description: "Facilitamos la adquisición de materiales de construcción de última tecnología, acabados arquitectónicos exclusivos y maquinaria pesada importada desde los principales mercados del mundo. Contamos con una sólida cadena logística internacional para asegurar el abastecimiento oportuno en Perú.",
    benefits: [
      "Precios altamente competitivos de fábrica",
      "Logística integral y trámites aduaneros resueltos",
      "Maquinaria pesada con certificación internacional",
      "Acceso a materiales exclusivos de vanguardia"
    ],
    image: "/importacion-exportacion.jpeg"
  }
];

export default function ServiciosPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/servicios.jpeg')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros Servicios de Ingeniería y Construcción
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
            Brindamos soluciones integrales con los más altos estándares de calidad, seguridad y eficiencia técnica para cada etapa de tu proyecto en todo el Perú.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const serviceSlug = encodeURIComponent(service.title.toLowerCase().replace(/\s+/g, '-'));
            const contactUrl = `/contacto?servicio=${serviceSlug}`;

            return (
              <div 
                key={service.id}
                className={`flex flex-col lg:flex-row gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <ScrollReveal direction={isEven ? "left" : "right"} className="w-full">
                    <div className="relative h-100 rounded-2xl overflow-hidden shadow-xl group">
                      <Image
                        src={service.image}
                        alt={`Servicio de ${service.title} en Moyobamba Perú`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <ScrollReveal direction="up" className="w-full">
                    <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-10">
                      <h3 className="text-lg font-semibold text-primary mb-4">Ventajas de nuestro servicio:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm md:text-base">
                            <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a 
                      href={contactUrl}
                      className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white px-8 py-3 rounded-full font-medium transition-colors group shadow-md"
                    >
                      Cotizar {service.title}
                      <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
