"use client";

import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Zap, Award, Handshake, Users } from "lucide-react";
import Image from "next/image";

const values = [
  { icon: <ShieldCheck size={24} />, title: "Responsabilidad", desc: "Cumplimos nuestros compromisos." },
  { icon: <ShieldCheck size={24} />, title: "Seguridad", desc: "Cero accidentes es nuestra meta." },
  { icon: <Zap size={24} />, title: "Innovación", desc: "Mejora continua en cada proceso." },
  { icon: <Award size={24} />, title: "Calidad", desc: "Excelencia en cada detalle." },
  { icon: <Eye size={24} />, title: "Transparencia", desc: "Ética en todas nuestras acciones." },
  { icon: <Handshake size={24} />, title: "Compromiso", desc: "Dedicación total al cliente." }
];

const team = [
  { name: "Carlos Ramírez", position: "Gerente General" },
  { name: "Ana Mendoza", position: "Directora de Proyectos" },
  { name: "Luis Fernandez", position: "Ingeniero Residente" },
  { name: "Elena Gómez", position: "Arquitecta Principal" }
];

export default function AcercaDeNosotrosPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/empresa.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Acerca de Nosotros
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Conoce la historia, visión y el equipo humano detrás de H&M Project Solutions.
          </motion.p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Nuestra Historia</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                H&M Project Solutions nació con la visión de transformar el sector construcción mediante la aplicación de ingeniería de valor, prácticas sostenibles y un enfoque centrado en la satisfacción total del cliente.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                A lo largo de nuestra trayectoria, hemos consolidado un equipo multidisciplinario altamente calificado capaz de afrontar los retos más exigentes en obras civiles, habilitación urbana y desarrollo arquitectónico.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-100 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
                alt="Historia H&M"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center"
            >
              <div className="mx-auto w-16 h-16 bg-primary/5 text-accent rounded-full flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Brindar soluciones integrales de ingeniería y construcción que superen las expectativas de nuestros clientes, garantizando la máxima calidad, seguridad y eficiencia en cada etapa del proyecto.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center"
            >
              <div className="mx-auto w-16 h-16 bg-primary/5 text-accent rounded-full flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser la empresa líder y referente en el sector construcción a nivel nacional, reconocida por nuestra innovación, solidez técnica y compromiso inquebrantable con el desarrollo sostenible del país.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Nuestros Valores</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Los principios que guían nuestras acciones y decisiones en cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-secondary/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center"
              >
                <div className="text-accent mb-4 flex justify-center">{val.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{val.title}</h4>
                <p className="text-gray-400 text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Nuestro Equipo Directivo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profesionales con amplia trayectoria liderando proyectos de gran envergadura.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white group-hover:border-accent transition-colors">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                    <Users size={64} />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-primary mb-1">{member.name}</h4>
                <p className="text-accent font-medium text-sm">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
