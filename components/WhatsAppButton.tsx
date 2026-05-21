"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const whatsappNumber = "51983752316";
  const message = "Hola, me gustaría recibir más información sobre sus servicios.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      {isMounted && (
        <motion.a
          key="whatsapp-float"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-floating-btn fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-colors hover:scale-110 active:scale-95 group"
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
          aria-label="Contactar por WhatsApp"
        >
          {/* SVG de WhatsApp de alta fidelidad */}
          <svg
            className="w-7 h-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.623-1.023-5.086-2.884-6.948C16.636 2.016 14.17 1.002 11.55 1c-5.443 0-9.859 4.374-9.863 9.8.001 1.916.528 3.791 1.523 5.44l-.994 3.63 3.771-.977zm12.355-6.727c-.312-.156-1.847-.91-2.128-1.012-.281-.102-.485-.156-.69.156-.202.311-.785 1.012-.962 1.212-.178.2-.355.226-.668.069-1.923-.96-3.158-1.902-4.149-3.598-.261-.448-.031-.692.196-.918.203-.203.447-.51.67-.765.223-.255.297-.434.446-.723.149-.29.074-.536-.037-.765-.111-.229-.69-1.666-.945-2.277-.249-.597-.502-.516-.69-.526-.178-.009-.382-.01-.587-.01-.204 0-.536.077-.816.382-.28.305-1.071 1.045-1.071 2.549 0 1.503 1.096 2.955 1.246 3.158.149.2 2.155 3.29 5.221 4.613.729.315 1.298.503 1.741.644.732.233 1.398.2 1.925.121.587-.089 1.846-.755 2.11-.1.263-.1.434-.2.434-.587 0-.382-.102-.693-.312-.156z" />
          </svg>
          {/* Anillo de pulsación sutil */}
          <span className="absolute inset-0 rounded-full border-2 border-[#25d366]/30 animate-ping pointer-events-none" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
