import { MAPS, type ModeId } from "@/data/maps";

export type Setting = { k: string; v: string };

export const MODES: Record<
  ModeId,
  { fr: string; en: string; code: string; settings: Setting[]; note: string }
> = {
  hardpoint: {
    fr: "Point stratégique",
    en: "Hardpoint",
    code: "HP",
    note: "Le point tourne. On joue le score, pas une manche sèche.",
    settings: [
      { k: "Limite de score", v: "250" },
      { k: "Temps limite", v: "600 s · 10 min" },
      { k: "Spectateurs", v: "Non applicable" },
      { k: "Mot de passe", v: "Non applicable" },
      { k: "Invitations", v: "Oui" },
    ],
  },
  snd: {
    fr: "Recherche et destruction",
    en: "Search & Destroy",
    code: "SD",
    note: "Première équipe à 9 manches. Prolongation activée.",
    settings: [
      { k: "Manches à gagner", v: "9" },
      { k: "Temps de manche", v: "120 s" },
      { k: "Prolongation", v: "Oui" },
      { k: "Plafond de prolongation", v: "20" },
      { k: "Spectateurs", v: "Non applicable" },
      { k: "Mot de passe", v: "Non applicable" },
      { k: "Invitations", v: "Oui" },
    ],
  },
  control: {
    fr: "Contrôle",
    en: "Control",
    code: "CTL",
    note: "Premier à 3 manches. Chaque manche dure 90 secondes.",
    settings: [
      { k: "Limite de score", v: "3" },
      { k: "Temps de manche", v: "90 s" },
      { k: "Spectateurs", v: "Non applicable" },
      { k: "Mot de passe", v: "Non applicable" },
      { k: "Invitations", v: "Oui" },
    ],
  },
};

export const BO5_ORDER = [
  "Point stratégique",
  "Recherche et destruction",
  "Contrôle",
  "Point stratégique",
  "Recherche et destruction",
];

export type VetoAction = "ban" | "pick" | "left";

export type VetoStep = {
  team: 1 | 2;
  action: VetoAction;
  pool: ModeId;
  slot?: number;
  side?: 1 | 2;
};

export type FormatId = "bo5" | "bo3" | "bo7" | "gf";

