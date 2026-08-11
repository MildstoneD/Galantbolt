import { Check, Clock, FolderKanban, ShieldCheck, Users } from "lucide-react";

const reasons = [
  "Competitive pricing without compromising quality",
  "Timely project delivery and efficient execution",
  "Experienced and certified professionals",
  "Comprehensive engineering and construction solutions",
  "Strong commitment to safety standards",
  "Transparent communication throughout projects",
  "Use of quality materials and modern technology",
  "Dedicated post-project support and maintenance",
];

const stats = [
  {
    icon: FolderKanban,
    value: "40+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: "35+",
    label: "Satisfied Clients",
  },
  {
    icon: Clock,
    value: "3+",
    label: "Years of Experience",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Commitment to Quality",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-gray-light py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="mb-8 text-sm font-bold tracking-[0.15em] text-gold">
              WHY CHOOSE GALANTBOLT LIMITED?
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-2">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                    strokeWidth={3}
                  />
                  <span className="text-sm text-gray-text">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-lg bg-cover bg-center p-6 sm:p-8"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-dark/70" />
            <div className="relative grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg bg-white/95 p-4 text-center shadow-lg backdrop-blur-sm sm:p-5"
                >
                  <stat.icon
                    className="mx-auto mb-2 h-7 w-7 text-gold"
                    strokeWidth={1.5}
                  />
                  <p className="text-xl font-bold text-dark sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-gray-text sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
