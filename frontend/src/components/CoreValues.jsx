import {
  Award,
  Handshake,
  HardHat,
  Lightbulb,
  Shield,
  Trophy,
  UserCheck,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We conduct business with honesty, transparency, and ethical standards in every engagement.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description:
      "We strive for the highest quality in every project, exceeding client expectations consistently.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We use premium materials and proven methods to deliver durable, lasting results.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace modern technology and creative solutions to solve complex challenges.",
  },
  {
    icon: HardHat,
    title: "Safety",
    description:
      "We prioritize the safety of our workers, clients, and communities on every site.",
  },
  {
    icon: UserCheck,
    title: "Professionalism",
    description:
      "Our team maintains the highest standards of conduct, communication, and accountability.",
  },
  {
    icon: Handshake,
    title: "Customer Satisfaction",
    description:
      "Client success is our success — we build lasting relationships through exceptional service.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-gray-light py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-sm font-bold tracking-[0.15em] text-gold">
          OUR CORE VALUES
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <value.icon
                className="mx-auto mb-3 h-9 w-9 text-gold"
                strokeWidth={1.5}
              />
              <h3 className="mb-2 text-sm font-bold text-dark">{value.title}</h3>
              <p className="text-xs leading-relaxed text-gray-text sm:text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
