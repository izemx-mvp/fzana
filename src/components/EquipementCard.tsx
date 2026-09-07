import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { getCategorie, type Equipement } from "@/data/equipements";

export default function EquipementCard({ equipement }: { equipement: Equipement }) {
  const categorie = getCategorie(equipement.categorie);

  return (
    <Link
      to="/equipements/$id"
      params={{ id: equipement.id }}
      className="surface-card group section-reveal flex h-full flex-col"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-secondary">
        <img
          src={equipement.image}
          alt={equipement.nom}
          width={1024}
          height={768}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-md border border-primary-foreground/25 bg-primary/70 text-primary-foreground backdrop-blur">
          <ArrowUpRight size={17} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">{categorie?.nom}</p>
        <h3 className="mt-2 text-lg leading-snug">{equipement.nom}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {equipement.resume}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-accent">
          Voir la fiche
          <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}