export const FORMATS: {
  id: FormatId;
  label: string;
  blurb: string;
  orderNote: string;
  order: string[];
  steps: VetoStep[];
}[] = [
  {
    id: "bo5",
    label: "Best of 5",
    blurb: "Format du Summer Split, du Fall Split et des finales hors grande finale.",
    orderNote: "Ordre officiel écrit.",
    order: BO5_ORDER,
    steps: [
      { team: 1, action: "ban", pool: "hardpoint" },
      { team: 2, action: "ban", pool: "hardpoint" },
      { team: 1, action: "pick", pool: "hardpoint", slot: 1, side: 2 },
      { team: 2, action: "pick", pool: "hardpoint", slot: 4, side: 1 },
      { team: 2, action: "ban", pool: "snd" },
      { team: 1, action: "ban", pool: "snd" },
      { team: 2, action: "pick", pool: "snd", slot: 2, side: 1 },
      { team: 1, action: "pick", pool: "snd", slot: 5, side: 2 },
      { team: 1, action: "ban", pool: "control" },
      { team: 2, action: "ban", pool: "control" },
      { team: 1, action: "left", pool: "control", slot: 3, side: 1 },
    ],
  },
  {
    id: "bo3",
    label: "Best of 3",
    blurb: "Quatre bans par pool large, la map restante se joue.",
    orderNote: "Ordre lu sur les numéros du veto.",
    order: ["Point stratégique", "Recherche et destruction", "Contrôle"],
    steps: [
      { team: 1, action: "ban", pool: "hardpoint" },
      { team: 2, action: "ban", pool: "hardpoint" },
      { team: 1, action: "ban", pool: "hardpoint" },
      { team: 2, action: "ban", pool: "hardpoint" },
      { team: 1, action: "left", pool: "hardpoint", slot: 1, side: 1 },
      { team: 2, action: "ban", pool: "snd" },
      { team: 1, action: "ban", pool: "snd" },
      { team: 2, action: "ban", pool: "snd" },
      { team: 1, action: "ban", pool: "snd" },
      { team: 2, action: "left", pool: "snd", slot: 2, side: 2 },
      { team: 1, action: "ban", pool: "control" },
      { team: 2, action: "ban", pool: "control" },
      { team: 1, action: "left", pool: "control", slot: 3, side: 1 },
    ],
  },
  {
    id: "bo7",
    label: "Best of 7",
    blurb: "Deux picks Contrôle. La dernière map Recherche et destruction est celle qui reste.",
    orderNote: "Ordre lu sur les numéros du veto.",
    order: [
      "Point stratégique",
      "Recherche et destruction",
      "Contrôle",
      "Point stratégique",
      "Recherche et destruction",
      "Contrôle",
      "Recherche et destruction",
    ],
    steps: [
      { team: 1, action: "ban", pool: "hardpoint" },
      { team: 2, action: "ban", pool: "hardpoint" },
      { team: 1, action: "pick", pool: "hardpoint", slot: 1, side: 2 },
      { team: 2, action: "pick", pool: "hardpoint", slot: 4, side: 1 },
      { team: 2, action: "ban", pool: "snd" },
      { team: 1, action: "ban", pool: "snd" },
      { team: 2, action: "pick", pool: "snd", slot: 2, side: 1 },
      { team: 1, action: "pick", pool: "snd", slot: 5, side: 2 },
      { team: 2, action: "left", pool: "snd", slot: 7, side: 2 },
      { team: 1, action: "pick", pool: "control", slot: 3, side: 2 },
      { team: 2, action: "pick", pool: "control", slot: 6, side: 1 },
    ],
  },
  {
    id: "gf",
    label: "Grande finale BO7",
    blurb:
      "Avantage d'une map pour l'équipe sortie de la finale des gagnants. Le veto couvre les maps 1 à 6.",
    orderNote: "Ordre lu sur les numéros du veto. L'avantage de map est en plus.",
    order: [
      "Point stratégique",
      "Recherche et destruction",
      "Contrôle",
      "Point stratégique",
      "Contrôle",
      "Recherche et destruction",
    ],
    steps: [
      { team: 1, action: "ban", pool: "hardpoint" },
      { team: 2, action: "ban", pool: "hardpoint" },
      { team: 1, action: "pick", pool: "hardpoint", slot: 1, side: 2 },
      { team: 2, action: "pick", pool: "hardpoint", slot: 4, side: 1 },
      { team: 2, action: "ban", pool: "snd" },
      { team: 1, action: "ban", pool: "snd" },
      { team: 2, action: "pick", pool: "snd", slot: 2, side: 1 },
      { team: 1, action: "pick", pool: "snd", slot: 6, side: 2 },
      { team: 1, action: "pick", pool: "control", slot: 3, side: 2 },
      { team: 2, action: "pick", pool: "control", slot: 5, side: 1 },
    ],
  },
];

export const WEAPON_BANS: { group: string; items: string[] }[] = [
  { group: "Fusils à pompe", items: ["Argus", "R9-0"] },
  { group: "Fusils de précision", items: ["M21 EBR", "NA-45", "SO14", "SVD", "XPR"] },
  { group: "Pistolets-mitrailleurs", items: ["FSS Hurricane", "Static HV", "Sten"] },
  { group: "Lanceurs", items: ["D13 Sector", "FHJ-18", "SMRS", "Thumper"] },
  { group: "Pistolets", items: [".50 GS", "MW11", "Shorty"] },
];

export const ATTACHMENT_GLOBALS = [
  "Akimbo — interdit sur toutes les armes.",
  "Disabled — interdit sur toutes les armes.",
  "Toutes les munitions Thermite, Dragon's Breath, explosives et incendiaires.",
  "Munitions Slug — interdites sur tous les fusils à pompe.",
];

