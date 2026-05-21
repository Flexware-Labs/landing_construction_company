"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Trabaja con Nosotros", href: "/trabaja-con-nosotros" },
    { name: "Acerca de Nosotros", href: "/acerca-de-nosotros" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <Image
            src="/logotipo_optimized.png"
            alt="H&M Project Solutions"
            width={120}
            height={40}
            className="h-8 sm:h-10 w-auto object-contain"
          />
          <div className="flex flex-col justify-center border-l border-gray-300 pl-2 sm:pl-3">
            <span className="font-logo font-bold text-[10px] sm:text-sm md:text-[12px] tracking-[0.12em] text-secondary uppercase leading-none">
              PROJECT SOLUTIONS
            </span>
            <div className="w-full h-px sm:h-[1.5px] bg-accent mt-1" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-accent text-primary"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/51983752316"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-full font-medium transition-colors shadow-sm"
          >
            Contáctanos
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="text-primary" />
          ) : (
            <Menu className="text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg py-4 md:hidden flex flex-col items-center gap-4 border-t border-gray-100"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-primary font-medium w-full text-center py-2 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/51983752316"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-white px-8 py-2 rounded-full font-medium transition-colors mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contáctanos
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
