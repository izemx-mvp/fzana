import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, ClipboardCheck, FileText } from "lucide-react";

import heroFallback from "@/assets/hero-hospital.jpg";
import { PulseDivider } from "@/components/BrandMotion";
import CtaBand from "@/components/CtaBand";
import SiteLayout from "@/components/SiteLayout";
import { categories, equipements, type CategorieId } from "@/data/equipements";

type Recherche = { categorie?: CategorieId };

export const Route = createFileRoute("/equipements/")({
  validateSearch: (search: Record<string, unknown>): Recherche => {
    const valeur = search["categorie"];
    const existe = categories.some((categorie) => categorie.id === valeur);
    return existe ? { categorie: valeur as CategorieId } : {};
  },
  head: () => ({
    meta: [
      { title: "Catalogue d'équipements médicaux — FZANA Systems" },
      {
        name: "description",
        content:
          "Catalogue institutionnel FZANA Systems : bloc opératoire, diagnostic, mobilier hospitalier, soins intensifs, consommables et stérilisation.",
      },
      {
        property: "og:title",
        content: "Catalogue d'équipements médicaux — FZANA Systems",
      },
      {
        property: "og:description",
        content:
          "Parcourez nos gammes d'équipements médicaux destinés aux établissements de santé et aux marchés publics.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Catalogue,
});

function Catalogue() {
  const { categorie } = Route.useSearch();
  const liste = categorie
    ? equipements.filter((equipement) => equipement.categorie === categorie)
    : equipements;
  const active = categories.find((item) => item.id === categorie);
  const countFor = (id: CategorieId) => equipements.filter((e) => e.categorie === id).length;

  return (
    <SiteLayout>
      {/* HEADER — duotone-treated photo, restrained typography, no gradient theatrics */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img
            src={active?.image ?? heroFallback}
            alt=""
            role="presentation"
            className="h-full w-full object-cover opacity-[0.35] grayscale"
          />
          <div className="absolute inset-0 bg-primary mix-blend-color" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/20" aria-hidden="true" />
        </div>

        <div className="container-fz relative py-20 sm:py-28">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">
              Index
            </span>
            <span className="h-px flex-1 bg-primary-foreground/15" />
            <span className="font-display text-xs font-medium tabular-nums text-primary-foreground/50">
              {String(liste.length).padStart(2, "0")} référence{liste.length > 1 ? "s" : ""}
            </span>
          </div>
          <h1 className="mt-6 max-w-2xl text-4xl text-white font-medium leading-[1.08] tracking-tight sm:text-5xl">
            {active ? active.nom : "Équipements et consommables médicaux"}
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
            {active
              ? active.description
              : "Bloc opératoire, diagnostic, mobilier hospitalier, soins intensifs, consommables et stérilisation. Les références présentées sont représentatives — l'offre est constituée selon les spécifications de chaque cahier des charges."}
          </p>
        </div>
      </section>

      <PulseDivider />

      <section className="clinical-section py-16 sm:py-20">
        <div className="container-fz grid gap-14 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* SIDEBAR — typographic index, not thumbnail buttons */}
          <aside className="section-reveal lg:sticky lg:top-28 lg:self-start">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Catégories
            </p>
            <nav className="mt-5 border-t border-border">
              <Link
                to="/equipements"
                search={{}}
                className={`group flex items-baseline justify-between gap-3 border-b border-border py-3.5 transition-colors ${
                  categorie ? "text-charcoal" : "text-accent"
                }`}
              >
                <span className="font-display text-sm font-semibold">Toutes les catégories</span>
                <span className="font-display text-xs tabular-nums text-muted-foreground">
                  {String(equipements.length).padStart(2, "0")}
                </span>
              </Link>
              {categories.map((item, i) => (
                <Link
                  key={item.id}
                  to="/equipements"
                  search={{ categorie: item.id }}
                  className={`group flex items-baseline justify-between gap-3 border-b border-border py-3.5 transition-colors ${
                    categorie === item.id ? "text-accent" : "text-charcoal hover:text-accent"
                  }`}
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-display text-xs tabular-nums text-muted-foreground/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-sm font-medium">{item.nom}</span>
                  </span>
                  <span className="font-display text-xs tabular-nums text-muted-foreground">
                    {String(countFor(item.id)).padStart(2, "0")}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-8 border-l-2 border-accent pl-4">
              <p className="font-display text-sm font-semibold text-charcoal">Un lot spécifique ?</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Envoyez-nous le cahier des charges — nous identifions les références correspondantes.
              </p>
              <Link
                to="/contact"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:opacity-70"
              >
                Nous contacter <ArrowRight size={13} />
              </Link>
            </div>
          </aside>

          {/* REFERENCE LIST — numbered dossier entries, not a card grid */}
          <div className="section-reveal">
            {liste.length === 0 ? (
              <div className="border-t border-dashed border-border py-16 text-center">
                <p className="font-display text-base font-semibold text-charcoal">
                  Aucune référence dans cette catégorie
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Contactez-nous pour un besoin spécifique — nous complétons l'offre selon le cahier des charges.
                </p>
              </div>
            ) : (
              <div className="border-t border-border">
                {liste.map((equipement, i) => {
                  const cat = categories.find((c) => c.id === equipement.categorie);
                  return (
                    <Link
                      key={equipement.id}
                      to="/equipements/$id"
                      params={{ id: equipement.id }}
                      className="group flex items-center gap-4 border-b border-border py-4 transition-colors hover:bg-secondary/40 sm:gap-6 sm:py-5"
                    >
                      <span className="w-6 shrink-0 font-display text-xs tabular-nums text-muted-foreground/50 sm:w-8 sm:text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-14 w-14 shrink-0 overflow-hidden rounded-md bg-secondary sm:h-16 sm:w-16">
                        <img
                          src={equipement.image}
                          alt=""
                          role="presentation"
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-display text-sm font-semibold text-charcoal group-hover:text-accent sm:text-base">
                          {equipement.nom}
                        </span>
                        {cat && (
                          <span className="mt-0.5 block text-xs text-muted-foreground">{cat.nom}</span>
                        )}
                      </span>
                      <ArrowRight
                        size={16}
                        className="shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-1 group-hover:text-accent"
                      />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      <PulseDivider />

      {/* METHODOLOGY — real positioning content, not filler: how a reference actually qualifies for a tender */}
      <section className="clinical-section-soft py-16 sm:py-20">
        <div className="container-fz">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Comment nous constituons l'offre
          </p>
          <h2 className="mt-3 max-w-xl text-2xl font-medium tracking-tight sm:text-3xl">
            Une référence n'entre au catalogue qu'après vérification
          </h2>
          <div className="mt-10 grid gap-x-8 gap-y-10 border-t border-border pt-10 sm:grid-cols-3">
            <div>
              <ClipboardCheck size={20} className="text-accent" />
              <h3 className="mt-4 text-base font-medium">Correspondance technique</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Chaque référence est confrontée aux exigences réelles d'un cahier des charges —
                puissance, dimensions, normes — avant d'être proposée.
              </p>
            </div>
            <div>
              <BadgeCheck size={20} className="text-accent" />
              <h3 className="mt-4 text-base font-medium">Certificat d'enregistrement</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Nous privilégions le matériel couvert par un certificat d'enregistrement valide —
                condition d'éligibilité déterminante selon les exigences de chaque acheteur public.
              </p>
            </div>
            <div>
              <FileText size={20} className="text-accent" />
              <h3 className="mt-4 text-base font-medium">Documentation officielle</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Brochures et manuels constructeur sont fournis avec chaque référence, pour permettre
                à l'acheteur de vérifier lui-même la conformité proposée.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PulseDivider />

      {/* CROSS-LINKS — every category listed, so the catalogue reads complete even when filtered */}
      <section className="clinical-section py-16 sm:py-20">
        <div className="container-fz">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            L'ensemble du catalogue
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">Nos autres domaines</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {categories
              .filter((c) => c.id !== categorie)
              .map((c) => (
                <Link
                  key={c.id}
                  to="/equipements"
                  search={{ categorie: c.id }}
                  className="group flex items-center justify-between gap-3 bg-background p-5 transition-colors hover:bg-secondary/50"
                >
                  <span>
                    <span className="block font-display text-sm font-semibold text-charcoal group-hover:text-accent">
                      {c.nom}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">
                      {countFor(c.id)} référence{countFor(c.id) > 1 ? "s" : ""}
                    </span>
                  </span>
                  <ArrowRight
                    size={15}
                    className="shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-1 group-hover:text-accent"
                  />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaBand
        titre="Besoin d'une offre sur un lot précis ?"
        description="Communiquez-nous les références et les spécifications attendues : nous revenons avec une proposition technique documentée."
        libelle="Demander un devis"
      />
    </SiteLayout>
  );
}