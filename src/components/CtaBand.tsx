import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { EcgLine } from "./BrandMotion";

export default function CtaBand({
  titre = "Vous lancez un appel d'offres ? Contactez-nous",
  description = "Transmettez-nous le cahier des charges : nous analysons les spécifications techniques et constituons un dossier conforme.",
  libelle = "Nous contacter",
}: {
  titre?: string;
  description?: string;
  libelle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-14 text-primary-foreground sm:py-16">
      <EcgLine className="absolute inset-x-0 top-1/2 h-20 -translate-y-1/2 opacity-20" />
      <div className="relative container-fz grid gap-6 section-reveal lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="min-w-0">
          <h2 className="text-2xl text-primary-foreground sm:text-3xl">{titre}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/80">
            {description}
          </p>
        </div>
        <Link to="/contact" className="btn-base btn-accent w-fit">
          {libelle}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
