import { useEffect, useState } from "react";
import { Download, Search } from "lucide-react";
import { MAPS, MAPS_FOLDER, mapFilePath, type ModeId } from "@/data/maps";
import {
  ALLOWED_SKILLS,
  ALLOWED_STREAKS,
  ATTACHMENT_BANS,
  ATTACHMENT_GLOBALS,
  BO5_ORDER,
  CHANGELOG,
  LETHALS,
  LOBBY_STEPS,
  MODES,
  OPERATOR_SKINS,
  PERK_BANS,
  TACTICALS,
  WEAPON_BANS,
  searchRules,
} from "@/data/esports";
import { QuizPanel } from "@/components/quiz-panel";
import { RoleBoard } from "@/components/role-board";
import { VetoSim } from "@/components/veto-sim";

const NAV = [
  { id: "briefing", label: "Briefing" },
  { id: "reglages", label: "Réglages" },
  { id: "maps", label: "Maps" },
  { id: "veto", label: "Veto" },
  { id: "classes", label: "Classes" },
  { id: "roles", label: "Rôles" },
  { id: "lobby", label: "Lobby" },
  { id: "revision", label: "Révision" },
];

const MODE_ORDER: ModeId[] = ["hardpoint", "snd", "control"];

function Band({
  id,
  index,
  kicker,
  title,
  lede,
}: {
  id: string;
  index: string;
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header id={id} className="scroll-mt-40 mb-5 flex items-end justify-between gap-4 border-b border-line pb-4">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-orange">{kicker}</p>
        <h2 className="font-display text-4xl uppercase leading-none text-fg md:text-6xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted md:text-base">{lede}</p>
      </div>
      <span className="font-display text-5xl leading-none text-fg/10 md:text-7xl" aria-hidden>
        {index}
      </span>
    </header>
  );
}

function pair(fr: string, en: string) {
  return fr.toLowerCase() === en.toLowerCase() ? fr : `${fr} · ${en}`;
}