export const ATTACHMENT_BANS: { weapon: string; items: string[] }[] = [
  { weapon: "3-Line Rifle", items: ["EMPRESS 514MM F01 Barrel", "Bipod", "KOVALEVSKAYA S01 Stock"] },
  { weapon: ".50 GS", items: ["Lightweight Trigger", "Match Grade Trigger"] },
  { weapon: "AS VAL", items: ["15 Round FMG Mag"] },
  { weapon: "BP-50", items: ["Leroy 438mm", "Recoil Booster"] },
  { weapon: "CR AMAX", items: ["M67 Ammo"] },
  { weapon: "Cronen Squall", items: ["Semi Automatic Fire"] },
  { weapon: "Crossbow", items: ["Thermite, Gas et Sticky Grenade Bolts"] },
  { weapon: "CX9", items: ["9mm Hollow Point Rounds"] },
  { weapon: "DLQ", items: ["Concussion Ammo"] },
  { weapon: "DRH", items: ["OTM Mag"] },
  { weapon: "Hades", items: ["Heartseeker"] },
  { weapon: "HS0405", items: ["Thunder Rounds"] },
  { weapon: "HVK", items: ["Large Caliber Mag"] },
  { weapon: "LAG 53", items: ["13.0\" OSW Para Barrel"] },
  { weapon: "M4", items: ["Underbarrel Launcher"] },
  { weapon: "Machine Pistol", items: ["VDD 35MM Short Barrel"] },
  {
    weapon: "MG42",
    items: ["KRAUSNICK 355MM Rapid", "6.5 ARISAKA 125 Round Drums", "Recoil Booster"],
  },
  { weapon: "Oden", items: ["OWC Ranger Barrel", "OWC Marksman Barrel"] },
  { weapon: "QQ9", items: ["10MM 30 Round Reload"] },
  { weapon: "RAM-7", items: ["FORGE TAC Eclipse Barrell"] },
  { weapon: "RPD", items: ["Infinite Ammo"] },
  { weapon: "SKS", items: ["Tactical Foregrip A", "Granulated Grip Tape"] },
  { weapon: "Type 19", items: ["Hi-Accuracy Sniper Ammo"] },
  {
    weapon: "Type 63",
    items: [
      "Airborne Elastic Wrap Grip",
      "Firm Grip Tape",
      "16.4\" Rapid Fire Barrel",
      "16.4\" Titanium Barrel",
      "18.3\" Strike Team Barrel",
    ],
  },
  { weapon: "Tundra", items: ["26.5\" Hammer Forged Barrel", "28.2\" Tiger Team Barrel"] },
  {
    weapon: "USS-9",
    items: [
      "Carbine Pro Barrel",
      "16.6\" Factory Carbine Barrel",
      "13.1\" First Responder Barrel",
      ".41 AE 32-Round Mags",
    ],
  },
];

export const LETHALS = [
  { fr: "C4", en: "C4" },
  { fr: "Grenade à sous-munitions", en: "Cluster Grenade" },
  { fr: "Grenade de contact", en: "Contact Grenade" },
  { fr: "Charge foreuse", en: "Drill Charge" },
  { fr: "Cocktail Molotov", en: "Molotov Cocktail" },
  { fr: "Thermite", en: "Thermite" },
  { fr: "Mine piège", en: "Trip Mine" },
];

export const TACTICALS = [
  { fr: "Bombe cryo", en: "Cryo Bomb" },
  { fr: "Grenade leurre", en: "Decoy Grenade" },
  { fr: "Grenade extinctrice", en: "Douser Grenade" },
  { fr: "Grenade écho", en: "Echo Grenade" },
  { fr: "Charge flash", en: "Flash Charge" },
  { fr: "Drone flash", en: "Flash Drone" },
  { fr: "Grenades à gaz", en: "Gas Grenades" },
  { fr: "Capteur cardiaque", en: "Heartbeat Sensor" },
  { fr: "Leurre gonflable", en: "Inflatable Decoy" },
  { fr: "Stimulant", en: "Stim Shot" },
  { fr: "Orbe de tempête", en: "Storm Ball" },
  { fr: "Capteur piège", en: "Trip Sensor" },
];

