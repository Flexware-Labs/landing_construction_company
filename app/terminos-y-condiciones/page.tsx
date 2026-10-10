import { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { EMPRESA } from "@/lib/empresa";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio web de H & M Project Solutions.",
  alternates: { canonical: "/terminos-y-condiciones" },
};

export default function TerminosPage() {
  return (
    <LegalPage title="Términos y Condiciones" updated={EMPRESA.ultimaActualizacion}>
      <p>
        Este sitio web es operado por {EMPRESA.razonSocial} (nombre comercial {EMPRESA.nombreComercial}), con RUC {EMPRESA.ruc} y
        domicilio legal en {EMPRESA.direccionLegal}. Al navegar y usar el sitio aceptas estos términos.
      </p>

      <h2>1. Objeto del sitio</h2>
      <p>
        El sitio presenta información sobre nuestros servicios de ingeniería, construcción, habilitación urbana, saneamiento
        físico-legal, gestión ambiental, territorial y forestal, y otros servicios relacionados, y permite solicitar cotizaciones.
      </p>

      <h2>2. Información y cotizaciones</h2>
      <ul>
        <li>La información del sitio es referencial y puede cambiar sin previo aviso.</li>
        <li>Enviar el formulario de cotización no genera un contrato ni obliga a ninguna de las partes.</li>
        <li>
          Los precios, plazos y alcances solo son vinculantes cuando constan en una propuesta o contrato firmado por{" "}
          {EMPRESA.nombreComercial} y el cliente.
        </li>
        <li>Algunos servicios requieren evaluación previa, documentos del cliente y trámites ante entidades públicas, cuyos plazos no dependen de nosotros.</li>
      </ul>

      <h2>3. Uso adecuado</h2>
      <p>
        Te comprometes a usar el sitio de forma lícita y a entregar información veraz en los formularios. Está prohibido intentar
        vulnerar la seguridad del sitio, enviar contenido malicioso o usar el sitio con fines fraudulentos.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        Los textos, logotipos, imágenes, diseños y demás contenidos del sitio pertenecen a {EMPRESA.razonSocial} o se usan con
        autorización de sus titulares. No puedes reproducirlos o distribuirlos sin nuestro permiso previo y por escrito.
      </p>

      <h2>5. Enlaces a terceros</h2>
      <p>
        El sitio puede enlazar a servicios de terceros (por ejemplo, WhatsApp, Facebook o Instagram). No controlamos su contenido ni
        sus políticas y no somos responsables por ellos.
      </p>

      <h2>6. Limitación de responsabilidad</h2>
      <p>
        Procuramos que la información del sitio sea correcta y esté actualizada, pero no garantizamos que esté libre de errores ni
        que el sitio funcione sin interrupciones. No respondemos por daños derivados del uso del sitio, salvo los casos en que la
        ley disponga lo contrario.
      </p>

      <h2>7. Datos personales</h2>
      <p>
        El tratamiento de tus datos personales se rige por nuestra <Link href="/politica-de-privacidad">Política de Privacidad</Link>.
      </p>

      <h2>8. Ley aplicable y jurisdicción</h2>
      <p>
        Estos términos se rigen por las leyes de la República del Perú. Cualquier controversia se someterá a los jueces y tribunales
        competentes del Perú, sin perjuicio de los derechos que la ley reconoce a los consumidores.
      </p>

      <h2>9. Contacto</h2>
      <p>
        Para consultas sobre estos términos escríbenos a <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>.
      </p>
    </LegalPage>
  );
}
