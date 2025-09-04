import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { destacados } from "../../data/content";

export default function Destacados() {
  return (
    <Section className="bg-gradient-to-b from-gray-50/50 to-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Áreas de{" "}
            <span className="relative inline-block text-brand-leaf">
              trabajo
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-brand-yellow/30 -skew-x-12 rounded" />
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Atendemos diferentes tipos de espacios verdes con el mismo 
            nivel de profesionalismo y dedicación.
          </p>
        </div>

        {/* Destacados Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {destacados.map((d, index) => (
            <div key={d.title} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-leaf/5 to-brand-yellow/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-1" />
              
              <Card className="relative h-full p-6 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border-0 bg-white shadow-lg">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-yellow to-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-brand-leaf transition-colors duration-300">
                    {d.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {d.desc}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-2 h-2 bg-brand-leaf rounded-full opacity-40 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}