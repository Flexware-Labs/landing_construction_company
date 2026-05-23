"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle } from "lucide-react";

function FormContent() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get("servicio");
    if (serviceParam) {
      const serviceMap: { [key: string]: string } = {
        "obras-civiles": "Obras Civiles",
        "habilitacion-urbana": "Habilitación Urbana",
        "construccion-y-reconstruccion": "Construcción y Reconstrucción",
        "demoliciones-profesionales": "Demoliciones Profesionales",
        "ampliaciones-y-refacciones": "Ampliaciones y Refacciones",
        "mantenimiento-de-infraestructura": "Mantenimiento de Infraestructura",
        "diseno-arquitectonico-moderno": "Diseño Arquitectónico Moderno",
        "importacion-y-exportacion": "Importación y Exportación"
      };
      if (serviceMap[serviceParam]) {
        setSelectedService(serviceMap[serviceParam]);
      }
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMessage = `Hola H&M Project Solutions, mi nombre es ${formData.name}. Deseo cotizar el servicio de ${selectedService || "Consultoría General"}. Celular: ${formData.phone}, Correo: ${formData.email}. Detalles: ${formData.message}`;
    const whatsappUrl = `https://wa.me/51983752316?text=${encodeURIComponent(waMessage)}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-2xl text-center flex flex-col items-center gap-4 shadow-lg min-h-[400px] justify-center">
        <CheckCircle className="text-emerald-500" size={56} />
        <h3 className="text-2xl font-bold">¡Mensaje Preparado!</h3>
        <p className="text-sm max-w-sm">Te estamos redirigiendo a WhatsApp para contactarte directamente con un ingeniero especialista.</p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500 mt-4"></div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-6 w-full">
      <div>
        <h3 className="text-2xl font-bold text-primary mb-2">Formulario de Cotización</h3>
        <p className="text-gray-500 text-sm">Completa el formulario y te enviaremos una cotización técnica formal adaptada a tus requerimientos.</p>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-primary" htmlFor="name">Nombre Completo / Empresa *</label>
        <input
          required
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Escribe tu nombre o el de tu empresa"
          className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-primary" htmlFor="email">Correo Electrónico *</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ejemplo@empresa.com"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-primary" htmlFor="phone">WhatsApp / Celular *</label>
          <input
            required
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+51 983 752 316"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-primary" htmlFor="service">Servicio Requerido *</label>
        <select
          required
          id="service"
          name="service"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm bg-white"
        >
          <option value="">-- Selecciona una especialidad --</option>
          <option value="Obras Civiles">Obras Civiles</option>
          <option value="Habilitación Urbana">Habilitación Urbana</option>
          <option value="Construcción y Reconstrucción">Construcción y Reconstrucción</option>
          <option value="Demoliciones Profesionales">Demoliciones Profesionales</option>
          <option value="Ampliaciones y Refacciones">Ampliaciones y Refacciones</option>
          <option value="Mantenimiento de Infraestructura">Mantenimiento de Infraestructura</option>
          <option value="Diseño Arquitectónico Moderno">Diseño Arquitectónico Moderno</option>
          <option value="Importación y Exportación">Importación y Exportación</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-primary" htmlFor="message">Mensaje y Detalles del Proyecto *</label>
        <textarea
          required
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe la ubicación, tamaño estimado y plazos de tu obra civil o proyecto."
          className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-2"
      >
        <Send size={18} />
        Enviar Cotización a WhatsApp
      </button>
    </form>
  );
}

export default function ContactoForm() {
  return (
    <Suspense fallback={
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center min-h-[450px]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
        <p className="text-gray-500 text-sm mt-4">Cargando formulario...</p>
      </div>
    }>
      <FormContent />
    </Suspense>
  );
}
