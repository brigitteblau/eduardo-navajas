export default function Footer(){
  return (
    <footer className="mt-16 border-t border-white/50">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6 items-center">
        <div className="flex items-center gap-3">
          <img src="/logo-mantis.png" alt="logo" className="h-7 w-7"/>
          <span className="font-display">Eduardo Navajas</span>
        </div>
        <p className="text-sm opacity-70">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        <p className="text-sm md:text-right opacity-70">Hecho con ❤ y corte preciso.</p>
      </div>
    </footer>
  );
}
