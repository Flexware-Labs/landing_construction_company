import { ReactNode } from "react";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="pt-20 bg-background min-h-screen">
      <section className="bg-primary py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">{title}</h1>
          <p className="text-gray-300 text-sm">Última actualización: {updated}</p>
        </div>
      </section>
      <section className="py-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 text-gray-600 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1 [&_a]:text-accent [&_a]:underline">
          {children}
        </article>
      </section>
    </div>
  );
}
