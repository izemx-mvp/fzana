import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronDown, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import hero from "@/assets/hero-hospital.jpg";
import { PulseDivider } from "@/components/BrandMotion";
import SiteLayout from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact et demande de devis — FZANA Systems" },
      {
        name: "description",
        content:
          "Contactez FZANA Systems pour une demande de devis, une fiche technique ou la réponse à un appel d'offres d'équipements médicaux au Maroc.",
      },
      { property: "og:title", content: "Contact et demande de devis — FZANA Systems" },
      {
        property: "og:description",
        content:
          "Formulaire de contact pour les établissements de santé et les acheteurs publics.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const faq = [
  {
    question: "Quel est votre délai de réponse à une demande ?",
    reponse:
      "Une demande de devis ou de fiche technique reçoit un premier retour sous 48 heures ouvrées. Pour un appel d'offres, nous confirmons notre capacité à répondre dès l'analyse du cahier des prescriptions techniques.",
  },
  {
    question: "Quelle documentation fournissez-vous avec une offre ?",
    reponse:
      "Selon les exigences de la consultation : fiches techniques constructeur, mémoire technique, bordereau des prix, acte d'engagement et certificat d'enregistrement du dispositif, ainsi que les attestations administratives requises.",
  },
  {
    question: "Quelles zones géographiques couvrez-vous ?",
    reponse:
      "Notre organisation est en mesure de répondre aux établissements de santé partout au Maroc, la logistique de livraison étant organisée au cas par cas selon le lot concerné.",
  },
  {
    question: "Travaillez-vous avec le secteur privé ?",
    reponse:
      "Oui. Cliniques, cabinets et centres de soins privés peuvent nous solliciter pour un approvisionnement ponctuel ou récurrent, hors procédure de marché public.",
  },
];

