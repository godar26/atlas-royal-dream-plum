import { o as __toESM } from "../_runtime.mjs";
import { G as require_jsx_runtime, K as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Download, n as Search, r as RotateCcw } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CDVicJ3s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
/** Dossier des visuels. Remplace le fichier en gardant le même nom. */
var MAPS_FOLDER = "public/maps";
var MAPS = [
	{
		id: "summit",
		name: "Summit",
		mode: "hardpoint",
		file: "summit.jpg",
		line: "Station d'altitude, neige et relais."
	},
	{
		id: "hacienda",
		name: "Hacienda",
		mode: "hardpoint",
		file: "hacienda.jpg",
		line: "Villa en pierre, cour et fontaine."
	},
	{
		id: "combine",
		name: "Combine",
		mode: "hardpoint",
		file: "combine.jpg",
		line: "Entrepôt, passerelles et caisses."
	},
	{
		id: "takeoff",
		name: "Takeoff",
		mode: "hardpoint",
		file: "takeoff.jpg",
		line: "Terminal, passerelles et pistes."
	},
	{
		id: "arsenal",
		name: "Arsenal",
		mode: "hardpoint",
		file: "arsenal.jpg",
		line: "Complexe militaire fortifié."
	},
	{
		id: "tunisia",
		name: "Tunisia",
		mode: "snd",
		file: "tunisia.jpg",
		line: "Médina, toits plats et ruelles."
	},
	{
		id: "firing-range",
		name: "Firing Range",
		mode: "snd",
		file: "firing-range.jpg",
		line: "Pas de tir, bermes et conteneurs."
	},
	{
		id: "coastal",
		name: "Coastal",
		mode: "snd",
		file: "coastal.jpg",
		line: "Village de falaise et quais."
	},
	{
		id: "slums",
		name: "Slums",
		mode: "snd",
		file: "slums.jpg",
		line: "Bidonville, escaliers et toits."
	},
	{
		id: "meltdown",
		name: "Meltdown",
		mode: "snd",
		file: "meltdown.jpg",
		line: "Centrale, tours et tuyauterie."
	},
	{
		id: "raid",
		name: "Raid",
		mode: "control",
		file: "raid.jpg",
		provisional: true,
		line: "Villa de nuit. Plan provisoire : remplace le fichier."
	},
	{
		id: "standoff",
		name: "Standoff",
		mode: "control",
		file: "standoff.jpg",
		provisional: true,
		line: "Ville en trois axes. Plan provisoire : remplace le fichier."
	},
	{
		id: "crossroads-strike",
		name: "Crossroads Strike",
		mode: "control",
		file: "crossroads-strike.jpg",
		provisional: true,
		line: "Carrefour et pont. Plan provisoire : remplace le fichier."
	}
];
function mapFilePath(file) {
	return `${MAPS_FOLDER}/${file}`;
}
var MODES = {
	hardpoint: {
		fr: "Point stratégique",
		en: "Hardpoint",
		code: "HP",
		note: "Le point tourne. On joue le score, pas une manche sèche.",
		settings: [
			{
				k: "Limite de score",
				v: "250"
			},
			{
				k: "Temps limite",
				v: "600 s · 10 min"
			},
			{
				k: "Spectateurs",
				v: "Non applicable"
			},
			{
				k: "Mot de passe",
				v: "Non applicable"
			},
			{
				k: "Invitations",
				v: "Oui"
			}
		]
	},
	snd: {
		fr: "Recherche et destruction",
		en: "Search & Destroy",
		code: "SD",
		note: "Première équipe à 9 manches. Prolongation activée.",
		settings: [
			{
				k: "Manches à gagner",
				v: "9"
			},
			{
				k: "Temps de manche",
				v: "120 s"
			},
			{
				k: "Prolongation",
				v: "Oui"
			},
			{
				k: "Plafond de prolongation",
				v: "20"
			},
			{
				k: "Spectateurs",
				v: "Non applicable"
			},
			{
				k: "Mot de passe",
				v: "Non applicable"
			},
			{
				k: "Invitations",
				v: "Oui"
			}
		]
	},
	control: {
		fr: "Contrôle",
		en: "Control",
		code: "CTL",
		note: "Premier à 3 manches. Chaque manche dure 90 secondes.",
		settings: [
			{
				k: "Limite de score",
				v: "3"
			},
			{
				k: "Temps de manche",
				v: "90 s"
			},
			{
				k: "Spectateurs",
				v: "Non applicable"
			},
			{
				k: "Mot de passe",
				v: "Non applicable"
			},
			{
				k: "Invitations",
				v: "Oui"
			}
		]
	}
};
var BO5_ORDER = [
	"Point stratégique",
	"Recherche et destruction",
	"Contrôle",
	"Point stratégique",
	"Recherche et destruction"
];
var FORMATS = [
	{
		id: "bo5",
		label: "Best of 5",
		blurb: "Format du Summer Split, du Fall Split et des finales hors grande finale.",
		orderNote: "Ordre officiel écrit.",
		order: BO5_ORDER,
		steps: [
			{
				team: 1,
				action: "ban",
				pool: "hardpoint"
			},
			{
				team: 2,
				action: "ban",
				pool: "hardpoint"
			},
			{
				team: 1,
				action: "pick",
				pool: "hardpoint",
				slot: 1,
				side: 2
			},
			{
				team: 2,
				action: "pick",
				pool: "hardpoint",
				slot: 4,
				side: 1
			},
			{
				team: 2,
				action: "ban",
				pool: "snd"
			},
			{
				team: 1,
				action: "ban",
				pool: "snd"
			},
			{
				team: 2,
				action: "pick",
				pool: "snd",
				slot: 2,
				side: 1
			},
			{
				team: 1,
				action: "pick",
				pool: "snd",
				slot: 5,
				side: 2
			},
			{
				team: 1,
				action: "ban",
				pool: "control"
			},
			{
				team: 2,
				action: "ban",
				pool: "control"
			},
			{
				team: 1,
				action: "left",
				pool: "control",
				slot: 3,
				side: 1
			}
		]
	},
	{
		id: "bo3",
		label: "Best of 3",
		blurb: "Quatre bans par pool large, la map restante se joue.",
		orderNote: "Ordre lu sur les numéros du veto.",
		order: [
			"Point stratégique",
			"Recherche et destruction",
			"Contrôle"
		],
		steps: [
			{
				team: 1,
				action: "ban",
				pool: "hardpoint"
			},
			{
				team: 2,
				action: "ban",
				pool: "hardpoint"
			},
			{
				team: 1,
				action: "ban",
				pool: "hardpoint"
			},
			{
				team: 2,
				action: "ban",
				pool: "hardpoint"
			},
			{
				team: 1,
				action: "left",
				pool: "hardpoint",
				slot: 1,
				side: 1
			},
			{
				team: 2,
				action: "ban",
				pool: "snd"
			},
			{
				team: 1,
				action: "ban",
				pool: "snd"
			},
			{
				team: 2,
				action: "ban",
				pool: "snd"
			},
			{
				team: 1,
				action: "ban",
				pool: "snd"
			},
			{
				team: 2,
				action: "left",
				pool: "snd",
				slot: 2,
				side: 2
			},
			{
				team: 1,
				action: "ban",
				pool: "control"
			},
			{
				team: 2,
				action: "ban",
				pool: "control"
			},
			{
				team: 1,
				action: "left",
				pool: "control",
				slot: 3,
				side: 1
			}
		]
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
			"Recherche et destruction"
		],
		steps: [
			{
				team: 1,
				action: "ban",
				pool: "hardpoint"
			},
			{
				team: 2,
				action: "ban",
				pool: "hardpoint"
			},
			{
				team: 1,
				action: "pick",
				pool: "hardpoint",
				slot: 1,
				side: 2
			},
			{
				team: 2,
				action: "pick",
				pool: "hardpoint",
				slot: 4,
				side: 1
			},
			{
				team: 2,
				action: "ban",
				pool: "snd"
			},
			{
				team: 1,
				action: "ban",
				pool: "snd"
			},
			{
				team: 2,
				action: "pick",
				pool: "snd",
				slot: 2,
				side: 1
			},
			{
				team: 1,
				action: "pick",
				pool: "snd",
				slot: 5,
				side: 2
			},
			{
				team: 2,
				action: "left",
				pool: "snd",
				slot: 7,
				side: 2
			},
			{
				team: 1,
				action: "pick",
				pool: "control",
				slot: 3,
				side: 2
			},
			{
				team: 2,
				action: "pick",
				pool: "control",
				slot: 6,
				side: 1
			}
		]
	},
	{
		id: "gf",
		label: "Grande finale BO7",
		blurb: "Avantage d'une map pour l'équipe sortie de la finale des gagnants. Le veto couvre les maps 1 à 6.",
		orderNote: "Ordre lu sur les numéros du veto. L'avantage de map est en plus.",
		order: [
			"Point stratégique",
			"Recherche et destruction",
			"Contrôle",
			"Point stratégique",
			"Contrôle",
			"Recherche et destruction"
		],
		steps: [
			{
				team: 1,
				action: "ban",
				pool: "hardpoint"
			},
			{
				team: 2,
				action: "ban",
				pool: "hardpoint"
			},
			{
				team: 1,
				action: "pick",
				pool: "hardpoint",
				slot: 1,
				side: 2
			},
			{
				team: 2,
				action: "pick",
				pool: "hardpoint",
				slot: 4,
				side: 1
			},
			{
				team: 2,
				action: "ban",
				pool: "snd"
			},
			{
				team: 1,
				action: "ban",
				pool: "snd"
			},
			{
				team: 2,
				action: "pick",
				pool: "snd",
				slot: 2,
				side: 1
			},
			{
				team: 1,
				action: "pick",
				pool: "snd",
				slot: 6,
				side: 2
			},
			{
				team: 1,
				action: "pick",
				pool: "control",
				slot: 3,
				side: 2
			},
			{
				team: 2,
				action: "pick",
				pool: "control",
				slot: 5,
				side: 1
			}
		]
	}
];
var WEAPON_BANS = [
	{
		group: "Fusils à pompe",
		items: ["Argus", "R9-0"]
	},
	{
		group: "Fusils de précision",
		items: [
			"M21 EBR",
			"NA-45",
			"SO14",
			"SVD",
			"XPR"
		]
	},
	{
		group: "Pistolets-mitrailleurs",
		items: [
			"FSS Hurricane",
			"Static HV",
			"Sten"
		]
	},
	{
		group: "Lanceurs",
		items: [
			"D13 Sector",
			"FHJ-18",
			"SMRS",
			"Thumper"
		]
	},
	{
		group: "Pistolets",
		items: [
			".50 GS",
			"MW11",
			"Shorty"
		]
	}
];
var ATTACHMENT_GLOBALS = [
	"Akimbo — interdit sur toutes les armes.",
	"Disabled — interdit sur toutes les armes.",
	"Toutes les munitions Thermite, Dragon's Breath, explosives et incendiaires.",
	"Munitions Slug — interdites sur tous les fusils à pompe."
];
var ATTACHMENT_BANS = [
	{
		weapon: "3-Line Rifle",
		items: [
			"EMPRESS 514MM F01 Barrel",
			"Bipod",
			"KOVALEVSKAYA S01 Stock"
		]
	},
	{
		weapon: ".50 GS",
		items: ["Lightweight Trigger", "Match Grade Trigger"]
	},
	{
		weapon: "AS VAL",
		items: ["15 Round FMG Mag"]
	},
	{
		weapon: "BP-50",
		items: ["Leroy 438mm", "Recoil Booster"]
	},
	{
		weapon: "CR AMAX",
		items: ["M67 Ammo"]
	},
	{
		weapon: "Cronen Squall",
		items: ["Semi Automatic Fire"]
	},
	{
		weapon: "Crossbow",
		items: ["Thermite, Gas et Sticky Grenade Bolts"]
	},
	{
		weapon: "CX9",
		items: ["9mm Hollow Point Rounds"]
	},
	{
		weapon: "DLQ",
		items: ["Concussion Ammo"]
	},
	{
		weapon: "DRH",
		items: ["OTM Mag"]
	},
	{
		weapon: "Hades",
		items: ["Heartseeker"]
	},
	{
		weapon: "HS0405",
		items: ["Thunder Rounds"]
	},
	{
		weapon: "HVK",
		items: ["Large Caliber Mag"]
	},
	{
		weapon: "LAG 53",
		items: ["13.0\" OSW Para Barrel"]
	},
	{
		weapon: "M4",
		items: ["Underbarrel Launcher"]
	},
	{
		weapon: "Machine Pistol",
		items: ["VDD 35MM Short Barrel"]
	},
	{
		weapon: "MG42",
		items: [
			"KRAUSNICK 355MM Rapid",
			"6.5 ARISAKA 125 Round Drums",
			"Recoil Booster"
		]
	},
	{
		weapon: "Oden",
		items: ["OWC Ranger Barrel", "OWC Marksman Barrel"]
	},
	{
		weapon: "QQ9",
		items: ["10MM 30 Round Reload"]
	},
	{
		weapon: "RAM-7",
		items: ["FORGE TAC Eclipse Barrell"]
	},
	{
		weapon: "RPD",
		items: ["Infinite Ammo"]
	},
	{
		weapon: "SKS",
		items: ["Tactical Foregrip A", "Granulated Grip Tape"]
	},
	{
		weapon: "Type 19",
		items: ["Hi-Accuracy Sniper Ammo"]
	},
	{
		weapon: "Type 63",
		items: [
			"Airborne Elastic Wrap Grip",
			"Firm Grip Tape",
			"16.4\" Rapid Fire Barrel",
			"16.4\" Titanium Barrel",
			"18.3\" Strike Team Barrel"
		]
	},
	{
		weapon: "Tundra",
		items: ["26.5\" Hammer Forged Barrel", "28.2\" Tiger Team Barrel"]
	},
	{
		weapon: "USS-9",
		items: [
			"Carbine Pro Barrel",
			"16.6\" Factory Carbine Barrel",
			"13.1\" First Responder Barrel",
			".41 AE 32-Round Mags"
		]
	}
];
var LETHALS = [
	{
		fr: "C4",
		en: "C4"
	},
	{
		fr: "Grenade à sous-munitions",
		en: "Cluster Grenade"
	},
	{
		fr: "Grenade de contact",
		en: "Contact Grenade"
	},
	{
		fr: "Charge foreuse",
		en: "Drill Charge"
	},
	{
		fr: "Cocktail Molotov",
		en: "Molotov Cocktail"
	},
	{
		fr: "Thermite",
		en: "Thermite"
	},
	{
		fr: "Mine piège",
		en: "Trip Mine"
	}
];
var TACTICALS = [
	{
		fr: "Bombe cryo",
		en: "Cryo Bomb"
	},
	{
		fr: "Grenade leurre",
		en: "Decoy Grenade"
	},
	{
		fr: "Grenade extinctrice",
		en: "Douser Grenade"
	},
	{
		fr: "Grenade écho",
		en: "Echo Grenade"
	},
	{
		fr: "Charge flash",
		en: "Flash Charge"
	},
	{
		fr: "Drone flash",
		en: "Flash Drone"
	},
	{
		fr: "Grenades à gaz",
		en: "Gas Grenades"
	},
	{
		fr: "Capteur cardiaque",
		en: "Heartbeat Sensor"
	},
	{
		fr: "Leurre gonflable",
		en: "Inflatable Decoy"
	},
	{
		fr: "Stimulant",
		en: "Stim Shot"
	},
	{
		fr: "Orbe de tempête",
		en: "Storm Ball"
	},
	{
		fr: "Capteur piège",
		en: "Trip Sensor"
	}
];
var PERK_BANS = [
	{
		column: "Atouts rouges",
		items: [
			{
				fr: "Martyre",
				en: "Martyrdom"
			},
			{
				fr: "Overclock",
				en: "Overclock"
			},
			{
				fr: "Pinpoint",
				en: "Pinpoint"
			},
			{
				fr: "Réapprovisionnement",
				en: "Restock"
			},
			{
				fr: "Stabilisateurs de glissade",
				en: "Slide Stabilizers"
			},
			{
				fr: "Tacticien",
				en: "Tactician"
			}
		]
	},
	{
		column: "Atouts verts",
		items: [
			{
				fr: "Soin rapide",
				en: "Quick Fix"
			},
			{
				fr: "Reconnaissance",
				en: "Recon"
			},
			{
				fr: "Traqueur",
				en: "Tracker"
			},
			{
				fr: "Vautour",
				en: "Vulture"
			}
		]
	},
	{
		column: "Atouts bleus",
		items: [
			{
				fr: "Alerte",
				en: "Alert"
			},
			{
				fr: "Assassin",
				en: "Assassin"
			},
			{
				fr: "Ingénieur",
				en: "Engineer"
			},
			{
				fr: "Ligne dure",
				en: "Hardline"
			},
			{
				fr: "Haute alerte",
				en: "High Alert"
			},
			{
				fr: "Persistance",
				en: "Persistence"
			},
			{
				fr: "Soutien d'unité",
				en: "Unit Support"
			},
			{
				fr: "Expert en démolition",
				en: "Demo Expert"
			},
			{
				fr: "Shrapnel",
				en: "Shrapnel"
			}
		]
	}
];
var ALLOWED_SKILLS = [
	{
		fr: "Annihilateur",
		en: "Annihilator"
	},
	{
		fr: "Griffe",
		en: "Claw"
	},
	{
		fr: "Machine de la mort",
		en: "Death Machine"
	},
	{
		fr: "Égaliseur",
		en: "Equalizer"
	},
	{
		fr: "Pointes de gravité",
		en: "Gravity Spikes"
	},
	{
		fr: "Canon vortex de gravité",
		en: "Gravity Vortex Gun"
	},
	{
		fr: "Purificateur",
		en: "Purifier"
	},
	{
		fr: "Sparrow",
		en: "Sparrow"
	},
	{
		fr: "Tempête",
		en: "Tempest"
	},
	{
		fr: "Machine de guerre",
		en: "War Machine"
	}
];
var ALLOWED_STREAKS = [
	{
		fr: "Drone traqueur",
		en: "Hunter Killer Drone"
	},
	{
		fr: "Missile prédateur",
		en: "Predator Missile"
	},
	{
		fr: "IEM",
		en: "EMP"
	}
];
var OPERATOR_SKINS = [
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
	"Zombie - Wicht Warden"
];
var ROLES = [
	{
		id: "ar",
		short: "AR",
		fr: "Fusil d'assaut",
		count: 3
	},
	{
		id: "smg",
		short: "SMG",
		fr: "Pistolet-mitrailleur",
		count: 3
	},
	{
		id: "lmg",
		short: "LMG",
		fr: "Mitrailleuse légère",
		count: 1
	},
	{
		id: "sg",
		short: "Pompe",
		fr: "Fusil à pompe",
		count: 1
	},
	{
		id: "mm",
		short: "Marksman",
		fr: "Fusil de tireur",
		count: 1
	},
	{
		id: "snp",
		short: "Sniper",
		fr: "Fusil de précision",
		count: 1
	}
];
var LOBBY_STEPS = [
	{
		title: "Ajouter les joueurs",
		body: "Depuis l'accueil, ouvre Amis puis Ajouter. Le pseudo Call of Duty: Mobile est sensible à la casse. Si le clavier ne peut pas l'écrire, copie-le depuis un site externe comme PlayMobile.GG."
	},
	{
		title: "Créer le privé",
		body: "Multijoueur, puis l'icône à trois traits en haut à droite, puis Privé. Tu es l'hôte. On n'entre pas dans un privé déjà en groupe : les invitations se font une fois le salon créé."
	},
	{
		title: "Placer les équipes",
		body: "Inviter des amis, puis le bouton +. Chacun choisit sa case. Alliés sur ta ligne, adversaires sur l'autre. Il faut se mettre pas prêt pour changer de place. Seul l'hôte a Démarrer."
	},
	{
		title: "Régler la salle",
		body: "Match Settings, à gauche. Reporte les valeurs de la section Réglages : score, temps, prolongation, invitations. Spectateurs et mot de passe : non applicable."
	},
	{
		title: "Mode et map",
		body: "Le bouton de mode en bas à droite. Point stratégique, Recherche et destruction et Contrôle sont dans les modes principaux. L'hôte lance quand la map du veto et les réglages sont bons. La tête de série la plus haute héberge."
	}
];
var CHECKS = [
	{
		id: "seed",
		t: "La tête de série a choisi d'être Équipe 1 ou Équipe 2."
	},
	{
		id: "veto",
		t: "Veto terminé. Une map bannie ou pick ne revient pas."
	},
	{
		id: "settings",
		t: "Réglages de salle recopiés : 250 / 9 manches / 3 rounds."
	},
	{
		id: "roles",
		t: "Rôles annoncés. L'équipe qui a donné ses compétences en second annonce ses rôles en premier."
	},
	{
		id: "skills",
		t: "Cinq compétences différentes. Personne ne spawn avec celle d'un coéquipier vivant."
	},
	{
		id: "streaks",
		t: "Séries équipées : uniquement drone traqueur, missile prédateur, IEM."
	},
	{
		id: "wild",
		t: "Aucun joker sur aucune classe."
	},
	{
		id: "perk",
		t: "Aucun atout, létal, tactique ou accessoire de la liste rouge."
	},
	{
		id: "new",
		t: "Rien de sorti depuis moins de 21 jours, sauf feu vert de l'admin."
	},
	{
		id: "skin",
		t: "Pas de skin d'opérateur banni, pas d'emote, pas de skin létal légendaire."
	},
	{
		id: "rec",
		t: "Partie enregistrée, au cas où il faut une preuve."
	}
];
var CHANGELOG = [
	{
		date: "24 septembre 2026",
		items: ["Static HV ajouté aux armes interdites : aide à la visée trop forte."]
	},
	{
		date: "1 septembre 2026",
		items: [
			".50 GS et MW11 interdits chez les pistolets.",
			"FSS Hurricane et Sten interdits chez les PM.",
			"M21 EBR interdit chez les précisions.",
			"Stabilisateurs de glissade interdit.",
			"Cronen Squall : tir semi-automatique interdit.",
			"Ces armes pourront revenir si l'aide à la visée redescend."
		]
	},
	{
		date: "9 juin 2026",
		items: ["R9-0 ajouté aux restrictions."]
	},
	{
		date: "30 avril 2026",
		items: [
			"Survival Training retiré des restrictions.",
			"Accessoires ajoutés : QQ9, Type 63, LAG 53, .50 GS.",
			"Shrapnel, Charge foreuse, Charge flash et Leurre gonflable interdits."
		]
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
			"SO14 interdit. Expert en démolition interdit."
		]
	},
	{
		date: "14 octobre 2025",
		items: [
			"Dernière mise à jour avant le Mondial 2025.",
			"Accessoires : 3-Line, Machine Pistol, Oden, RAM-7, SKS, Tundra, Type 63, USS-9.",
			"Ingénieur et Overclock interdits."
		]
	},
	{
		date: "17 juin 2025",
		items: [
			"Assassin interdit.",
			"R.A.P.S. interdit en série de points.",
			"Rappel : munitions incendiaires, Dragon's Breath, explosives et Thermite interdites."
		]
	},
	{
		date: "19 mai 2025",
		items: ["Tous les jokers interdits.", "D13 Sector interdit."]
	}
];
var QUIZ = [
	{
		q: "Limite de score en Point stratégique ?",
		options: [
			"150",
			"250",
			"100"
		],
		answer: 1,
		why: "Round Score Limit : 250. Le temps limite est de 600 secondes."
	},
	{
		q: "Combien de manches faut-il gagner en Recherche et destruction ?",
		options: [
			"6",
			"9",
			"4"
		],
		answer: 1,
		why: "Le plafond est passé à 9 en 2026. Temps de manche : 120 s. Prolongation : oui, plafond 20."
	},
	{
		q: "Temps d'une manche de Contrôle ?",
		options: [
			"60 secondes",
			"90 secondes",
			"120 secondes"
		],
		answer: 1,
		why: "Score de manche : 3. Temps : 90 secondes."
	},
	{
		q: "Ordre officiel d'un Best of 5 ?",
		options: [
			"HP, SD, Contrôle, HP, SD",
			"HP, Contrôle, SD, HP, SD",
			"SD, HP, Contrôle, SD, HP"
		],
		answer: 0,
		why: "Point stratégique, Recherche et destruction, Contrôle, puis à nouveau HP et SD."
	},
	{
		q: "Deux coéquipiers spawnent avec la même compétence, sans l'activer. Que se passe-t-il ?",
		options: [
			"Rien, tant qu'elle n'est pas utilisée",
			"Forfait de la map",
			"Simple avertissement"
		],
		answer: 1,
		why: "Apparaître avec la compétence compte comme l'utiliser, même sans activation. Exception : le coéquipier qui a la même est déjà mort et en train d'en changer."
	},
	{
		q: "Quelles séries de points sont autorisées ?",
		options: [
			"UAV, Shock RC et drone traqueur",
			"Drone traqueur, missile prédateur et IEM",
			"Uniquement l'IEM"
		],
		answer: 1,
		why: "Liste fermée. Tout le reste est interdit, même si ce n'est pas écrit nom par nom."
	},
	{
		q: "Les jokers (wildcards) ?",
		options: [
			"Un seul autorisé",
			"Tous interdits",
			"Seulement les jokers verts"
		],
		answer: 1,
		why: "Tous les jokers sont restreints, sur tous les matchs au-delà du Team Qualifier en jeu."
	},
	{
		q: "Un fusil ajouté au jeu il y a 10 jours, absent de la liste ?",
		options: [
			"Autorisé tout de suite",
			"Interdit pendant 21 jours",
			"Interdit pour toute la saison"
		],
		answer: 1,
		why: "Armes, compétences, atouts, utilitaires, séries et accessoires neufs : 21 jours après la sortie internationale. L'admin peut raccourcir ou rallonger. En cas de doute, on demande avant de jouer."
	},
	{
		q: "Pool de rôles d'armes, par équipe ?",
		options: [
			"3 AR, 3 SMG, 1 LMG, 1 pompe, 1 marksman, 1 sniper",
			"2 de chaque classe",
			"5 AR et 5 SMG"
		],
		answer: 0,
		why: "Cinq joueurs, deux rôles différents chacun : les 10 places du pool sont toutes utilisées. Les équipes ne partagent pas le pool."
	},
	{
		q: "En Best of 5, qui ban en premier sur Point stratégique ?",
		options: [
			"Équipe 1",
			"Équipe 2",
			"La tête de série, sans rôle"
		],
		answer: 0,
		why: "La tête de série choisit d'être Équipe 1 ou 2 avant le veto. Ensuite l'Équipe 1 ouvre les bans HP."
	}
];
function pair$1(fr, en) {
	return fr.toLowerCase() === en.toLowerCase() ? fr : `${fr} · ${en}`;
}
var HITS = [
	...WEAPON_BANS.flatMap((g) => g.items.map((name) => ({
		tone: "ban",
		title: name,
		where: `Arme interdite · ${g.group}`
	}))),
	...ATTACHMENT_BANS.flatMap((g) => g.items.map((name) => ({
		tone: "ban",
		title: `${g.weapon} — ${name}`,
		where: "Accessoire interdit"
	}))),
	...ATTACHMENT_GLOBALS.map((title) => ({
		tone: "ban",
		title,
		where: "Règle globale d'accessoire"
	})),
	...LETHALS.map((i) => ({
		tone: "ban",
		title: pair$1(i.fr, i.en),
		where: "Létal interdit"
	})),
	...TACTICALS.map((i) => ({
		tone: "ban",
		title: pair$1(i.fr, i.en),
		where: "Tactique interdit"
	})),
	...PERK_BANS.flatMap((g) => g.items.map((i) => ({
		tone: "ban",
		title: pair$1(i.fr, i.en),
		where: g.column
	}))),
	{
		tone: "ban",
		title: "Tous les jokers",
		where: "Wildcards · liste fermée, rien n'est autorisé"
	},
	...ALLOWED_SKILLS.map((i) => ({
		tone: "ok",
		title: pair$1(i.fr, i.en),
		where: "Compétence autorisée · tout le reste est interdit"
	})),
	...ALLOWED_STREAKS.map((i) => ({
		tone: "ok",
		title: pair$1(i.fr, i.en),
		where: "Série de points autorisée · tout le reste est interdit"
	})),
	...OPERATOR_SKINS.map((name) => ({
		tone: "ban",
		title: name,
		where: "Skin d'opérateur interdit"
	})),
	{
		tone: "ban",
		title: "Toutes les emotes",
		where: "Interdites à tout moment du match"
	},
	{
		tone: "ban",
		title: "Tous les skins légendaires de létal et de tactique",
		where: "Cosmétique"
	},
	...MAPS.map((m) => ({
		tone: "info",
		title: m.name,
		where: `Map · ${MODES[m.mode].fr} · ${m.file}`
	})),
	{
		tone: "info",
		title: "Silencieux",
		where: "Non restreints depuis le vote 2026"
	},
	{
		tone: "info",
		title: "SKS",
		where: "L'arme est autorisée. Tactical Foregrip A et Granulated Grip Tape sont interdits."
	}
];
function searchRules(query) {
	const n = query.trim().toLowerCase();
	if (n.length < 2) return [];
	return HITS.filter((h) => `${h.title} ${h.where}`.toLowerCase().includes(n)).slice(0, 24);
}
function stepSentence(step) {
	const mode = MODES[step.pool].fr;
	const who = `Équipe ${step.team}`;
	if (step.action === "ban") return `${who} ban une map de ${mode}.`;
	if (step.action === "pick" && step.slot && step.side) return `${who} pick la map ${step.slot} en ${mode}. L'équipe ${step.side} choisit le côté.`;
	if (step.action === "left" && step.slot && step.side) return `La map restante de ${mode} est la map ${step.slot}. L'équipe ${step.side} choisit le côté.`;
	return mode;
}
function QuizPanel() {
	const [checks, setChecks] = (0, import_react.useState)([]);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem("briefing-checks");
			if (raw) {
				const parsed = JSON.parse(raw);
				if (Array.isArray(parsed)) setChecks(parsed.filter((x) => typeof x === "string"));
			}
		} catch {}
	}, []);
	function toggle(id) {
		setChecks((prev) => {
			const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
			localStorage.setItem("briefing-checks", JSON.stringify(next));
			return next;
		});
	}
	const question = QUIZ[index];
	function choose(option) {
		if (picked !== null || !question) return;
		setPicked(option);
		if (option === question.answer) setScore((s) => s + 1);
	}
	function next() {
		if (index + 1 >= QUIZ.length) {
			setDone(true);
			return;
		}
		setIndex((n) => n + 1);
		setPicked(null);
	}
	function restart() {
		setIndex(0);
		setPicked(null);
		setScore(0);
		setDone(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass rounded-2xl p-4 md:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-orange",
					children: "Avant le lobby"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-3xl uppercase",
					children: "Check-list"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-2",
					children: CHECKS.map((item) => {
						const on = checks.includes(item.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toggle(item.id),
							className: `flex min-h-11 w-full items-start gap-3 rounded-xl px-3 py-2 text-left text-sm ${on ? "glass-ok text-fg" : "border border-line text-fg"}`,
							"aria-pressed": on,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `mt-0.5 font-mono text-xs ${on ? "text-ok" : "text-muted"}`,
								children: on ? "OK" : "—"
							}), item.t]
						}) }, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 font-mono text-xs text-muted",
					children: [
						checks.length,
						"/",
						CHECKS.length,
						" cochées sur cet appareil"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass rounded-2xl p-4 md:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-orange",
					children: [
						"Question ",
						done ? QUIZ.length : index + 1,
						"/",
						QUIZ.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-3xl uppercase",
					children: "Révision"
				}),
				done || !question ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-6xl uppercase leading-none text-orange",
							children: [
								score,
								"/",
								QUIZ.length
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: score === QUIZ.length ? "Série propre. Vous pouvez lancer le privé." : "Relis les sections en orange et en rouge, puis relance."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: restart,
							className: "mt-4 min-h-11 rounded-xl bg-orange px-4 font-display text-lg uppercase text-bg",
							children: "Recommencer"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-fg",
							children: question.q
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid gap-2",
							children: question.options.map((option, i) => {
								const show = picked !== null;
								const correct = i === question.answer;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: show,
									onClick: () => choose(i),
									className: `min-h-11 rounded-xl px-3 py-2 text-left text-sm ${show && correct ? "glass-ok text-fg" : show && i === picked ? "glass-ban text-fg" : "border border-line text-fg"}`,
									children: option
								}, option);
							})
						}),
						picked !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: question.why
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: next,
								className: "mt-3 min-h-11 rounded-xl bg-orange px-4 font-display text-lg uppercase text-bg",
								children: index + 1 === QUIZ.length ? "Voir le score" : "Suite"
							})]
						})
					]
				})
			]
		})]
	});
}
var empty = () => [
	[],
	[],
	[],
	[],
	[]
];
function RoleBoard() {
	const [rows, setRows] = (0, import_react.useState)(empty);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const tally = (id) => rows.flat().filter((r) => r === id).length;
	function toggle(player, role) {
		setCopied(false);
		setRows((prev) => {
			const next = prev.map((r) => [...r]);
			const cur = next[player];
			if (cur.includes(role)) {
				next[player] = cur.filter((r) => r !== role);
				return next;
			}
			if (cur.length >= 2) return prev;
			const cap = ROLES.find((r) => r.id === role)?.count ?? 0;
			if (prev.flat().filter((r) => r === role).length >= cap) return prev;
			next[player] = [...cur, role];
			return next;
		});
	}
	const ready = rows.every((r) => r.length === 2) && ROLES.every((r) => tally(r.id) === r.count);
	const sheet = rows.map((roles, i) => {
		const names = roles.map((id) => ROLES.find((r) => r.id === id)?.short).join(" / ");
		return `Joueur ${i + 1} - ${names || "..."}`;
	}).join("\n");
	async function copySheet() {
		try {
			await navigator.clipboard.writeText(sheet);
			setCopied(true);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: ROLES.map((role) => {
					const left = role.count - tally(role.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "glass rounded-full px-3 py-1 font-mono text-xs text-fg",
						children: [
							role.short,
							" ",
							tally(role.id),
							"/",
							role.count,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [" · ", left === 0 ? "complet" : `${left} restant`]
							})
						]
					}, role.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: rows.map((roles, player) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-3 md:p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-2xl uppercase",
							children: ["Joueur ", player + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs text-muted",
							children: [roles.length, "/2"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: ROLES.map((role) => {
							const on = roles.includes(role.id);
							const blocked = !on && (roles.length >= 2 || tally(role.id) >= role.count);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: blocked,
								onClick: () => toggle(player, role.id),
								className: `min-h-11 rounded-xl px-3 py-2 text-left ${on ? "bg-orange text-bg" : blocked ? "border border-line text-muted" : "glass text-fg"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-lg uppercase leading-none",
									children: role.short
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs",
									children: role.fr
								})]
							}, role.id);
						})
					})]
				}, player))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass rounded-2xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-widest text-orange",
						children: ready ? "Déclaration prête" : "Il faut deux rôles différents par joueur, et tout le pool"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-3 whitespace-pre-wrap font-mono text-sm text-fg",
						children: sheet
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: copySheet,
							className: "min-h-11 rounded-xl bg-orange px-4 font-display text-lg uppercase text-bg",
							children: copied ? "Copié" : "Copier pour Discord"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setRows(empty());
								setCopied(false);
							},
							className: "glass min-h-11 rounded-xl px-4 text-sm",
							children: "Vider"
						})]
					})
				]
			})
		]
	});
}
var MODE_ORDER$1 = [
	"hardpoint",
	"snd",
	"control"
];
function VetoSim() {
	const [formatId, setFormatId] = (0, import_react.useState)("bo5");
	const format = FORMATS.find((f) => f.id === formatId) ?? FORMATS[0];
	const [step, setStep] = (0, import_react.useState)(0);
	const [marks, setMarks] = (0, import_react.useState)({});
	const current = format.steps[step];
	const done = step >= format.steps.length;
	const picks = (0, import_react.useMemo)(() => Object.entries(marks).filter((entry) => entry[1].kind === "pick").map(([id, mark]) => ({
		map: MAPS.find((m) => m.id === id),
		mark
	})).filter((row) => row.map).sort((a, b) => a.mark.slot - b.mark.slot), [marks]);
	function reset(next = formatId) {
		setFormatId(next);
		setStep(0);
		setMarks({});
	}
	function advance(from, draft) {
		let cursor = from;
		const steps = format.steps;
		while (steps[cursor]?.action === "left") {
			const left = steps[cursor];
			const remain = MAPS.filter((m) => m.mode === left.pool && !draft[m.id]);
			if (remain.length === 1 && left.slot && left.side) draft[remain[0].id] = {
				kind: "pick",
				team: left.team,
				slot: left.slot,
				side: left.side
			};
			cursor += 1;
		}
		return cursor;
	}
	function choose(id) {
		if (!current || current.action === "left" || done) return;
		const map = MAPS.find((m) => m.id === id);
		if (!map || map.mode !== current.pool || marks[id]) return;
		const draft = { ...marks };
		if (current.action === "ban") draft[id] = {
			kind: "ban",
			team: current.team
		};
		else if (current.slot && current.side) draft[id] = {
			kind: "pick",
			team: current.team,
			slot: current.slot,
			side: current.side
		};
		const cursor = advance(step + 1, draft);
		setMarks(draft);
		setStep(cursor);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[220px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2 overflow-x-auto lg:flex-col",
			children: [FORMATS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => reset(f.id),
				className: `min-h-11 shrink-0 rounded-xl px-4 text-left font-display text-lg uppercase tracking-wide ${f.id === formatId ? "bg-orange text-bg" : "glass text-fg"}`,
				children: f.label
			}, f.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => reset(),
				className: "glass inline-flex min-h-11 items-center gap-2 rounded-xl px-4 text-sm text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
					className: "size-4",
					"aria-hidden": true
				}), "Recommencer"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass rounded-2xl p-4 md:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-orange",
					children: format.orderNote
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-3xl text-sm text-muted",
					children: format.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 flex flex-wrap gap-2",
					children: format.order.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-full border border-fg/15 px-3 py-1 font-mono text-xs text-fg",
						children: [
							i + 1,
							" ",
							label
						]
					}, `${label}-${i}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 font-display text-2xl uppercase leading-tight text-fg md:text-3xl",
					children: done ? "Série verrouillée." : stepSentence(current)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "La tête de série choisit d'être l'équipe 1 ou 2 avant le premier ban. Une map prise ou bannie ne revient pas. Le veto se fait sur le salon Discord de l'administration."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-4 md:grid-cols-3",
					children: MODE_ORDER$1.map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-2 font-mono text-xs uppercase tracking-widest text-muted",
						children: [
							MODES[mode].code,
							" · ",
							MODES[mode].fr
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2",
						children: MAPS.filter((m) => m.mode === mode).map((m) => {
							const mark = marks[m.id];
							const live = !done && current && current.action !== "left" && current.pool === mode && !mark;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: !live,
								onClick: () => choose(m.id),
								className: `min-h-11 rounded-xl px-3 py-2 text-left ${mark?.kind === "ban" ? "glass-ban text-ban" : mark?.kind === "pick" ? "bg-orange text-bg" : live ? "glass text-fg ring-1 ring-orange" : "glass text-muted"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-xl uppercase leading-none",
									children: m.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block font-mono text-xs",
									children: mark?.kind === "ban" ? `Ban · équipe ${mark.team}` : mark?.kind === "pick" ? `Map ${mark.slot} · côté équipe ${mark.side}` : live ? "Choisir" : "Hors de ce tour"
								})]
							}, m.id);
						})
					})] }, mode))
				}),
				picks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-5 grid gap-2 sm:grid-cols-2",
					children: picks.map(({ map, mark }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-fg/10 px-3 py-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-orange",
								children: ["Map ", mark.slot]
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg uppercase",
								children: map.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-muted",
								children: [
									"Pick équipe ",
									mark.team,
									" · côté équipe ",
									mark.side
								]
							})
						]
					}, map.id))
				})
			]
		})]
	});
}
var NAV = [
	{
		id: "briefing",
		label: "Briefing"
	},
	{
		id: "reglages",
		label: "Réglages"
	},
	{
		id: "maps",
		label: "Maps"
	},
	{
		id: "veto",
		label: "Veto"
	},
	{
		id: "classes",
		label: "Classes"
	},
	{
		id: "roles",
		label: "Rôles"
	},
	{
		id: "lobby",
		label: "Lobby"
	},
	{
		id: "revision",
		label: "Révision"
	}
];
var MODE_ORDER = [
	"hardpoint",
	"snd",
	"control"
];
function Band({ id, index, kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		id,
		className: "scroll-mt-40 mb-5 flex items-end justify-between gap-4 border-b border-line pb-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-widest text-orange",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-4xl uppercase leading-none text-fg md:text-6xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-sm text-muted md:text-base",
				children: lede
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-5xl leading-none text-fg/10 md:text-7xl",
			"aria-hidden": true,
			children: index
		})]
	});
}
function pair(fr, en) {
	return fr.toLowerCase() === en.toLowerCase() ? fr : `${fr} · ${en}`;
}
function Guide() {
	const [clan, setClan] = (0, import_react.useState)("Clan");
	const [query, setQuery] = (0, import_react.useState)("");
	const [pdfState, setPdfState] = (0, import_react.useState)("idle");
	const hits = searchRules(query);
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem("briefing-clan");
		if (saved) setClan(saved);
	}, []);
	function onClan(value) {
		setClan(value);
		localStorage.setItem("briefing-clan", value);
	}
	async function download() {
		setPdfState("busy");
		try {
			const { downloadBriefingPdf } = await import("./build-pdf-C1bLxCP2.mjs");
			await downloadBriefingPdf(clan.trim() || "Clan");
			setPdfState("done");
		} catch {
			setPdfState("error");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 pb-24 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-20 -mx-4 mb-6 border-b border-line bg-bg/80 px-4 backdrop-blur-xl md:-mx-6 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#briefing",
						className: "font-display text-2xl uppercase leading-none text-fg",
						children: ["Briefing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-orange",
							children: "CODM"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: download,
						disabled: pdfState === "busy",
						className: "inline-flex min-h-11 items-center gap-2 rounded-xl bg-orange px-4 font-display text-lg uppercase text-bg disabled:opacity-60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": true
						}), pdfState === "busy" ? "PDF…" : pdfState === "done" ? "PDF prêt" : "Télécharger le PDF"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex gap-2 overflow-x-auto pb-3",
					"aria-label": "Sections",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${item.id}`,
						className: "glass inline-flex min-h-11 shrink-0 items-center rounded-full px-4 font-display text-lg uppercase text-fg",
						children: item.label
					}, item.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "briefing",
				className: "scroll-mt-40 grid gap-6 pb-12 md:grid-cols-[1.4fr_0.8fr] md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-widest text-orange",
						children: "Saison 2026 · manuel de clan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-2 font-display text-6xl uppercase leading-none text-fg md:text-8xl",
						children: [
							"Briefing",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Esports"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-base text-muted",
						children: "Réglages, maps, veto, classes et rôles. À relire avant le privé. Source : Esports Settings officiels, changelog du 24 septembre 2026. En cas de doute, l'administration du tournoi tranche."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-6 block max-w-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs uppercase tracking-widest text-muted",
							children: "Nom du clan sur le PDF"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: clan,
							onChange: (event) => onClan(event.target.value),
							maxLength: 32,
							className: "mt-1 w-full border-b border-fg/25 bg-transparent py-2 font-display text-3xl uppercase text-fg outline-none",
							"aria-label": "Nom du clan"
						})]
					}),
					pdfState === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-ban",
						children: "Le PDF n'a pas pu être généré. Réessaie dans un instant."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2",
					children: [
						["13", "maps"],
						["3", "modes"],
						["0", "joker"]
					].map(([n, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-4xl leading-none text-orange md:text-5xl",
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-mono text-xs uppercase tracking-widest text-muted",
							children: label
						})]
					}, label))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hazard mb-12 rounded-2xl border border-ban/40 p-4 md:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-ban",
					children: "Ce qui fait perdre la map"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3 md:grid-cols-3",
					children: [
						["Compétence en double", "Deux joueurs vivants avec la même compétence : forfait de la map, même si personne ne l'active."],
						["Classe interdite", "Arme, accessoire, atout, utilitaire, série ou joker hors règles : forfait de la partie, du match, ou disqualification."],
						["Moins de 21 jours", "Tout contenu fonctionnel neuf est interdit 21 jours après sa sortie internationale, sauf décision de l'admin."]
					].map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "glass-ban rounded-2xl p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl uppercase text-fg",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-fg",
							children: body
						})]
					}, title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Band, {
					id: "reglages",
					index: "01",
					kicker: "Salle privée",
					title: "Réglages",
					lede: "À recopier dans Match Settings. Le mot de passe et les spectateurs sont non applicables. Les invitations restent ouvertes."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 md:grid-cols-3",
					children: MODE_ORDER.map((mode) => {
						const data = MODES[mode];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "glass flex flex-col rounded-2xl p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs uppercase tracking-widest text-orange",
									children: data.code
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-3xl uppercase leading-none",
									children: data.fr
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: data.en
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-4 grid gap-2",
									children: data.settings.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between gap-3 border-b border-line pb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-sm text-muted",
											children: row.k
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-display text-xl uppercase text-fg",
											children: row.v
										})]
									}, row.k))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted",
									children: data.note
								})
							]
						}, mode);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Band, {
						id: "maps",
						index: "02",
						kicker: "Pool après le Stage 2",
						title: "Maps",
						lede: "Règle annuelle Keep 7, Change 6 : 7 maps gardées, 3 qui changent de mode, 3 nouvelles. L'admin peut ajuster en cours d'année. Ce pool vaut après le Stage 2, jusqu'aux finales."
					}),
					MODE_ORDER.map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mb-3 font-display text-2xl uppercase text-fg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-orange",
									children: MODES[mode].code
								}),
								" ",
								MODES[mode].fr
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
							children: MAPS.filter((m) => m.mode === mode).map((map) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "glass overflow-hidden rounded-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: `/maps/${map.file}`,
									alt: `Plan de la map ${map.name}`,
									className: "aspect-video w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "space-y-1 p-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-display text-2xl uppercase leading-none",
												children: map.name
											}), map.provisional && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-xs uppercase text-orange",
												children: "Provisoire"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted",
											children: map.line
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-xs text-fg",
											children: mapFilePath(map.file)
										})
									]
								})]
							}, map.id))
						})]
					}, mode)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs uppercase tracking-widest text-orange",
								children: "Fichiers images"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-muted",
								children: [
									"Le registre qui relie chaque map à son image est ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-fg",
										children: "src/data/maps.ts"
									}),
									". Les visuels sont dans ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-fg",
										children: [MAPS_FOLDER, "/"]
									}),
									". Pour en changer un, remplace le fichier en gardant le même nom."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 grid gap-1 font-mono text-xs text-fg sm:grid-cols-2",
								children: MAPS.map((map) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									map.name,
									" — ",
									map.file
								] }, map.id))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Band, {
						id: "veto",
						index: "03",
						kicker: "Picks et bans",
						title: "Veto",
						lede: "Entraîne le script avant le Discord. L'hôte, tête de série la plus haute, lance ensuite la bonne map dans le bon mode."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 grid gap-2 sm:grid-cols-5",
						children: BO5_ORDER.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass rounded-2xl p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl leading-none text-orange",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-fg",
								children: label
							})]
						}, `${label}-${i}`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VetoSim, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Band, {
						id: "classes",
						index: "04",
						kicker: "Deux lectures, ne les inverse pas",
						title: "Classes",
						lede: "Sur les armes, accessoires, utilitaires et atouts, la liste veut dire interdit. Sur les compétences et les séries de points, la liste veut dire seuls autorisés."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "glass mb-4 flex min-h-11 items-center gap-3 rounded-2xl px-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "size-4 text-orange",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (event) => setQuery(event.target.value),
							placeholder: "Chercher une arme, un atout, une map…",
							className: "w-full bg-transparent py-3 text-sm text-fg outline-none placeholder:text-muted",
							"aria-label": "Rechercher une règle"
						})]
					}),
					query.trim().length >= 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mb-4 grid gap-2",
						children: [hits.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm text-muted",
							children: "Aucun résultat. S'il n'est pas listé, demande à l'admin avant de le jouer."
						}), hits.map((hit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: `rounded-xl px-3 py-2 ${hit.tone === "ban" ? "glass-ban" : hit.tone === "ok" ? "glass-ok" : "glass"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl uppercase leading-none",
								children: hit.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: `mt-1 font-mono text-xs ${hit.tone === "ban" ? "text-ban" : hit.tone === "ok" ? "text-ok" : "text-muted"}`,
								children: [
									hit.tone === "ban" ? "Interdit" : hit.tone === "ok" ? "Autorisé" : "Repère",
									" · ",
									hit.where
								]
							})]
						}, `${hit.where}-${hit.title}`))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "glass-ban rounded-2xl p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-3xl uppercase",
									children: "Armes interdites"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 grid gap-3",
									children: WEAPON_BANS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs uppercase tracking-widest text-ban",
										children: group.group
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-fg",
										children: group.items.join(" · ")
									})] }, group.group))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-fg",
									children: "Le SKS n'est pas interdit en tant qu'arme. Les silencieux ne sont pas restreints. Le .50 GS, lui, est interdit en entier."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "glass-ok rounded-2xl p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-3xl uppercase",
									children: "Seuls autorisés"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-mono text-xs uppercase tracking-widest text-ok",
									children: "Compétences d'opérateur"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 grid gap-1 text-sm",
									children: ALLOWED_SKILLS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: pair(item.fr, item.en) }, item.en))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted",
									children: "Le document officiel écrit « Annihalator » pour Annihilator."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-mono text-xs uppercase tracking-widest text-ok",
									children: "Séries de points"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 grid gap-1 text-sm",
									children: ALLOWED_STREAKS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: pair(item.fr, item.en) }, item.en))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm",
									children: "Une seule compétence par équipe en même temps. On peut changer en cours de map si plus personne de vivant ne porte déjà la nouvelle. Un mort qui change ne compte pas comme doublon au moment du spawn. Sanction : forfait de la map."
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "glass mt-3 rounded-2xl p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl uppercase",
								children: "Accessoires interdits"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 grid gap-2 text-sm md:grid-cols-2",
								children: ATTACHMENT_GLOBALS.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "glass-ban rounded-xl px-3 py-2",
									children: line
								}, line))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
								children: ATTACHMENT_BANS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-line pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-xl uppercase",
										children: group.weapon
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-1 text-sm text-muted",
										children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
									})]
								}, group.weapon))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-muted",
								children: "Les noms d'accessoires restent en anglais : c'est le libellé officiel, celui qu'on cherche en jeu. « Barrell » sur le RAM-7 est l'orthographe du document."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-3 lg:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass rounded-2xl p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl uppercase",
									children: "Létaux interdits"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 grid gap-1 text-sm",
									children: LETHALS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: pair(item.fr, item.en) }, item.en))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass rounded-2xl p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl uppercase",
									children: "Tactiques interdits"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 grid gap-1 text-sm",
									children: TACTICALS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: pair(item.fr, item.en) }, item.en))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "glass rounded-2xl p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl uppercase",
										children: "Atouts interdits"
									}),
									PERK_BANS.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-xs uppercase tracking-widest text-ban",
											children: column.column
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-1 text-sm",
											children: column.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: pair(item.fr, item.en) }, item.en))
										})]
									}, column.column)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted",
										children: "Un atout absent de ces colonnes est autorisé, hors règle des 21 jours."
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "glass-ban mt-3 rounded-2xl p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl uppercase",
								children: "Cosmétiques"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm",
								children: "Summer Split, Fall Split et finales du World Championship 2026. Pas de délai de 21 jours sur le cosmétique : le staff annonce ce qui tombe à chaque étape."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-3 grid gap-2 text-sm md:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tous les skins légendaires de létal et de tactique." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Toutes les emotes, à n'importe quel moment du match." }),
									OPERATOR_SKINS.map((skin) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: skin }, skin))
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Band, {
					id: "roles",
					index: "05",
					kicker: "Deux rôles, jamais le même deux fois",
					title: "Rôles",
					lede: "Chaque équipe a son propre pool : 3 AR, 3 SMG, 1 LMG, 1 pompe, 1 marksman, 1 sniper. Ça ne concerne ni l'arme secondaire, ni une arme ramassée. Si vous tardez, les rôles de la série d'avant s'appliquent."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleBoard, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Band, {
					id: "lobby",
					index: "06",
					kicker: "Créer le privé",
					title: "Lobby",
					lede: "Cinq gestes, dans l'ordre. L'hôte est la tête de série la plus haute, et il sélectionne la map votée."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid gap-3 md:grid-cols-5",
					children: LOBBY_STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "glass rounded-2xl p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-4xl leading-none text-orange",
								children: i + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-xl uppercase leading-tight",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: step.body
							})
						]
					}, step.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Band, {
						id: "revision",
						index: "07",
						kicker: "Avant de lancer",
						title: "Révision",
						lede: "Coche le rituel, puis passe les dix questions. Le score reste sur cet écran, la check-list reste sur l'appareil."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizPanel, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-3 font-display text-3xl uppercase",
								children: "Journal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "grid gap-3",
								children: CHANGELOG.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "glass rounded-2xl p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs uppercase tracking-widest text-orange",
										children: entry.date
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-2 grid gap-1 text-sm",
										children: entry.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
									})]
								}, entry.date))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-sm text-muted",
								children: [
									"Page officielle :",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "text-orange underline",
										href: "https://www.callofduty.com/mobile/esports/esports-settings",
										target: "_blank",
										rel: "noreferrer",
										children: "Esports Settings"
									}),
									". Les entrées plus anciennes de 2024 sont résumées dans les listes actuelles."
								]
							})
						]
					})
				]
			})
		]
	});
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => SplitComponent });
var SplitComponent = Guide;
//#endregion
export { MAPS as _, ATTACHMENT_GLOBALS as a, FORMATS as c, MODES as d, OPERATOR_SKINS as f, stepSentence as g, WEAPON_BANS as h, ATTACHMENT_BANS as i, LETHALS as l, TACTICALS as m, ALLOWED_SKILLS as n, BO5_ORDER as o, PERK_BANS as p, ALLOWED_STREAKS as r, CHANGELOG as s, routes_exports as t, LOBBY_STEPS as u, MAPS_FOLDER as v };
