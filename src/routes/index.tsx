import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  Clock,
  FileText,
  Quote,
  ScanSearch,
  Send,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import hero from "@/assets/hero-hospital.jpg";
import { CircuitProcess, EcgLine, MetricCounter, PulseDivider } from "@/components/BrandMotion";
import CtaBand from "@/components/CtaBand";
import EquipementCard from "@/components/EquipementCard";
import SiteLayout from "@/components/SiteLayout";
import { categories, equipements } from "@/data/equipements";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "FZANA Systems — Équipements médicaux et marchés publics au Maroc",
      },
      {
        name: "description",
        content:
          "FZANA Systems fournit les établissements de santé marocains en équipements médicaux certifiés et répond aux appels d'offres publics avec des dossiers techniques conformes.",
      },
      {
        property: "og:title",
        content: "FZANA Systems — Équipements médicaux et marchés publics au Maroc",
      },
      {
        property: "og:description",
        content:
          "Distribution d'équipements médicaux pour hôpitaux et cliniques, avec une expertise dédiée aux marchés publics.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Accueil,
});

const confiance = [
  { icone: ShieldCheck, titre: "Équipements certifiés" },
  { icone: BadgeCheck, titre: "Conformité réglementaire" },
  { icone: Clock, titre: "Réponse sous 48h" },
];

const raisons = [
  {
    icone: ClipboardCheck,
    titre: "Rigueur technique",
    texte:
      "Chaque ligne du cahier des prescriptions techniques est confrontée aux caractéristiques réelles du matériel proposé — puissance, dimensions, normes — sans approximation ni généralité.",
  },
  {
    icone: BadgeCheck,
    titre: "Matériel enregistré",
    texte:
      "Nous privilégions des équipements couverts par un certificat d'enregistrement valide, condition d'éligibilité déterminante selon les exigences de chaque acheteur public.",
  },
  {
    icone: Send,
    titre: "Réactivité institutionnelle",
    texte:
      "Interlocuteur unique pour les services d'achats, du chiffrage à la remise du dossier complet.",
  },
  {
    icone: FileText,
    titre: "Traçabilité documentaire",
    texte:
      "Chaque référence proposée est accompagnée de sa documentation officielle, pour permettre à l'acheteur de vérifier lui-même la conformité technique.",
  },
];

const etapes = [
  {
    icone: ScanSearch,
    titre: "Identification",
    texte: "Veille des appels d'offres et qualification du besoin de l'établissement.",
  },
  {
    icone: ClipboardCheck,
    titre: "Matching technique",
    texte: "Comparaison spécification par spécification avec les gammes disponibles.",
  },
  {
    icone: FileText,
    titre: "Dossier conforme",
    texte: "Mémoire technique, bordereau des prix et pièces administratives.",
  },
  {
    icone: Stethoscope,
    titre: "Livraison et suivi",
    texte: "Coordination de la livraison, de l'installation et de la mise en service.",
  },
];

const temoignages = [
  {
    citation:
      "Exemple de retour d'expérience — les références clients réelles seront publiées après accord des établissements concernés.",
    auteur: "Service des achats",
    role: "Centre hospitalier",
  },
  {
    citation:
      "Exemple de retour d'expérience — contenu générique en attente de témoignages authentifiés.",
    auteur: "Direction technique",
    role: "Clinique privée",
  },
];

