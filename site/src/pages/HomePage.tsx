import { Stage } from "../types";
import { STAGES, AI_PAGE } from "../data/stages";
import { SectionImage } from "../components/ui/SectionImage";
import { Logo } from "../components/ui/Logo";
import { AiLink } from "../components/ui/AiLink";

interface Props {
  navigate: (stage: Stage) => void;
}

export function HomePage({ navigate }: Props) {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 gap-10 bg-uffa-white/70">
      <SectionImage image="image1" />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-7xl"><Logo /></h1>
        <p className="mt-3 text-uffa-navy/70 text-lg">Achados e Perdidos UFF · Grupo G1 · IHC</p>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row md:flex-wrap justify-center gap-6 w-full max-w-5xl">
        {STAGES.map((s) => (
          <button
            key={s.id}
            onClick={() => navigate(s.id)}
            className="md:flex-1 md:min-w-64 md:max-w-sm text-left bg-white border border-uffa-navy/10 rounded-3xl p-8 hover:shadow-md hover:border-uffa-blue transition-all"
          >
            <span className="font-display text-3xl text-uffa-azulpetroleo-dark block">{s.label}</span>
            <span className="mt-2 block text-uffa-navy/70 leading-relaxed">{s.desc}</span>
          </button>
        ))}
      </div>
      <AiLink label={AI_PAGE.label} onClick={() => navigate(AI_PAGE.id)} className="relative z-10 text-base" />
    </main>
  );
}
