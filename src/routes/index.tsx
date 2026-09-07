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
import { CircuitProcess, EcgLine, MetricCounter, PulseDivider, TrustBadge } from "@/components/BrandMotion";
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
  {
    icone: ShieldCheck,
    titre: "Équipements certifiés",
    texte:
      "Dispositifs conformes aux exigences réglementaires et accompagnés de leur documentation constructeur.",
  },
  {
    icone: BadgeCheck,
    titre: "Conformité réglementaire",
    texte:
      "Certificats d'enregistrement et attestations disponibles pour la constitution des dossiers.",
  },
  {
    icone: Clock,
    titre: "Réponse rapide aux appels d'offres",
    texte:
      "Analyse du cahier des charges et retour technique dans les délais de la procédure.",
  },
];

const raisons = [
  {
    icone: ClipboardCheck,
    titre: "Rigueur technique",
    texte:
      "Chaque ligne du cahier des prescriptions techniques est confrontée aux caractéristiques réelles du matériel proposé, sans approximation.",
  },
  {
    icone: BadgeCheck,
    titre: "Matériel enregistré",
    texte:
      "Nous privilégions des équipements enregistrés et documentés, afin de sécuriser l'évaluation de l'offre.",
  },
  {
    icone: Send,
    titre: "Réactivité institutionnelle",
    texte:
      "Interlocuteur unique pour les services d'achats, du chiffrage à la remise du dossier complet.",
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
    role: "Centre hospitalier (exemple illustratif)",
  },
  {
    citation:
      "Exemple de retour d'expérience — contenu générique en attente de témoignages authentifiés.",
    auteur: "Direction technique",
    role: "Clinique privée (exemple illustratif)",
  },
  {
    citation:
      "Exemple de retour d'expérience — aucun témoignage réel n'est publié à ce stade.",
    auteur: "Pharmacie hospitalière",
    role: "Établissement public (exemple illustratif)",
  },
];

function Accueil() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src={hero}
          alt="Couloir hospitalier équipé de matériel médical"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 clinical-section-soft opacity-10" aria-hidden="true" />
        <EcgLine className="absolute inset-x-0 top-16 h-28 opacity-45" />
        <div className="relative container-fz py-20 sm:py-28">
          <div className="max-w-3xl section-reveal">
            <p className="eyebrow">Distribution d'équipements médicaux — Maroc</p>
            <h1 className="mt-4 text-3xl leading-tight text-primary-foreground sm:text-5xl">
              Le partenaire des établissements de santé et des marchés publics
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              FZANA Systems approvisionne hôpitaux, cliniques et structures de soins en
              équipements médicaux certifiés, et accompagne les acheteurs publics dans la
              réponse technique et administrative à leurs appels d'offres.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/equipements" className="btn-base btn-accent">
                Découvrir nos équipements
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-base btn-ghost-light">
                Nous contacter pour un appel d'offres
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="clinical-section-soft border-b border-border py-10">
        <div className="container-fz grid gap-5 md:grid-cols-3">
          {confiance.map((item) => (
            <TrustBadge key={item.titre} icon={item.icone} label={item.titre} detail={item.texte} />
          ))}
        </div>
      </section>

      <PulseDivider />
      <section className="clinical-section py-16 sm:py-20">
        <div className="container-fz">
          <p className="eyebrow">Nos domaines</p>
          <div className="mt-3 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <h2 className="text-2xl sm:text-3xl">Catégories d'équipements</h2>
            <Link
              to="/equipements"
              className="font-display text-sm font-semibold text-accent hover:underline"
            >
              Voir le catalogue complet
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {categories.map((categorie, index) => (
              <Link
                key={categorie.id}
                to="/equipements"
                search={{ categorie: categorie.id }}
                className={`surface-card group section-reveal flex flex-col overflow-hidden ${index === 0 ? "lg:col-span-2 lg:row-span-2" : index === 1 || index === 4 ? "lg:col-span-2" : ""}`}
              >
                <div className={`${index === 0 ? "min-h-64 flex-1 lg:min-h-[22rem]" : "h-44"} overflow-hidden bg-secondary`}>
                  <img
                    src={categorie.image}
                    alt={categorie.nom}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base leading-snug">{categorie.nom}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {categorie.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PulseDivider />
      <section className="clinical-section-soft py-16 sm:py-20">
        <div className="container-fz">
          <p className="eyebrow">Pourquoi FZANA Systems</p>
          <h2 className="mt-3 max-w-2xl text-2xl sm:text-3xl">
            Une approche conformité d'abord, du chiffrage à la livraison
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4 md:grid-rows-2">
            {raisons.map((raison) => (
              <div key={raison.titre} className={`surface-card section-reveal p-6 ${raison === raisons[0] ? "md:col-span-2 md:row-span-2 md:p-8" : "md:col-span-2"}`}>
                <span className="signal-node grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground">
                  <raison.icone size={22} />
                </span>
                <h3 className="mt-4 text-lg">{raison.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {raison.texte}
                </p>
              </div>
            ))}
            <div className="technical-panel scan-badge scan-sweep section-reveal flex items-center justify-between gap-5 p-6 md:col-span-4">
              <div>
                <p className="eyebrow">Capacité opérationnelle</p>
                <p className="mt-2 text-sm text-muted-foreground">Gammes suivies et premier retour sur demande institutionnelle.</p>
              </div>
              <div className="flex shrink-0 gap-8 text-center">
                <div><strong className="block font-display text-3xl text-primary"><MetricCounter value={categories.length} /></strong><span className="text-xs text-muted-foreground">catégories</span></div>
                <div><strong className="block font-display text-3xl text-primary"><MetricCounter value={48} suffix="h" /></strong><span className="text-xs text-muted-foreground">premier retour</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PulseDivider />
      <section className="clinical-section py-16 sm:py-20">
        <div className="container-fz">
          <p className="eyebrow">Notre méthode</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">
            Comment nous répondons à un appel d'offres
          </h2>
          <CircuitProcess steps={etapes} />
          <Link
            to="/marches-publics"
            className="btn-base btn-outline mt-8"
          >
            En savoir plus sur les marchés publics
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <PulseDivider />
      <section className="clinical-section-soft py-16 sm:py-20">
        <div className="container-fz">
          <p className="eyebrow">Références</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Témoignages (exemples génériques)</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            FZANA Systems étant une structure récente, aucune référence client réelle n'est
            encore publiée. Les éléments ci-dessous illustrent le format des témoignages à
            venir.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {temoignages.map((temoignage) => (
              <blockquote key={temoignage.auteur} className="surface-card section-reveal p-6">
                <Quote size={22} className="text-accent" />
                <p className="mt-3 text-sm leading-relaxed text-foreground">
                  {temoignage.citation}
                </p>
                <footer className="mt-4">
                  <p className="font-display text-sm font-semibold text-primary">
                    {temoignage.auteur}
                  </p>
                  <p className="text-xs text-muted-foreground">{temoignage.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <PulseDivider />
      <section className="clinical-section py-16 sm:py-20">
        <div className="container-fz">
          <p className="eyebrow">Sélection</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Équipements mis en avant</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