export function Guide() {
  const [clan, setClan] = useState("Clan");
  const [query, setQuery] = useState("");
  const [pdfState, setPdfState] = useState<"idle" | "busy" | "done" | "error">("idle");
  const hits = searchRules(query);

  useEffect(() => {
    const saved = localStorage.getItem("briefing-clan");
    if (saved) setClan(saved);
  }, []);

  function onClan(value: string) {
    setClan(value);
    localStorage.setItem("briefing-clan", value);
  }

  async function download() {
    setPdfState("busy");
    try {
      const { downloadBriefingPdf } = await import("@/lib/build-pdf");
      await downloadBriefingPdf(clan.trim() || "Clan");
      setPdfState("done");
    } catch {
      setPdfState("error");
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 md:px-6">
      <header className="sticky top-0 z-20 -mx-4 mb-6 border-b border-line bg-bg/80 px-4 backdrop-blur-xl md:-mx-6 md:px-6">
        <div className="flex items-center justify-between gap-3 py-3">
          <a href="#briefing" className="font-display text-2xl uppercase leading-none text-fg">
            Briefing <span className="text-orange">CODM</span>
          </a>
          <button
            type="button"
            onClick={download}
            disabled={pdfState === "busy"}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-orange px-4 font-display text-lg uppercase text-bg disabled:opacity-60"
          >
            <Download className="size-4" aria-hidden />
            {pdfState === "busy" ? "PDF…" : pdfState === "done" ? "PDF prêt" : "Télécharger le PDF"}
          </button>
        </div>
        <nav className="flex gap-2 overflow-x-auto pb-3" aria-label="Sections">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="glass inline-flex min-h-11 shrink-0 items-center rounded-full px-4 font-display text-lg uppercase text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="briefing" className="scroll-mt-40 grid gap-6 pb-12 md:grid-cols-[1.4fr_0.8fr] md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-orange">Saison 2026 · manuel de clan</p>
          <h1 className="mt-2 font-display text-6xl uppercase leading-none text-fg md:text-8xl">
            Briefing
            <br />
            Esports
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted">
            Réglages, maps, veto, classes et rôles. À relire avant le privé. Source : Esports Settings officiels,
            changelog du 24 septembre 2026. En cas de doute, l'administration du tournoi tranche.
          </p>
          <label className="mt-6 block max-w-sm">
            <span className="font-mono text-xs uppercase tracking-widest text-muted">Nom du clan sur le PDF</span>
            <input
              value={clan}
              onChange={(event) => onClan(event.target.value)}
              maxLength={32}
              className="mt-1 w-full border-b border-fg/25 bg-transparent py-2 font-display text-3xl uppercase text-fg outline-none"
              aria-label="Nom du clan"
            />
          </label>
          {pdfState === "error" && (
            <p className="mt-3 text-sm text-ban">Le PDF n'a pas pu être généré. Réessaie dans un instant.</p>
          )}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            ["13", "maps"],
            ["3", "modes"],
            ["0", "joker"],
          ].map(([n, label]) => (
            <div key={label} className="glass rounded-2xl p-3">
              <p className="font-display text-4xl leading-none text-orange md:text-5xl">{n}</p>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="hazard mb-12 rounded-2xl border border-ban/40 p-4 md:p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-ban">Ce qui fait perdre la map</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            ["Compétence en double", "Deux joueurs vivants avec la même compétence : forfait de la map, même si personne ne l'active."],
            ["Classe interdite", "Arme, accessoire, atout, utilitaire, série ou joker hors règles : forfait de la partie, du match, ou disqualification."],
            ["Moins de 21 jours", "Tout contenu fonctionnel neuf est interdit 21 jours après sa sortie internationale, sauf décision de l'admin."],
          ].map(([title, body]) => (
            <article key={title} className="glass-ban rounded-2xl p-4">
              <h2 className="font-display text-2xl uppercase text-fg">{title}</h2>
              <p className="mt-2 text-sm text-fg">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <Band
          id="reglages"
          index="01"
          kicker="Salle privée"
          title="Réglages"
          lede="À recopier dans Match Settings. Le mot de passe et les spectateurs sont non applicables. Les invitations restent ouvertes."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {MODE_ORDER.map((mode) => {
            const data = MODES[mode];
            return (
              <article key={mode} className="glass flex flex-col rounded-2xl p-4">
                <p className="font-mono text-xs uppercase tracking-widest text-orange">{data.code}</p>
                <h3 className="font-display text-3xl uppercase leading-none">{data.fr}</h3>
                <p className="mt-1 text-xs text-muted">{data.en}</p>
                <dl className="mt-4 grid gap-2">
                  {data.settings.map((row) => (
                    <div key={row.k} className="flex items-baseline justify-between gap-3 border-b border-line pb-2">
                      <dt className="text-sm text-muted">{row.k}</dt>
                      <dd className="font-display text-xl uppercase text-fg">{row.v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-sm text-muted">{data.note}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mb-14">
        <Band
          id="maps"
          index="02"
          kicker="Pool après le Stage 2"
          title="Maps"
          lede="Règle annuelle Keep 7, Change 6 : 7 maps gardées, 3 qui changent de mode, 3 nouvelles. L'admin peut ajuster en cours d'année. Ce pool vaut après le Stage 2, jusqu'aux finales."
        />
        {MODE_ORDER.map((mode) => (
          <div key={mode} className="mb-6">
            <h3 className="mb-3 font-display text-2xl uppercase text-fg">
              <span className="text-orange">{MODES[mode].code}</span> {MODES[mode].fr}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {MAPS.filter((m) => m.mode === mode).map((map) => (
                <figure key={map.id} className="glass overflow-hidden rounded-2xl">
                  <img
                    src={`/maps/${map.file}`}
                    alt={`Plan de la map ${map.name}`}
                    className="aspect-video w-full object-cover"
                  />
                  <figcaption className="space-y-1 p-3">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="font-display text-2xl uppercase leading-none">{map.name}</p>
                      {map.provisional && (
                        <span className="font-mono text-xs uppercase text-orange">Provisoire</span>
                      )}
                    </div>
                    <p className="text-sm text-muted">{map.line}</p>
                    <p className="font-mono text-xs text-fg">{mapFilePath(map.file)}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
        <div className="glass rounded-2xl p-4">
          <p className="font-mono text-xs uppercase tracking-widest text-orange">Fichiers images</p>
          <p className="mt-2 text-sm text-muted">
            Le registre qui relie chaque map à son image est <span className="text-fg">src/data/maps.ts</span>.
            Les visuels sont dans <span className="text-fg">{MAPS_FOLDER}/</span>. Pour en changer un, remplace le
            fichier en gardant le même nom.
          </p>
          <ul className="mt-3 grid gap-1 font-mono text-xs text-fg sm:grid-cols-2">
            {MAPS.map((map) => (
              <li key={map.id}>
                {map.name} — {map.file}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-14">
        <Band
          id="veto"
          index="03"
          kicker="Picks et bans"
          title="Veto"
          lede="Entraîne le script avant le Discord. L'hôte, tête de série la plus haute, lance ensuite la bonne map dans le bon mode."
        />
        <div className="mb-4 grid gap-2 sm:grid-cols-5">
          {BO5_ORDER.map((label, i) => (
            <div key={`${label}-${i}`} className="glass rounded-2xl p-3">
              <p className="font-display text-3xl leading-none text-orange">{i + 1}</p>
              <p className="mt-2 text-sm text-fg">{label}</p>
            </div>
          ))}
        </div>
        <VetoSim />
      </section>

      <section className="mb-14">
        <Band
          id="classes"
          index="04"
          kicker="Deux lectures, ne les inverse pas"
          title="Classes"
          lede="Sur les armes, accessoires, utilitaires et atouts, la liste veut dire interdit. Sur les compétences et les séries de points, la liste veut dire seuls autorisés."
        />
        <label className="glass mb-4 flex min-h-11 items-center gap-3 rounded-2xl px-3">
          <Search className="size-4 text-orange" aria-hidden />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Chercher une arme, un atout, une map…"
            className="w-full bg-transparent py-3 text-sm text-fg outline-none placeholder:text-muted"
            aria-label="Rechercher une règle"
          />
        </label>
        {query.trim().length >= 2 && (
          <ul className="mb-4 grid gap-2">
            {hits.length === 0 && <li className="text-sm text-muted">Aucun résultat. S'il n'est pas listé, demande à l'admin avant de le jouer.</li>}
            {hits.map((hit) => (
              <li
                key={`${hit.where}-${hit.title}`}
                className={`rounded-xl px-3 py-2 ${hit.tone === "ban" ? "glass-ban" : hit.tone === "ok" ? "glass-ok" : "glass"}`}
              >
                <p className="font-display text-xl uppercase leading-none">{hit.title}</p>
                <p className={`mt-1 font-mono text-xs ${hit.tone === "ban" ? "text-ban" : hit.tone === "ok" ? "text-ok" : "text-muted"}`}>
                  {hit.tone === "ban" ? "Interdit" : hit.tone === "ok" ? "Autorisé" : "Repère"} · {hit.where}
                </p>
              </li>
            ))}
          </ul>
        )}

        <div className="grid gap-3 lg:grid-cols-2">
          <article className="glass-ban rounded-2xl p-4">
            <h3 className="font-display text-3xl uppercase">Armes interdites</h3>
            <div className="mt-3 grid gap-3">
              {WEAPON_BANS.map((group) => (
                <div key={group.group}>
                  <p className="font-mono text-xs uppercase tracking-widest text-ban">{group.group}</p>
                  <p className="mt-1 text-sm text-fg">{group.items.join(" · ")}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm text-fg">
              Le SKS n'est pas interdit en tant qu'arme. Les silencieux ne sont pas restreints. Le .50 GS, lui, est
              interdit en entier.
            </p>
          </article>

          <article className="glass-ok rounded-2xl p-4">
            <h3 className="font-display text-3xl uppercase">Seuls autorisés</h3>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-ok">Compétences d'opérateur</p>
            <ul className="mt-2 grid gap-1 text-sm">
              {ALLOWED_SKILLS.map((item) => (
                <li key={item.en}>{pair(item.fr, item.en)}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-muted">Le document officiel écrit « Annihalator » pour Annihilator.</p>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ok">Séries de points</p>
            <ul className="mt-2 grid gap-1 text-sm">
              {ALLOWED_STREAKS.map((item) => (
                <li key={item.en}>{pair(item.fr, item.en)}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm">
              Une seule compétence par équipe en même temps. On peut changer en cours de map si plus personne de
              vivant ne porte déjà la nouvelle. Un mort qui change ne compte pas comme doublon au moment du spawn.
              Sanction : forfait de la map.
            </p>
          </article>
        </div>

        <article className="glass mt-3 rounded-2xl p-4">
          <h3 className="font-display text-3xl uppercase">Accessoires interdits</h3>
          <ul className="mt-3 grid gap-2 text-sm md:grid-cols-2">
            {ATTACHMENT_GLOBALS.map((line) => (
              <li key={line} className="glass-ban rounded-xl px-3 py-2">
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ATTACHMENT_BANS.map((group) => (
              <div key={group.weapon} className="border-t border-line pt-2">
                <p className="font-display text-xl uppercase">{group.weapon}</p>
                <ul className="mt-1 text-sm text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted">
            Les noms d'accessoires restent en anglais : c'est le libellé officiel, celui qu'on cherche en jeu.
            « Barrell » sur le RAM-7 est l'orthographe du document.
          </p>
        </article>

        <div className="mt-3 grid gap-3 lg:grid-cols-3">
          <article className="glass rounded-2xl p-4">
            <h3 className="font-display text-2xl uppercase">Létaux interdits</h3>
            <ul className="mt-3 grid gap-1 text-sm">
              {LETHALS.map((item) => (
                <li key={item.en}>{pair(item.fr, item.en)}</li>
              ))}
            </ul>
          </article>
          <article className="glass rounded-2xl p-4">
            <h3 className="font-display text-2xl uppercase">Tactiques interdits</h3>
            <ul className="mt-3 grid gap-1 text-sm">
              {TACTICALS.map((item) => (
                <li key={item.en}>{pair(item.fr, item.en)}</li>
              ))}
            </ul>
          </article>
          <article className="glass rounded-2xl p-4">
            <h3 className="font-display text-2xl uppercase">Atouts interdits</h3>
            {PERK_BANS.map((column) => (
              <div key={column.column} className="mt-3">
                <p className="font-mono text-xs uppercase tracking-widest text-ban">{column.column}</p>
                <ul className="mt-1 text-sm">
                  {column.items.map((item) => (
                    <li key={item.en}>{pair(item.fr, item.en)}</li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="mt-3 text-sm text-muted">Un atout absent de ces colonnes est autorisé, hors règle des 21 jours.</p>
          </article>
        </div>

        <article className="glass-ban mt-3 rounded-2xl p-4">
          <h3 className="font-display text-2xl uppercase">Cosmétiques</h3>
          <p className="mt-2 text-sm">
            Summer Split, Fall Split et finales du World Championship 2026. Pas de délai de 21 jours sur le cosmétique :
            le staff annonce ce qui tombe à chaque étape.
          </p>
          <ul className="mt-3 grid gap-2 text-sm md:grid-cols-2">
            <li>Tous les skins légendaires de létal et de tactique.</li>
            <li>Toutes les emotes, à n'importe quel moment du match.</li>
            {OPERATOR_SKINS.map((skin) => (
              <li key={skin}>{skin}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mb-14">
        <Band
          id="roles"
          index="05"
          kicker="Deux rôles, jamais le même deux fois"
          title="Rôles"
          lede="Chaque équipe a son propre pool : 3 AR, 3 SMG, 1 LMG, 1 pompe, 1 marksman, 1 sniper. Ça ne concerne ni l'arme secondaire, ni une arme ramassée. Si vous tardez, les rôles de la série d'avant s'appliquent."
        />
        <RoleBoard />
      </section>

      <section className="mb-14">
        <Band
          id="lobby"
          index="06"
          kicker="Créer le privé"
          title="Lobby"
          lede="Cinq gestes, dans l'ordre. L'hôte est la tête de série la plus haute, et il sélectionne la map votée."
        />
        <ol className="grid gap-3 md:grid-cols-5">
          {LOBBY_STEPS.map((step, i) => (
            <li key={step.title} className="glass rounded-2xl p-4">
              <p className="font-display text-4xl leading-none text-orange">{i + 1}</p>
              <h3 className="mt-2 font-display text-xl uppercase leading-tight">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-14">
        <Band
          id="revision"
          index="07"
          kicker="Avant de lancer"
          title="Révision"
          lede="Coche le rituel, puis passe les dix questions. Le score reste sur cet écran, la check-list reste sur l'appareil."
        />
        <QuizPanel />
        <div className="mt-6">
          <h3 className="mb-3 font-display text-3xl uppercase">Journal</h3>
          <ol className="grid gap-3">
            {CHANGELOG.map((entry) => (
              <li key={entry.date} className="glass rounded-2xl p-4">
                <p className="font-mono text-xs uppercase tracking-widest text-orange">{entry.date}</p>
                <ul className="mt-2 grid gap-1 text-sm">
                  {entry.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-muted">
            Page officielle :{" "}
            <a
              className="text-orange underline"
              href="https://www.callofduty.com/mobile/esports/esports-settings"
              target="_blank"
              rel="noreferrer"
            >
              Esports Settings
            </a>
            . Les entrées plus anciennes de 2024 sont résumées dans les listes actuelles.
          </p>
        </div>
      </section>
    </div>
  );
}
