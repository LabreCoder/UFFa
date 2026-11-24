import { Severity } from "../../types";
import { SEVERITY_SCALE } from "../../data/etapa3";

const BADGE_CLASS: Record<Severity, string> = {
  4: "bg-uffa-azulpetroleo-dark text-white",
  3: "bg-uffa-azulpetroleo text-white",
  2: "bg-uffa-tractorgreen/25 text-uffa-azulpetroleo-dark",
  1: "bg-uffa-navy/5 text-uffa-navy/80",
};

export function SeverityBadge({ level }: { level: Severity }) {
  const label = SEVERITY_SCALE.find((s) => s.level === level)?.label ?? "";
  return (
    <span className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${BADGE_CLASS[level]}`}>
      <span className="tabular-nums">{level}</span>
      <span aria-hidden="true">·</span>
      {label}
    </span>
  );
}
