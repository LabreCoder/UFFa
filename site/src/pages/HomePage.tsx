import { Stage } from "../types";

interface Props {
  navigate: (stage: Stage) => void;
}

const OPTIONS: { stage: Stage; label: string; desc: string }[] = [
  { stage: "etapa-1", label: "Etapa 1", desc: "Pesquisa: matriz CSD, análise competitiva, mapa de empatia e instrumentos." },
  { stage: "etapa-2", label: "Etapa 2", desc: "Personas, cenários-problema e tarefas." },
];

export function HomePage({ navigate }: Props) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 gap-10 bg-uffa-lightblue">
      <div className="text-center">
        <h1 className="font-display font-bold italic text-6xl md:text-7xl text-uffa-navy">Uffa</h1>
        <p className="mt-3 text-uffa-navy/70 text-lg">Achados e Perdidos UFF · Grupo G1 · IHC</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {OPTIONS.map((o) => (
          <button
            key={o.stage}
            onClick={() => navigate(o.stage)}
            className="text-left bg-white border border-uffa-navy/10 rounded-3xl p-8 hover:shadow-md hover:border-uffa-blue transition-all"
          >
            <span className="font-display text-3xl text-uffa-azulpetroleo-dark block">{o.label}</span>
            <span className="mt-2 block text-uffa-navy/70 leading-relaxed">{o.desc}</span>
          </button>
        ))}
      </div>
    </main>
  );
}
