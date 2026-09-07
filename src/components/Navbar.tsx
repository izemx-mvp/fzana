import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/fzana-logo.png.asset.json";

const liens = [
  { to: "/", label: "Accueil" },
  { to: "/equipements", label: "Équipements" },
  { to: "/marches-publics", label: "Marchés Publics" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [ouvert, setOuvert] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 shadow-[0_12px_40px_-32px_var(--color-primary)] backdrop-blur-xl">
      <div className="container-fz grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center" onClick={() => setOuvert(false)}>
          <img
            src={logo.url}
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
              activeProps={{ className: "text-accent" }}
              inactiveProps={{ className: "text-charcoal hover:text-accent" }}
              className="font-display text-sm font-semibold transition-colors"
            >
              {lien.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn-base btn-primary hidden lg:inline-flex">
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

      {ouvert && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="container-fz flex flex-col py-2">
            {liens.map((lien) => (
              <Link
                key={lien.to}
                to={lien.to}
                onClick={() => setOuvert(false)}
                activeOptions={{ exact: lien.to === "/" }}
                activeProps={{ className: "text-accent" }}
                inactiveProps={{ className: "text-charcoal" }}
                className="border-b border-border py-3 font-display text-sm font-semibold last:border-0"
              >
                {lien.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOuvert(false)}
              className="btn-base btn-primary my-3"
            >
              Demander un devis
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