export const PERK_BANS: { column: string; items: { fr: string; en: string }[] }[] = [
  {
    column: "Atouts rouges",
    items: [
      { fr: "Martyre", en: "Martyrdom" },
      { fr: "Overclock", en: "Overclock" },
      { fr: "Pinpoint", en: "Pinpoint" },
      { fr: "Réapprovisionnement", en: "Restock" },
      { fr: "Stabilisateurs de glissade", en: "Slide Stabilizers" },
      { fr: "Tacticien", en: "Tactician" },
    ],
  },
  {
    column: "Atouts verts",
    items: [
      { fr: "Soin rapide", en: "Quick Fix" },
      { fr: "Reconnaissance", en: "Recon" },
      { fr: "Traqueur", en: "Tracker" },
      { fr: "Vautour", en: "Vulture" },
    ],
  },
  {
    column: "Atouts bleus",
    items: [
      { fr: "Alerte", en: "Alert" },
      { fr: "Assassin", en: "Assassin" },
      { fr: "Ingénieur", en: "Engineer" },
      { fr: "Ligne dure", en: "Hardline" },
      { fr: "Haute alerte", en: "High Alert" },
      { fr: "Persistance", en: "Persistence" },
      { fr: "Soutien d'unité", en: "Unit Support" },
      { fr: "Expert en démolition", en: "Demo Expert" },
      { fr: "Shrapnel", en: "Shrapnel" },
    ],
  },
];

export const ALLOWED_SKILLS = [
  { fr: "Annihilateur", en: "Annihilator" },
  { fr: "Griffe", en: "Claw" },
  { fr: "Machine de la mort", en: "Death Machine" },
  { fr: "Égaliseur", en: "Equalizer" },
  { fr: "Pointes de gravité", en: "Gravity Spikes" },
  { fr: "Canon vortex de gravité", en: "Gravity Vortex Gun" },
  { fr: "Purificateur", en: "Purifier" },
  { fr: "Sparrow", en: "Sparrow" },
  { fr: "Tempête", en: "Tempest" },
  { fr: "Machine de guerre", en: "War Machine" },
];

export const ALLOWED_STREAKS = [
  { fr: "Drone traqueur", en: "Hunter Killer Drone" },
  { fr: "Missile prédateur", en: "Predator Missile" },
  { fr: "IEM", en: "EMP" },
];

export const OPERATOR_SKINS = [
  "Cosmic Silverback",
  "Death Angel Alice - Trench",
  "Death Angel Alice - Shrouded Maiden",
  "Florence - Night Terror",
  "Golem - Everglade",
  "Grinch - Night Fang",
  "Grinch - Wreath Havoc",
  "Grinch - The Lionheart",
  "Roze - Murk",
  "Roze - Rook",
  "Zombie - Wicht Warden",
];

export const ROLES = [
  { id: "ar", short: "AR", fr: "Fusil d'assaut", count: 3 },
  { id: "smg", short: "SMG", fr: "Pistolet-mitrailleur", count: 3 },
  { id: "lmg", short: "LMG", fr: "Mitrailleuse légère", count: 1 },
  { id: "sg", short: "Pompe", fr: "Fusil à pompe", count: 1 },
  { id: "mm", short: "Marksman", fr: "Fusil de tireur", count: 1 },
  { id: "snp", short: "Sniper", fr: "Fusil de précision", count: 1 },
] as const;

export type RoleId = (typeof ROLES)[number]["id"];

