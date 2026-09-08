import { Link } from "@tanstack/react-router";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import picto from "@/assets/fzana-picto.png";
import { EcgLine } from "@/components/BrandMotion";
import { categories, equipements } from "@/data/equipements";

export default function Footer() {
  const [inscrit, setInscrit] = useState(false);
  const countFor = (id: (typeof categories)[number]["id"]) =>
    equipements.filter((e) => e.categorie === id).length;

  return (
    <footer className="relative overflow-hidden bg-primary-dark text-primary-foreground/80">
      {/* pulse-line accent — bookends the same motif now used at the bottom of the header */}
      <div className="relative h-2 overflow-hidden">
        <EcgLine className="absolute inset-x-0 -top-2 h-6 opacity-40" />
      </div>
      <div className="absolute inset-0 clinical-section-soft opacity-[0.04]" aria-hidden="true" />

      <div className="container-fz relative grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={picto}
              alt="FZANA Systems"
              width={48}
              height={48}
              loading="lazy"
              className="h-11 w-11 shrink-0"
            />
            <span className="font-display text-lg font-bold tracking-tight text-primary-foreground">
              FZANA SYSTEMS
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Distribution et fourniture d'équipements médicaux pour les établissements de
            santé et les marchés publics au Maroc.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest text-primary-foreground uppercase">
            Catégories
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.map((categorie) => (
              <li key={categorie.id}>
                <Link
                  to="/equipements"
                  search={{ categorie: categorie.id }}
                  className="flex items-center justify-between gap-3 transition-colors hover:text-accent"
                >
                  <span>{categorie.nom}</span>
                  <span className="shrink-0 text-xs tabular-nums text-primary-foreground/40">
                    {String(countFor(categorie.id)).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest text-primary-foreground uppercase">
            Contact
          </h3>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li className="flex items-center gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary-foreground/10 text-accent">
                <MapPin size={14} />
              </span>
              <span>Adresse à communiquer — Maroc</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary-foreground/10 text-accent">
                <Phone size={14} />
              </span>
              <span>Téléphone à communiquer</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary-foreground/10 text-accent">
                <Mail size={14} />
              </span>
              <span>contact@fzana-systems.ma</span>
            </li>
          </ul>
          <ul className="mt-5 space-y-2 border-t border-primary-foreground/10 pt-4 text-sm">
            <li>
              <Link to="/marches-publics" className="transition-colors hover:text-accent">
                Marchés publics
              </Link>
            </li>
            <li>
              <Link to="/a-propos" className="transition-colors hover:text-accent">
                À propos
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest text-primary-foreground uppercase">
            Rester informé
          </h3>
          <p className="mt-4 text-sm">
            Recevez nos mises à jour catalogue et nos capacités techniques.
          </p>
          {inscrit ? (
            <p className="mt-4 flex items-center gap-2 rounded-md bg-accent/15 px-3 py-3 text-sm text-primary-foreground">
              <Check size={18} className="shrink-0 text-accent" />
              Inscription enregistrée. Merci.
            </p>
          ) : (
            <form
              className="mt-4 flex flex-col gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                setInscrit(true);
              }}
            >
              <label className="sr-only" htmlFor="footer-email">
                Adresse e-mail
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Adresse e-mail professionnelle"
                className="rounded-md border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:outline-none"
              />
              <button type="submit" className="btn-base btn-accent">
                S'inscrire
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="relative border-t border-primary-foreground/10">
        <div className="container-fz flex flex-col gap-2 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FZANA Systems. Tous droits réservés.</p>
          <p>Informations légales à compléter.</p>
        </div>
      </div>
    </footer>
  );
}