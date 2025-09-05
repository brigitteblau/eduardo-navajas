import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CTA() {
  // Handlers
  const handleWhatsApp = () => {
    window.open("https://wa.me/541161213881?text=Hola%20quiero%20coordinar%20una%20visita", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:brigitteyaelblau@gmail.com?subject=Consulta%20de%20césped&body=Hola%2C%20quiero%20coordinar%20una%20visita";
  };

  return (
    <Section>
      <div
        id="contacto"
        className="mx-auto max-w-5xl px-4 text-center card py-14"
      >
        <h3 className="font-display text-3xl">¿Listo para un césped perfecto?</h3>
        <p className="mt-3 opacity-80">
          Coordinemos una visita sin cargo y te pasamos presupuesto.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button onClick={handleWhatsApp}>WhatsApp</Button>
          <Button onClick={handleEmail} variant="secondary">
            Enviar consulta
          </Button>
        </div>
      </div>
    </Section>
  );
}
