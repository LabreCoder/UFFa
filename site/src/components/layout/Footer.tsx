import { SectionImage } from "../ui/SectionImage";

export function Footer() {
  return (
    <footer className="relative bg-uffa-navy py-10 px-6">
      <SectionImage image="image3" />
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display text-lg text-white">UFFa — Achados e Perdidos</p>
          <p className="text-xs text-white/40 mt-1">Projeto acadêmico de Interação Humano-Computador</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-white/40">Universidade Federal Fluminense — UFF</p>
          <p className="text-xs text-white/30 mt-0.5">Niterói · Rio de Janeiro · Brasil · 2026</p>
        </div>
      </div>
    </footer>
  );
}