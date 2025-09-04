import Section from "@/components/ui/Section";
import { testimonios } from "../../data/content";

export default function Testimonios(){
  return (
    <Section>
      <div className="mx-auto max-w-3xl px-4">
        <h2 id="testimonios" className="font-display text-3xl mb-8 text-center">Testimonios</h2>
        <div className="grid gap-6">
          {testimonios.map((t) => (
            <blockquote key={t.name} className="card p-6">
              <p className="text-lg">“{t.text}”</p>
              <footer className="mt-3 text-sm opacity-70">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </Section>
  );
}
