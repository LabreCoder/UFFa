import { PROBLEM_CHANNELS } from "../../../data/research";
import { SectionHeader } from "../../ui/SectionHeader";
import { Card } from "../../ui/Card";
import { SectionImage } from "../../ui/SectionImage";

export function Problem() {
  return (
    <section id="problema" className="relative py-24 px-6 overflow-hidden bg-uffa-blue/50">
      <SectionImage image="image1" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeader
          tag="O Problema"
          tagColor="text-uffa-coral"
          title={<>A busca passa por canais<br />dispersos e desconectados</>}
          description="Quando alguém perde um objeto nos campi da UFF em Niterói, o processo de recuperação depende de iniciativa própria e sorte — não de um sistema claro. Parte da nossa investigação é entender como isso funciona na prática."
          className="mb-16"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {PROBLEM_CHANNELS.map((ch) => (
            <Card
              key={ch.label}
              className="p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-2xl mb-3 block">{ch.icon}</span>
              <p className="font-semibold text-uffa-navy text-sm mb-1">{ch.label}</p>
              <p className="text-xs text-uffa-navy/55 leading-relaxed">{ch.desc}</p>
            </Card>
          ))}
        </div>

        <div className="bg-uffa-navy rounded-3xl px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-1 h-16 bg-uffa-yellow rounded-full shrink-0 hidden md:block" />
          <p className="font-display text-3xl md:text-4xl text-white italic leading-snug">
            "A informação existe,<br />mas está espalhada."
          </p>
        </div>
      </div>
    </section>
  );
}