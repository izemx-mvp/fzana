import bloc from "@/assets/cat-bloc.jpg";
import diagnostic from "@/assets/cat-diagnostic.jpg";
import mobilier from "@/assets/cat-mobilier.jpg";
import reanimation from "@/assets/cat-reanimation.jpg";
import consommables from "@/assets/cat-consommables.jpg";
import sterilisation from "@/assets/cat-sterilisation.jpg";

export type CategorieId =
  | "bloc-operatoire"
  | "diagnostic"
  | "mobilier"
  | "soins-intensifs"
  | "consommables"
  | "sterilisation";

export type Categorie = {
  id: CategorieId;
  nom: string;
  description: string;
  image: string;
};

export const categories: Categorie[] = [
  {
    id: "bloc-operatoire",
    nom: "Équipement de bloc opératoire",
    description:
      "Tables d'opération, éclairages chirurgicaux, colonnes techniques et bistouris électriques.",
    image: bloc,
  },
  {
    id: "diagnostic",
    nom: "Matériel de diagnostic",
    description:
      "Échographes, électrocardiographes, moniteurs multiparamétriques et dispositifs d'exploration.",
    image: diagnostic,
  },
  {
    id: "mobilier",
    nom: "Mobilier médical hospitalier",
    description:
      "Lits électriques, chariots de soins, tables d'examen et mobilier de chambre.",
    image: mobilier,
  },
  {
    id: "soins-intensifs",
    nom: "Dispositifs de soins intensifs",
    description:
      "Ventilateurs, pousse-seringues, pompes à perfusion et équipements de réanimation.",
    image: reanimation,
  },
  {
    id: "consommables",
    nom: "Consommables médicaux",
    description:
      "Dispositifs à usage unique, champs opératoires, seringues et matériel de protection.",
    image: consommables,
  },
  {
    id: "sterilisation",
    nom: "Équipement de stérilisation",
    description:
      "Autoclaves, laveurs-désinfecteurs, thermosoudeuses et traçabilité de stérilisation.",
    image: sterilisation,
  },
];

export type Equipement = {
  id: string;
  nom: string;
  categorie: CategorieId;
  resume: string;
  description: string;
  image: string;
  specifications: { label: string; valeur: string }[];
};

