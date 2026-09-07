import { Link } from "@tanstack/react-router";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import picto from "@/assets/fzana-picto.png.asset.json";
import { categories } from "@/data/equipements";

export default function Footer() {
  const [inscrit, setInscrit] = useState(false);

  return (
    <footer className="bg-primary-dark text-white/80">
      <div className="container-fz grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={picto.url}
              alt="FZANA Systems"
              width={48}
              height={48}
              loading="lazy"
              className="h-11 w-11 shrink-0"
            />
            <span className="font-display text-lg font-bold tracking-tight text-white">
              FZANA SYSTEMS
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Distribution et fourniture d'équipements médicaux pour les établissements de
            santé et les marchés publics au Maroc.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest text-white uppercase">
            Catégories
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((categorie) => (
              <li key={categorie.id}>
                <Link
                  to="/equipements"
                  search={{ categorie: categorie.id }}
                  className="transition-colors hover:text-accent"
                >
                  {categorie.nom}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest text-white uppercase">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
              <span>Adresse à communiquer — Maroc</span>
            </li>
            <li className="flex gap-2">
              <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
              <span>Téléphone à communiquer</span>
            </li>
            <li className="flex gap-2">
              <Mail size={18} className="mt-0.5 shrink-0 text-accent" />
              <span>contact@fzana-systems.ma</span>
            </li>
          </ul>
          <ul className="mt-4 space-y-2 text-sm">
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
          <h3 className="font-display text-sm font-bold tracking-widest text-white uppercase">
            Rester informé
          </h3>
          <p className="mt-4 text-sm">
            Recevez nos mises à jour catalogue et nos capacités techniques.
          </p>
          {inscrit ? (
            <p className="mt-4 flex items-center gap-2 rounded-md bg-accent/15 px-3 py-3 text-sm text-white">
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
                className="rounded-md border border-white/25 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-accent focus:outline-none"
              />
              <button type="submit" className="btn-base btn-accent">
                S'inscrire
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-fz flex flex-col gap-2 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FZANA Systems. Tous droits réservés.</p>
          <p>Informations légales à compléter.</p>
        </div>
      </div>
    </footer>
  );
}
