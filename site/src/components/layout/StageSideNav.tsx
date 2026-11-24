import { STAGES } from "../../data/stages";
import { PageId, Stage } from "../../types";

interface StageSideNavProps {
  stage: PageId;
  navigate: (stage: Stage) => void;
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d={dir === "left" ? "M12 4l-6 6 6 6" : "M8 4l6 6-6 6"} />
    </svg>
  );
}

// Botões fixos nas laterais: levam para a etapa anterior e para a próxima, sem voltar ao menu.
export function StageSideNav({ stage, navigate }: StageSideNavProps) {
  const index = STAGES.findIndex((s) => s.id === stage);
  if (index === -1) return null;
  const prev = STAGES[index - 1];
  const next = STAGES[index + 1];

  const base =
    "group fixed z-40 bottom-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 flex items-center h-11 md:h-12 rounded-full border-2 border-uffa-azulpetroleo bg-white/90 text-uffa-azulpetroleo shadow-md backdrop-blur-sm transition-colors cursor-pointer hover:bg-uffa-azulpetroleo hover:text-white focus-visible:bg-uffa-azulpetroleo focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uffa-azulpetroleo";
  const icon = "flex h-full w-11 items-center justify-center shrink-0";
  const label =
    "hidden md:block max-w-0 overflow-hidden whitespace-nowrap text-left leading-tight transition-all duration-300 group-hover:max-w-44 group-hover:px-3 group-focus-visible:max-w-44 group-focus-visible:px-3";

  return (
    <>
      {prev && (
        <button
          type="button"
          onClick={() => navigate(prev.id)}
          aria-label={`Etapa anterior: ${prev.label}`}
          className={`${base} left-2 md:left-3 flex-row`}
        >
          <span className={icon}>
            <Arrow dir="left" />
          </span>
          <span className={label}>
            <span className="block text-xs opacity-80">Etapa anterior</span>
            <span className="block text-sm font-semibold">{prev.label}</span>
          </span>
        </button>
      )}
      {next && (
        <button
          type="button"
          onClick={() => navigate(next.id)}
          aria-label={`Próxima etapa: ${next.label}`}
          className={`${base} right-2 md:right-3 flex-row-reverse`}
        >
          <span className={icon}>
            <Arrow dir="right" />
          </span>
          <span className={`${label} text-right`}>
            <span className="block text-xs opacity-80">Próxima etapa</span>
            <span className="block text-sm font-semibold">{next.label}</span>
          </span>
        </button>
      )}
    </>
  );
}
