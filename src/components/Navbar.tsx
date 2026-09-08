import { Link } from "@tanstack/react-router";
import { Building2, FileText, Home, Info, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/fzana-logo.png";
import { EcgLine } from "@/components/BrandMotion";

const liens = [
  { to: "/", label: "Accueil", icone: Home },
  { to: "/equipements", label: "Équipements", icone: FileText },
  { to: "/marches-publics", label: "Marchés Publics", icone: Building2 },
  { to: "/a-propos", label: "À propos", icone: Info },
  { to: "/contact", label: "Contact", icone: Phone },
] as const;

export default function Navbar() {
  const [ouvert, setOuvert] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 shadow-[0_12px_40px_-32px_var(--color-primary)] backdrop-blur-xl">
      <div className="container-fz grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center" onClick={() => setOuvert(false)}>
          <img
            src={logo}
            alt="FZANA Systems"
            width={200}
            height={62}
            className="h-10 w-auto shrink-0 sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {liens.map((lien) => (
            <Link
              key={lien.to}
              to={lien.to}
              activeOptions={{ exact: lien.to === "/" }}
              activeProps={{ className: "text-accent [&>span]:w-full" }}
              inactiveProps={{ className: "text-charcoal hover:text-accent" }}
              className="group relative py-1 font-display text-sm font-semibold transition-colors"
            >
              {lien.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn-base btn-primary hidden lg:inline-flex">
            <FileText size={16} />
            Demander un devis
          </Link>
          <button
            type="button"
            aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOuvert((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-primary lg:hidden"
          >
            {ouvert ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* brand pulse-line accent — reuses the same ECG motif from the hero, now anchoring the header too */}
      <div className="relative h-2 overflow-hidden border-t border-border/60">
        <EcgLine className="absolute inset-x-0 -top-2 h-6 opacity-50" />
      </div>

      {ouvert && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="container-fz flex flex-col py-2">
            {liens.map((lien) => (
              <Link
                key={lien.to}
                to={lien.to}
                onClick={() => setOuvert(false)}
                activeOptions={{ exact: lien.to === "/" }}
                activeProps={{ className: "border-l-accent text-accent" }}
                inactiveProps={{ className: "border-l-transparent text-charcoal" }}
                className="flex items-center gap-3 border-b border-l-2 border-border py-3 pl-3 font-display text-sm font-semibold transition-colors last:border-b-0"
              >
                <lien.icone size={16} className="shrink-0 text-accent" />
                {lien.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOuvert(false)}
              className="btn-base btn-primary my-3"
            >
              <FileText size={16} />
              Demander un devis
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}