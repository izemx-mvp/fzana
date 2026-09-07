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

function EquipementDetail() {
  const { equipement } = Route.useLoaderData();
  const categorie = getCategorie(equipement.categorie);
  const [imageActive, setImageActive] = useState(0);
  const [demande, setDemande] = useState<null | "fiche" | "devis">(null);

  const galerie = [equipement.image, categorie?.image ?? equipement.image, equipement.image];
  const similaires = equipements
    .filter((item) => item.categorie === equipement.categorie && item.id !== equipement.id)
    .slice(0, 3);

  return (
    <SiteLayout>
      <div className="clinical-section-soft border-b border-border py-5">
        <div className="container-fz">
          <Link
            to="/equipements"
            search={{ categorie: equipement.categorie }}
            className="inline-flex items-center gap-2 font-display text-sm font-semibold text-charcoal hover:text-accent"
          >
            <ArrowLeft size={16} />
            {categorie?.nom}
          </Link>
        </div>
      </div>

      <section className="clinical-section py-12 sm:py-16">
        <div className="container-fz grid gap-10 lg:grid-cols-2">
          <div className="section-reveal">
            <div className="surface-card aspect-4/3 overflow-hidden">
              <img
                src={galerie[imageActive]}
                alt={equipement.nom}
                width={1024}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {galerie.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setImageActive(index)}
                  aria-label={`Vue ${index + 1}`}
                  className={`aspect-4/3 overflow-hidden rounded-md border transition-colors ${
                    imageActive === index ? "border-accent" : "border-border"
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="section-reveal reveal-delay-1">
            <p className="eyebrow">{categorie?.nom}</p>
            <h1 className="mt-3 text-2xl sm:text-3xl">{equipement.nom}</h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {equipement.description}
            </p>

            <h2 className="mt-8 text-lg">Spécifications techniques</h2>
            <table className="mt-3 w-full border-collapse text-sm">
              <tbody>
                {equipement.specifications.map((spec) => (
                  <tr key={spec.label} className="border-b border-border">
                    <th className="w-1/2 py-3 pr-4 text-left align-top font-display text-sm font-semibold text-primary">
                      {spec.label}
                    </th>
                    <td className="py-3 align-top text-muted-foreground">{spec.valeur}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="scan-badge scan-sweep mt-6 flex gap-3 rounded-md border border-accent/30 bg-accent-soft p-4">
              <BadgeCheck size={20} className="mt-0.5 shrink-0 text-accent" />
              <p className="text-sm leading-relaxed text-charcoal">
                Certificat d'enregistrement et documentation constructeur disponibles sur
                demande pour la constitution du dossier d'appel d'offres.
              </p>
            </div>

            {demande ? (
              <div className="mt-6 flex gap-3 rounded-md border border-accent bg-accent-soft p-5">
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
        <><PulseDivider /><section className="clinical-section-soft py-14 sm:py-16">
          <div className="container-fz">
            <p className="eyebrow">Même catégorie</p>
            <h2 className="mt-3 text-2xl">Équipements associés</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {similaires.map((item) => (
                <EquipementCard key={item.id} equipement={item} />
              ))}
            </div>
          </div>
        </section></>
      )}

      <CtaBand />
    </SiteLayout>
  );
}
