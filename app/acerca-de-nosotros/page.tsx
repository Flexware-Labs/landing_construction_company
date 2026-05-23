import { Metadata } from "next";
import { Target, Eye, ShieldCheck, Zap, Award, Handshake, Users } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Expertos en Obras Civiles e Ingeniería de Valor",
  description: "Conoce la historia, valores y equipo de ingenieros de H&M Project Solutions, constructora líder en obras civiles y habilitaciones urbanas en Moyobamba y el Perú.",
  keywords: [
    "constructores en Moyobamba",
    "ingenieros civiles Perú",
    "sobre H&M Project Solutions",
    "historia constructora Moyobamba",
    "arquitectura y obras civiles"
  ],
  alternates: {
    canonical: "/acerca-de-nosotros"
  }
};

const values = [
  { icon: <ShieldCheck size={24} />, title: "Responsabilidad", desc: "Cumplimos rigurosamente nuestros compromisos contractuales y normativos." },
  { icon: <ShieldCheck size={24} />, title: "Seguridad Integral", desc: "La seguridad es innegociable. Cero incidentes es nuestra meta diaria." },
  { icon: <Zap size={24} />, title: "Innovación Técnica", desc: "Mejora continua e implementación de metodologías modernas BIM." },
  { icon: <Award size={24} />, title: "Calidad Garantizada", desc: "Buscamos la excelencia estructural y de acabados en cada detalle." },
  { icon: <Eye size={24} />, title: "Transparencia Absoluta", desc: "Actuamos con ética, honestidad y claridad en las cotizaciones y presupuestos." },
  { icon: <Handshake size={24} />, title: "Compromiso con el Cliente", desc: "Alineamos nuestros esfuerzos para superar las expectativas del proyecto." }
];

const team = [
  { name: "Carlos Ramírez", position: "Gerente General - Especialista en Obras Civiles" },
  { name: "Ana Mendoza", position: "Directora de Proyectos - Ingeniera Civil Colegiada" },
  { name: "Luis Fernandez", position: "Ingeniero Residente - Especialista en Infraestructura" },
  { name: "Elena Gómez", position: "Arquitecta Principal - Diseño Urbano y Bioclimático" }
];

export default function AcercaDeNosotrosPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/empresa.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Trayectoria en Ingeniería y Construcción
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Conoce la historia, visión, valores y el equipo de profesionales altamente calificados detrás de H&M Project Solutions.
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" className="w-full">
              <h2 className="text-3xl font-bold text-primary mb-6">Nuestra Historia y Liderazgo Regional</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                <strong>H&M Project Solutions</strong> nació formalmente en Moyobamba con una clara visión: transformar el sector de la construcción mediante la aplicación rigurosa de ingeniería de valor, prácticas constructivas sostenibles y un enfoque centrado en la solidez estructural y satisfacción absoluta de nuestros clientes.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A lo largo de nuestra trayectoria, hemos consolidado un equipo multidisciplinario altamente calificado de ingenieros civiles, diseñadores y técnicos. Esto nos capacita para afrontar con total solvencia técnica y legal los retos de infraestructura y desarrollo urbano más demandantes en la región San Martín y a nivel nacional.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nuestra pasión por el detalle, el cumplimiento exacto de los plazos de entrega y la transparencia financiera nos han consolidado como un socio estratégico confiable para clientes residenciales, corporativos y entidades que buscan trascender en cada proyecto.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" className="w-full">
              <div className="relative h-100 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
                  alt="Equipo de ingenieros civiles en Moyobamba H&M"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="up" className="w-full" delay={0.1}>
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center h-full flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/5 text-accent rounded-full flex items-center justify-center mb-6">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Misión</h3>
                <p className="text-gray-600 leading-relaxed">
                  Brindar soluciones de ingeniería, obras civiles y diseño arquitectónico que superen las expectativas más exigentes de nuestros clientes. Garantizamos la máxima calidad de materiales, un control técnico permanente en obra y una estricta adhesión a las normas de seguridad internacionales.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" className="w-full" delay={0.3}>
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center h-full flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/5 text-accent rounded-full flex items-center justify-center mb-6">
                  <Eye size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Visión</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser reconocidos a nivel nacional como la empresa constructora líder y referente en calidad técnica, sostenibilidad e innovación en el Perú. Buscamos ser el estándar de excelencia en Moyobamba y la Amazonía peruana, aportando valor al desarrollo de la infraestructura y conectividad nacional.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Nuestros Valores Fundacionales</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Los principios éticos y profesionales que guían cada decisión en el campo y la oficina de H&M Project Solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.1} className="w-full">
                <div className="bg-secondary/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center h-full">
                  <div className="text-accent mb-4 flex justify-center">{val.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{val.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Nuestro Staff Directivo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profesionales colegiados y certificados comprometidos con la solidez de tu inversión.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1} className="w-full text-center group">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white group-hover:border-accent transition-colors">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                    <Users size={64} />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-primary mb-1">{member.name}</h4>
                <p className="text-accent font-medium text-sm">{member.position}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
