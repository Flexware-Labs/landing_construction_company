import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import ContactoForm from "@/components/contacto/ContactoForm";
import ScrollReveal from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Contacto y Cotizaciones de Proyectos de Construcción",
  description: "Contacta con H&M Project Solutions en Moyobamba. Solicita presupuestos de obras civiles, habilitación urbana, demoliciones y diseño arquitectónico en el Perú.",
  keywords: [
    "contacto constructora Moyobamba",
    "cotizar ingenieria civil Peru",
    "presupuesto habilitacion urbana",
    "telefono H&M Project Solutions"
  ],
  alternates: {
    canonical: "/contacto"
  }
};

export default function ContactoPage() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cotiza tu Proyecto con Nosotros
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Estamos listos para brindarte asesoría técnica especializada y soluciones de ingeniería sólidas y seguras.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Info (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <ScrollReveal direction="left" className="w-full">
                <h2 className="text-3xl font-bold text-primary mb-4">Información de Contacto</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Ya sea para una obra vial de gran complejidad, una habilitación urbana completa o el diseño y distribución de tu próximo edificio, en <strong>H&M Project Solutions</strong> contamos con ingenieros y arquitectos listos para asesorarte de manera personalizada en Moyobamba, la región San Martín y a nivel nacional.
                </p>

                {/* NAP Information List */}
                <div className="flex flex-col gap-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 text-accent p-3 rounded-xl shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg">Dirección Principal</h4>
                      <p className="text-gray-600 mt-1">
                        Jr. El Dorado 145<br />
                        Moyobamba, San Martín, Perú
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 text-accent p-3 rounded-xl shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg">Teléfono / WhatsApp</h4>
                      <p className="text-gray-600 mt-1">
                        <a href="tel:+51983752316" className="hover:text-accent transition-colors font-medium text-lg">
                          +51 983 752 316
                        </a>
                        <span className="block text-sm text-gray-400 mt-0.5">Atención técnica y cotizaciones inmediatas</span>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 text-accent p-3 rounded-xl shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg">Correo Electrónico</h4>
                      <p className="text-gray-600 mt-1">
                        <a href="mailto:solutionsr@outlook.com" className="hover:text-accent transition-colors font-medium">
                          solutionsr@outlook.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 text-accent p-3 rounded-xl shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg">Horario de Atención</h4>
                      <p className="text-gray-600 mt-1">
                        Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                        Sábados: 8:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Local Trust Signal Badge */}
                <div className="mt-12 bg-white p-6 rounded-2xl border border-gray-150 shadow-sm flex items-center gap-4">
                  <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl shrink-0">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-primary">¿Prefieres chatear?</h5>
                    <p className="text-sm text-gray-500 mt-1">
                      Escríbenos directamente y te responderemos en menos de 10 minutos.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form Column (7 Cols) */}
            <div className="lg:col-span-7 w-full">
              <ScrollReveal direction="right" className="w-full">
                <ContactoForm />
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Styled Interactive Maps Representation / Local Signal */}
      <section className="w-full h-110 bg-gray-200 relative border-t border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.1384033282245!2d-76.9717013!3d-6.0336217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b7252277d344d9%3A0xe54d24ad7ab5c3ab!2sJr.%20El%20Dorado%20145%2C%20Moyobamba%2022001!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale contrast-115 opacity-80"
          title="Ubicación de H&M Project Solutions en Moyobamba Perú"
        ></iframe>
        <div className="absolute top-6 left-6 md:left-12 bg-primary text-white p-6 rounded-2xl shadow-xl max-w-sm border border-gray-700/50 backdrop-blur-md">
          <h4 className="font-bold text-white mb-2 text-lg">H&M Project Solutions</h4>
          <p className="text-sm text-gray-300 mb-3">Jr. El Dorado 145, Moyobamba, Perú</p>
          <a
            href="https://maps.google.com/?q=Jr.+El+Dorado+145,+Moyobamba,+Peru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-accent hover:underline flex items-center gap-1"
          >
            Ver en Google Maps &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
