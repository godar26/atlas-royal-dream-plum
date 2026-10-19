export type ModeId = "hardpoint" | "snd" | "control";

/** Dossier des visuels. Remplace le fichier en gardant le même nom. */
export const MAPS_FOLDER = "public/maps";

/**
 * Registre des maps. C'est le fichier à éditer si un visuel change de nom.
 * Les images elles-mêmes vivent dans public/maps/.
 */
export type MapDef = {
  id: string;
  name: string;
  mode: ModeId;
  file: string;
  provisional?: boolean;
  line: string;
};

export const MAPS: MapDef[] = [
  {
    id: "summit",
    name: "Summit",
    mode: "hardpoint",
    file: "summit.jpg",
    line: "Station d'altitude, neige et relais.",
  },
  {
    id: "hacienda",
    name: "Hacienda",
    mode: "hardpoint",
    file: "hacienda.jpg",
    line: "Villa en pierre, cour et fontaine.",
  },
  {
    id: "combine",
    name: "Combine",
    mode: "hardpoint",
    file: "combine.jpg",
    line: "Entrepôt, passerelles et caisses.",
  },
  {
    id: "takeoff",
    name: "Takeoff",
    mode: "hardpoint",
    file: "takeoff.jpg",
    line: "Terminal, passerelles et pistes.",
  },
  {
    id: "arsenal",
    name: "Arsenal",
    mode: "hardpoint",
    file: "arsenal.jpg",
    line: "Complexe militaire fortifié.",
  },
  {
    id: "tunisia",
    name: "Tunisia",
    mode: "snd",
    file: "tunisia.jpg",
    line: "Médina, toits plats et ruelles.",
  },
  {
    id: "firing-range",
    name: "Firing Range",
    mode: "snd",
    file: "firing-range.jpg",
    line: "Pas de tir, bermes et conteneurs.",
  },
  {
    id: "coastal",
    name: "Coastal",
    mode: "snd",
    file: "coastal.jpg",
    line: "Village de falaise et quais.",
  },
  {
    id: "slums",
    name: "Slums",
    mode: "snd",
    file: "slums.jpg",
    line: "Bidonville, escaliers et toits.",
  },
  {
    id: "meltdown",
    name: "Meltdown",
    mode: "snd",
    file: "meltdown.jpg",
    line: "Centrale, tours et tuyauterie.",
  },
  {
    id: "raid",
    name: "Raid",
    mode: "control",
    file: "raid.jpg",
    provisional: true,
    line: "Villa de nuit. Plan provisoire : remplace le fichier.",
  },
  {
    id: "standoff",
    name: "Standoff",
    mode: "control",
    file: "standoff.jpg",
    provisional: true,
    line: "Ville en trois axes. Plan provisoire : remplace le fichier.",
  },
  {
    id: "crossroads-strike",
    name: "Crossroads Strike",
    mode: "control",
    file: "crossroads-strike.jpg",
    provisional: true,
    line: "Carrefour et pont. Plan provisoire : remplace le fichier.",
  },
];

export function mapFilePath(file: string) {
  return `${MAPS_FOLDER}/${file}`;
}
