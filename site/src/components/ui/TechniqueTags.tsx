import { useId, useState } from "react";
import { TECHNIQUES } from "../../data/techniques";

interface TechniqueTagsProps {
  ids: string[];
  className?: string;
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M3 6l5 5 5-5" />
    </svg>
  );
}

export function TechniqueTags({ ids, className = "" }: TechniqueTagsProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);
  const items = ids.map((id) => TECHNIQUES[id]).filter(Boolean);
  const open = items.find((t) => t.id === openId);

  return (
    <div className={`rounded-2xl border border-uffa-azulpetroleo/25 bg-white/70 p-5 md:p-6 ${className}`}>
      <p className="font-semibold text-uffa-azulpetroleo-dark text-lg">Técnicas de IHC aplicadas nesta seção</p>
      <p className="text-uffa-navy/70 mt-1">Toque em uma técnica para ver a pergunta, a resposta e as evidências.</p>

      <div className="mt-4 flex flex-wrap gap-3">
        {items.map((t) => {
          const isOpen = t.id === openId;
          return (
            <button
              key={t.id}
              type="button"
              aria-expanded={isOpen}
              aria-controls={`${baseId}-${t.id}`}
              onClick={() => setOpenId(isOpen ? null : t.id)}
              className={`inline-flex items-center gap-2 min-h-11 px-4 rounded-lg border-2 text-base font-semibold transition-colors cursor-pointer ${
                isOpen
                  ? "bg-uffa-azulpetroleo text-white border-uffa-azulpetroleo"
                  : "bg-white text-uffa-azulpetroleo border-uffa-azulpetroleo/40 hover:border-uffa-azulpetroleo hover:bg-uffa-lightblue"
              }`}
            >
              {t.label}
              <Chevron open={isOpen} />
            </button>
          );
        })}
      </div>

      {open && (
        <div
          id={`${baseId}-${open.id}`}
          role="region"
          aria-label={open.label}
          className="mt-5 rounded-xl border-l-4 border-uffa-azulpetroleo bg-uffa-lightblue/60 p-5 md:p-6"
        >
          <p className="text-sm font-bold text-uffa-azulpetroleo">Pergunta</p>
          <p className="mt-1 text-lg font-semibold text-uffa-navy leading-snug">{open.question}</p>

          <p className="mt-5 text-sm font-bold text-uffa-azulpetroleo">Resposta</p>
          <p className="mt-1 text-lg text-uffa-navy leading-relaxed">{open.answer}</p>

          <p className="mt-5 text-sm font-bold text-uffa-azulpetroleo">Onde aparece no protótipo</p>
          <ul className="mt-2 flex flex-col gap-2 list-disc pl-5 text-uffa-navy/85 leading-relaxed">
            {open.evidence.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
