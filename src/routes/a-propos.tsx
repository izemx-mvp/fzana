import { createFileRoute } from "@tanstack/react-router";
import { Building2, Network, ShieldCheck, Target, Timer } from "lucide-react";

import hero from "@/assets/hero-hospital.jpg";
import CtaBand from "@/components/CtaBand";
import { PulseDivider, TrustBadge } from "@/components/BrandMotion";
import SiteLayout from "@/components/SiteLayout";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — FZANA Systems, fournisseur d'équipements médicaux" },
      {
        name: "description",
        content:
          "FZANA Systems est une société marocaine de distribution d'équipements médicaux, orientée conformité réglementaire, rigueur technique et réactivité auprès des établissements de santé.",
      },
      {
        property: "og:title",
        content: "À propos — FZANA Systems, fournisseur d'équipements médicaux",
      },
      {
        property: "og:description",
        content:
          "Notre mission : sécuriser l'approvisionnement en équipements médicaux des établissements de santé au Maroc.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: APropos,
});

const valeurs = [
  {
    icone: Target,
    titre: "Rigueur technique",
    texte:
      "Aucune offre n'est remise sans vérification détaillée des caractéristiques du matériel face aux exigences exprimées.",
  },
  {
    icone: ShieldCheck,
    titre: "Conformité réglementaire",
    texte:
      "Nous travaillons avec des équipements enregistrés et documentés, et fournissons les justificatifs attendus par les acheteurs publics.",
  },
  {
    icone: Timer,
    titre: "Réactivité",
    texte:
      "Les procédures publiques imposent des délais courts : notre organisation est conçue pour y répondre.",
  },
];

function APropos() {
  return (
    <SiteLayout>
      {/* HEADER — dossier style, consistent with Équipements / Marchés Publics */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 clinical-section-soft opacity-[0.06]" aria-hidden="true" />
        <div className="container-fz relative py-20 sm:py-28">
          <div className="section-reveal flex items-baseline gap-4">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
              Notre entreprise
            </span>
            <span className="h-px flex-1 bg-primary-foreground/15" />
          </div>
          <h1 className="section-reveal mt-6 max-w-2xl text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl">
            FZANA Systems, partenaire d'approvisionnement médical
          </h1>
          <p className="section-reveal reveal-delay-1 mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
            Nous fournissons les établissements de santé marocains — publics et privés — en
            équipements médicaux, en accordant une place centrale à la conformité technique et
            documentaire de chaque offre.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <PulseDivider />
      <section className="clinical-section py-20 sm:py-24">
        <div className="container-fz grid items-center gap-12 lg:grid-cols-2">
          <div className="section-reveal">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Notre mission
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Sécuriser l'achat d'équipements médicaux
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                FZANA Systems est une société marocaine spécialisée dans la distribution et la
                fourniture d'équipements médicaux à destination des hôpitaux, cliniques et
                structures de soins. Notre activité s'articule autour d'un principe simple : une
                offre ne vaut que si le matériel proposé correspond exactement à ce qui est
                demandé.
              </p>
              <p>
                Nous intervenons aussi bien sur des besoins d'approvisionnement courant que sur
                des consultations publiques exigeant un dossier technique et administratif
                complet. Notre interlocution reste directe : un point de contact unique pour les
                services d'achats, de la demande initiale au suivi de livraison.
              </p>
              <p>
                Notre catalogue est en cours de structuration ; les gammes présentées sur ce site
                illustrent nos domaines d'intervention et sont complétées au cas par cas selon
                les spécifications reçues.
              </p>
            </div>
          </div>
          <div className="surface-card section-reveal reveal-delay-1 overflow-hidden rounded-2xl">
            <img
              src={hero}
              alt="Environnement hospitalier équipé"
              width={1600}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <PulseDivider />
      <section className="clinical-section-soft py-20 sm:py-24">
        <div className="container-fz">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Nos valeurs
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
            Ce qui structure notre travail
          </h2>
          <div className="section-reveal mt-10 grid gap-5 md:grid-cols-3 md:grid-rows-2">
            {valeurs.map((valeur) => (
              <TrustBadge
                key={valeur.titre}
                icon={valeur.icone}
                label={valeur.titre}
                detail={valeur.texte}
                className={valeur === valeurs[0] ? "md:row-span-2 md:flex md:items-center" : "md:col-span-2"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SUPPLIER NETWORK */}
      <PulseDivider />
      <section className="clinical-section py-20 sm:py-24">
        <div className="container-fz grid gap-12 lg:grid-cols-2">
          <div className="section-reveal">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Réseau fournisseurs
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Multi-fournisseurs, par exigence technique
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Nous ne dépendons pas d'une marque unique. Travailler avec plusieurs fabricants et
              distributeurs nous permet de sélectionner l'équipement qui satisfait réellement les
              prescriptions techniques d'un lot, plutôt que d'y adapter approximativement un
              produit imposé.
            </p>
          </div>
          <div className="section-reveal reveal-delay-1 grid gap-5 sm:grid-cols-2">
            <div className="surface-card rounded-xl p-6">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-accent-soft text-accent">
                <Network size={20} />
              </span>
              <h3 className="mt-4 text-base font-medium">Sélection ouverte</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Comparaison de plusieurs gammes pour chaque exigence, avec arbitrage technique et
                budgétaire documenté.
              </p>
            </div>
            <div className="surface-card rounded-xl p-6">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-accent-soft text-accent">
                <Building2 size={20} />
              </span>
              <h3 className="mt-4 text-base font-medium">Disponible à l'échelle nationale</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Notre organisation est en mesure de répondre aux établissements de santé partout
                au Maroc, quelle que soit leur localisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}