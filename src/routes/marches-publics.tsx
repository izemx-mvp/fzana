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

import heroDossier from "@/assets/marche-public.png";
import CtaBand from "@/components/CtaBand";
import { PulseDivider, TrustBadge } from "@/components/BrandMotion";
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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

const piecesTechniques = [
  { label: "Mémoire technique détaillé", note: "Réponse ligne par ligne au CPS" },
  { label: "Fiches techniques et notices constructeur", note: "Une par référence proposée" },
  { label: "Bordereau des prix / détail estimatif", note: "Chiffrage par lot" },
];

const piecesAdministratives = [
  { label: "Acte d'engagement", note: "Pièce administrative" },
  { label: "Certificat d'enregistrement du dispositif", note: "Condition d'éligibilité" },
  { label: "Attestations et déclarations", note: "Selon exigences du RC" },
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
      {/* HERO — duotone photo right, copy left */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 clinical-section-soft opacity-[0.06]" aria-hidden="true" />
        <div className="container-fz relative grid gap-10 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="section-reveal">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
              Secteur public
            </p>
            <h1 className="mt-5 text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl">
              Marchés publics d'équipements médicaux
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
              FZANA Systems accompagne les établissements publics et les acheteurs hospitaliers sur
              l'ensemble du cycle de l'appel d'offres : compréhension du besoin, conformité
              technique du matériel proposé et complétude du dossier remis.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-primary-foreground/15 pt-6">
              <div>
                <p className="font-display text-2xl font-medium text-white">4</p>
                <p className="text-xs uppercase tracking-wide text-primary-foreground/55">étapes</p>
              </div>
              <div>
                <p className="font-display text-2xl font-medium text-white">6</p>
                <p className="text-xs uppercase tracking-wide text-primary-foreground/55">pièces du dossier</p>
              </div>
              <div>
                <p className="flex items-center gap-1.5 font-display text-2xl font-medium text-white">
                  <Timer size={18} className="text-accent" /> 48h
                </p>
                <p className="text-xs uppercase tracking-wide text-primary-foreground/55">premier retour</p>
              </div>
            </div>
          </div>

          <div className="section-reveal reveal-delay-1 relative">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 shadow-2xl">
              <img
                src={heroDossier}
                alt=""
                role="presentation"
                width={900}
                height={700}
                className="aspect-[4/3.2] w-full object-cover opacity-90 grayscale"
              />
            </div>
            <div className="absolute inset-0 rounded-2xl bg-primary mix-blend-color" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* PROCESS — custom vertical timeline, sticky intro left */}
      <PulseDivider />
      <section className="clinical-section py-20 sm:py-24">
        <div className="container-fz grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Notre processus
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              De la veille au dépôt du dossier
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Chaque appel d'offres suit le même fil, de l'identification de la consultation
              jusqu'à la remise d'un dossier complet et conforme.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-2 left-5 top-2 hidden w-px bg-border sm:block" aria-hidden="true" />
            <div className="space-y-14">
              {etapes.map((etape, i) => (
                <div key={etape.titre} className="section-reveal relative flex gap-5 sm:gap-6">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-6 left-0 select-none font-display text-7xl font-bold text-foreground/[0.04] sm:text-8xl"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-background font-display text-sm font-semibold text-primary">
                    {i + 1}
                  </span>
                  <div className="relative pt-1.5">
                    <div className="flex items-center gap-2">
                      <etape.icone size={16} className="text-accent" />
                      <h3 className="text-base font-medium sm:text-lg">{etape.titre}</h3>
                    </div>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {etape.texte}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PULL-QUOTE BANNER — full-width dark break between process and documentation */}
      <section className="relative overflow-hidden bg-primary py-16 text-center sm:py-20">
        <div className="absolute inset-0 clinical-section-soft opacity-[0.05]" aria-hidden="true" />
        <div className="container-fz relative mx-auto max-w-3xl">
          <p className="font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
            "La complétude du dossier conditionne souvent la recevabilité de l'offre."
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/50">
            Notre principe de constitution du dossier
          </p>
        </div>
      </section>

      {/* DOCUMENTS — grouped into technique / administratif columns */}
      <PulseDivider />
      <section className="clinical-section-soft py-20 sm:py-24">
        <div className="container-fz">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Documentation
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">
            Les pièces que nous préparons
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            La complétude du dossier conditionne souvent la recevabilité de l'offre. Nous
            structurons les pièces techniques et administratives selon les exigences de la
            consultation.
          </p>

          <div className="section-reveal mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-7">
              <p className="font-display text-sm font-semibold text-primary">Pièces techniques</p>
              <div className="mt-4 divide-y divide-border">
                {piecesTechniques.map((piece) => (
                  <div key={piece.label} className="flex items-start justify-between gap-4 py-4">
                    <span className="flex items-start gap-3 text-sm font-medium text-charcoal">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                        <FileCheck2 size={16} />
                      </span>
                      <span className="pt-1">{piece.label}</span>
                    </span>
                    <span className="shrink-0 pt-1 text-xs text-muted-foreground">{piece.note}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 sm:p-7">
              <p className="font-display text-sm font-semibold text-primary">Pièces administratives</p>
              <div className="mt-4 divide-y divide-border">
                {piecesAdministratives.map((piece) => (
                  <div key={piece.label} className="flex items-start justify-between gap-4 py-4">
                    <span className="flex items-start gap-3 text-sm font-medium text-charcoal">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                        <FileCheck2 size={16} />
                      </span>
                      <span className="pt-1">{piece.label}</span>
                    </span>
                    <span className="shrink-0 pt-1 text-xs text-muted-foreground">{piece.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground">
            Certaines consultations imposent un modèle propre (souvent au format Excel) : dans ce
            cas, ce modèle est repris tel quel plutôt qu'une trame standard.
          </p>
        </div>
      </section>

      {/* ENGAGEMENTS — full-width band instead of a stacked side column */}
      <PulseDivider />
      <section className="clinical-section py-20 sm:py-24">
        <div className="container-fz">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Nos engagements
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
            Ce qui sécurise votre dossier
          </h2>
          <div className="section-reveal mt-10 grid gap-5 md:grid-cols-3">
            {engagements.map((item) => (
              <TrustBadge key={item.titre} icon={item.icone} label={item.titre} detail={item.texte} />
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