function Accueil() {
  const featuredQuote = {
    citation:
      "Exemple de retour d'expérience — aucun témoignage réel n'est publié à ce stade. Cet encart illustre le format retenu pour les futures références clients.",
    auteur: "Pharmacie hospitalière",
    role: "Établissement public",
  };

  return (
    <SiteLayout>
      {/* HERO — split layout: content left, compliance-panel right */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 clinical-section-soft opacity-[0.06]" aria-hidden="true" />
        <EcgLine className="absolute inset-x-0 top-10 h-24 opacity-30" />
        <div className="container-fz grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="section-reveal">
            <p className="eyebrow">Distribution d'équipements médicaux — Maroc</p>
            <h1 className="mt-5 text-4xl font-medium leading-[1.08] tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Le partenaire des établissements de santé et des marchés publics
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              FZANA Systems approvisionne hôpitaux, cliniques et structures de soins en
              équipements médicaux certifiés, et accompagne les acheteurs publics dans la
              réponse technique et administrative à leurs appels d'offres.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/equipements" className="btn-base btn-accent">
                Découvrir nos équipements
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-base btn-ghost-light">
                Nous contacter pour un appel d'offres
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-primary-foreground/15 pt-6">
              {confiance.map((item) => (
                <li key={item.titre} className="flex items-center gap-2 text-sm text-primary-foreground/85">
                  <item.icone size={16} className="text-accent" />
                  {item.titre}
                </li>
              ))}
            </ul>
          </div>

          {/* right-side visual: hospital image framed as a document/dossier card, not a full-bleed background */}
          <div className="section-reveal relative">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/10 shadow-2xl">
              <img
                src={hero}
                alt="Couloir hospitalier équipé de matériel médical"
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-card p-4 shadow-xl sm:block">
              <p className="font-display text-2xl font-semibold text-primary">
                <MetricCounter value={categories.length} />
              </p>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">catégories couvertes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES — editorial alternating rows instead of a bento grid */}
      <PulseDivider />
      <section className="clinical-section py-20 sm:py-24">
        <div className="container-fz">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Nos domaines</p>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                Catégories d'équipements
              </h2>
            </div>
            <Link
              to="/equipements"
              className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-accent transition-opacity hover:opacity-70"
            >
              Voir le catalogue complet <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-14 divide-y divide-border">
            {categories.map((categorie, index) => (
              <Link
                key={categorie.id}
                to="/equipements"
                search={{ categorie: categorie.id }}
                className={`group section-reveal flex flex-col gap-6 py-8 sm:items-center sm:gap-10 sm:py-10 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full overflow-hidden rounded-xl bg-secondary lg:w-2/5">
                  <img
                    src={categorie.image}
                    alt={categorie.nom}
                    width={800}
                    height={560}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex-1">
                  <span className="font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-xl font-medium sm:text-2xl">{categorie.nom}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {categorie.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Explorer cette catégorie <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FZANA — sticky intro left, spec-sheet list right */}
      <PulseDivider />
      <section className="clinical-section-soft py-20 sm:py-24">
        <div className="container-fz grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="section-reveal lg:sticky lg:top-28">
            <p className="eyebrow">Pourquoi FZANA Systems</p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Une approche conformité d'abord
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Du chiffrage à la livraison, chaque étape est pensée pour sécuriser l'évaluation
              technique de votre dossier auprès de l'acheteur public.
            </p>
            <div className="technical-panel scan-badge mt-8 flex gap-8 p-6">
              <div>
                <strong className="block font-display text-3xl font-medium text-primary">
                  <MetricCounter value={equipements.length} />
                </strong>
                <span className="mt-1 block text-xs uppercase tracking-wide text-muted-foreground">
                  références suivies
                </span>
              </div>
              <div>
                <strong className="block font-display text-3xl font-medium text-primary">
                  <MetricCounter value={48} suffix="h" />
                </strong>
                <span className="mt-1 block text-xs uppercase tracking-wide text-muted-foreground">
                  premier retour
                </span>
              </div>
            </div>
          </div>

          <div className="section-reveal divide-y divide-border rounded-2xl border border-border bg-card">
            {raisons.map((raison, i) => (
              <div key={raison.titre} className="flex gap-5 p-6 sm:p-7">
                <span className="font-display text-sm font-semibold text-muted-foreground/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
                  <raison.icone size={18} />
                </span>
                <div>
                  <h3 className="text-base font-medium leading-snug">{raison.titre}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {raison.texte}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <PulseDivider />
      <section className="clinical-section py-20 sm:py-24">
        <div className="container-fz">
          <div className="max-w-2xl">
            <p className="eyebrow">Notre méthode</p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Comment nous répondons à un appel d'offres
            </h2>
          </div>
          <CircuitProcess steps={etapes} />
          <Link to="/marches-publics" className="btn-base btn-outline mt-8">
            En savoir plus sur les marchés publics
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS — one featured quote + two supporting, not a uniform 3-grid */}
      <PulseDivider />
      <section className="clinical-section-soft py-20 sm:py-24">
        <div className="container-fz">
          <p className="eyebrow">Références</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
            Témoignages
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            FZANA Systems étant une structure récente, aucune référence client réelle n'est
            encore publiée. Les éléments ci-dessous illustrent le format des témoignages à
            venir.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
            <blockquote className="surface-card section-reveal flex flex-col justify-center p-8 sm:p-10">
              <Quote size={28} className="text-accent" />
              <p className="mt-5 text-lg leading-relaxed text-foreground sm:text-xl">
                {featuredQuote.citation}
              </p>
              <footer className="mt-6 border-t border-border pt-5">
                <p className="font-display text-sm font-semibold text-primary">{featuredQuote.auteur}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{featuredQuote.role}</p>
              </footer>
            </blockquote>

            <div className="grid gap-5">
              {temoignages.map((temoignage) => (
                <blockquote key={temoignage.auteur} className="surface-card section-reveal p-6">
                  <p className="text-sm leading-relaxed text-foreground">{temoignage.citation}</p>
                  <footer className="mt-4 border-t border-border pt-4">
                    <p className="font-display text-sm font-semibold text-primary">{temoignage.auteur}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{temoignage.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EQUIPMENT */}
      <PulseDivider />
      <section className="clinical-section py-20 sm:py-24">
        <div className="container-fz">
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="eyebrow">Sélection</p>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                Équipements mis en avant
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Un aperçu du type de matériel suivi dans nos gammes, à titre d'illustration du catalogue complet.
              </p>
            </div>
            <Link to="/equipements" className="btn-base btn-outline shrink-0">
              Voir le catalogue <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {equipements.slice(0, 3).map((equipement) => (
              <EquipementCard key={equipement.id} equipement={equipement} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}