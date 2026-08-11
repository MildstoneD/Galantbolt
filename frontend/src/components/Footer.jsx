import { ChevronRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Header";

function TiktokIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact Us", href: "#contact" },
];

const serviceLinks = [
  "Building Construction",
  "Plumbing Services",
  "Solar Energy Solutions",
  "Interior Finishing",
  "Procurement Services",
];

const socialLinks = [
  {
    icon: TiktokIcon,
    label: "TikTok",
    href: "https://www.tiktok.com/@galantbolt_limited?_r=1&_t=ZS-98dImNYTX52",
  },

  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/galantbolt_limited?igsh=MTBzaDZrY3pvczNuNQ%3D%3D&utm_source=qr",
  },
  { icon: Mail, label: "Email", href: "mailto:Galantboltlimited@gmail.com" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark-footer text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Logo className="h-9 w-9" />
              <span className="text-sm font-bold tracking-wide">
                GALANTBOLT LIMITED
              </span>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-gray-400">
              A leading Nigerian engineering, construction, and procurement
              company delivering reliable, cost-effective solutions for clients
              across all sectors.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold text-gold transition-colors hover:bg-gold hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-gold">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-gold"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-gold" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-gold">
              OUR SERVICES
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-gold"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-gold" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-gold">
              CONTACT US
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>+2348069021837</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  <a href="mailto:Galantboltlimited@gmail.com">
                    Galantboltlimited@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>Mon – Fri: 8:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/30 py-4 text-center">
        <p className="text-xs text-gray-500">
          &copy; 2026 Galantbolt Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
