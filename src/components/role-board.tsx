import { useState } from "react";
import { ROLES, type RoleId } from "@/data/esports";

const empty = (): RoleId[][] => [[], [], [], [], []];

export function RoleBoard() {
  const [rows, setRows] = useState<RoleId[][]>(empty);
  const [copied, setCopied] = useState(false);

  const tally = (id: RoleId) => rows.flat().filter((r) => r === id).length;

  function toggle(player: number, role: RoleId) {
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
  const sheet = rows
    .map((roles, i) => {
      const names = roles.map((id) => ROLES.find((r) => r.id === id)?.short).join(" / ");
      return `Joueur ${i + 1} - ${names || "..."}`;
    })
    .join("\n");

  async function copySheet() {
    try {
      await navigator.clipboard.writeText(sheet);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap gap-2">
        {ROLES.map((role) => {
          const left = role.count - tally(role.id);
          return (
            <span key={role.id} className="glass rounded-full px-3 py-1 font-mono text-xs text-fg">
              {role.short} {tally(role.id)}/{role.count}
              <span className="text-muted"> · {left === 0 ? "complet" : `${left} restant`}</span>
            </span>
          );
        })}
      </div>

      <div className="grid gap-3">
        {rows.map((roles, player) => (
          <div key={player} className="glass rounded-2xl p-3 md:p-4">
            <div className="mb-2 flex items-baseline justify-between gap-3">
              <p className="font-display text-2xl uppercase">Joueur {player + 1}</p>
              <p className="font-mono text-xs text-muted">{roles.length}/2</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {ROLES.map((role) => {
                const on = roles.includes(role.id);
                const blocked = !on && (roles.length >= 2 || tally(role.id) >= role.count);
                return (
                  <button
                    key={role.id}
                    type="button"
                    disabled={blocked}
                    onClick={() => toggle(player, role.id)}
                    className={`min-h-11 rounded-xl px-3 py-2 text-left ${
                      on ? "bg-orange text-bg" : blocked ? "border border-line text-muted" : "glass text-fg"
                    }`}
                  >
                    <span className="block font-display text-lg uppercase leading-none">{role.short}</span>
                    <span className="text-xs">{role.fr}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl p-4">
        <p className="font-mono text-xs uppercase tracking-widest text-orange">
          {ready ? "Déclaration prête" : "Il faut deux rôles différents par joueur, et tout le pool"}
        </p>
        <pre className="mt-3 whitespace-pre-wrap font-mono text-sm text-fg">{sheet}</pre>
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" onClick={copySheet} className="min-h-11 rounded-xl bg-orange px-4 font-display text-lg uppercase text-bg">
            {copied ? "Copié" : "Copier pour Discord"}
          </button>
          <button type="button" onClick={() => { setRows(empty()); setCopied(false); }} className="glass min-h-11 rounded-xl px-4 text-sm">
            Vider
          </button>
        </div>
      </div>
    </div>
  );
}
