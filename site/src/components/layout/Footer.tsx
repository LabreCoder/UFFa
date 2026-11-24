import { Logo } from "../ui/Logo";
import { AiLink } from "../ui/AiLink";
import { AI_PAGE } from "../../data/stages";
import { Stage } from "../../types";

export function Footer({ navigate }: { navigate: (stage: Stage) => void }) {
  return (
    <footer className="relative bg-uffa-navy py-12">
      {/* max-w-screen-2xl com px-6 md:px-12 xl:px-16 */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-xl text-white font-medium"><Logo tone="dark" /> — Achados e Perdidos</p>
          <p className="text-sm text-white/50 mt-1">Projeto acadêmico de Interação Humano-Computador</p>
          <AiLink label={AI_PAGE.label} tone="dark" onClick={() => navigate(AI_PAGE.id)} className="mt-3" />
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm text-white/50">Universidade Federal Fluminense — UFF</p>
          <p className="text-sm text-white/40 mt-1">Niterói · Rio de Janeiro · Brasil · 2026</p>
        </div>
      </div>
    </footer>
  );
}
