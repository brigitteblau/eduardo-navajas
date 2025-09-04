import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { features } from "../../data/content";

export default function FeatureGrid() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            id="servicios" 
            className="font-display text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4"
          >
            ¿Por qué{" "}
            <span className="relative inline-block text-brand-leaf">
              elegirnos
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-brand-yellow/30 -skew-x-12 rounded" />
            </span>
            ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nos especializamos en brindar un servicio integral de jardinería 
            con la calidad y profesionalismo que tu jardín merece.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, index) => (
            <div key={f.title} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-leaf/5 to-brand-yellow/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-1" />
              
              <Card className="relative h-full p-6 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border-0 bg-white shadow-lg">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-leaf to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-brand-leaf transition-colors duration-300">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {f.desc}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-2 h-2 bg-brand-yellow rounded-full opacity-40 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}