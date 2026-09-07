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
    <section className="bg-primary py-14 text-white sm:py-20">
      <div className="container-fz max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-3xl text-white sm:text-4xl lg:text-5xl">{titre}</h1>
        <p className="mt-4 text-base leading-relaxed text-white/80">{description}</p>
      </div>
    </section>
  );
}
