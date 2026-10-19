import { readFileSync, writeFileSync } from "node:fs";
import { buildBriefingPdf } from "../src/lib/build-pdf.ts";

const bytes = await buildBriefingPdf({
  clan: "Clan",
  loadImage: async (file) => {
    try {
      const buf = readFileSync(`/workspace/public/maps/${file}`);
      return `data:image/jpeg;base64,${buf.toString("base64")}`;
    } catch {
      return null;
    }
  },
});

writeFileSync("/workspace/public/briefing-esports-codm-2026.pdf", bytes);
console.log(`pdf ${bytes.byteLength} bytes`);
