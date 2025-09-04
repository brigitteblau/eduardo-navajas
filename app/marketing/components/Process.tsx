import Section from "@/components/ui/Section";
import { pasos } from "../../data/content";

export default function Proceso() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            id="proceso" 
            className="font-display text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4"
          >
            Proceso de{" "}
            <span className="relative inline-block text-brand-leaf">
              trabajo
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-brand-yellow/30 -skew-x-12 rounded" />
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Seguimos un método ordenado y profesional para garantizar 
            los mejores resultados en cada servicio.
          </p>
        </div>

        {/* Process Steps */}
        <ol className="grid md:grid-cols-3 gap-6">
          {pasos.map((p, idx) => (
            <li key={p.title} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-leaf/5 to-brand-yellow/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-1" />
              
              <div className="relative card p-6 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border-0 bg-white shadow-lg h-full">
                {/* Step Number */}
                <div className="mb-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-yellow to-yellow-500 font-bold text-lg text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {idx + 1}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-brand-leaf transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {p.desc}
                  </p>
                </div>

                {/* Step connector line (except for last item) */}
                {idx < pasos.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-3 w-6 h-0.5 bg-gradient-to-r from-brand-yellow to-transparent opacity-30" />
                )}

                <div className="absolute top-4 right-4 w-2 h-2 bg-brand-leaf rounded-full opacity-40 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
              </div>
            </li>
          ))}
        </ol>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-leaf/10 rounded-full">
            <div className="w-2 h-2 bg-brand-leaf rounded-full animate-pulse" />
            <span className="text-sm font-medium text-brand-leaf">
              Proceso garantizado paso a paso
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}