import { Link, createFileRoute } from "@tanstack/react-router";

import CtaBand from "@/components/CtaBand";
import EquipementCard from "@/components/EquipementCard";
import PageHero from "@/components/PageHero";
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

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Catalogue"
        titre="Équipements et consommables médicaux"
        description="Nos gammes couvrent l'équipement des blocs opératoires, le diagnostic, le mobilier hospitalier, les soins intensifs, les consommables et la stérilisation. Les références présentées sont des exemples représentatifs : nous constituons l'offre en fonction des spécifications de chaque cahier des charges."
      />

      <section className="py-14 sm:py-16">
        <div className="container-fz grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside>
            <h2 className="font-display text-sm font-bold tracking-widest text-charcoal uppercase">
              Catégories
            </h2>
            <div className="mt-4 flex flex-wrap gap-2 lg:flex-col">
              <Link
                to="/equipements"
                search={{}}
                className={`rounded-md border px-3 py-2 text-left font-display text-sm font-semibold transition-colors ${
                  categorie
                    ? "border-border text-charcoal hover:border-accent hover:text-accent"
                    : "border-accent bg-accent-soft text-accent"
                }`}
              >
                Toutes les catégories
              </Link>
              {categories.map((item) => (
                <Link
                  key={item.id}
                  to="/equipements"
                  search={{ categorie: item.id }}
                  className={`rounded-md border px-3 py-2 text-left font-display text-sm font-semibold transition-colors ${
                    categorie === item.id
                      ? "border-accent bg-accent-soft text-accent"
                      : "border-border text-charcoal hover:border-accent hover:text-accent"
                  }`}
                >
                  {item.nom}
                </Link>
              ))}
            </div>
          </aside>

          <div>
            <div className="grid gap-4 border-b border-border pb-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl">
                  {active ? active.nom : "Toutes les références"}
                </h2>
                {active && (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {active.description}
                  </p>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {liste.length} référence{liste.length > 1 ? "s" : ""}
              </p>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {liste.map((equipement) => (
                <EquipementCard key={equipement.id} equipement={equipement} />
              ))}
            </div>
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