export const LOBBY_STEPS = [
  {
    title: "Ajouter les joueurs",
    body: "Depuis l'accueil, ouvre Amis puis Ajouter. Le pseudo Call of Duty: Mobile est sensible à la casse. Si le clavier ne peut pas l'écrire, copie-le depuis un site externe comme PlayMobile.GG.",
  },
  {
    title: "Créer le privé",
    body: "Multijoueur, puis l'icône à trois traits en haut à droite, puis Privé. Tu es l'hôte. On n'entre pas dans un privé déjà en groupe : les invitations se font une fois le salon créé.",
  },
  {
    title: "Placer les équipes",
    body: "Inviter des amis, puis le bouton +. Chacun choisit sa case. Alliés sur ta ligne, adversaires sur l'autre. Il faut se mettre pas prêt pour changer de place. Seul l'hôte a Démarrer.",
  },
  {
    title: "Régler la salle",
    body: "Match Settings, à gauche. Reporte les valeurs de la section Réglages : score, temps, prolongation, invitations. Spectateurs et mot de passe : non applicable.",
  },
  {
    title: "Mode et map",
    body: "Le bouton de mode en bas à droite. Point stratégique, Recherche et destruction et Contrôle sont dans les modes principaux. L'hôte lance quand la map du veto et les réglages sont bons. La tête de série la plus haute héberge.",
  },
];

export const CHECKS = [
  { id: "seed", t: "La tête de série a choisi d'être Équipe 1 ou Équipe 2." },
  { id: "veto", t: "Veto terminé. Une map bannie ou pick ne revient pas." },
  { id: "settings", t: "Réglages de salle recopiés : 250 / 9 manches / 3 rounds." },
  { id: "roles", t: "Rôles annoncés. L'équipe qui a donné ses compétences en second annonce ses rôles en premier." },
  { id: "skills", t: "Cinq compétences différentes. Personne ne spawn avec celle d'un coéquipier vivant." },
  { id: "streaks", t: "Séries équipées : uniquement drone traqueur, missile prédateur, IEM." },
  { id: "wild", t: "Aucun joker sur aucune classe." },
  { id: "perk", t: "Aucun atout, létal, tactique ou accessoire de la liste rouge." },
  { id: "new", t: "Rien de sorti depuis moins de 21 jours, sauf feu vert de l'admin." },
  { id: "skin", t: "Pas de skin d'opérateur banni, pas d'emote, pas de skin létal légendaire." },
  { id: "rec", t: "Partie enregistrée, au cas où il faut une preuve." },
];

export const CHANGELOG: { date: string; items: string[] }[] = [
  {
    date: "24 septembre 2026",
    items: ["Static HV ajouté aux armes interdites : aide à la visée trop forte."],
  },
  {
    date: "1 septembre 2026",
    items: [
      ".50 GS et MW11 interdits chez les pistolets.",
      "FSS Hurricane et Sten interdits chez les PM.",
      "M21 EBR interdit chez les précisions.",
      "Stabilisateurs de glissade interdit.",
      "Cronen Squall : tir semi-automatique interdit.",
      "Ces armes pourront revenir si l'aide à la visée redescend.",
    ],
  },
  {
    date: "9 juin 2026",
    items: ["R9-0 ajouté aux restrictions."],
  },
  {
    date: "30 avril 2026",
    items: [
      "Survival Training retiré des restrictions.",
      "Accessoires ajoutés : QQ9, Type 63, LAG 53, .50 GS.",
      "Shrapnel, Charge foreuse, Charge flash et Leurre gonflable interdits.",
    ],
  },
  {
    date: "23 janvier 2026",
    items: [
      "Nouveau pool 2026 voté par les pros du Mondial 2025.",
      "Conservées : Summit, Hacienda, Combine, Tunisia, Coastal, Firing Range, Raid.",
      "Déplacées : Slums en SD, Standoff en Contrôle, Takeoff en Point stratégique.",
      "Ajoutées : Arsenal, Meltdown, Crossroads Strike.",
      "Retirées : Apocalypse, Kurohana Metropolis, Crossfire.",
      "SD passe à 9 manches. Le Contrôle reste le 3e mode. Les silencieux ne sont pas restreints.",
      "Marksman séparé en Sniper + Marksman. Heavy séparé en Pompe + LMG. Une fois chacun.",
      "SO14 interdit. Expert en démolition interdit.",
    ],
  },
  {
    date: "14 octobre 2025",
    items: [
      "Dernière mise à jour avant le Mondial 2025.",
      "Accessoires : 3-Line, Machine Pistol, Oden, RAM-7, SKS, Tundra, Type 63, USS-9.",
      "Ingénieur et Overclock interdits.",
    ],
  },
  {
    date: "17 juin 2025",
    items: [
      "Assassin interdit.",
      "R.A.P.S. interdit en série de points.",
      "Rappel : munitions incendiaires, Dragon's Breath, explosives et Thermite interdites.",
    ],
  },
  {
    date: "19 mai 2025",
    items: ["Tous les jokers interdits.", "D13 Sector interdit."],
  },
];

