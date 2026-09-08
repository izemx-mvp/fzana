import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, BadgeCheck, Check, FileText, PlusCircle } from "lucide-react";
import { useState } from "react";

import CtaBand from "@/components/CtaBand";
import { PulseDivider } from "@/components/BrandMotion";
import EquipementCard from "@/components/EquipementCard";
import SiteLayout from "@/components/SiteLayout";
import { equipements, getCategorie, getEquipement } from "@/data/equipements";

export const Route = createFileRoute("/equipements/$id")({
  loader: ({ params }) => {
    const equipement = getEquipement(params.id);
    if (!equipement) throw notFound();
    return { equipement };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Référence introuvable — FZANA Systems" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { equipement } = loaderData;
    return {
      meta: [
        { title: `${equipement.nom} — FZANA Systems` },
        { name: "description", content: equipement.resume },
        { property: "og:title", content: `${equipement.nom} — FZANA Systems` },
        { property: "og:description", content: equipement.resume },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: EquipementIntrouvable,
  component: EquipementDetail,
});

function EquipementIntrouvable() {
  return (
    <SiteLayout>
      <div className="container-fz py-24 text-center">
        <h1 className="text-2xl">Référence introuvable</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Cette fiche n'existe pas ou a été retirée du catalogue.
        </p>
        <Link to="/equipements" search={{}} className="btn-base btn-primary mt-6">
          Retour au catalogue
        </Link>
      </div>
    </SiteLayout>
  );
}

const documents = [
  { label: "Fiche technique", note: "Sur demande" },
  { label: "Certificat d'enregistrement", note: "Sur demande" },
  { label: "Manuel utilisateur constructeur", note: "Sur demande" },
];

function EquipementDetail() {
  const { equipement } = Route.useLoaderData();
  const categorie = getCategorie(equipement.categorie);
  const [demande, setDemande] = useState<null | "fiche" | "devis">(null);

  const similaires = equipements
    .filter((item) => item.categorie === equipement.categorie && item.id !== equipement.id)
    .slice(0, 3);

  return (
    <SiteLayout>
      {/* BREADCRUMB — full trail, hairline style matching the catalogue index */}
      <div className="clinical-section-soft border-b border-border py-5">
        <div className="container-fz">
          <nav className="flex flex-wrap items-center gap-2 font-display text-xs font-medium text-muted-foreground">
            <Link to="/" className="hover:text-accent">
              Accueil
            </Link>
            <span>/</span>
            <Link to="/equipements" search={{}} className="hover:text-accent">
              Équipements
            </Link>
            <span>/</span>
            <Link to="/equipements" search={{ categorie: equipement.categorie }} className="hover:text-accent">
              {categorie?.nom}
            </Link>
            <span>/</span>
            <span className="text-charcoal">{equipement.nom}</span>
          </nav>
        </div>
      </div>

      <section className="clinical-section py-12 sm:py-16">
        <div className="container-fz grid gap-12 lg:grid-cols-2">
          {/* PHOTO — single honest image, no fabricated multi-angle gallery */}
          <div className="section-reveal">
            <div className="surface-card aspect-4/3 overflow-hidden">
              <img
                src={equipement.image}
                alt={equipement.nom}
                width={1024}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
            <Link
              to="/equipements"
              search={{ categorie: equipement.categorie }}
              className="mt-4 inline-flex items-center gap-2 font-display text-sm font-semibold text-charcoal hover:text-accent"
            >
              <ArrowLeft size={16} />
              Retour à {categorie?.nom}
            </Link>
          </div>

          <div className="section-reveal reveal-delay-1">
            <p className="eyebrow">{categorie?.nom}</p>
            <h1 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">{equipement.nom}</h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {equipement.description}
            </p>

            {/* SPECIFICATIONS — index-numbered rows, matches the catalogue's dossier language */}
            <h2 className="mt-9 font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Spécifications techniques
            </h2>
            <table className="mt-4 w-full border-collapse text-sm">
              <tbody>
                {equipement.specifications.map((spec, i) => (
                  <tr key={spec.label} className="border-b border-border">
                    <th className="w-1/2 py-3 pr-4 text-left align-top">
                      <span className="mr-2 font-display text-xs tabular-nums text-muted-foreground/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-sm font-semibold text-primary">{spec.label}</span>
                    </th>
                    <td className="py-3 align-top text-muted-foreground">{spec.valeur}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* DOCUMENTS — a real checklist instead of one alert box */}
            <h2 className="mt-9 font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Documents & conformité
            </h2>
            <div className="mt-4 border-t border-border">
              {documents.map((doc) => (
                <div
                  key={doc.label}
                  className="flex items-center justify-between gap-4 border-b border-border py-3"
                >
                  <span className="flex items-center gap-2.5 text-sm font-medium text-charcoal">
                    <FileText size={15} className="shrink-0 text-accent" />
                    {doc.label}
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">{doc.note}</span>
                </div>
              ))}
            </div>
            <div className="scan-badge scan-sweep mt-4 flex gap-3 border-l-2 border-accent bg-accent-soft/60 p-4">
              <BadgeCheck size={18} className="mt-0.5 shrink-0 text-accent" />
              <p className="text-sm leading-relaxed text-charcoal">
                Certificat d'enregistrement et documentation constructeur transmis pour la
                constitution du dossier d'appel d'offres.
              </p>
            </div>

            {demande ? (
              <div className="mt-6 flex gap-3 border-l-2 border-accent bg-accent-soft p-5">
                <Check size={22} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="font-display font-semibold text-primary">
                    {demande === "fiche"
                      ? "Demande de fiche technique enregistrée"
                      : "Référence ajoutée à votre demande de devis"}
                  </p>
                  <p className="mt-1 text-sm text-charcoal">
                    Notre équipe revient vers vous avec les documents demandés. Vous pouvez
                    compléter votre demande depuis la page contact.
                  </p>
                  <Link to="/contact" className="btn-base btn-primary mt-4">
                    Compléter ma demande
                  </Link>
                </div>
              </div>
            ) : (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setDemande("fiche")}
                  className="btn-base btn-primary"
                >
                  <FileText size={18} />
                  Demander une fiche technique
                </button>
                <button
                  type="button"
                  onClick={() => setDemande("devis")}
                  className="btn-base btn-outline"
                >
                  <PlusCircle size={18} />
                  Ajouter à ma demande de devis
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {similaires.length > 0 && (
        <>
          <PulseDivider />
          <section className="clinical-section-soft py-14 sm:py-16">
            <div className="container-fz">
              <p className="eyebrow">Même catégorie</p>
              <h2 className="mt-3 text-2xl font-medium tracking-tight">Équipements associés</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {similaires.map((item) => (
                  <EquipementCard key={item.id} equipement={item} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <CtaBand />
    </SiteLayout>
  );
}