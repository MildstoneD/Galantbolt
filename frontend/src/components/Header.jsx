import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import logoImage from "../assets/Galantbolt Logo Only.png";

const navLinks = [
  { label: "Home", to: "/", end: true },
  { label: "About Us", to: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", to: "/projects" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Contact Us", href: "/#contact" },
];

function Logo({ className = "h-10 w-auto" }) {
  return (
    <img
      src={logoImage}
      alt="Galantbolt Limited"
      className={`object-contain ${className}`}
    />
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <Logo className="h-10 w-auto" />
          <span className="text-sm font-bold tracking-wide text-dark sm:text-base">
            GALANTBOLT LIMITED
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) =>
            link.to ? (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `flex items-center gap-0.5 text-sm font-medium transition-colors hover:text-gold ${
                    isActive
                      ? "border-b-2 border-gold text-gold pb-0.5"
                      : "text-dark"
                  }`
                }
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </NavLink>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-0.5 text-sm font-medium text-dark transition-colors hover:text-gold"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </a>
            ),
          )}
        </nav>

        <a
          href="/#contact"
          className="hidden items-center gap-1 rounded bg-gold px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-dark xl:inline-flex"
        >
          Get a Quote <ChevronRight className="h-4 w-4" />
        </a>

        <button
          type="button"
          className="rounded p-2 text-dark lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-gray-border bg-white px-4 py-4 xl:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.to ? (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-1 rounded px-3 py-2.5 text-sm font-medium ${
                      isActive
                        ? "bg-gold/10 text-gold"
                        : "text-dark hover:bg-gray-light"
                    }`
                  }
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
                </NavLink>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-1 rounded px-3 py-2.5 text-sm font-medium text-dark hover:bg-gray-light"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
                </a>
              ),
            )}
            <a
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-1 rounded bg-gold px-5 py-2.5 text-sm font-semibold text-white"
            >
              Get a Quote <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export { Logo };
