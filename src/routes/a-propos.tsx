import { createFileRoute } from "@tanstack/react-router";
import { Building2, Network, ShieldCheck, Target, Timer } from "lucide-react";

import hero from "@/assets/hero-hospital.jpg";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
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
      <PageHero
        eyebrow="Notre entreprise"
        titre="FZANA Systems, partenaire d'approvisionnement médical"
        description="Nous fournissons les établissements de santé marocains — publics et privés — en équipements médicaux, en accordant une place centrale à la conformité technique et documentaire de chaque offre."
      />

      <section className="py-16 sm:py-20">
        <div className="container-fz grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Notre mission</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">
              Sécuriser l'achat d'équipements médicaux
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                FZANA Systems est une société marocaine spécialisée dans la distribution et
                la fourniture d'équipements médicaux à destination des hôpitaux, cliniques
                et structures de soins. Notre activité s'articule autour d'un principe
                simple : une offre ne vaut que si le matériel proposé correspond exactement
                à ce qui est demandé.
              </p>
              <p>
                Nous intervenons aussi bien sur des besoins d'approvisionnement courant que
                sur des consultations publiques exigeant un dossier technique et
                administratif complet. Notre interlocution reste directe : un point de
                contact unique pour les services d'achats, de la demande initiale au suivi
                de livraison.
              </p>
              <p>
                Notre catalogue est en cours de structuration ; les gammes présentées sur ce
                site illustrent nos domaines d'intervention et sont complétées au cas par
                cas selon les spécifications reçues.
              </p>
            </div>
          </div>
          <div className="surface-card overflow-hidden">
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

      <section className="bg-secondary py-16 sm:py-20">
        <div className="container-fz">
          <p className="eyebrow">Nos valeurs</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Ce qui structure notre travail</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {valeurs.map((valeur) => (
              <div key={valeur.titre} className="surface-card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground">
                  <valeur.icone size={22} />
                </span>
                <h3 className="mt-4 text-lg">{valeur.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {valeur.texte}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-fz grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Réseau fournisseurs</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">
              Multi-fournisseurs, par exigence technique
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Nous ne dépendons pas d'une marque unique. Travailler avec plusieurs
              fabricants et distributeurs nous permet de sélectionner l'équipement qui
              satisfait réellement les prescriptions techniques d'un lot, plutôt que d'y
              adapter approximativement un produit imposé.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="surface-card p-6">
              <Network size={24} className="text-accent" />
              <h3 className="mt-3 text-base">Sélection ouverte</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Comparaison de plusieurs gammes pour chaque exigence, avec arbitrage
                technique et budgétaire documenté.
              </p>
            </div>
            <div className="surface-card p-6">
              <Building2 size={24} className="text-accent" />
              <h3 className="mt-3 text-base">Couverture nationale</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Intervention auprès des établissements de santé sur l'ensemble du territoire
                marocain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