export const QUIZ: {
  q: string;
  options: string[];
  answer: number;
  why: string;
}[] = [
  {
    q: "Limite de score en Point stratégique ?",
    options: ["150", "250", "100"],
    answer: 1,
    why: "Round Score Limit : 250. Le temps limite est de 600 secondes.",
  },
  {
    q: "Combien de manches faut-il gagner en Recherche et destruction ?",
    options: ["6", "9", "4"],
    answer: 1,
    why: "Le plafond est passé à 9 en 2026. Temps de manche : 120 s. Prolongation : oui, plafond 20.",
  },
  {
    q: "Temps d'une manche de Contrôle ?",
    options: ["60 secondes", "90 secondes", "120 secondes"],
    answer: 1,
    why: "Score de manche : 3. Temps : 90 secondes.",
  },
  {
    q: "Ordre officiel d'un Best of 5 ?",
    options: [
      "HP, SD, Contrôle, HP, SD",
      "HP, Contrôle, SD, HP, SD",
      "SD, HP, Contrôle, SD, HP",
    ],
    answer: 0,
    why: "Point stratégique, Recherche et destruction, Contrôle, puis à nouveau HP et SD.",
  },
  {
    q: "Deux coéquipiers spawnent avec la même compétence, sans l'activer. Que se passe-t-il ?",
    options: [
      "Rien, tant qu'elle n'est pas utilisée",
      "Forfait de la map",
      "Simple avertissement",
    ],
    answer: 1,
    why: "Apparaître avec la compétence compte comme l'utiliser, même sans activation. Exception : le coéquipier qui a la même est déjà mort et en train d'en changer.",
  },
  {
    q: "Quelles séries de points sont autorisées ?",
    options: [
      "UAV, Shock RC et drone traqueur",
      "Drone traqueur, missile prédateur et IEM",
      "Uniquement l'IEM",
    ],
    answer: 1,
    why: "Liste fermée. Tout le reste est interdit, même si ce n'est pas écrit nom par nom.",
  },
  {
    q: "Les jokers (wildcards) ?",
    options: ["Un seul autorisé", "Tous interdits", "Seulement les jokers verts"],
    answer: 1,
    why: "Tous les jokers sont restreints, sur tous les matchs au-delà du Team Qualifier en jeu.",
  },
  {
    q: "Un fusil ajouté au jeu il y a 10 jours, absent de la liste ?",
    options: [
      "Autorisé tout de suite",
      "Interdit pendant 21 jours",
      "Interdit pour toute la saison",
    ],
    answer: 1,
    why: "Armes, compétences, atouts, utilitaires, séries et accessoires neufs : 21 jours après la sortie internationale. L'admin peut raccourcir ou rallonger. En cas de doute, on demande avant de jouer.",
  },
  {
    q: "Pool de rôles d'armes, par équipe ?",
    options: [
      "3 AR, 3 SMG, 1 LMG, 1 pompe, 1 marksman, 1 sniper",
      "2 de chaque classe",
      "5 AR et 5 SMG",
    ],
    answer: 0,
    why: "Cinq joueurs, deux rôles différents chacun : les 10 places du pool sont toutes utilisées. Les équipes ne partagent pas le pool.",
  },
  {
    q: "En Best of 5, qui ban en premier sur Point stratégique ?",
    options: ["Équipe 1", "Équipe 2", "La tête de série, sans rôle"],
    answer: 0,
    why: "La tête de série choisit d'être Équipe 1 ou 2 avant le veto. Ensuite l'Équipe 1 ouvre les bans HP.",
  },
];

