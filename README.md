# FZANA Systems Website Launch

Build a full multi-page institutional website (not a single-page scroller) for FZANA Systems, a Moroccan medical equipment distribution and supply company. FZANA Systems supplies healthcare institutions and responds to public sector tenders (marchés publics) for medical equipment across Morocco. This is the company's first-ever website.

BRAND IDENTITY

- Logo: a shield silhouette (navy blue to teal gradient) containing a medical cross with a heartbeat/pulse line running through it in white, with circuit-style nodes and connecting lines branching off the shield's edge (representing the "Systems"/technical rigor side of the brand). Wordmark "FZANA" in bold navy blue uppercase with small teal triangle accents beneath the A's, "SYSTEMS" in dark charcoal below with horizontal line flourishes on either side.

- The logo file will be uploaded separately — use a placeholder logo slot in the navbar/footer, do NOT generate or recreate the logo

- Color palette: primary navy blue (#14395E to #1B4B73 range) for headings, structure, and primary CTAs; teal/medical green accent (#1FA893 to #2CA58D range) for highlights, icons, and secondary accents; dark charcoal (#2B2F33) for the "SYSTEMS"-style secondary text; white and light gray (#F5F7F8) backgrounds

- Typography: bold, confident geometric sans-serif for headings (technical/medical-tech feel, matching the wordmark), clean readable sans for body text

- All non-logo imagery (photos, icons, illustrations) must be AI-generated/placeholder — no real product photos exist yet, since the company has no digital catalog (currently managed in Excel)

LANGUAGE: French, professional and institutional tone — this site represents the company to hospital procurement officers and public-sector tender evaluators, not consumers. Should feel credible, precise, and compliance-focused.

SITE STRUCTURE — separate routed pages, shared Navbar + Footer

1. HOME (/)

- Hero: strong positioning as a trusted medical equipment partner for healthcare institutions and public tenders in Morocco — dual CTA "Découvrir nos équipements" / "Nous contacter pour un appel d'offres"

- Trust/compliance strip: certified equipment, regulatory compliance, tender-ready documentation (use icons: shield/check, certificate, clock for fast response)

- Category preview grid (4-6 medical equipment categories — plausible categories like: Équipement de bloc opératoire, Matériel de diagnostic, Mobilier médical hospitalier, Dispositifs de soins intensifs, Consommables médicaux, Équipement de stérilisation)

- "Pourquoi FZANA Systems" section: rigor in technical compliance (line-by-line spec matching), certified/registered equipment, responsiveness to public tenders

- Process teaser: how FZANA responds to a tender (identify → match technical specs → submit compliant proposal) — 3-4 step visual

- Testimonials or trust logos section (generated/placeholder, clearly generic since no real client references exist yet)

- CTA band: "Vous lancez un appel d'offres ? Contactez-nous"

2. CATALOGUE / ÉQUIPEMENTS (/equipements)

- Category grid with the 4-6 categories from Home, each linking to a filtered view

- Grid of equipment cards (generated placeholder images, name, category, brief spec line) — 8-10 sample items across categories

- Simple category filter sidebar or tabs (no price/purchase flow needed — this is a B2B/institutional catalog, not e-commerce)

- Each item links to a detail view

3. ÉQUIPEMENT DETAIL (/equipements/:id)

- Image gallery (generated placeholders)

- Name, category, technical description, key specifications table

- Compliance/certification note (e.g., "Certificat d'enregistrement disponible sur demande")

- CTA: "Demander une fiche technique" / "Ajouter à ma demande de devis" (static, no real cart/payment)

- Related equipment in the same category

4. MARCHÉS PUBLICS (/marches-publics)

- Dedicated page explaining FZANA's tender-response capability

- Process explanation: veille des appels d'offres, analyse du cahier des charges, matching technique produit par produit, constitution du dossier (mémoire technique, bordereau des prix, acte d'engagement, certificat d'enregistrement)

- Compliance/certification emphasis: registered medical equipment, documentation support

- CTA: "Vous avez un appel d'offres en cours ? Parlons-en"

5. À PROPOS (/a-propos)

- Company story/mission — position FZANA as a rigorous, compliance-first partner for institutional medical equipment procurement in Morocco (keep founding date/history generic or omit rather than inventing a false date, since real history wasn't provided)

- Values section (rigueur technique, conformité réglementaire, réactivité)

- Multi-supplier network positioning (works with multiple manufacturers/brands to match technical requirements)

6. CONTACT (/contact)

- Contact form (nom, société, e-mail, téléphone, sujet — with a specific "Appel d'offres" option, message)

- Company contact info block (placeholder — real address/phone to be added later)

- FAQ accordion (délais de réponse, documentation fournie, zones couvertes)

NAVBAR (all pages)

- Logo placeholder, links: Accueil, Équipements, Marchés Publics, À propos, Contact

- CTA button "Demander un devis"

FOOTER (all pages)

- Logo placeholder, category links, company info placeholder, contact placeholder, newsletter signup (optional)

- Navy background, teal accent links/hovers

FORM & INTERACTION BEHAVIOR (static, no backend)

- Every form (contact, devis request, fiche technique request) shows a static success confirmation on submit (inline success message or replacement success state, checkmark icon) — no real backend, no payment, no data persistence needed

- All success states should match the brand style (navy/teal, clean institutional look)

TECHNICAL

- React + TypeScript + Tailwind CSS + routing for multi-page navigation

- Fully responsive, mobile-first

- Shared Navbar/Footer components, one component/page per route as listed above

- Placeholder/generated equipment data (8-10 items minimum) across the categories, reused across catalogue, detail, and home preview

- Icon set: lucide-react, medical/compliance/technical themed (shield, cross, clipboard-check, file-text, etc.)

- No real backend/payment integration — forms and any "devis" flow stubbed with local state, this is a design/UX MVP for validation before backend work

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3ee5834e-30fe-4f4b-8be6-cfec99758ab6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
