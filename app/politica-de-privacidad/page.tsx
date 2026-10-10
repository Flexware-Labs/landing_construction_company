import { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { EMPRESA } from "@/lib/empresa";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y tratamiento de datos personales de H & M Project Solutions, conforme a la Ley N.° 29733.",
  alternates: { canonical: "/politica-de-privacidad" },
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalPage title="Política de Privacidad" updated={EMPRESA.ultimaActualizacion}>
      <p>
        En {EMPRESA.nombreComercial} respetamos tu privacidad. Esta política explica cómo tratamos los datos personales que nos
        proporcionas a través de {EMPRESA.sitio.replace("https://", "")}, de conformidad con la Ley N.° 29733, Ley de Protección de
        Datos Personales, y su Reglamento.
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li>Razón social: {EMPRESA.razonSocial}</li>
        <li>Nombre comercial: {EMPRESA.nombreComercial}</li>
        <li>RUC: {EMPRESA.ruc}</li>
        <li>Domicilio: {EMPRESA.direccionLegal}</li>
        <li>Correo de contacto: <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a></li>
      </ul>

      <h2>2. Datos que recopilamos</h2>
      <p>Recopilamos únicamente los datos que nos entregas voluntariamente en el formulario de cotización o al escribirnos:</p>
      <ul>
        <li>Nombre completo o razón social.</li>
        <li>Correo electrónico.</li>
        <li>Número de celular o WhatsApp.</li>
        <li>Servicio de interés y los detalles de tu proyecto que decidas compartir (ubicación, tamaño, plazos).</li>
      </ul>

      <h2>3. Finalidad del tratamiento</h2>
      <p>Usamos tus datos para:</p>
      <ul>
        <li>Responder tus consultas y elaborar cotizaciones o propuestas técnicas.</li>
        <li>Contactarte por WhatsApp, correo o llamada en relación con tu solicitud.</li>
        <li>Gestionar la relación comercial si decides contratar nuestros servicios.</li>
      </ul>
      <p>No usamos tus datos para fines distintos a los indicados ni los vendemos a terceros.</p>

      <h2>4. Uso de WhatsApp</h2>
      <p>
        Al enviar el formulario de cotización, tu mensaje se prepara y se abre en WhatsApp para que lo envíes a nuestro número de
        atención. WhatsApp es un servicio de un tercero (WhatsApp LLC / Meta) y el tratamiento de datos que realiza se rige por
        sus propias políticas de privacidad.
      </p>

      <h2>5. Destinatarios y transferencias</h2>
      <p>
        No compartimos tus datos con terceros, salvo que sea necesario para prestar el servicio solicitado (por ejemplo, entidades
        públicas ante las que gestionemos trámites a tu pedido) o que una norma o autoridad competente lo exija. Los proveedores
        tecnológicos que alojan este sitio pueden procesar información técnica necesaria para su funcionamiento.
      </p>

      <h2>6. Plazo de conservación</h2>
      <p>
        Conservamos tus datos mientras sea necesario para atender tu solicitud y la relación comercial que derive de ella, y luego
        por el tiempo exigido por las obligaciones legales y contables aplicables. Después los eliminamos o anonimizamos.
      </p>

      <h2>7. Tus derechos</h2>
      <p>
        Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, cancelación y oposición, así como los demás
        reconocidos por la normativa, escribiendo a <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a> e indicando tu nombre,
        el derecho que deseas ejercer y una copia de tu documento de identidad. Responderemos dentro de los plazos legales.
      </p>
      <p>
        Si consideras que no hemos atendido tu solicitud, puedes presentar un reclamo ante la Autoridad Nacional de Protección de
        Datos Personales del Ministerio de Justicia y Derechos Humanos.
      </p>

      <h2>8. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger tus datos contra pérdida, acceso no autorizado o uso
        indebido.
      </p>

      <h2>9. Cookies</h2>
      <p>
        Este sitio no utiliza cookies de publicidad ni de seguimiento propias. Si en el futuro incorporamos herramientas de analítica
        o publicidad, actualizaremos esta política y te lo informaremos.
      </p>

      <h2>10. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política para reflejar cambios normativos o en nuestros servicios. La fecha de la última
        actualización figura al inicio de este documento.
      </p>
    </LegalPage>
  );
}
