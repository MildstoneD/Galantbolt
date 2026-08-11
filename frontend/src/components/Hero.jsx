import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="lg:grid lg:grid-cols-5 lg:min-h-130">
        {/* Text content */}
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 lg:col-span-3 lg:px-12 lg:py-20 xl:px-20">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-gold sm:text-sm">
            ENGINEERING. CONSTRUCTION. PROCUREMENT.
          </p>
          <h1 className="mb-5 text-3xl font-bold leading-tight text-dark sm:text-4xl lg:text-5xl">
            CREATING SPACES. <span className="text-gold">THAT INSPIRE.</span>
          </h1>
          <p className="mb-8 max-w-lg text-sm leading-relaxed text-gray-text sm:text-base">
            Galantbolt Limited delivers reliable, cost-effective engineering,
            construction, and procurement solutions. From residential buildings
            to large-scale infrastructure, we build with integrity and
            precision.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-1 rounded bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
            >
              Our Services <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 rounded border-2 border-gold px-6 py-3 text-sm font-semibold text-dark transition-colors hover:bg-gold/5"
            >
              Get a Quote <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Hero image with diagonal clip */}
        <div className="relative h-64 sm:h-80 lg:col-span-2 lg:h-auto">
          <div
            className="absolute inset-0 bg-cover bg-center lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80')",
            }}
          />
          <div className="absolute inset-0 hidden bg-linear-to-r from-white via-white/60 to-transparent lg:block" />
        </div>
      </div>
    </section>
  );
}
