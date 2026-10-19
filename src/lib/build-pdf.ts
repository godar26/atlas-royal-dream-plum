import { jsPDF } from "jspdf";
import { MAPS, MAPS_FOLDER, type ModeId } from "@/data/maps";
import {
  ALLOWED_SKILLS,
  ALLOWED_STREAKS,
  ATTACHMENT_BANS,
  ATTACHMENT_GLOBALS,
  BO5_ORDER,
  CHANGELOG,
  FORMATS,
  LETHALS,
  LOBBY_STEPS,
  MODES,
  OPERATOR_SKINS,
  PERK_BANS,
  TACTICALS,
  WEAPON_BANS,
  stepSentence,
} from "@/data/esports";

const BG = [7, 8, 12] as const;
const BONE = [243, 239, 230] as const;
const MUTED = [156, 150, 140] as const;
const ORANGE = [255, 90, 31] as const;
const BAN = [255, 77, 94] as const;
const OK = [62, 224, 143] as const;

function clean(value: string) {
  return value
    .replace(/œ/g, "oe")
    .replace(/Œ/g, "OE")
    .replace(/[’‘]/g, "'")
    .replace(/[—–]/g, "-")
    .replace(/[«»]/g, '"')
    .replace(/…/g, "...");
}

class Sheet {
  doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
  y = 18;
  clan: string;

  constructor(clan: string) {
    this.clan = clan;
    this.paint();
  }

  paint() {
    this.doc.setFillColor(BG[0], BG[1], BG[2]);
    this.doc.rect(0, 0, 210, 297, "F");
    this.doc.setFillColor(ORANGE[0], ORANGE[1], ORANGE[2]);
    this.doc.rect(0, 0, 210, 2.2, "F");
  }

  page() {
    this.doc.addPage();
    this.paint();
    this.y = 14;
  }

  need(h: number) {
    if (this.y + h > 280) this.page();
  }

  heading(title: string) {
    this.need(14);
    this.doc.setFont("helvetica", "bold");
    this.doc.setFontSize(16);
    this.doc.setTextColor(ORANGE[0], ORANGE[1], ORANGE[2]);
    this.doc.text(clean(title).toUpperCase(), 12, this.y);
    this.y += 7;
  }

  paragraph(text: string, color: readonly [number, number, number] = BONE) {
    this.doc.setFont("helvetica", "normal");
    this.doc.setFontSize(10);
    this.doc.setTextColor(color[0], color[1], color[2]);
    const lines = this.doc.splitTextToSize(clean(text), 186) as string[];
    this.need(lines.length * 4.4 + 1.5);
    this.doc.text(lines, 12, this.y);
    this.y += lines.length * 4.4 + 1.5;
  }

  bullet(text: string, color: readonly [number, number, number] = BONE) {
    this.doc.setFont("helvetica", "normal");
    this.doc.setFontSize(9.5);
    this.doc.setTextColor(color[0], color[1], color[2]);
    const lines = this.doc.splitTextToSize(clean(text), 178) as string[];
    this.need(lines.length * 4.2 + 0.8);
    this.doc.text(lines, 16, this.y);
    this.doc.setFillColor(color[0], color[1], color[2]);
    this.doc.circle(13.2, this.y - 1.1, 0.7, "F");
    this.y += lines.length * 4.2 + 0.8;
  }

  cover() {
    this.doc.setFont("helvetica", "bold");
    this.doc.setFontSize(12);
    this.doc.setTextColor(ORANGE[0], ORANGE[1], ORANGE[2]);
    this.doc.text("CALL OF DUTY: MOBILE  ·  ESPORTS SETTINGS 2026", 12, 28);
    this.doc.setFontSize(36);
    this.doc.setTextColor(BONE[0], BONE[1], BONE[2]);
    this.doc.text("BRIEFING", 12, 52);
    this.doc.text("ESPORTS", 12, 66);
    this.doc.setFontSize(18);
    this.doc.setTextColor(ORANGE[0], ORANGE[1], ORANGE[2]);
    this.doc.text(clean(this.clan).toUpperCase().slice(0, 32), 12, 80);
    this.doc.setFont("helvetica", "normal");
    this.doc.setFontSize(11);
    this.doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
    const intro = this.doc.splitTextToSize(
      clean(
        "Manuel de revision du clan. Reglages de salle, pool de maps, veto, classes interdites, competences autorisees et roles d'armes. Changelog officiel au 24 septembre 2026. En cas de doute, la page officielle et l'administration du tournoi font foi.",
      ),
      170,
    ) as string[];
    this.doc.text(intro, 12, 96);
    this.doc.setFontSize(10);
    this.doc.setTextColor(BONE[0], BONE[1], BONE[2]);
    this.doc.text(`Images des maps : ${MAPS_FOLDER}/`, 12, 130);
    this.doc.text("Registre : src/data/maps.ts", 12, 136);
    this.page();
  }

