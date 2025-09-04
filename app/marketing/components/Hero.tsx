import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background decorative elements - simplified */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-48 h-48 md:w-72 md:h-72 bg-brand-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-brand-leaf/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Content Section */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm border border-brand-leaf/20 rounded-full text-xs md:text-sm font-medium text-brand-leaf shadow-sm">
              <div className="w-2 h-2 bg-brand-leaf rounded-full animate-pulse" />
              Servicio profesional de jardinería
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight">
              Corte{" "}
              <span className="relative inline-block">
                <span className="text-brand-leaf font-bold">preciso</span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-brand-yellow/30 -skew-x-12 rounded" />
              </span>
              {" "}y césped{" "}
              <span className="relative inline-block bg-brand-yellow px-3 py-1 rounded-lg transform -rotate-1 shadow-sm">
                perfecto
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
              <strong className="text-brand-leaf">Eduardo Navajas</strong> ofrece{" "}
              <em className="not-italic bg-gradient-to-r from-brand-leaf to-green-600 bg-clip-text text-transparent font-semibold">
                corte prolijo, orillado y mantenimiento programado
              </em>
              . Limpieza incluida en cada servicio.
            </p>

            {/* Social Proof - simplified */}
            <div className="pt-4 text-center lg:text-left">
              <p className="text-xs md:text-sm text-gray-600 mb-2">Confían en nuestro servicio:</p>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="flex -space-x-1">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-brand-leaf to-green-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-xs md:text-sm text-gray-700 ml-2">+50 clientes satisfechos</span>
              </div>
            </div>
          </div>

          {/* Image Section - simplified */}
          <div className="relative lg:justify-self-end">
            <div className="relative group">
              {/* Main image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow via-brand-leaf to-green-600 rounded-full blur-2xl opacity-20 scale-110 group-hover:scale-125 transition-transform duration-700" />
                
                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white shadow-2xl ring-4 ring-white/50 group-hover:ring-brand-leaf/30 transition-all duration-500">
                  <Image
                    src="/logo-mantis.png"
                    alt="Eduardo Navajas - Servicio profesional de jardinería"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-leaf/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Stats cards - only show on large screens */}
                <div className="absolute -left-6 lg:-left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-xl p-2 lg:p-3 border border-gray-100 hidden lg:block">
                  <div className="text-center">
                    <div className="text-lg lg:text-xl font-bold text-brand-leaf">5+</div>
                    <div className="text-xs text-gray-600">Años exp.</div>
                  </div>
                </div>

                <div className="absolute -right-6 lg:-right-8 top-1/3 transform -translate-y-1/2 bg-white rounded-lg shadow-xl p-2 lg:p-3 border border-gray-100 hidden lg:block">
                  <div className="text-center">
                    <div className="text-lg lg:text-xl font-bold text-brand-leaf">100%</div>
                    <div className="text-xs text-gray-600">Satisfacción</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}