export type Hit = { tone: "ban" | "ok" | "info"; title: string; where: string };

function pair(fr: string, en: string) {
  return fr.toLowerCase() === en.toLowerCase() ? fr : `${fr} · ${en}`;
}

export const HITS: Hit[] = [
  ...WEAPON_BANS.flatMap((g) =>
    g.items.map((name) => ({ tone: "ban" as const, title: name, where: `Arme interdite · ${g.group}` })),
  ),
  ...ATTACHMENT_BANS.flatMap((g) =>
    g.items.map((name) => ({
      tone: "ban" as const,
      title: `${g.weapon} — ${name}`,
      where: "Accessoire interdit",
    })),
  ),
  ...ATTACHMENT_GLOBALS.map((title) => ({ tone: "ban" as const, title, where: "Règle globale d'accessoire" })),
  ...LETHALS.map((i) => ({ tone: "ban" as const, title: pair(i.fr, i.en), where: "Létal interdit" })),
  ...TACTICALS.map((i) => ({ tone: "ban" as const, title: pair(i.fr, i.en), where: "Tactique interdit" })),
  ...PERK_BANS.flatMap((g) =>
    g.items.map((i) => ({ tone: "ban" as const, title: pair(i.fr, i.en), where: g.column })),
  ),
  { tone: "ban", title: "Tous les jokers", where: "Wildcards · liste fermée, rien n'est autorisé" },
  ...ALLOWED_SKILLS.map((i) => ({
    tone: "ok" as const,
    title: pair(i.fr, i.en),
    where: "Compétence autorisée · tout le reste est interdit",
  })),
  ...ALLOWED_STREAKS.map((i) => ({
    tone: "ok" as const,
    title: pair(i.fr, i.en),
    where: "Série de points autorisée · tout le reste est interdit",
  })),
  ...OPERATOR_SKINS.map((name) => ({ tone: "ban" as const, title: name, where: "Skin d'opérateur interdit" })),
  { tone: "ban", title: "Toutes les emotes", where: "Interdites à tout moment du match" },
  { tone: "ban", title: "Tous les skins légendaires de létal et de tactique", where: "Cosmétique" },
  ...MAPS.map((m) => ({
    tone: "info" as const,
    title: m.name,
    where: `Map · ${MODES[m.mode].fr} · ${m.file}`,
  })),
  { tone: "info", title: "Silencieux", where: "Non restreints depuis le vote 2026" },
  {
    tone: "info",
    title: "SKS",
    where: "L'arme est autorisée. Tactical Foregrip A et Granulated Grip Tape sont interdits.",
  },
];

export function searchRules(query: string): Hit[] {
  const n = query.trim().toLowerCase();
  if (n.length < 2) return [];
  return HITS.filter((h) => `${h.title} ${h.where}`.toLowerCase().includes(n)).slice(0, 24);
}

export function stepSentence(step: VetoStep) {
  const mode = MODES[step.pool].fr;
  const who = `Équipe ${step.team}`;
  if (step.action === "ban") return `${who} ban une map de ${mode}.`;
  if (step.action === "pick" && step.slot && step.side) {
    return `${who} pick la map ${step.slot} en ${mode}. L'équipe ${step.side} choisit le côté.`;
  }
  if (step.action === "left" && step.slot && step.side) {
    return `La map restante de ${mode} est la map ${step.slot}. L'équipe ${step.side} choisit le côté.`;
  }
  return mode;
}