  footer() {
    const total = this.doc.getNumberOfPages();
    for (let i = 1; i <= total; i += 1) {
      this.doc.setPage(i);
      this.doc.setFont("helvetica", "normal");
      this.doc.setFontSize(8);
      this.doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
      this.doc.text(clean(`${this.clan}  ·  Briefing Esports CODM`), 12, 290);
      this.doc.text(`${i} / ${total}`, 198, 290, { align: "right" });
    }
  }

  bytes() {
    return new Uint8Array(this.doc.output("arraybuffer"));
  }
}

async function toDataUrl(file: string, loadImage: (file: string) => Promise<string | null>) {
  return loadImage(file);
}

export async function buildBriefingPdf(opts: {
  clan: string;
  loadImage: (file: string) => Promise<string | null>;
}) {
  const sheet = new Sheet(opts.clan.trim() || "Clan");
  sheet.cover();

  sheet.heading("Ce qui fait perdre la map");
  sheet.bullet("Competence en double : forfait de la map, meme sans activation. Exception si le coequipier est deja mort et change de competence.", BAN);
  sheet.bullet("Equipement interdit : forfait de la partie, du match, ou disqualification.", BAN);
  sheet.bullet("Contenu fonctionnel de moins de 21 jours : interdit, sauf decision de l'admin. Les cosmetiques n'ont pas ce delai.", BAN);
  sheet.paragraph("Les listes d'armes, accessoires, utilitaires et atouts sont des interdits. Les listes de competences et de series de points sont des listes fermees : tout le reste est interdit.");

  sheet.heading("Reglages de salle");
  (Object.keys(MODES) as ModeId[]).forEach((mode) => {
    const data = MODES[mode];
    sheet.paragraph(`${data.fr} (${data.en}) - ${data.note}`, ORANGE);
    data.settings.forEach((row) => sheet.bullet(`${row.k} : ${row.v}`));
  });

  sheet.heading("Pool de maps");
  sheet.paragraph("Apres le Stage 2 et jusqu'aux finales. Regle Keep 7, Change 6. Raid, Standoff et Crossroads Strike sont des planches provisoires : remplace le jpg du meme nom.");
  for (const mode of ["hardpoint", "snd", "control"] as ModeId[]) {
    sheet.paragraph(MODES[mode].fr, ORANGE);
    const group = MAPS.filter((map) => map.mode === mode);
    for (let i = 0; i < group.length; i += 2) {
      sheet.need(62);
      const row = group.slice(i, i + 2);
      for (let col = 0; col < row.length; col += 1) {
        const map = row[col];
        const x = 12 + col * 96;
        const y = sheet.y;
        const img = await toDataUrl(map.file, opts.loadImage);
        if (img) {
          sheet.doc.addImage(img, "JPEG", x, y, 90, 50);
        } else {
          sheet.doc.setFillColor(20, 20, 24);
          sheet.doc.rect(x, y, 90, 50, "F");
        }
        sheet.doc.setFont("helvetica", "bold");
        sheet.doc.setFontSize(10);
        sheet.doc.setTextColor(BONE[0], BONE[1], BONE[2]);
        sheet.doc.text(clean(map.name), x, y + 55);
        sheet.doc.setFont("helvetica", "normal");
        sheet.doc.setFontSize(8);
        sheet.doc.setTextColor(MUTED[0], MUTED[1], MUTED[2]);
        sheet.doc.text(clean(map.file), x, y + 59);
      }
      sheet.y += 64;
    }
  }

  sheet.heading("Ordre Best of 5");
  BO5_ORDER.forEach((label, index) => sheet.bullet(`${index + 1}. ${label}`));
  sheet.paragraph("La tete de serie la plus haute heberge le lobby et choisit d'etre equipe 1 ou 2. Une map bannie ou pickee ne revient pas.");

  FORMATS.forEach((format) => {
    sheet.heading(`Veto ${format.label}`);
    sheet.paragraph(`${format.blurb} ${format.orderNote} Ordre : ${format.order.join(" / ")}.`);
    format.steps.forEach((step, index) => sheet.bullet(`${index + 1}. ${stepSentence(step)}`));
  });

  sheet.heading("Armes interdites");
  WEAPON_BANS.forEach((group) => {
    sheet.paragraph(group.group, BAN);
    group.items.forEach((item) => sheet.bullet(item, BAN));
  });
  sheet.paragraph("Le SKS reste autorise. Les silencieux ne sont pas restreints. Le .50 GS est interdit en entier.");

  sheet.heading("Accessoires interdits");
  ATTACHMENT_GLOBALS.forEach((line) => sheet.bullet(line, BAN));
  ATTACHMENT_BANS.forEach((group) => {
    sheet.paragraph(group.weapon, ORANGE);
    group.items.forEach((item) => sheet.bullet(item));
  });

  sheet.heading("Letaux interdits");
  LETHALS.forEach((item) => sheet.bullet(`${item.fr} (${item.en})`, BAN));
  sheet.heading("Tactiques interdits");
  TACTICALS.forEach((item) => sheet.bullet(`${item.fr} (${item.en})`, BAN));
  sheet.heading("Atouts interdits");
  PERK_BANS.forEach((column) => {
    sheet.paragraph(column.column, BAN);
    column.items.forEach((item) => sheet.bullet(`${item.fr} (${item.en})`, BAN));
  });
  sheet.paragraph("Atout absent de la liste : autorise, hors regle des 21 jours. Tous les jokers sont interdits.");

  sheet.heading("Competences autorisees");
  sheet.paragraph("Tout le reste est interdit. Pas deux fois la meme competence vivante dans l'equipe.", OK);
  ALLOWED_SKILLS.forEach((item) => sheet.bullet(`${item.fr} (${item.en})`, OK));
  sheet.heading("Series de points autorisees");
  ALLOWED_STREAKS.forEach((item) => sheet.bullet(`${item.fr} (${item.en})`, OK));

  sheet.heading("Cosmetiques interdits");
  sheet.bullet("Tous les skins legendaires de letal et de tactique.", BAN);
  sheet.bullet("Toutes les emotes pendant le match.", BAN);
  OPERATOR_SKINS.forEach((skin) => sheet.bullet(skin, BAN));

  sheet.heading("Roles d'armes");
  sheet.paragraph("Par equipe : 3 AR, 3 SMG, 1 LMG, 1 pompe, 1 marksman, 1 sniper. Deux roles differents par joueur. L'equipe qui declare ses competences en second annonce ses roles en premier. Secondaires et armes ramassees : hors roles.");
  sheet.bullet("Joueur 1 - AR / SMG");
  sheet.bullet("Joueur 2 - SMG / Pompe");
  sheet.bullet("Joueur 3 - AR / LMG");
  sheet.bullet("Joueur 4 - AR / Sniper");
  sheet.bullet("Joueur 5 - SMG / Marksman");

  sheet.heading("Lobby prive");
  LOBBY_STEPS.forEach((step, index) => {
    sheet.paragraph(`${index + 1}. ${step.title}`, ORANGE);
    sheet.paragraph(step.body);
  });

  sheet.heading("Journal");
  CHANGELOG.forEach((entry) => {
    sheet.paragraph(entry.date, ORANGE);
    entry.items.forEach((item) => sheet.bullet(item));
  });
  sheet.paragraph("Source : callofduty.com/mobile/esports/esports-settings");

  sheet.footer();
  return sheet.bytes();
}

export async function downloadBriefingPdf(clan: string) {
  const bytes = await buildBriefingPdf({
    clan,
    loadImage: async (file) => {
      const response = await fetch(`/maps/${file}`);
      if (!response.ok) return null;
      const blob = await response.blob();
      const bitmap = await createImageBitmap(blob);
      const width = 1000;
      const height = Math.max(1, Math.round((bitmap.height / bitmap.width) * width));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;
      ctx.drawImage(bitmap, 0, 0, width, height);
      bitmap.close();
      return canvas.toDataURL("image/jpeg", 0.74);
    },
  });
  const blob = new Blob([bytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Briefing-Esports-CODM-2026.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
