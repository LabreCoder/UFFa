import { TEAM_MEMBERS, ADVISOR } from "../../../data/team";
import { SectionHeader } from "../../ui/SectionHeader";
import { SectionImage } from "../../ui/SectionImage";

export function Team() {
  return (
    <section className="relative py-24 px-6 bg-uffa-white/10">
      <SectionImage image="image1" />
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="A Equipe"
          title="Quem faz parte"
          description="Disciplina de Interação Humano-Computador · Universidade Federal Fluminense"
          align="center"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-5 mb-12">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-uffa-lightblue border border-uffa-blue/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-uffa-blue/10 transition-colors">
                <span className="font-display text-xl text-uffa-blue">
                  {i + 1}
                </span>
              </div>
              <p className="font-medium text-uffa-navy text-sm">{member.name}</p>
              <p className="text-xs text-uffa-navy/50 mt-0.5">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center border-t border-uffa-navy/8 pt-10">
          <p className="text-sm text-uffa-navy/55">
            Orientação: <span className="font-medium text-uffa-navy">{ADVISOR.name}</span>
          </p>
          <p className="text-sm text-uffa-navy/40 mt-1">{ADVISOR.institution}</p>
        </div>
      </div>
    </section>
  );
}