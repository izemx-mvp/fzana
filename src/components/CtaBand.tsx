import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

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
    <section className="bg-primary-dark py-14 text-white sm:py-16">
      <div className="container-fz grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="min-w-0">
          <h2 className="text-2xl text-white sm:text-3xl">{titre}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
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
