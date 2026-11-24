import { useState } from "react";
import { HEURISTICS, PROBLEMS, SEVERITY_SCALE, consolidatedSeverity } from "../../../data/etapa3";
import { Severity } from "../../../types";
import { SectionDefault } from "../../ui/SectionDefault";
import { SectionHeader } from "../../ui/SectionHeader";
import { Card } from "../../ui/Card";
import { SeverityBadge } from "../../ui/SeverityBadge";

const heuristicName = (id: number) => HEURISTICS.find((h) => h.id === id)?.name ?? "";

export function ProblemList() {
  const [filter, setFilter] = useState<Severity | null>(null);
  const sorted = [...PROBLEMS].sort((a, b) => consolidatedSeverity(b) - consolidatedSeverity(a));
  const shown = filter ? sorted.filter((p) => consolidatedSeverity(p) === filter) : sorted;

  const pill = (active: boolean) =>
    `whitespace-nowrap rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors cursor-pointer ${
      active
        ? "bg-uffa-azulpetroleo border-uffa-azulpetroleo text-white"
        : "border-uffa-azulpetroleo/40 text-uffa-azulpetroleo hover:border-uffa-azulpetroleo hover:bg-uffa-lightblue"
    }`;

  return (
    <SectionDefault id="problemas">
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <SectionHeader
          tag="Lista consolidada"
          title="Problemas e sugestões de correção"
          description="Todos os problemas encontrados, do mais grave para o menos grave, com a heurística violada, quem apontou e a correção sugerida."
          className="mb-8"
        />

        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filtrar por severidade">
          <button type="button" className={pill(filter === null)} aria-pressed={filter === null} onClick={() => setFilter(null)}>
            Todos ({PROBLEMS.length})
          </button>
          {SEVERITY_SCALE.map((s) => {
            const count = PROBLEMS.filter((p) => consolidatedSeverity(p) === s.level).length;
            return (
              <button
                key={s.level}
                type="button"
                className={pill(filter === s.level)}
                aria-pressed={filter === s.level}
                onClick={() => setFilter(s.level)}
              >
                {s.label} ({count})
              </button>
            );
          })}
        </div>

        <ul className="flex flex-col gap-4">
          {shown.map((p) => {
            const sev = consolidatedSeverity(p);
            return (
              <li key={p.id}>
                <Card className="p-6 grid grid-cols-1 lg:grid-cols-[4rem_1fr_14rem] gap-4 lg:gap-6 items-start">
                  <span className="font-display text-3xl text-uffa-blue leading-none">{p.id}</span>
                  <div className="flex flex-col gap-2">
                    <p className="text-uffa-navy leading-relaxed">{p.problem}</p>
                    <p className="text-sm text-uffa-navy/70 leading-relaxed">
                      <span className="font-semibold text-uffa-azulpetroleo">Sugestão:</span> {p.recommendation}
                    </p>
                  </div>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-sm">
                    <dt className="text-uffa-navy/60">Severidade</dt>
                    <dd>
                      <SeverityBadge level={sev} />
                      {p.findings.length > 1 && (
                        <span className="block mt-1 text-xs text-uffa-navy/60">
                          média de {p.findings.map((f) => f.severity).join(" e ")}
                        </span>
                      )}
                    </dd>
                    <dt className="text-uffa-navy/60">Tela</dt>
                    <dd className="text-uffa-navy">{p.screen}</dd>
                    <dt className="text-uffa-navy/60">Heurística</dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {p.heuristics.map((h) => (
                        <span
                          key={h}
                          title={heuristicName(h)}
                          className="rounded-full bg-uffa-lightblue px-2 py-0.5 text-xs font-semibold text-uffa-azulpetroleo-dark"
                        >
                          H{h}
                        </span>
                      ))}
                    </dd>
                    <dt className="text-uffa-navy/60">Avaliador</dt>
                    <dd className="text-uffa-navy">{p.findings.map((f) => f.evaluator).join(", ")}</dd>
                  </dl>
                </Card>
              </li>
            );
          })}
        </ul>

        <Card className="mt-8 p-5 md:p-6">
          <details>
            <summary className="cursor-pointer font-semibold text-uffa-azulpetroleo-dark">Legenda das heurísticas</summary>
            <ol className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-uffa-navy/80">
              {HEURISTICS.map((h) => (
                <li key={h.id}>
                  <strong className="text-uffa-azulpetroleo-dark">H{h.id}</strong> · {h.name}
                </li>
              ))}
            </ol>
          </details>
        </Card>
      </div>
    </SectionDefault>
  );
}
