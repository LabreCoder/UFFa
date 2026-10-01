import { TEAM_MEMBERS, ADVISOR } from "../../../data/team";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionImage } from "../../ui/SectionImage";
import { SectionDefault } from "../../ui/SectionDefault";

export function Team() {
  return (
    <SectionDefault colorDefault="bg-uffa-white/10">
      <SectionImage image="image1" />
      <div className="relative z-10 max-w-screen-2xl mx-auto">
        <SectionHeader
          tag="A Equipe"
          title="Quem faz parte"
          description="Disciplina de Interação Humano-Computador · Universidade Federal Fluminense"
          align="center"
          className="mb-16"
        />

        {/* Grid de membros mais espaçoso e com elementos maiores */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-16">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className="text-center group flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-uffa-lightblue border border-uffa-blue/20 flex items-center justify-center mb-4 group-hover:bg-uffa-blue/15 transition-all shadow-xs">
                <span className="font-display text-2xl font-bold text-uffa-blue">
                  {i + 1}
                </span>
              </div>
              <p className="font-semibold text-uffa-navy text-base md:text-lg">{member.name}</p>
              <p className="text-sm text-uffa-navy/60 mt-1">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center border-t border-uffa-navy/10 pt-10">
          <p className="text-base text-uffa-navy/70">
            Orientação: <span className="font-semibold text-uffa-navy">{ADVISOR.name}</span>
          </p>
          <p className="text-sm text-uffa-navy/50 mt-1">{ADVISOR.institution}</p>
        </div>
      </div>
    </SectionDefault>
  );
}