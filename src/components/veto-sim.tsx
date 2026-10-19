import { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import { MAPS, type ModeId } from "@/data/maps";
import { FORMATS, MODES, stepSentence, type FormatId, type VetoStep } from "@/data/esports";

type Mark =
  | { kind: "ban"; team: 1 | 2 }
  | { kind: "pick"; team: 1 | 2; slot: number; side: 1 | 2 };

const MODE_ORDER: ModeId[] = ["hardpoint", "snd", "control"];

export function VetoSim() {
  const [formatId, setFormatId] = useState<FormatId>("bo5");
  const format = FORMATS.find((f) => f.id === formatId) ?? FORMATS[0];
  const [step, setStep] = useState(0);
  const [marks, setMarks] = useState<Record<string, Mark>>({});

  const current = format.steps[step] as VetoStep | undefined;
  const done = step >= format.steps.length;

  const picks = useMemo(
    () =>
      Object.entries(marks)
        .filter((entry): entry is [string, Extract<Mark, { kind: "pick" }>] => entry[1].kind === "pick")
        .map(([id, mark]) => ({ map: MAPS.find((m) => m.id === id), mark }))
        .filter((row) => row.map)
        .sort((a, b) => a.mark.slot - b.mark.slot),
    [marks],
  );

  function reset(next: FormatId = formatId) {
    setFormatId(next);
    setStep(0);
    setMarks({});
  }

  function advance(from: number, draft: Record<string, Mark>) {
    let cursor = from;
    const steps = format.steps;
    while (steps[cursor]?.action === "left") {
      const left = steps[cursor];
      const remain = MAPS.filter((m) => m.mode === left.pool && !draft[m.id]);
      if (remain.length === 1 && left.slot && left.side) {
        draft[remain[0].id] = { kind: "pick", team: left.team, slot: left.slot, side: left.side };
      }
      cursor += 1;
    }
    return cursor;
  }

  function choose(id: string) {
    if (!current || current.action === "left" || done) return;
    const map = MAPS.find((m) => m.id === id);
    if (!map || map.mode !== current.pool || marks[id]) return;
    const draft = { ...marks };
    if (current.action === "ban") {
      draft[id] = { kind: "ban", team: current.team };
    } else if (current.slot && current.side) {
      draft[id] = { kind: "pick", team: current.team, slot: current.slot, side: current.side };
    }
    const cursor = advance(step + 1, draft);
    setMarks(draft);
    setStep(cursor);
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
      <div className="flex gap-2 overflow-x-auto lg:flex-col">
        {FORMATS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => reset(f.id)}
            className={`min-h-11 shrink-0 rounded-xl px-4 text-left font-display text-lg uppercase tracking-wide ${
              f.id === formatId ? "bg-orange text-bg" : "glass text-fg"
            }`}
          >
            {f.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => reset()}
          className="glass inline-flex min-h-11 items-center gap-2 rounded-xl px-4 text-sm text-fg"
        >
          <RotateCcw className="size-4" aria-hidden />
          Recommencer
        </button>
      </div>

      <div className="glass rounded-2xl p-4 md:p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-orange">{format.orderNote}</p>
        <p className="mt-2 max-w-3xl text-sm text-muted">{format.blurb}</p>
        <ol className="mt-4 flex flex-wrap gap-2">
          {format.order.map((label, i) => (
            <li key={`${label}-${i}`} className="rounded-full border border-fg/15 px-3 py-1 font-mono text-xs text-fg">
              {i + 1} {label}
            </li>
          ))}
        </ol>

        <p className="mt-5 font-display text-2xl uppercase leading-tight text-fg md:text-3xl">
          {done ? "Série verrouillée." : stepSentence(current as VetoStep)}
        </p>
        <p className="mt-1 text-sm text-muted">
          La tête de série choisit d'être l'équipe 1 ou 2 avant le premier ban. Une map prise ou bannie ne revient pas.
          Le veto se fait sur le salon Discord de l'administration.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {MODE_ORDER.map((mode) => (
            <div key={mode}>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">
                {MODES[mode].code} · {MODES[mode].fr}
              </p>
              <div className="grid gap-2">
                {MAPS.filter((m) => m.mode === mode).map((m) => {
                  const mark = marks[m.id];
                  const live = !done && current && current.action !== "left" && current.pool === mode && !mark;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      disabled={!live}
                      onClick={() => choose(m.id)}
                      className={`min-h-11 rounded-xl px-3 py-2 text-left ${
                        mark?.kind === "ban"
                          ? "glass-ban text-ban"
                          : mark?.kind === "pick"
                            ? "bg-orange text-bg"
                            : live
                              ? "glass text-fg ring-1 ring-orange"
                              : "glass text-muted"
                      }`}
                    >
                      <span className="block font-display text-xl uppercase leading-none">{m.name}</span>
                      <span className="mt-1 block font-mono text-xs">
                        {mark?.kind === "ban"
                          ? `Ban · équipe ${mark.team}`
                          : mark?.kind === "pick"
                            ? `Map ${mark.slot} · côté équipe ${mark.side}`
                            : live
                              ? "Choisir"
                              : "Hors de ce tour"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {picks.length > 0 && (
          <ol className="mt-5 grid gap-2 sm:grid-cols-2">
            {picks.map(({ map, mark }) => (
              <li key={map!.id} className="rounded-xl border border-fg/10 px-3 py-2 text-sm">
                <span className="font-mono text-orange">Map {mark.slot}</span>{" "}
                <span className="font-display text-lg uppercase">{map!.name}</span>
                <span className="block text-muted">
                  Pick équipe {mark.team} · côté équipe {mark.side}
                </span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
