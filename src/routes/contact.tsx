import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronDown, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import PageHero from "@/components/PageHero";
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
      "Nous intervenons auprès des établissements de santé sur l'ensemble du territoire marocain, la logistique de livraison étant organisée au cas par cas selon le lot concerné.",
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
      <PageHero
        eyebrow="Contact"
        titre="Parlons de votre besoin d'équipement"
        description="Demande de devis, fiche technique ou consultation en cours : décrivez votre besoin et notre équipe revient vers vous avec une réponse documentée."
      />

      <section className="py-16 sm:py-20">
        <div className="container-fz grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="surface-card p-6 sm:p-8">
            {envoye ? (
              <div className="py-8 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-soft text-accent">
                  <Check size={28} />
                </span>
                <h2 className="mt-5 text-xl">Votre demande a bien été transmise</h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Merci. Notre équipe prend connaissance de votre demande et revient vers
                  vous sous 48 heures ouvrées avec les éléments techniques correspondants.
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
                <h2 className="text-xl">Formulaire de demande</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Champ id="nom" label="Nom et prénom" required />
                  <Champ id="societe" label="Établissement / société" required />
                  <Champ id="email" label="E-mail professionnel" type="email" required />
                  <Champ id="telephone" label="Téléphone" type="tel" />
                </div>
                <div>
                  <label
                    htmlFor="sujet"
                    className="font-display text-sm font-semibold text-primary"
                  >
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
                  <label
                    htmlFor="message"
                    className="font-display text-sm font-semibold text-primary"
                  >
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

          <div className="grid gap-5">
            <div className="surface-card p-6">
              <h2 className="text-lg">Coordonnées</h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">
                    Adresse à communiquer
                    <br />
                    Maroc
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">Téléphone à communiquer</span>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">contact@fzana-systems.ma</span>
                </li>
                <li className="flex gap-3">
                  <Clock size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">
                    Lundi – vendredi, 9h – 18h
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Coordonnées provisoires : les informations définitives seront publiées
                prochainement.
              </p>
            </div>

            <div className="surface-card bg-secondary p-6">
              <h2 className="text-lg">Appel d'offres en cours ?</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Précisez la référence de la consultation et la date limite de dépôt dans
                votre message : nous priorisons ces demandes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <div className="container-fz max-w-3xl">
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Ce que les acheteurs demandent</h2>
          <div className="mt-8 grid gap-3">
            {faq.map((item, index) => (
              <div key={item.question} className="surface-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOuvert(ouvert === index ? null : index)}
                  aria-expanded={ouvert === index}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-5 text-left"
                >
                  <span className="min-w-0 font-display text-base font-semibold text-primary">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-accent transition-transform ${
                      ouvert === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {ouvert === index && (
                  <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
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
