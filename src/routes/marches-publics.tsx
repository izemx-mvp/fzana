import { createFileRoute } from "@tanstack/react-router";
import {
  ClipboardList,
  FileCheck2,
  FileSignature,
  FileSpreadsheet,
  ScanSearch,
  ShieldCheck,
  Timer,
} from "lucide-react";

import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";

export const Route = createFileRoute("/marches-publics")({
  head: () => ({
    meta: [
      { title: "Marchés publics et appels d'offres — FZANA Systems" },
      {
        name: "description",
        content:
          "Veille des appels d'offres, analyse du cahier des charges, matching technique et constitution du dossier : la méthode FZANA Systems pour les marchés publics d'équipements médicaux.",
      },
      {
        property: "og:title",
        content: "Marchés publics et appels d'offres — FZANA Systems",
      },
      {
        property: "og:description",
        content:
          "Une réponse technique et administrative complète aux appels d'offres d'équipements médicaux au Maroc.",
      },
    ],
  }),
  component: MarchesPublics,
});

const etapes = [
  {
    icone: ScanSearch,
    titre: "Veille des appels d'offres",
    texte:
      "Suivi des publications et des consultations relatives aux équipements médicaux, avec qualification rapide des lots pertinents.",
  },
  {
    icone: ClipboardList,
    titre: "Analyse du cahier des charges",
    texte:
      "Lecture du règlement de consultation et du CPS, identification des exigences bloquantes, des pièces exigées et du calendrier de la procédure.",
  },
  {
    icone: FileCheck2,
    titre: "Matching technique produit par produit",
    texte:
      "Confrontation ligne par ligne des prescriptions techniques avec les caractéristiques réelles des équipements, et arbitrage entre fournisseurs.",
  },
  {
    icone: FileSignature,
    titre: "Constitution du dossier",
    texte:
      "Mémoire technique, bordereau des prix, acte d'engagement, certificat d'enregistrement et pièces administratives réunis dans un dossier cohérent.",
  },
];

const pieces = [
  "Mémoire technique détaillé",
  "Bordereau des prix / détail estimatif",
  "Acte d'engagement",
  "Certificat d'enregistrement du dispositif",
  "Fiches techniques et notices constructeur",
  "Attestations et déclarations administratives",
];

const engagements = [
  {
    icone: ShieldCheck,
    titre: "Matériel enregistré et documenté",
    texte:
      "Nous ne proposons que des équipements dont la conformité peut être justifiée auprès de la commission d'évaluation.",
  },
  {
    icone: FileSpreadsheet,
    titre: "Traçabilité de l'offre",
    texte:
      "Chaque proposition est adossée à un tableau de correspondance entre exigence du CPS et caractéristique du produit.",
  },
  {
    icone: Timer,
    titre: "Respect des délais",
    texte:
      "Organisation interne calée sur les échéances de dépôt et sur les délais de livraison contractuels.",
  },
];

function MarchesPublics() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Secteur public"
        titre="Marchés publics d'équipements médicaux"
        description="FZANA Systems accompagne les établissements publics et les acheteurs hospitaliers sur l'ensemble du cycle de l'appel d'offres : compréhension du besoin, conformité technique du matériel proposé et complétude du dossier remis."
      />

      <section className="py-16 sm:py-20">
        <div className="container-fz">
          <p className="eyebrow">Notre processus</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">
            De la veille au dépôt du dossier
          </h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-2">
            {etapes.map((etape, index) => (
              <li key={etape.titre} className="surface-card p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground">
                    0{index + 1}
                  </span>
                  <etape.icone size={22} className="text-accent" />
                </div>
                <h3 className="mt-4 text-lg">{etape.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {etape.texte}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <div className="container-fz grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Documentation</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">
              Les pièces que nous préparons
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              La complétude du dossier conditionne souvent la recevabilité de l'offre. Nous
              structurons les pièces techniques et administratives selon les exigences de la
              consultation.
            </p>
            <ul className="mt-6 grid gap-3">
              {pieces.map((piece) => (
                <li key={piece} className="flex items-start gap-3 text-sm text-charcoal">
                  <FileCheck2 size={18} className="mt-0.5 shrink-0 text-accent" />
                  {piece}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5">
            {engagements.map((item) => (
              <div key={item.titre} className="surface-card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-accent-soft text-accent">
                  <item.icone size={22} />
                </span>
                <h3 className="mt-4 text-lg">{item.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.texte}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        titre="Vous avez un appel d'offres en cours ? Parlons-en"
        description="Envoyez-nous la référence de la consultation et le cahier des prescriptions techniques : nous vous indiquons rapidement notre capacité à répondre."
        libelle="Prendre contact"
      />
    </SiteLayout>
  );
}
