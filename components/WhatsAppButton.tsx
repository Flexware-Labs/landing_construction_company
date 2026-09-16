"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

export default function WhatsAppButton() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {isMounted && (
        <motion.a
          key="contact-float"
          href="/contacto"
          className="contact-floating-btn fixed bottom-6 right-6 z-40 bg-accent hover:bg-accent-hover text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-colors hover:scale-110 active:scale-95 group"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -15, 0]
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ 
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
            y: { 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          aria-label="Cotiza tu proyecto"
        >
          <Send className="w-7 h-7" />
          {/* Anillo de pulsación sutil */}
          <span className="absolute inset-0 rounded-full border-2 border-accent/30 animate-ping pointer-events-none" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
