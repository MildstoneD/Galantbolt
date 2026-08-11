import { ChevronRight, Eye, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-5 text-sm font-bold tracking-[0.15em] text-gold">
              ABOUT US
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-text sm:text-base">
              Galantbolt Limited is a Nigerian engineering, construction, and
              procurement company dedicated to delivering innovative, reliable,
              and cost-effective solutions across the construction and
              infrastructure sectors. We provide comprehensive services in
              building construction, plumbing systems, solar energy solutions,
              interior finishing and furnishing, and procurement, serving
              residential, commercial, industrial, and public-sector clients.
            </p>
            <p className="mb-8 text-sm leading-relaxed text-gray-text sm:text-base">
              Our team of skilled professionals is committed to delivering
              projects that meet the highest standards of quality, safety,
              functionality, and sustainability.
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-1 rounded border-2 border-gold px-6 py-2.5 text-sm font-semibold text-dark transition-colors hover:bg-gold/5"
            >
              Learn More About Us <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row lg:flex-col">
            <div className="flex-1 rounded-lg border border-gray-border bg-white p-6 shadow-sm">
              <Eye className="mb-3 h-8 w-8 text-gold" strokeWidth={1.5} />
              <h3 className="mb-2 text-sm font-bold tracking-wide text-dark">
                OUR VISION
              </h3>
              <p className="text-sm leading-relaxed text-gray-text">
                To be the leading engineering and construction firm in Nigeria
                and West Africa, recognized for innovation, quality, and
                sustainable development that transforms communities.
              </p>
            </div>
            <div className="flex-1 rounded-lg border border-gray-border bg-white p-6 shadow-sm">
              <Target className="mb-3 h-8 w-8 text-gold" strokeWidth={1.5} />
              <h3 className="mb-2 text-sm font-bold tracking-wide text-dark">
                OUR MISSION
              </h3>
              <p className="text-sm leading-relaxed text-gray-text">
                To deliver exceptional engineering, construction, and
                procurement services through skilled professionals, cutting-edge
                technology, and an unwavering commitment to safety, quality, and
                client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
