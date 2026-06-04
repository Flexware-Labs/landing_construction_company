import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 bg-white p-2 rounded w-fit group">
              <Image
                src="/logotipo_optimized.png"
                alt="H&M Project Solutions"
                width={120}
                height={40}
                className="h-9 w-auto object-contain"
              />
              <div className="flex flex-col justify-center border-l border-gray-300 pl-3">
                <span className="font-logo font-bold text-xs sm:text-sm tracking-[0.12em] text-[#2D3748] uppercase leading-none">
                  PROJECT SOLUTIONS
                </span>
                <div className="w-full h-[1.5px] bg-accent mt-1" />
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Construimos proyectos que transforman el futuro. Soluciones integrales en ingeniería, obras civiles y arquitectura con los más altos estándares de calidad y seguridad.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-primary/50 hover:bg-accent p-2 rounded-full transition-colors flex items-center justify-center w-9 h-9">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="bg-primary/50 hover:bg-accent p-2 rounded-full transition-colors flex items-center justify-center w-9 h-9">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="bg-primary/50 hover:bg-accent p-2 rounded-full transition-colors flex items-center justify-center w-9 h-9">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Navegación</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Servicios
                </Link>
              </li>
              <li>
                <Link href="/trabaja-con-nosotros" className="text-gray-300 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Trabaja con Nosotros
                </Link>
              </li>
              <li>
                <Link href="/acerca-de-nosotros" className="text-gray-300 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Acerca de Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Nuestros Servicios</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-accent transition-colors text-sm">Obras Civiles</Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-accent transition-colors text-sm">Habilitación Urbana</Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-accent transition-colors text-sm">Demoliciones</Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-accent transition-colors text-sm">Diseño Arquitectónico</Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-accent transition-colors text-sm text-accent font-medium mt-2 block">
                  Ver todos los servicios
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contacto</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin className="text-accent shrink-0 mt-0.5" size={18} />
                <span>
                  Psj. Víctor Velásquez S/N<br />
                  Moyobamba, Perú
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone className="text-accent shrink-0" size={18} />
                <a href="tel:+51983752316" className="hover:text-accent transition-colors">+51 983 752 316</a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Mail className="text-accent shrink-0" size={18} />
                <a href="mailto:solutionsr@outlook.com" className="hover:text-accent transition-colors">solutionsr@outlook.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} H&M Project Solutions. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="https://www.facebook.com/flexware.labs/" target="_blank" className="text-gray-400 hover:text-white text-sm transition-colors">
              Powered by: Flexware Labs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