export const equipements: Equipement[] = [
  {
    id: "table-operation-electrique-th500",
    nom: "Table d'opération électrique TH-500",
    categorie: "bloc-operatoire",
    resume: "Table hydro-électrique multipositions, plateau radiotransparent.",
    description:
      "Table d'opération à commande électrique conçue pour la chirurgie polyvalente. Plateau segmenté radiotransparent, télécommande filaire et batterie de secours permettant la poursuite des interventions en cas de coupure d'alimentation.",
    image: bloc,
    specifications: [
      { label: "Charge maximale", valeur: "250 kg" },
      { label: "Plage de hauteur", valeur: "700 – 1 050 mm" },
      { label: "Trendelenburg / anti-Trendelenburg", valeur: "25° / 25°" },
      { label: "Alimentation", valeur: "220 V – 50 Hz, batterie de secours" },
      { label: "Matériau", valeur: "Acier inoxydable 304, matelas antistatique" },
    ],
  },
  {
    id: "eclairage-chirurgical-led-ls90",
    nom: "Éclairage chirurgical LED LS-90",
    categorie: "bloc-operatoire",
    resume: "Coupole LED plafonnière, 160 000 lux, température réglable.",
    description:
      "Éclairage opératoire à technologie LED offrant un champ lumineux homogène sans ombre portée. Réglage de l'intensité et de la température de couleur, bras d'équilibrage à friction constante.",
    image: bloc,
    specifications: [
      { label: "Intensité lumineuse", valeur: "160 000 lux à 1 m" },
      { label: "Température de couleur", valeur: "3 800 – 4 800 K réglable" },
      { label: "Indice de rendu des couleurs", valeur: "Ra ≥ 96" },
      { label: "Durée de vie LED", valeur: "≥ 50 000 heures" },
    ],
  },
  {
    id: "echographe-doppler-couleur-ux7",
    nom: "Échographe Doppler couleur UX-7",
    categorie: "diagnostic",
    resume: "Plateforme d'imagerie multisondes avec Doppler couleur et pulsé.",
    description:
      "Système d'échographie numérique destiné aux services de radiologie, gynécologie et médecine interne. Écran haute résolution articulé, archivage DICOM et connectivité réseau hospitalière.",
    image: diagnostic,
    specifications: [
      { label: "Modes", valeur: "B, M, Doppler couleur, Doppler pulsé, Power" },
      { label: "Sondes", valeur: "3 connecteurs actifs (convexe, linéaire, endocavitaire)" },
      { label: "Écran", valeur: "21,5\" LED articulé" },
      { label: "Connectivité", valeur: "DICOM 3.0, USB, Ethernet" },
    ],
  },
  {
    id: "moniteur-multiparametrique-vm12",
    nom: "Moniteur multiparamétrique VM-12",
    categorie: "diagnostic",
    resume: "Surveillance 6 paramètres, écran tactile 12\", batterie 4 h.",
    description:
      "Moniteur de surveillance patient adapté aux blocs, urgences et unités de soins. Configuration modulaire des paramètres, alarmes hiérarchisées et export des tendances.",
    image: diagnostic,
    specifications: [
      { label: "Paramètres", valeur: "ECG, SpO₂, PNI, respiration, température, capnographie (option)" },
      { label: "Écran", valeur: "12,1\" tactile couleur" },
      { label: "Autonomie", valeur: "≥ 4 heures sur batterie" },
      { label: "Mémoire de tendances", valeur: "96 heures" },
    ],
  },
  {
    id: "lit-hospitalier-electrique-3f",
    nom: "Lit hospitalier électrique 3 fonctions",
    categorie: "mobilier",
    resume: "Lit à 3 fonctions motorisées, barrières ABS rabattables.",
    description:
      "Lit d'hospitalisation à commande électrique pour services de médecine et chirurgie. Sommier en quatre plans, barrières latérales rabattables et roues à freinage centralisé.",
    image: mobilier,
    specifications: [
      { label: "Fonctions motorisées", valeur: "Hauteur, relève-buste, relève-jambes" },
      { label: "Charge de sécurité", valeur: "200 kg" },
      { label: "Dimensions du sommier", valeur: "2 000 × 900 mm" },
      { label: "Accessoires", valeur: "Potence, barrières ABS, porte-sonde" },
    ],
  },
  {
    id: "chariot-de-soins-inox-cs20",
    nom: "Chariot de soins inox CS-20",
    categorie: "mobilier",
    resume: "Chariot inox 3 tiroirs, plateau supérieur à galerie.",
    description:
      "Chariot de soins entièrement en acier inoxydable, conçu pour un nettoyage et une désinfection intensifs. Tiroirs sur glissières, poubelle latérale et support de conteneur d'aiguilles.",
    image: mobilier,
    specifications: [
      { label: "Matériau", valeur: "Acier inoxydable 304" },
      { label: "Tiroirs", valeur: "3 tiroirs sur glissières télescopiques" },
      { label: "Roues", valeur: "4 roues Ø 100 mm dont 2 freinées" },
      { label: "Dimensions", valeur: "800 × 500 × 950 mm" },
    ],
  },
  {
    id: "ventilateur-reanimation-vr8",
    nom: "Ventilateur de réanimation VR-8",
    categorie: "soins-intensifs",
    resume: "Ventilation invasive et non invasive, modes volumétriques et barométriques.",
    description:
      "Ventilateur destiné aux unités de réanimation adulte et pédiatrique. Turbine intégrée, monitorage graphique des boucles et alarmes réglables par paramètre.",
    image: reanimation,
    specifications: [
      { label: "Modes ventilatoires", valeur: "VC, VAC, VACI, VS-AI-PEP, VNI, PRVC" },
      { label: "Volume courant", valeur: "20 – 2 000 mL" },
      { label: "PEP", valeur: "0 – 35 cmH₂O" },
      { label: "Autonomie batterie", valeur: "≥ 2 heures" },
    ],
  },
  {
    id: "pousse-seringue-ps300",
    nom: "Pousse-seringue électrique PS-300",
    categorie: "soins-intensifs",
    resume: "Débit 0,1 – 1 500 mL/h, détection d'occlusion 3 niveaux.",
    description:
      "Pousse-seringue de précision compatible avec les seringues de 5 à 50 mL. Empilable en rack, bibliothèque de médicaments et historique des perfusions.",
    image: reanimation,
    specifications: [
      { label: "Plage de débit", valeur: "0,1 – 1 500 mL/h" },
      { label: "Précision", valeur: "± 2 %" },
      { label: "Seringues compatibles", valeur: "5, 10, 20, 30, 50 mL" },
      { label: "Alarmes", valeur: "Occlusion, fin de perfusion, batterie faible" },
    ],
  },
  {
    id: "kit-champs-operatoires-steriles",
    nom: "Kit de champs opératoires stériles",
    categorie: "consommables",
    resume: "Sets stériles à usage unique, conditionnement hospitalier.",
    description:
      "Sets de champs opératoires stériles à usage unique, disponibles en plusieurs configurations selon la spécialité chirurgicale. Conditionnement individuel avec indicateur de stérilisation et traçabilité de lot.",
    image: consommables,
    specifications: [
      { label: "Stérilisation", valeur: "Oxyde d'éthylène, indicateur intégré" },
      { label: "Conditionnement", valeur: "Set individuel, carton de 20 sets" },
      { label: "Traçabilité", valeur: "Numéro de lot et date de péremption" },
      { label: "Usage", valeur: "Usage unique" },
    ],
  },
  {
    id: "consommables-perfusion-protection",
    nom: "Consommables de perfusion et protection",
    categorie: "consommables",
    resume: "Seringues, tubulures, gants d'examen et masques chirurgicaux.",
    description:
      "Gamme de consommables courants pour les services de soins : seringues à usage unique, tubulures de perfusion, gants d'examen non stériles et masques chirurgicaux type II.",
    image: consommables,
    specifications: [
      { label: "Seringues", valeur: "2, 5, 10, 20 mL avec ou sans aiguille" },
      { label: "Gants d'examen", valeur: "Nitrile et latex, tailles S à XL" },
      { label: "Masques", valeur: "Type II / IIR, 3 plis" },
      { label: "Approvisionnement", valeur: "Livraison par lots programmés" },
    ],
  },
  {
    id: "autoclave-vapeur-av120",
    nom: "Autoclave à vapeur AV-120",
    categorie: "sterilisation",
    resume: "Stérilisateur 120 L, cycles prévide fractionné, imprimante intégrée.",
    description:
      "Autoclave à vapeur d'eau pour service central de stérilisation. Cycles automatiques prévide fractionné, tests Bowie-Dick et Helix, traçabilité des cycles par impression et export USB.",
    image: sterilisation,
    specifications: [
      { label: "Volume de chambre", valeur: "120 litres" },
      { label: "Cycles", valeur: "134 °C / 121 °C, prévide fractionné" },
      { label: "Tests intégrés", valeur: "Bowie-Dick, Helix, vide" },
      { label: "Traçabilité", valeur: "Imprimante thermique et export USB" },
    ],
  },
  {
    id: "laveur-desinfecteur-ld45",
    nom: "Laveur-désinfecteur d'instruments LD-45",
    categorie: "sterilisation",
    resume: "Cycles thermiques validés A0, double porte disponible.",
    description:
      "Laveur-désinfecteur pour le prétraitement des instruments chirurgicaux. Programmes validés selon la valeur A0, dosage automatique des détergents et version double porte pour circuit propre/sale.",
    image: sterilisation,
    specifications: [
      { label: "Capacité", valeur: "4 à 6 paniers DIN" },
      { label: "Désinfection thermique", valeur: "A0 ≥ 600 / 3 000" },
      { label: "Dosage", valeur: "2 pompes doseuses automatiques" },
      { label: "Configuration", valeur: "Simple ou double porte" },
    ],
  },
];

export const getCategorie = (id: CategorieId) =>
  categories.find((categorie) => categorie.id === id);

export const getEquipement = (id: string) =>
  equipements.find((equipement) => equipement.id === id);
