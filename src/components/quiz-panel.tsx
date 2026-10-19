import { useEffect, useState } from "react";
import { CHECKS, QUIZ } from "@/data/esports";

export function QuizPanel() {
  const [checks, setChecks] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("briefing-checks");
      if (raw) {
        const parsed = JSON.parse(raw) as unknown;
        if (Array.isArray(parsed)) setChecks(parsed.filter((x) => typeof x === "string"));
      }
    } catch {
      /* ignore broken local cache */
    }
  }, []);

  function toggle(id: string) {
    setChecks((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem("briefing-checks", JSON.stringify(next));
      return next;
    });
  }

  const question = QUIZ[index];

  function choose(option: number) {
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

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="glass rounded-2xl p-4 md:p-5">
        <p className="font-mono text-xs uppercase tracking-widest text-orange">Avant le lobby</p>
        <h3 className="font-display text-3xl uppercase">Check-list</h3>
        <ul className="mt-4 grid gap-2">
          {CHECKS.map((item) => {
            const on = checks.includes(item.id);
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className={`flex min-h-11 w-full items-start gap-3 rounded-xl px-3 py-2 text-left text-sm ${
                    on ? "glass-ok text-fg" : "border border-line text-fg"
                  }`}
                  aria-pressed={on}
                >
                  <span className={`mt-0.5 font-mono text-xs ${on ? "text-ok" : "text-muted"}`}>{on ? "OK" : "—"}</span>
                  {item.t}
                </button>
              </li>
            );
          })}
        </ul>
        <p className="mt-3 font-mono text-xs text-muted">
          {checks.length}/{CHECKS.length} cochées sur cet appareil
        </p>
      </div>

      <div className="glass rounded-2xl p-4 md:p-5">
        <p className="font-mono text-xs uppercase tracking-widest text-orange">
          Question {done ? QUIZ.length : index + 1}/{QUIZ.length}
        </p>
        <h3 className="font-display text-3xl uppercase">Révision</h3>
        {done || !question ? (
          <div className="mt-4">
            <p className="font-display text-6xl uppercase leading-none text-orange">
              {score}/{QUIZ.length}
            </p>
            <p className="mt-3 text-sm text-muted">
              {score === QUIZ.length
                ? "Série propre. Vous pouvez lancer le privé."
                : "Relis les sections en orange et en rouge, puis relance."}
            </p>
            <button type="button" onClick={restart} className="mt-4 min-h-11 rounded-xl bg-orange px-4 font-display text-lg uppercase text-bg">
              Recommencer
            </button>
          </div>
        ) : (
          <div className="mt-4">
            <p className="text-lg text-fg">{question.q}</p>
            <div className="mt-3 grid gap-2">
              {question.options.map((option, i) => {
                const show = picked !== null;
                const correct = i === question.answer;
                const mine = i === picked;
                return (
                  <button
                    key={option}
                    type="button"
                    disabled={show}
                    onClick={() => choose(i)}
                    className={`min-h-11 rounded-xl px-3 py-2 text-left text-sm ${
                      show && correct
                        ? "glass-ok text-fg"
                        : show && mine
                          ? "glass-ban text-fg"
                          : "border border-line text-fg"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {picked !== null && (
              <div className="mt-3">
                <p className="text-sm text-muted">{question.why}</p>
                <button type="button" onClick={next} className="mt-3 min-h-11 rounded-xl bg-orange px-4 font-display text-lg uppercase text-bg">
                  {index + 1 === QUIZ.length ? "Voir le score" : "Suite"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