function Contact() {
  const [envoye, setEnvoye] = useState(false);
  const [ouvert, setOuvert] = useState<number | null>(0);

  return (
    <SiteLayout>
      {/* HERO — photo right with a floating contact card, not a flat text-only band */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 clinical-section-soft opacity-[0.06]" aria-hidden="true" />
        <div className="container-fz relative grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="section-reveal">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
              Contact
            </span>
            <h1 className="mt-5 max-w-xl text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl">
              Parlons de votre besoin d'équipement
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
              Demande de devis, fiche technique ou consultation en cours : décrivez votre besoin
              et notre équipe revient vers vous avec une réponse documentée.
            </p>
          </div>

          <div className="section-reveal reveal-delay-1 relative">
            <div className="relative overflow-hidden rounded-2xl border border-primary-foreground/10 shadow-2xl">
              <img
                src={hero}
                alt=""
                role="presentation"
                width={900}
                height={700}
                className="aspect-[4/3.4] w-full object-cover opacity-90 grayscale"
              />
              <div className="absolute inset-0 bg-primary mix-blend-color" aria-hidden="true" />
            </div>
            {/* floating contact card, overlapping the photo — solid design element, no motion */}
            <div className="absolute -bottom-8 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 rounded-xl border border-border bg-card p-5 shadow-xl sm:left-6 sm:w-auto sm:translate-x-0">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <span className="flex items-center gap-2 text-sm font-medium text-charcoal">
                  <Clock size={16} className="text-accent" /> 48h de premier retour
                </span>
                <span className="flex items-center gap-2 text-sm font-medium text-charcoal">
                  <Mail size={16} className="text-accent" /> contact@fzana-systems.ma
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN — flipped weighting: compact info sidebar left (sticky), form dominant right */}
      <PulseDivider />
      <section className="clinical-section pb-20 pt-16 sm:pb-24 sm:pt-20">
        <div className="container-fz grid gap-10 lg:grid-cols-[0.85fr_1.4fr] lg:items-start">
          <div className="section-reveal space-y-5 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Coordonnées
              </h2>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                    <MapPin size={16} />
                  </span>
                  <span className="pt-1.5 text-sm text-muted-foreground">
                    Adresse à communiquer
                    <br />
                    Maroc
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                    <Phone size={16} />
                  </span>
                  <span className="text-sm text-muted-foreground">Téléphone à communiquer</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                    <Mail size={16} />
                  </span>
                  <span className="text-sm text-muted-foreground">contact@fzana-systems.ma</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                    <Clock size={16} />
                  </span>
                  <span className="text-sm text-muted-foreground">Lundi – vendredi, 9h – 18h</span>
                </li>
              </ul>
              <p className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
                Coordonnées provisoires : les informations définitives seront publiées
                prochainement.
              </p>
            </div>

            <div className="rounded-2xl border-l-2 border-accent bg-accent-soft/60 p-6">
              <h2 className="font-display text-sm font-semibold text-primary">
                Appel d'offres en cours ?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal">
                Précisez la référence de la consultation et la date limite de dépôt dans votre
                message : nous priorisons ces demandes.
              </p>
            </div>
          </div>

          <div className="section-reveal reveal-delay-1 rounded-2xl border border-border bg-card p-6 sm:p-9">
            {envoye ? (
              <div className="py-8 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-soft text-accent">
                  <Check size={28} />
                </span>
                <h2 className="mt-5 text-xl font-medium">Votre demande a bien été transmise</h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Merci. Notre équipe prend connaissance de votre demande et revient vers vous
                  sous 48 heures ouvrées avec les éléments techniques correspondants.
                </p>
                <button
                  type="button"
                  onClick={() => setEnvoye(false)}
                  className="btn-base btn-outline mt-6"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form
                className="grid gap-5"
                onSubmit={(event) => {
                  event.preventDefault();
                  setEnvoye(true);
                }}
              >
                <h2 className="text-xl font-medium">Formulaire de demande</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Champ id="nom" label="Nom et prénom" required />
                  <Champ id="societe" label="Établissement / société" required />
                  <Champ id="email" label="E-mail professionnel" type="email" required />
                  <Champ id="telephone" label="Téléphone" type="tel" />
                </div>
                <div>
                  <label htmlFor="sujet" className="font-display text-sm font-semibold text-primary">
                    Sujet
                  </label>
                  <select
                    id="sujet"
                    required
                    defaultValue="Appel d'offres"
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
                  >
                    <option>Appel d'offres</option>
                    <option>Demande de devis</option>
                    <option>Demande de fiche technique</option>
                    <option>Approvisionnement en consommables</option>
                    <option>Autre demande</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="font-display text-sm font-semibold text-primary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="Références concernées, spécifications attendues, référence de la consultation, délais…"
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
                  />
                </div>
                <button type="submit" className="btn-base btn-primary w-fit">
                  Envoyer ma demande
                </button>
                <p className="text-xs text-muted-foreground">
                  Ce formulaire est une démonstration : aucune donnée n'est enregistrée à ce
                  stade.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ — numbered index rows instead of stacked accordion cards */}
      <PulseDivider />
      <section className="clinical-section-soft py-20 sm:py-24">
        <div className="container-fz max-w-3xl">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Questions fréquentes
          </span>
          <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
            Ce que les acheteurs demandent
          </h2>
          <div className="section-reveal mt-10 border-t border-border">
            {faq.map((item, index) => (
              <div key={item.question} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOuvert(ouvert === index ? null : index)}
                  aria-expanded={ouvert === index}
                  className="grid w-full grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline gap-4 py-5 text-left"
                >
                  <span className="font-display text-xs tabular-nums text-muted-foreground/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 font-display text-base font-semibold text-primary">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-accent transition-transform ${
                      ouvert === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {ouvert === index && (
                  <p className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-4 pb-5 text-sm leading-relaxed text-muted-foreground">
                    <span />
                    {item.reponse}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Champ({
  id,
  label,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="font-display text-sm font-semibold text-primary">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
      />
    </div>
  );
}