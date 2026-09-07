import { EcgLine } from "./BrandMotion";

export default function PageHero({
  eyebrow,
  titre,
  description,
}: {
  eyebrow: string;
  titre: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary py-14 text-primary-foreground sm:py-20">
      <div className="absolute inset-0 clinical-section-soft opacity-10" aria-hidden="true" />
      <EcgLine className="absolute top-7 right-0 left-0 h-20 opacity-35" />
      <div className="relative container-fz max-w-3xl section-reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-3xl text-primary-foreground sm:text-4xl lg:text-5xl">
          {titre}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
          {description}
        </p>
      </div>
    </section>
  );
}
