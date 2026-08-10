import {
  Building2,
  Check,
  Droplets,
  Package,
  Sofa,
  Sun,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "BUILDING CONSTRUCTION",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80",
    items: [
      "Residential Buildings",
      "Commercial Buildings",
      "Industrial Structures",
      "Renovation & Remodeling",
    ],
  },
  {
    icon: Droplets,
    title: "PLUMBING SERVICES",
    image:
      "https://images.unsplash.com/photo-1607472586893-a37c7364b081?w=400&q=80",
    items: [
      "Pipe Installation",
      "Drainage Systems",
      "Water Supply Systems",
      "Maintenance & Repairs",
    ],
  },
  {
    icon: Sun,
    title: "SOLAR ENERGY SOLUTIONS",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80",
    items: [
      "Solar Panel Installation",
      "Inverter Systems",
      "Energy Audits",
      "Maintenance Services",
    ],
  },
  {
    icon: Sofa,
    title: "INTERIOR FINISHING & FURNISHING",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80",
    items: [
      "Interior Design",
      "Flooring & Tiling",
      "Painting & Decoration",
      "Custom Furnishing",
    ],
  },
  {
    icon: Package,
    title: "PROCUREMENT SERVICES",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80",
    items: [
      "Material Sourcing",
      "Equipment Supply",
      "Vendor Management",
      "Logistics & Delivery",
    ],
  },
];

function HexIcon({ Icon }) {
  return (
    <div className="absolute -bottom-5 left-4 flex h-10 w-10 items-center justify-center bg-white shadow-md">
      <svg viewBox="0 0 40 44" className="absolute inset-0 h-full w-full">
        <path
          d="M20 2L37 11V33L20 42L3 33V11L20 2Z"
          fill="white"
          stroke="#d1a13c"
          strokeWidth="1.5"
        />
      </svg>
      <Icon className="relative h-4 w-4 text-gold" strokeWidth={2} />
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-sm font-bold tracking-[0.15em] text-gold">
          OUR SERVICES
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="overflow-hidden rounded-lg border border-gray-border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-40 w-full object-cover"
                />
                <HexIcon Icon={service.icon} />
              </div>
              <div className="px-4 pb-5 pt-8">
                <h3 className="mb-3 text-xs font-bold tracking-wide text-gold">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-gray-text sm:text-sm"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
